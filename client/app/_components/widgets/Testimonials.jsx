import Heading from "../shared/Heading";
import person1 from "@/public/person-1.webp";
import person2 from "@/public/person-2.webp";
import person3 from "@/public/person-3.webp";
import Image from "next/image";

export default function Testimonials() {
  return (
    <div className="p-4 bg-mainBlack">
      <div className="container mx-auto py-8">
        <Heading
          title="What Our Happy Clients Says"
          description="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
          titleColor="text-mainGold"
          descriptionColor="text-mainGold"
        />
        <div className="grid md:grid-cols-2 items-center lg:gap-24 md:gap-16 gap-8">
          <div className="space-y-6 bg-gray-100 rounded-lg p-6">
            <div className="flex sm:items-center max-sm:flex-col-reverse">
              <div className="mr-3">
                <h6 className="text-mainBlack text-sm font-bold">
                  Alex Mahone
                </h6>
                <p className="text-sm text-mainBlack mt-2">
                  Propera made the home buying process seamless and stress-free.
                  Their team was professional and attentive to all our needs.
                </p>
              </div>
              <Image
                src={person1}
                className="w-16 h-16 rounded-full max-sm:mb-2"
                width={67}
                height={67}
                alt="some person"
              />
            </div>

            <div className="flex sm:items-center max-sm:flex-col-reverse p-6 relative md:left-12 bg-white shadow-[0_2px_20px_-4px_rgba(93,96,127,0.2)] rounded-lg">
              <div className="mr-3">
                <h6 className="text-mainBlack text-sm font-bold">Mark Adair</h6>
                <p className="text-sm text-mainBlack mt-2">
                  I found the perfect investment property thanks to Propera.
                  Their market insights and guidance were invaluable.
                </p>
              </div>
              <Image
                src={person2}
                className="w-16 h-16 rounded-full max-sm:mb-2"
                width={67}
                height={67}
                alt="some person"
              />
            </div>

            <div className="flex sm:items-center max-sm:flex-col-reverse">
              <div className="mr-3">
                <h6 className="text-mainBlack text-sm font-bold">
                  Simon Konecki
                </h6>
                <p className="text-sm text-mainBlack mt-2">
                  Selling my property was a breeze with Propera. They handled
                  everything efficiently and got me a great deal.
                </p>
              </div>
              <Image
                src={person3}
                className="w-16 h-16 rounded-full max-sm:mb-2"
                width={67}
                height={67}
                alt="some person"
              />
            </div>
          </div>

          <div className="max-md:-order-1">
            <h6 className="text-xl font-bold text-gray-300">Testimonials</h6>
            <h2 className="text-mainGold text-4xl font-bold mt-4">
              We are loyal with our customer
            </h2>
            <p className="text-sm text-gray-600 mt-4 leading-relaxed">
              Veniam proident aute magna anim excepteur et ex consectetur velit
              ullamco veniam minim aute sit. Elit occaecat officia et laboris
              Lorem minim. Officia do aliqua adipisicing ullamco in.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
