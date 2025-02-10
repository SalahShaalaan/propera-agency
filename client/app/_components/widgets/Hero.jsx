import Image from "next/image";
import { FaHome, FaDollarSign, FaBuilding, FaStar } from "react-icons/fa";
import buildingImage from "@/public/building.png";
import Link from "next/link";

export default function HeroSection() {
  const cards = [
    { title: "Find Your Dream Home", icon: <FaHome /> },
    { title: "Unlock Property Value", icon: <FaDollarSign /> },
    { title: "Effortless Property Management", icon: <FaBuilding /> },
    { title: "Smart Investments, Informed Decisions", icon: <FaStar /> },
  ];
  return (
    <section className="bg-mainBlack text-white py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Discover Your Dream Property with Propera
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl">
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams.
          </p>
          <div className="flex space-x-4">
            <Link href="/about-us" target="_blank" className="bg-mainGold text-white px-6 py-3 rounded-full hover:bg-mainGold/90 transition-colors">
              Learn More
            </Link>
            <Link href="/properties" target="_blank" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors">
              Browse Properties
            </Link>
          </div>
          <div className="flex space-x-8 mt-8">
            <div className="text-center">
              <p className="text-2xl font-bold">200+</p>
              <p>Happy Customers</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">10k+</p>
              <p>Properties For Clients</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">16+</p>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-end">
          <Image
            src={buildingImage}
            alt="Building"
            className="object-cover rounded-lg shadow-lg"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
            priority
          />
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 px-6 md:px-12 lg:px-16">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-mainGold to-[#ffdc73] p-8 rounded-xl text-center transform transition-transform hover:scale-105 shadow-xl clip-path duration-500"
          >
            <div className="bg-slate-200 p-4 rounded-full inline-block mb-4 shadow-md">
              <p className="text-mainBlack text-3xl">{card.icon}</p>
            </div>
            <h3 className="text-xl font-bold text-white">{card.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
