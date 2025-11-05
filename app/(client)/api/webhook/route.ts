import razorpay from "@/lib/razorpay";
import { backendClient } from "@/sanity/lib/backendClient";
// import { headers } from "next/headers"; // Unused during testing
import { NextRequest, NextResponse } from "next/server";
// import crypto from "crypto"; // Unused during testing

export async function POST(req: NextRequest) {
  const body = await req.text();
  // const headersList = await headers(); // Unused during testing
  // const signature = headersList.get("x-razorpay-signature"); // Unused during testing

  // ⚠️ TEMPORARY: Webhook verification disabled for testing
  // TODO: Re-enable verification before production deployment

  /* COMMENTED OUT FOR TESTING - UNCOMMENT BEFORE PRODUCTION
  const headersList = await headers();
  const signature = headersList.get("x-razorpay-signature");
  
  if (!signature) {
    return NextResponse.json(
      { error: "No signature found for Razorpay webhook" },
      { status: 400 }
    );
  }
  }

  const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;
  if (!webhookSecret) {
    console.log("Razorpay webhook secret is not set");
    return NextResponse.json(
      { error: "Razorpay webhook secret is not set" },
      { status: 400 }
    );
  }

  // Verify webhook signature
  try {
    const expectedSignature = crypto
      .createHmac("sha256", webhookSecret)
      .update(body)
      .digest("hex");

    if (expectedSignature !== signature) {
      console.error("Webhook signature verification failed");
      return NextResponse.json(
        { error: "Invalid signature" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Webhook signature verification error:", error);
    return NextResponse.json(
      { error: `Webhook Error: ${error}` },
      { status: 400 }
    );
  }
  */

  console.log("⚠️ TESTING MODE: Webhook verification skipped");

  const event = JSON.parse(body);

  // Handle payment.captured event
  if (event.event === "payment.captured") {
    const payment = event.payload.payment.entity;
    const orderId = payment.order_id;

    try {
      // Fetch order details from Razorpay
      const order = await razorpay.orders.fetch(orderId);

      // Create order in Sanity
      await createOrderInSanity(payment, order);
    } catch (error) {
      console.error("Error creating order in Sanity:", error);
      return NextResponse.json(
        { error: `Error creating order: ${error}` },
        { status: 400 }
      );
    }
  }

  // Handle payment.failed event
  if (event.event === "payment.failed") {
    const payment = event.payload.payment.entity;
    console.log("Payment failed:", payment.id, payment.error_description);
    // You can add custom logic here for failed payments
  }

  return NextResponse.json({ received: true });
}

interface RazorpayPayment {
  id: string;
  amount: number;
  currency: string;
  method: string;
  email: string;
  contact: string;
  order_id: string;
  error_description?: string;
}

interface RazorpayOrder {
  id: string;
  receipt?: string;
  notes?: {
    customerName?: string;
    customerEmail?: string;
    clerkUserId?: string;
    address?: string;
    itemsData?: string;
  };
}

async function createOrderInSanity(payment: RazorpayPayment, order: RazorpayOrder) {
  const {
    id: paymentId,
    amount,
    currency,
    method: paymentMethod,
    email,
  } = payment;

  const { id: orderId, receipt: orderNumber, notes } = order;

  // Parse metadata from order notes with defaults
  const customerName = notes?.customerName || "Unknown";
  const customerEmail = notes?.customerEmail || email || "Unknown";
  const clerkUserId = notes?.clerkUserId || "";
  const addressString = notes?.address || "";
  const itemsData = notes?.itemsData || "";

  const parsedAddress = addressString ? JSON.parse(addressString) : null;
  const items = itemsData ? JSON.parse(itemsData) : [];

  // Create Sanity product references and prepare stock updates
  const sanityProducts = [];
  const stockUpdates = [];

  for (const item of items) {
    const { productId, quantity } = item;

    if (!productId) continue;

    sanityProducts.push({
      _key: crypto.randomUUID(),
      product: {
        _type: "reference",
        _ref: productId,
      },
      quantity,
    });

    stockUpdates.push({ productId, quantity });
  }

  // Create order in Sanity
  const sanityOrder = await backendClient.create({
    _type: "order",
    orderNumber,
    razorpayOrderId: orderId,
    razorpayPaymentId: paymentId,
    paymentMethod,
    customerName: customerName || "Unknown",
    email: customerEmail || email || "Unknown",
    clerkUserId: clerkUserId || "",
    currency,
    amountDiscount: 0,
    products: sanityProducts,
    totalPrice: amount / 100, // Convert paise to rupees
    status: "paid",
    orderDate: new Date().toISOString(),
    address: parsedAddress
      ? {
        state: parsedAddress.state,
        zip: parsedAddress.zip,
        city: parsedAddress.city,
        address: parsedAddress.address,
        name: parsedAddress.name,
      }
      : null,
  });

  // Update stock levels in Sanity
  await updateStockLevels(stockUpdates);

  return sanityOrder;
}

// Function to update stock levels
async function updateStockLevels(
  stockUpdates: { productId: string; quantity: number }[]
) {
  for (const { productId, quantity } of stockUpdates) {
    try {
      // Fetch current stock
      const product = await backendClient.getDocument(productId);

      if (!product || typeof product.stock !== "number") {
        console.warn(
          `Product with ID ${productId} not found or stock is invalid.`
        );
        continue;
      }

      const newStock = Math.max(product.stock - quantity, 0); // Ensure stock does not go negative

      // Update stock in Sanity
      await backendClient.patch(productId).set({ stock: newStock }).commit();
    } catch (error) {
      console.error(`Failed to update stock for product ${productId}:`, error);
    }
  }
}
