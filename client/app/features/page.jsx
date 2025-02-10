'use client'
import feat1 from "@/public/feat-1.jpeg";
import feat2 from "@/public/feat-2.jpeg";
import feat3 from "@/public/feat-3.jpeg";
import Image from "next/image";
import { motion } from "framer-motion";
import { Globe } from "../_components/widgets/Globe";

export default function Features() {
  const features = [
    {
      icon: (
        <svg
          className="shrink-0 mt-1 size-6 text-mainGold"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="18" height="10" x="3" y="11" rx="2" />
          <circle cx="12" cy="5" r="2" />
          <path d="M12 7v4" />
          <line x1="8" x2="8" y1="16" y2="16" />
          <line x1="16" x2="16" y1="16" y2="16" />
        </svg>
      ),
      title: "Expert Agents",
      description:
        "Our carefully selected team of real estate professionals brings years of market expertise to every transaction.",
    },
    {
      icon: (
        <svg
          className="shrink-0 mt-1 size-6 text-mainGold"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 10v12" />
          <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
        </svg>
      ),
      title: "Transparent Process",
      description:
        "Clear documentation and guidance throughout your property journey, ensuring a smooth and reliable experience.",
    },
    {
      icon: (
        <svg
          className="shrink-0 mt-1 size-6 text-mainGold"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: "Client-Focused Approach",
      description:
        "We prioritize your needs and preferences, delivering personalized real estate solutions that exceed expectations.",
    },
  ];
  
  return (
    <div className="container px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="relative aspect-w-16 aspect-h-7 h-[400px]">
        <Image
          src="/features.webp"
          alt="Propera Features"
          fill
          className="object-cover rounded-xl"
          priority
          quality={100}
        />
      </div>

      <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="lg:col-span-1">
          <h2 className="font-bold text-2xl md:text-3xl text-mainBlack">
            We transform your real estate journey
          </h2>
          <p className="mt-2 md:mt-4 text-mainBlack/70">
            At Propera, we understand the complexities of real estate transactions. Our dedicated team provides comprehensive solutions for buying, selling, and investing in premium properties.
          </p>
        </div>

        <div className="lg:col-span-2">
          <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
            <div className="flex gap-x-5">
              <svg className="shrink-0 mt-1 size-6 text-mainGold" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="10" x="3" y="11" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" x2="8" y1="16" y2="16"/><line x1="16" x2="16" y1="16" y2="16"/></svg>
              <div className="grow">
                <h3 className="text-lg font-semibold text-mainGold">
                  Expert Agents
                </h3>
                <p className="mt-1 text-mainBlack/70">
                  Our carefully selected team of real estate professionals brings years of market expertise to every transaction.
                </p>
              </div>
            </div>

            <div className="flex gap-x-5">
               <svg className="shrink-0 mt-1 size-6 text-mainGold" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
               <div className="grow">
                <h3 className="text-lg font-semibold text-mainGold">
                   Premium Properties
                </h3>
                 <p className="mt-1 text-mainBlack">
                   Access to exclusive listings and luxury properties that match your lifestyle and investment goals.
                 </p>
            </div>
            </div>

<div className="flex gap-x-5">
              <svg className="shrink-0 mt-1 size-6 text-mainGold" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            <div className="grow">
               <h3 className="text-lg font-semibold text-mainGold">
                  Transparent Process
      </h3>
                <p className="mt-1 text-mainBlack">
                   Clear documentation and guidance throughout your property journey, ensuring a smooth and reliable experience.
                 </p>
              </div>
            </div>


<div className="flex gap-x-5">
            <svg className="shrink-0 mt-1 size-6 text-mainGold" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
           <div className="grow">
             <h3 className="text-lg font-semibold text-mainGold">
                 Client-Focused Approach
              </h3>
               <p className="mt-1 text-mainBlack">
                 We prioritize your needs and preferences, delivering personalized real estate solutions that exceed expectations.
             </p>
              </div>
           </div>


            {/* ... other feature blocks with updated colors ... */}
          </div>
        </div>
      </div>
      
      {/* Second Section */}
      <div className="container px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto my-20">
  <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="lg:col-span-7"
    >
      <div className="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10">
        <div className="col-span-4">
          <Image
            className="rounded-xl"
            src={feat1}
            alt="Property Feature 1"
            quality={100}
            width={500}
            height={500}
            placeholder="blur"
          />
        </div>

        <div className="col-span-3">
          <Image
            className="rounded-xl"
            src={feat2}
            alt="Property Feature 2"
            quality={100}
            width={500}
            height={500}
            placeholder="blur"
          />
        </div>

        <div className="col-span-5">
          <Image
            className="rounded-xl"
            src={feat3}
            alt="Property Feature 3"
            quality={100}
            width={500}
            height={500}
            placeholder="blur"
          />
        </div>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5"
    >
      <div className="space-y-6 sm:space-y-8">
        <div className="space-y-2 md:space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-bold text-3xl lg:text-4xl text-mainBlack"
          >
            Advanced Real Estate Solutions for Better Living
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-mainBlack/70"
          >
            Empowering property seekers with innovative tools to enhance their search, streamline processes, and improve living experiences.
          </motion.p>
        </div>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="space-y-2 sm:space-y-4"
        >
          <li className="flex gap-x-3">
            <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-mainGold/20 text-mainGold">
              <svg
                className="shrink-0 size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <div className="text-mainBlack/70">
              <span className="text-sm sm:text-base">
                <span className="font-bold">Smart Property Search</span> – AI-powered property matching
              </span>
            </div>
          </li>

          <li className="flex gap-x-3">
            <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-mainGold/20 text-mainGold">
              <svg
                className="shrink-0 size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <div className="text-mainBlack/70">
              <span className="text-sm sm:text-base">
                Secure Digital Transaction Management
              </span>
            </div>
          </li>

          <li className="flex gap-x-3">
            <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-mainGold/20 text-mainGold">
              <svg
                className="shrink-0 size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <div className="text-mainBlack/70">
              <span className="text-sm sm:text-base">
                Real-time <span className="font-bold">Market Analytics</span> Dashboard
              </span>
            </div>
          </li>
        </motion.ul>
      </div>
    </motion.div>
  </div>
</div>



      {/* Third Section */}
      <div className="container px-4 py-16 sm:px-6 lg:px-8 mx-auto bg-mainGold rounded-3xl">
  <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="lg:col-span-5 space-y-8"
    >
      <div className="relative">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="absolute -top-4 -left-4 size-20 bg-mainGold/10 rounded-full blur-xl"
        />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative font-bold text-3xl lg:text-4xl text-mainBlack"
        >
          Global Real Estate Network
        </motion.h2>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-mainBlack/70 text-lg leading-relaxed"
      >
        Connect with premium properties and investors worldwide through our extensive network of real estate professionals and exclusive partnerships.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="grid gap-6"
      >
        <div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex gap-x-4">
            <span className="flex-shrink-0 size-12 flex justify-center items-center rounded-lg bg-mainGold/20 text-mainGold">
              <svg className="size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
            </span>
            <article className="text-slate-300">
              <h3 className="font-semibold text-xl mb-2">International Reach</h3>
              <p>Access to properties across major global markets with local expertise in each region</p>
            </article>
          </div>
        </div>

        <div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex gap-x-4">
            <span className="flex-shrink-0 size-12 flex justify-center items-center rounded-lg bg-mainGold/20 text-mainGold">
              <svg className="size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
              </svg>
            </span>
            <article className="text-slate-300">
              <h3 className="font-semibold text-xl mb-2">Local Expertise</h3>
              <p>Professional partners in every major city providing deep market insights</p>
            </article>
          </div>
        </div>
      </motion.div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="lg:col-span-7 mt-10 lg:mt-0"
    >
      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-r from-mainGold to-blue-500 rounded-full blur-3xl"
        />
        <Globe className="relative mx-auto w-full max-w-3xl" />
      </div>
    </motion.div>
  </div>
</div>

    </div>
  )
}
