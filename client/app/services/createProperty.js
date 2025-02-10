"use server";
import { revalidatePath } from "next/cache";

export const createProperty = async (prevState, formData) => {
  const propertyData = {
    name: formData.get('name'),
    image: formData.get('image'),
    agent: [{
      name: formData.get('agent.name'),
      email: formData.get('agent.email'),
      phone: formData.get('agent.phone'),
      agency: formData.get('agent.agency'),
    }],
    details: {
      description: formData.get('details.description'),
      price: Number(formData.get('details.price')),
      bedrooms: Number(formData.get('details.bedrooms')),
      bathrooms: Number(formData.get('details.bathrooms')),
      squareFootage: Number(formData.get('details.squareFootage')),
      yearBuilt: Number(formData.get('details.yearBuilt')),
    },
    address: {
      street: formData.get('address.street'),
      city: formData.get('address.city'),
      state: formData.get('address.state'),
      zipCode: formData.get('address.zipCode'),
      country: formData.get('address.country'),
    },
    additionalDetails: {
      listingStatus: formData.get('additionalDetails.listingStatus'),
      propertyType: formData.get('additionalDetails.propertyType'),
      floor: Number(formData.get('additionalDetails.floor')),
      parkingSpaces: Number(formData.get('additionalDetails.parkingSpaces')),
      heating: formData.get('additionalDetails.heating'),
      cooling: formData.get('additionalDetails.cooling'),
    },
    amenities: formData.get('amenities').split(",").map((a) => a.trim()).filter(a => a),
    features: formData.get('features').split(",").map((f) => f.trim()).filter(f => f),
  };

  try {
    const response = await fetch("http://localhost:5000/api/properties", {
      method: "POST",
      body: JSON.stringify(propertyData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      return {
        success: false,
        message: errorData.message || "Failed to create property",
        errors: errorData.errors || null,
      };
    }

    revalidatePath("/");
    return {
      success: true,
      errors: null
    };
  } catch (error) {
    console.error("Error creating property:", error);
    return { success: false, message: "Network error occurred", errors: null };
  }
};