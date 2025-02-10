import { Suspense } from "react";
import Heading from "../_components/shared/Heading";
import LoadingSpinner from "../_components/shared/LoadingSpinner";
import FetchProperties from "./FetchProperties";
import ListProperty from "./ListProperty";

export default async function page({ properties }) {
  return (
    <div className="container mx-auto relative py-24 px-4">
      <div>
        <Heading
          title="Find Your Dream Property"
          description="Propera is a leading real estate company specializing in buying, selling, and renting residential and commercial properties. We offer expert property management, investment consultation, and market analysis to help you find the perfect home or profitable real estate opportunity"
        />
      </div>
      <div className="grid grid-cols-auto-fit-350">
        <Suspense fallback={<LoadingSpinner />}>
          <FetchProperties properties={properties} />
        </Suspense>
      </div>
      <ListProperty />
    </div>
  );
}
