"use server";

import razorpay from "@/lib/razorpay";
import { Address } from "@/sanity.types";
import { CartItem } from "@/store";

export interface Metadata {
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  clerkUserId?: string;
  address?: Address | null;
}

export interface GroupedCartItems {
  product: CartItem["product"];
  quantity: number;
}

export interface RazorpayOrderResponse {
  orderId: string;
  amount: number;
  currency: string;
  keyId: string;
}

export async function createCheckoutSession(
  items: GroupedCartItems[],
  metadata: Metadata
): Promise<RazorpayOrderResponse> {
  try {
    // Calculate total amount in paise (Razorpay uses smallest currency unit)
    const totalAmount = items.reduce(
      (sum, item) => sum + item.product.price! * item.quantity * 100,
      0
    );

    // Create Razorpay order
    const order = await razorpay.orders.create({
      amount: Math.round(totalAmount), // Amount in paise
      currency: "INR",
      receipt: metadata.orderNumber,
      notes: {
        orderNumber: metadata.orderNumber,
        customerName: metadata.customerName,
        customerEmail: metadata.customerEmail,
        clerkUserId: metadata.clerkUserId || "",
        address: metadata.address ? JSON.stringify(metadata.address) : "",
        // Store product details for webhook processing
        itemsData: JSON.stringify(
          items.map((item) => ({
            productId: item.product._id,
            productName: item.product.name,
            quantity: item.quantity,
            price: item.product.price,
          }))
        ),
      },
    });

    // Return order details for client-side Razorpay checkout
    return {
      orderId: order.id,
      amount: typeof order.amount === 'string' ? parseInt(order.amount) : order.amount,
      currency: order.currency,
      keyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
    };
  } catch (error) {
    console.error("Error creating Razorpay Order", error);
    throw error;
  }
}
