"use server";

import { backendClient } from "@/sanity/lib/backendClient";
import { Address } from "@/sanity.types";

export interface AddressFormData {
  name: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  default: boolean;
}

export async function createAddress(
  data: AddressFormData
): Promise<{ success: boolean; address?: Address; error?: string }> {
  try {
    // Validate state code (must be 2 letters)
    if (data.state.length !== 2) {
      return {
        success: false,
        error: "State code must be 2 letters (e.g., UP, MH, DL)",
      };
    }

    // Validate ZIP code (Indian format: 6 digits)
    const zipRegex = /^\d{6}$/;
    if (!zipRegex.test(data.zip)) {
      return {
        success: false,
        error: "Please enter a valid 6-digit PIN code",
      };
    }

    // If this is being set as default, unset other defaults
    if (data.default) {
      const existingAddresses = await backendClient.fetch(
        `*[_type == "address" && default == true]`
      );

      // Update all existing default addresses to false
      for (const addr of existingAddresses) {
        await backendClient.patch(addr._id).set({ default: false }).commit();
      }
    }

    // Create new address in Sanity
    const newAddress = await backendClient.create({
      _type: "address",
      name: data.name,
      email: data.email,
      address: data.address,
      city: data.city,
      state: data.state.toUpperCase(),
      zip: data.zip,
      default: data.default,
      createdAt: new Date().toISOString(),
    });

    return {
      success: true,
      address: newAddress as Address,
    };
  } catch (error) {
    console.error("Error creating address:", error);
    return {
      success: false,
      error: "Failed to create address. Please try again.",
    };
  }
}
