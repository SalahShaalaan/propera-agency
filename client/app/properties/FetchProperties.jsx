import { fetchProperties } from "../services/fetchProperties.js";
import PropertyCard from "../_components/shared/PropertyCard.jsx";

export default async function FetchProperties() {
  const properties = await fetchProperties();
  if (!properties)
    return (
      <h1 className="text-3x text-red-600">No Properties To Show Right Now!</h1>
    );

  return (
    <div className="grid grid-cols-auto-fit-350 gap-4">
      {properties.map((property) => (
        <PropertyCard key={property.name} property={property} />
      ))}
    </div>
  );
}
