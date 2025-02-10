'use client'
import { createProperty } from '../../services/createProperty';
import {  useFormStatus } from 'react-dom';
import { useActionState, useEffect } from 'react';
import { toast } from 'react-toastify';
import SuccessToast from '../../_components/widgets/SuccessToast';

export default function ListForm() {
  const [state, formAction] = useActionState(createProperty, null);

  console.log(state)
  
  useEffect(() => {
    if (state?.success) {
      toast.success(
        <SuccessToast state={state} />,
        {
          position: "bottom-right",
          autoClose: 6000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          className: '!bg-mainGold !rounded-xl !shadow-xl !border !border-mainGold/80',
          bodyClassName: "!p-0",
          icon: false,
          progressClassName: '!bg-mainBlack/30',
          style: {
            boxShadow: '0 12px 24px -12px rgba(184, 150, 80, 0.3)'
          }
        }
      );
    }
  }, [state]);

  return (
    <form action={formAction} className="space-y-8">
      {/* Property Basic Info */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-300 mb-2">Property Name</label>
          <input
            type="text"
            name="name"
            className="w-full bg-transparent border border-mainGold/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-mainGold focus:outline-none text-slate-300"
            required
          />
        </div>
        
        <div>
          <label className="block text-gray-300 mb-2">Image URL</label>
          <input
            type="text"
            name="image"
            className="w-full bg-transparent border border-mainGold/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-mainGold focus:outline-none text-slate-300"
            required
          />
        </div>
      </div>

      {/* Agent Information */}
      <div className="border border-mainGold/30 p-6 rounded-lg">
        <h3 className="text-mainGold text-xl mb-4">Agent Details</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-300 mb-2">Agent Name</label>
            <input
              type="text"
              name="agent.name"
              className="w-full bg-transparent border border-mainGold/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-mainGold focus:outline-none text-slate-300"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Agent Email</label>
            <input
              type="email"
              name="agent.email"
              className="w-full bg-transparent border border-mainGold/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-mainGold focus:outline-none text-slate-300"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Agent Phone</label>
            <input
              type="tel"
              name="agent.phone"
              className="w-full bg-transparent border border-mainGold/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-mainGold focus:outline-none text-slate-300"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Agency</label>
            <input
              type="text"
              name="agent.agency"
              className="w-full bg-transparent border border-mainGold/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-mainGold focus:outline-none text-slate-300"
              required
            />
          </div>
        </div>
      </div>

      {/* Property Details */}
      <div className="border border-mainGold/30 p-6 rounded-lg">
        <h3 className="text-mainGold text-xl mb-4">Property Details</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <label className="block text-gray-300 mb-2">Price ($)</label>
            <input
              type="number"
              name="details.price"
              min="0"
              className="w-full bg-transparent border border-mainGold/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-mainGold focus:outline-none text-slate-300"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Bedrooms</label>
            <input
              type="number"
              name="details.bedrooms"
              min="0"
              className="w-full bg-transparent border border-mainGold/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-mainGold focus:outline-none text-slate-300"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Bathrooms</label>
            <input
              type="number"
              name="details.bathrooms"
              min="0"
              className="w-full bg-transparent border border-mainGold/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-mainGold focus:outline-none text-slate-300"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Square Footage</label>
            <input
              type="number"
              name="details.squareFootage"
              min="0"
              className="w-full bg-transparent border border-mainGold/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-mainGold focus:outline-none text-slate-300"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Year Built</label>
            <input
              type="number"
              name="details.yearBuilt"
              min="1800"
              max={new Date().getFullYear()}
              className="w-full bg-transparent border border-mainGold/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-mainGold focus:outline-none text-slate-300"
              required
            />
          </div>
        </div>
        <div className="mt-6">
          <label className="block text-gray-300 mb-2">Description</label>
          <textarea
            name="details.description"
            className="w-full bg-transparent border border-mainGold/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-mainGold focus:outline-none text-slate-300"
            required
          />
        </div>
      </div>

      {/* Address Section */}
      <div className="border border-mainGold/30 p-6 rounded-lg">
        <h3 className="text-mainGold text-xl mb-4">Address</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-300 mb-2">Street</label>
            <input
              type="text"
              name="address.street"
              className="w-full bg-transparent border border-mainGold/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-mainGold focus:outline-none text-slate-300"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">City</label>
            <input
              type="text"
              name="address.city"
              className="w-full bg-transparent border border-mainGold/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-mainGold focus:outline-none text-slate-300"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">State</label>
            <input
              type="text"
              name="address.state"
              className="w-full bg-transparent border border-mainGold/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-mainGold focus:outline-none text-slate-300"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Zip Code</label>
            <input
              type="text"
              name="address.zipCode"
              className="w-full bg-transparent border border-mainGold/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-mainGold focus:outline-none text-slate-300"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Country</label>
            <input
              type="text"
              name="address.country"
              className="w-full bg-transparent border border-mainGold/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-mainGold focus:outline-none text-slate-300"
              required
            />
          </div>
        </div>
      </div>

      {/* Additional Details */}
      <div className="border border-mainGold/30 p-6 rounded-lg">
        <h3 className="text-mainGold text-xl mb-4">Additional Details</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <label className="block text-slate-300 mb-2">Listing Status</label>
            <select
              name="additionalDetails.listingStatus"
              className="w-full bg-transparent border border-mainGold/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-mainGold focus:outline-none text-slate-300"
              required
            >
              <option value="">Select Status</option>
              <option value="For Sale">For Sale</option>
              <option value="For Rent">For Rent</option>
              <option value="Sold">Sold</option>
            </select>
          </div>
          <div>
            <label className="block text-slate-300 mb-2">Property Type</label>
            <select
              name="additionalDetails.propertyType"
              className="w-full bg-transparent border border-mainGold/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-mainGold focus:outline-none text-slate-300"
              required
            >
              <option value="">Select Type</option>
              <option value="Penthouse">Penthouse</option>
              <option value="Villa">Villa</option>
              <option value="Estate">Estate</option>
              <option value="Loft">Loft</option>
              <option value="Apartment">Apartment</option>
              <option value="House">House</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Floor</label>
            <input
              type="number"
              name="additionalDetails.floor"
              min="0"
              className="w-full bg-transparent border border-mainGold/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-mainGold focus:outline-none text-slate-300"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Parking Spaces</label>
            <input
              type="number"
              name="additionalDetails.parkingSpaces"
              min="0"
              className="w-full bg-transparent border border-mainGold/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-mainGold focus:outline-none text-slate-300"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Heating System</label>
            <input
              type="text"
              name="additionalDetails.heating"
              className="w-full bg-transparent border border-mainGold/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-mainGold focus:outline-none text-slate-300"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Cooling System</label>
            <input
              type="text"
              name="additionalDetails.cooling"
              className="w-full bg-transparent border border-mainGold/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-mainGold focus:outline-none text-slate-300"
              required
            />
          </div>
        </div>
      </div>

      {/* Amenities & Features */}
      <div className="border border-mainGold/30 p-6 rounded-lg">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-300 mb-2">Amenities (comma separated)</label>
            <input
              type="text"
              name="amenities"
              className="w-full bg-transparent border border-mainGold/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-mainGold focus:outline-none text-slate-300"
              placeholder="e.g., Pool, Gym, Parking"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Features (comma separated)</label>
            <input
              type="text"
              name="features"
              className="w-full bg-transparent border border-mainGold/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-mainGold focus:outline-none text-slate-300"
              placeholder="e.g., Fireplace, Hardwood Floors"
              required
            />
          </div>
        </div>
      </div>

      <SubmitButton />



    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="w-full bg-mainGold text-white py-4 rounded-lg hover:bg-mainGold/90 transition-colors font-medium text-lg disabled:bg-gray-400"
      disabled={pending}
    >
      {pending ? "Submitting..." : "Submit Property"}
    </button>
  );
}