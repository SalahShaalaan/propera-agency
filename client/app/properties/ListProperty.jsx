
import Link from "next/link";
import Image from "next/image";

export default function ListProperty() {
  const benefits = [
    {
      title: "Maximum Exposure",
      description: "Reach thousands of potential buyers through our extensive network",
      icon: "✨"
    },
    {
      title: "Expert Support",
      description: "Get guidance from top-rated real estate professionals",
      icon: "👥"
    },
    {
      title: "Professional Media",
      description: "Free professional photography and virtual tour services",
      icon: "📸"
    },
    {
      title: "Smart Analytics",
      description: "Track viewer engagement and property performance",
      icon: "📊"
    }
  ];

  return (
    <div className="relative mt-16 py-20 px-8">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-yellow-50 
          transform rotate-12 origin-top-left opacity-50"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 80%, 0% 100%)" }}
        />
        <div className="absolute top-0 left-0 w-24 h-24 bg-yellow-100 rounded-full 
          blur-3xl opacity-60" />
      </div>

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1 bg-yellow-100 text-yellow-800 
                rounded-full text-sm font-medium">For Property Owners</span>
              <h2 className="text-4xl font-bold text-mainBlack leading-tight">
                List Your Property Where <span className="text-mainGold">It Matters</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Join thousands of successful property owners who trust Propera 
                to connect with qualified buyers and renters.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-auto-fit-250 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="group p-4 rounded-xl bg-white hover:scale-110 transition-transform  border border-gray-100">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center 
                      justify-center bg-yellow-50 rounded-lg group-hover:bg-yellow-100 
                      transition-colors duration-300 text-xl">
                      {benefit.icon}
                    </span>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="flex items-center gap-6 pt-4">
              <Link 
                href="/properties/list-property"
                className="inline-flex items-center gap-2 bg-mainGold
                  text-white px-8 py-3 rounded-lg text-lg font-medium shadow-pop-br"
              >
                Start Listing Now
                <span className="text-xl">→</span>
              </Link>
              <span className="text-sm text-gray-500">
                Join 10,000+ property owners
              </span>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 
              to-transparent rounded-3xl transform -rotate-3 scale-95 opacity-40" />
            <div className="relative transform hover:scale-102 transition-transform 
              duration-500">
              <Image 
                src="/list.svg" 
                alt="Property listing illustration"
                width={600}
                height={500}
                className="w-full h-auto"
                quality={100}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}