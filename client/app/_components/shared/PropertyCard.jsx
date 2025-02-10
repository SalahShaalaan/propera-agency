import Image from "next/image";
import Link from "next/link";

export default function PropertyCard({ property }) {
  return (
    <div className="bg-white rounded-b-lg overflow-hidden max-h-[540px]">
      <Image
        src={property.image}
        alt="Property Image"
        width={400}
        height={400}
        className="w-full h-64 object-cover rounded-t-xl"
      />
      <div className="p-6 border rounded-b-xl">
        <h2 className="text-xl font-semibold text-mainBlack mb-2 text-nowrap">
          {property.name}
        </h2>
        <p>{property.details.description}</p>
        <p className="text-mainGold font-semibold mb-4">
          ${property.details.price.toLocaleString()}
        </p>
        <div className="flex justify-between text-sm text-gray-600 mb-4">
          <p>{property.details.bedrooms} Bedrooms</p>
          <p>{property.details.bathrooms} Bathrooms</p>
          <p>{property.details.squareFootage} Sq Ft</p>
        </div>
        <Link href={`/properties/${property._id}`}>
          <button className="inline-block bg-mainGold text-white px-4 py-2 rounded-full hover:bg-mainGold/90 transition-colors">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}


