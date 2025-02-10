import { Suspense } from "react";
import FetchProperties from "../dataComponents/FetchProperties";
import Heading from "../shared/Heading";
import LoadingSpinner from "../shared/LoadingSpinner";
import Link from "next/link";

export default async function FeaturedProperties({ properties }) {
  return (
    <section className="text-mainBlack py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <Heading
          title="Featured Properties"
          description="Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Propera. Click 'View Details' for more information."
        />
        <div className="grid grid-cols-auto-fit-350">
          <Suspense fallback={<LoadingSpinner />}>
            <FetchProperties properties={properties} />
          </Suspense>
        </div>
        <div className="text-center mt-12">
          <Link href="/properties" className="bg-mainGold text-white px-6 py-3 rounded-full hover:bg-mainGold/90 transition-colors">
            View All Properties
          </Link>
        </div>
      </div>
    </section>
  );
}
