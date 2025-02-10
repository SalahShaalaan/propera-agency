import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    agent: {
      type: [
        {
          name: { type: String, required: true },
          email: { type: String, required: true },
          phone: { type: String, required: true },
          agency: { type: String, required: true }
        }
      ],
      required: true
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    details: {
      description: {
        type: String,
        required: true,
        trim: true,
      },
      price: {
        type: Number,
        required: true,
        min: 0,
      },
      bedrooms: {
        type: Number,
        required: true,
        min: 0,
      },
      bathrooms: {
        type: Number,
        required: true,
        min: 0,
      },
      squareFootage: {
        type: Number,
        required: true,
        min: 0,
      },
      yearBuilt: {
        type: Number,
        required: true,
        min: 1800,
        max: new Date().getFullYear(),
      },
    },
    address: {
      street: {
        type: String,
        required: true,
        trim: true,
      },
      city: {
        type: String,
        required: true,
        trim: true,
      },
      state: {
        type: String,
        required: true,
        trim: true,
      },
      zipCode: {
        type: String,
        required: true,
        trim: true,
      },
      country: {
        type: String,
        required: true,
        trim: true,
      },
    },
    additionalDetails: {
      listingStatus: {
        type: String,
        required: true,
        enum: ["For Sale", "For Rent", "Sold"],
        trim: true,
      },
      propertyType: {
        type: String,
        required: true,
        enum: ["Penthouse", "Villa", "Estate", "Loft", "Apartment", "House"],
        trim: true,
      },
      floor: {
        type: Number,
        required: true,
        min: 0,
      },
      parkingSpaces: {
        type: Number,
        required: true,
        min: 0,
      },
      heating: {
        type: String,
        required: true,
        trim: true,
      },
      cooling: {
        type: String,
        required: true,
        trim: true,
      },
    },
    amenities: {
      type: [String],
      required: true,
      validate: {
        validator: function (value) {
          return value.length > 0;
        },
        message: "At least one amenity is required.",
      },
    },
    features: {
      type: [String],
      required: true,
      validate: {
        validator: function (value) {
          return value.length > 0;
        },
        message: "At least one feature is required.",
      },
    },
  },
  {
    timestamps: true,
  },
);

const Property = mongoose.model("Property", propertySchema);
export default Property;
