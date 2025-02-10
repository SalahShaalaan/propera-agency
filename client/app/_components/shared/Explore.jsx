import Link from "next/link";

export default function Explore() {
  return (
    <section className="relative bg-mainGold py-16 mt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-white max-w-3xl">
          <h2 className="text-4xl font-bold text-mainBlack mb-4">
            Start Your Real Estate Journey Today
          </h2>
          <p className="text-lg mb-6 text-slate-300">
            Your dream property is just a click away. Whether you're looking for
            a new home, a strategic investment, or expert real estate advice,
            Estatein is here to assist you every step of the way. Take the first
            step towards your real estate goals and explore our available
            properties or get in touch with our team for personalized
            assistance.
          </p>
        </div>
        <Link href="/properties" className="bg-mainBlack text-mainGold py-3 px-6 rounded-lg">
          Explore Properties
        </Link>
      </div>
    </section>
  );
}
