import { getProperty } from "@/app/services/getProperty";
import Image from "next/image";
import { FaPhone, FaEnvelope, FaCheck, FaBed, FaBath,  FaRulerCombined, FaCalendar, FaBuilding, FaMapMarkerAlt } from 'react-icons/fa';

export default async function Page({ params }) {
  const {id} = await params;

  if (!id) return <div className="p-8 text-red-500">Invalid property ID</div>;
  
  const property = await getProperty(id);
  
  if (!property?.details?.price) {
    return <div className="p-8 text-red-500">Property not found</div>;
  }

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <div 
        className="relative bg-mainGold text-mainBlack py-20"
        style={{ 
          clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)',
          WebkitClipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)'
        }}
      >        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className=" text-2xl md:text-5xl font-bold mb-4 text-nowrap">{property.name}</h1>
          <div className="flex items-center gap-6 text-lg">
            <span className="bg-mainBlack text-slate-300 px-4 py-2 rounded-full">
              ${property.details.price.toLocaleString()}
            </span>
            <div className="flex items-center gap-3">
              <span className="bg-white/20 px-3 py-1 rounded-full">{property.additionalDetails.listingStatus}</span>
              <span className="w-1 h-1 bg-white rounded-full"></span>
              <span>{property.additionalDetails.propertyType}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Image Gallery */}
          <div className="lg:col-span-2 space-y-6">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={property.image} 
                alt={property.name}
                className="w-full h-full object-cover"
                width={900}
                height={900}
                placeholder="blur"
                blurDataURL="/blur.jpg"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 bg-black/50 text-white px-4 py-2 rounded-full">
                {property.images?.length || 1} Photos
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-6 rounded-xl border flex items-center gap-3">
                <FaBed className="text-mainGold text-2xl" />
                <div>
                  <p className="text-gray-500">Bedrooms</p>
                  <p className="text-xl font-semibold">{property.details.bedrooms}</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl border flex items-center gap-3">
                <FaBath className="text-mainGold text-2xl" />
                <div>
                  <p className="text-gray-500">Bathrooms</p>
                  <p className="text-xl font-semibold">{property.details.bathrooms}</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl border flex items-center gap-3">
                <FaRulerCombined className="text-mainGold text-2xl" />
                <div>
                  <p className="text-gray-500">Sq Ft</p>
                  <p className="text-xl font-semibold">{property.details.squareFootage.toLocaleString()}</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl border flex items-center gap-3">
                <FaCalendar className="text-mainGold text-2xl" />
                <div>
                  <p className="text-gray-500">Year Built</p>
                  <p className="text-xl font-semibold">{property.details.yearBuilt}</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <section className="bg-white p-8 rounded-2xl border border-mainGold">
              <h2 className="text-2xl font-bold mb-6 text-mainBlack">Property Details</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {property.details.description}
              </p>
            </section>

            {/* Features & Amenities */}
            <div className="bg-white p-8 rounded-2xl border">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-mainBlack">
                    <FaCheck className="text-mainGold" /> Features
                  </h3>
                  <ul className="space-y-3">
                    {property.features.map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-gray-600">
                        <FaCheck className="text-mainGold shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-mainBlack">
                    <FaCheck className="text-mainGold" /> Amenities
                  </h3>
                  <ul className="space-y-3">
                    {property.amenities.map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-gray-600">
                        <FaCheck className="text-mainGold shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Agent Card */}
            <div className="bg-white p-8 rounded-2xl  border border-mainGold">
              <h2 className="text-2xl font-bold mb-6 text-mainBlack">Contact Agent</h2>
              {property.agent.map((agent, index) => (
                <div key={index} className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                      <span className="text-mainGold text-2xl font-bold">
                        {agent.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{agent.name}</h3>
                      <p className="text-mainGold">{agent.agency}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg">
                      <FaPhone className="text-mainGold" />
                      <a href={`tel:${agent.phone}`} className="text-gray-600 hover:text-mainGold">
                        {agent.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg">
                      <FaEnvelope className="text-mainGold" />
                      <a href={`mailto:${agent.email}`} className="text-gray-600 hover:text-mainGold">
                        {agent.email}
                      </a>
                    </div>
                  </div>
                  <button className="w-full py-4 bg-mainGold text-white rounded-lg font-semibold">
                    Schedule a Tour
                  </button>
                </div>
              ))}
            </div>

            {/* Location Card */}
            <div className="bg-white p-8 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6 text-mainBlack flex items-center gap-2">
                <FaMapMarkerAlt className="text-mainGold" /> Location
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="flex items-center gap-3">
                  <FaBuilding className="text-mainGold" />
                  {property.address.street}
                </p>
                <p className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-mainGold" />
                  {property.address.city}, {property.address.state} {property.address.zipCode}
                </p>
                <div className="h-48 bg-indigo-50 rounded-xl flex items-center justify-center text-mainGold">
                  <FaMapMarkerAlt className="text-3xl" />
                  <span className="ml-2">Map View</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}