"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Heading from "../_components/shared/Heading";
import Explore from "../_components/shared/Explore";

const AboutPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className=" relative bg-mainBlack py-16">
      {/* Our Journey Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center"
      >
        <motion.div
          {...fadeInUp}
          className="md:w-1/2 text-center md:text-left mb-8 md:mb-0"
        >
          <Heading
            title="Our Journey"
            description="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients."
            titleColor="text-mainGold"
            descriptionColor="text-mainGold"
          />
          <div className="flex justify-center md:justify-start mt-8 space-x-4">
            <div className="text-center p-4 border border-mainGold  text-slate-300 rounded-lg">
              <h3 className="text-2xl font-bold">200+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="text-center p-4 border border-mainGold  text-slate-300 rounded-lg">
              <h3 className="text-2xl font-bold">10k+</h3>
              <p>Properties For Clients</p>
            </div>
            <div className="text-center p-4 border border-mainGold  text-slate-300 rounded-lg">
              <h3 className="text-2xl font-bold">16+</h3>
              <p>Years of Experience</p>
            </div>
          </div>
        </motion.div>
        <motion.div {...fadeInUp} className="md:w-1/2">
          <Image
            src="/about.svg"
            alt="Our Journey"
            className="object-cover w-full h-full "
            width={500}
            height={500}
            quality={100}
            loading="lazy"

          />
        </motion.div>
      </motion.section>
      {/* Our Values */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center"
      >
        <motion.div
          {...fadeInUp}
          className="md:w-1/2 text-center md:text-left mb-8 md:mb-0"
        >
          <Heading
            title="Our Values"
            description="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
            titleColor="text-mainGold"
            descriptionColor="text-mainGold"
          />
        </motion.div>
        <motion.div {...fadeInUp} className="grid grid-cols-auto-fit-250 gap-8">
          {[
            {
              title: "Trust",
              description:
                "Trust is the cornerstone of every successful real estate transaction.",
            },
            {
              title: "Excellence",
              description:
                "We set the bar high for ourselves. From the properties we list to the services we provide.",
            },
            {
              title: "Client-Centric",
              description:
                "Your dreams and needs are at the center of our universe. We listen, understand.",
            },
            {
              title: "Our Commitment",
              description:
                "We are dedicated to providing you with the highest level of service, professionalism.",
            },
          ].map((value, index) => (
            <div key={index} className="border border-mainGold p-6 rounded-lg ">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-mainGold rounded-full flex items-center justify-center text-white mr-4">
                  {/* Icon placeholder */}
                  <span className="text-xl">★</span>
                </div>
                <h3 className="text-xl font-semibold text-mainGold">
                  {value.title}
                </h3>
              </div>
              <p className="text-mainGold font-normal">{value.description}</p>
            </div>
          ))}
        </motion.div>
      </motion.section>

      {/* Our Achievements */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container mx-auto px-4 py-16"
      >
        <motion.div {...fadeInUp} className=" mb-12">
          <Heading
            title="Our Achievements"
            description="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
            titleColor="text-mainGold"
            descriptionColor="text-mainGold"
          />
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "3+ Years of Excellence",
              description:
                "With over 3 years in the industry, we've amassed a wealth of knowledge and experience.",
            },
            {
              title: "Happy Clients",
              description:
                "Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.",
            },
            {
              title: "Industry Recognition",
              description:
                "We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.",
            },
          ].map((achievement, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              className="text-center p-8 bg-mainBlack rounded-lg shadow-lg border border-mainGold"
            >
              <h3 className="text-2xl font-bold text-mainGold mb-4">
                {achievement.title}
              </h3>
              <p className="text-slate-300">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Navigating the Propera Experience */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="bg-mainBlack py-16"
      >
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className=" mb-12">
            <Heading
              title="Navigating the Propera Experience"
              description="At Propera, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works."
              titleColor="text-mainGold"
              descriptionColor="text-mainGold"
            />
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "Step 01",
                title: "Discover a World of Possibilities",
                description:
                  "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location.",
              },
              {
                step: "Step 02",
                title: "Narrowing Down Your Choices",
                description:
                  "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
              },
              {
                step: "Step 03",
                title: "Personalized Guidance",
                description:
                  "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.",
              },
              {
                step: "Step 04",
                title: "See It for Yourself",
                description:
                  "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.",
              },
              {
                step: "Step 05",
                title: "Making Informed Decisions",
                description:
                  "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed.",
              },
              {
                step: "Step 06",
                title: "Getting the Best Deal",
                description:
                  "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className="text-center p-8 bg-mainBlack rounded-lg shadow-lg border border-mainGold"
              >
                <h4 className="text-xl font-normal text-slate-300 mb-2">
                  {step.step}
                </h4>
                <h3 className="text-2xl font-bold text-mainGold mb-4">
                  {step.title}
                </h3>
                <p className="text-slate-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Our Mission And Values */}
      <section className="container mx-auto overflow-hidden mt-16">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12">
          <div className="relative w-full lg:w-1/2 p-6 lg:p-8 group">
            <div className="absolute start-0 top-0 z-10 hidden lg:block opacity-50 group-hover:opacity-20 transition-opacity duration-500">
            <svg
              width="314"
              height="299"
              viewBox="0 0 314 299"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute start-0 top-0 z-10 hidden lg:block group-hover:[&_path]:fill-[#B89650]"
            >
              <path
                d="M313.608 0.0799818L210.576 299H104.152L0.696 0.0799818H89.736L157.576 215.896L224.992 0.0799818H313.608Z"
                fill="white"
                className="hoversvgpath"
              ></path>
              <path
                d="M313.608 0.0799866L314.553 0.405853L315.01 -0.920013H313.608V0.0799866ZM210.576 299V300H211.289L211.521 299.326L210.576 299ZM104.152 299L103.207 299.327L103.44 300H104.152V299ZM0.696 0.0799866V-0.920013H-0.708298L-0.249002 0.407043L0.696 0.0799866ZM89.736 0.0799866L90.69 -0.219894L90.4699 -0.920013H89.736V0.0799866ZM157.576 215.896L156.622 216.196L157.579 219.24L158.531 216.194L157.576 215.896ZM224.992 0.0799866V-0.920013H224.257L224.038 -0.218185L224.992 0.0799866ZM312.663 -0.24588L209.631 298.674L211.521 299.326L314.553 0.405853L312.663 -0.24588ZM210.576 298H104.152V300H210.576V298ZM105.097 298.673L1.641 -0.247086L-0.249002 0.407043L103.207 299.327L105.097 298.673ZM0.696 1.07999H89.736V-0.920013H0.696V1.07999ZM88.782 0.379852L156.622 216.196L158.53 215.596L90.69 -0.219894L88.782 0.379852ZM158.531 216.194L225.947 0.378143L224.038 -0.218185L156.621 215.598L158.531 216.194ZM224.992 1.07999H313.608V-0.920013H224.992V1.07999Z"
                fill="#D4D4D4"
                mask="url(#path-1-outside-1_1897_15868)"
              ></path>
            </svg>
            </div>

            <div className="relative z-20 lg:ms-[11.3rem]">
              <div className="flex items-baseline gap-4 mb-6">
                <h3 className="text-[2.1875rem] font-bold text-slate-300 leading-normal">
                  Our Vision
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="81"
                  height="79"
                  viewBox="0 0 91 89"
                  fill="none"
                  className="group-hover:[&_path]:fill-[#B89650] [&_path]:transition-all [&_path]:duration-300"
                >
                  <g clipPath="url(#clip0_1897_15870)">
                    <path
                      d="M79.1539 7.02074C78.3582 6.73325 77.6525 6.17341 76.9619 5.64382C75.2353 4.32744 73.6888 2.72356 71.8271 1.67953C66.7223 -1.19535 63.2541 -0.363146 60.4615 3.97942C60.2813 4.25178 60.1161 4.5544 59.966 4.84189C59.1703 6.33985 58.0442 6.94508 56.4677 6.40037C54.606 5.74974 52.6992 5.08398 51.0026 4.08534C47.3092 1.92162 43.7809 1.93675 40.0724 4.08534C38.3458 5.09911 36.409 5.71948 34.5172 6.43063C33.5563 6.79377 32.5804 6.58194 31.8297 5.84053C31.4694 5.49251 31.2292 5.00833 30.9889 4.56953C28.6468 0.272352 25.3287 -0.938121 20.8245 0.877588C18.2571 1.90649 16.2151 3.69194 14.2033 5.53791C13.4826 6.18854 12.6118 6.74838 11.7109 7.09639C6.93648 8.98775 3.39317 12.1804 1.45636 16.992C0.765715 18.6867 0.465435 20.5326 0 22.303V25.0416C0.135126 25.6923 0.255238 26.3429 0.375351 26.9935C1.7116 33.9689 7.14668 39.5976 13.8429 40.9594C20.8995 42.3968 27.5057 39.643 31.6195 33.4847C32.4003 32.3196 33.3912 31.4572 34.6524 30.8822C36.8294 29.8835 38.2707 28.2645 38.8563 25.8587C39.3668 23.7253 41.1384 22.2273 43.3004 22.076C44.6817 21.9852 46.063 21.9549 47.4443 22.0609C49.9967 22.2424 51.6032 23.6193 52.2488 26.1159C52.7893 28.1889 54.0054 29.7322 55.8822 30.625C57.5488 31.4118 58.87 32.5012 59.8309 34.0899C60.1011 34.559 60.4915 34.9524 60.8518 35.3609C67.0076 42.654 77.8327 43.4408 84.9343 37.0858C95.1289 27.977 91.9609 11.6205 79.1389 7.051L79.1539 7.02074ZM17.6415 37.0707C10.2095 37.0707 4.29401 31.1394 4.29401 23.7101C4.29401 16.3414 10.1945 10.3647 17.4613 10.3647C24.8782 10.3647 30.7487 16.296 30.7487 23.7707C30.7487 31.0789 24.8332 37.0707 17.6415 37.0707ZM45.8378 18.1268C42.5347 18.1268 39.9223 15.5697 39.9073 12.3317C39.9073 9.01801 42.4446 6.46089 45.7477 6.46089C48.9607 6.46089 51.5131 9.07854 51.4831 12.3317C51.4681 15.4789 48.8706 18.142 45.8228 18.1268H45.8378ZM73.5537 37.0707C66.2569 37.1312 60.3564 31.1697 60.3113 23.7253C60.2663 16.3262 66.1518 10.3949 73.5387 10.3647C80.8055 10.3344 86.736 16.296 86.766 23.6647C86.7961 31.0486 80.9256 37.0102 73.5537 37.0707Z"
                      fill="#DADADA"
                      className="hovericon"
                    ></path>
                    <path
                      d="M51.5585 54.8193C51.1532 52.0957 50.7628 49.357 50.3274 46.6335C50.1172 45.3322 49.7719 45.0447 48.4807 45.0447C47.6098 45.0447 46.739 45.0447 45.8682 45.0447C45.1175 45.0447 44.3668 45.0447 43.6161 45.0447C41.6793 45.0447 41.4541 45.2565 41.1688 47.2084C40.0728 54.5772 38.9618 61.9459 37.8507 69.3147C37.3853 72.4014 36.9349 75.4881 36.4845 78.5748C36.3794 79.3011 36.3493 79.9668 36.9799 80.5721C39.6224 83.1746 42.2348 85.8225 44.8623 88.4553C45.583 89.1816 46.0184 89.1664 46.754 88.4402C49.2764 85.9133 51.7687 83.3713 54.3211 80.8898C55.0568 80.1787 55.252 79.4675 55.0868 78.4689C53.8857 70.5857 52.7296 62.7025 51.5585 54.8193Z"
                      fill="#DADADA"
                    ></path>
                    <path
                      d="M42.084 42.4876C44.5463 42.5481 47.0086 42.5481 49.4709 42.4876C49.8763 42.4876 50.4469 42.0942 50.612 41.7311C51.2426 40.2936 51.7531 38.8108 52.2636 37.328C52.5939 36.3747 52.4437 36.1931 51.4678 36.1931C49.6061 36.1931 47.7443 36.1931 45.8826 36.1931C43.9308 36.1931 41.9789 36.1931 40.0271 36.1931C39.3065 36.1931 39.0212 36.4504 39.3065 37.2069C39.892 38.7351 40.4025 40.2785 41.0481 41.7765C41.1982 42.1245 41.7387 42.4876 42.1141 42.5027L42.084 42.4876Z"
                      fill="#DADADA"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_1897_15870">
                      <rect width="91" height="89" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="text-[1.25rem] text-mainGold font-medium leading-relaxed max-w-[90%]">
                Our vision is to revolutionize the real estate industry by
                providing unparalleled service and innovative solutions.
              </p>
            </div>
          </div>

          <div className="relative w-full lg:w-1/2 p-6 lg:p-8 group">
            <div className="absolute start-0 top-0 z-10 hidden lg:block opacity-70 group-hover:opacity-30 transition-opacity">
              <svg
                width="350"
                height="299"
                viewBox="0 0 350 299"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute start-0 top-0 onhovesvg z-10 hidden lg:block group-hover:[&_path]:fill-[#B89650]"
              >
                <mask
                  id="path-1-outside-1_1897_12614"
                  maskUnits="userSpaceOnUse"
                  x="-1"
                  y="-0.998535"
                  width="352"
                  height="301"
                  fill="black"
                >
                  <rect
                    fill="white"
                    x="-1"
                    y="-0.998535"
                    width="352"
                    height="301"
                  ></rect>
                  <path d="M349.696 0.0814466V299.001H266.592V134.065L210.2 299.001H140.664L83.848 132.793V299.001H0.744001V0.0814466H101.232L176.28 194.273L249.632 0.0814466H349.696Z"></path>
                </mask>
                <path
                  d="M349.696 0.0814466V299.001H266.592V134.065L210.2 299.001H140.664L83.848 132.793V299.001H0.744001V0.0814466H101.232L176.28 194.273L249.632 0.0814466H349.696Z"
                  fill="white"
                  className="hoversvgpath"
                ></path>
                <path
                  d="M349.696 0.0814514H350.696V-0.918549H349.696V0.0814514ZM349.696 299.001V300.001H350.696V299.001H349.696ZM266.592 299.001H265.592V300.001H266.592V299.001ZM266.592 134.065H267.592L265.646 133.742L266.592 134.065ZM210.2 299.001V300.001H210.915L211.146 299.325L210.2 299.001ZM140.664 299.001L139.718 299.325L139.949 300.001H140.664V299.001ZM83.848 132.793L84.7942 132.47L82.848 132.793H83.848ZM83.848 299.001V300.001H84.848V299.001H83.848ZM0.744001 299.001H-0.255999V300.001H0.744001V299.001ZM0.744001 0.0814514V-0.918549H-0.255999V0.0814514H0.744001ZM101.232 0.0814514L102.165 -0.279037L101.918 -0.918549H101.232V0.0814514ZM176.28 194.273L175.347 194.634L176.291 197.075L177.215 194.627L176.28 194.273ZM249.632 0.0814514V-0.918549H248.941L248.697 -0.271912L249.632 0.0814514ZM348.696 0.0814514V299.001H350.696V0.0814514H348.696ZM349.696 298.001H266.592V300.001H349.696V298.001ZM267.592 299.001V134.065H265.592V299.001H267.592ZM265.646 133.742L209.254 298.678L211.146 299.325L267.538 134.389L265.646 133.742ZM210.2 298.001H140.664V300.001H210.2V298.001ZM141.61 298.678L84.7942 132.47L82.9018 133.117L139.718 299.325L141.61 298.678ZM82.848 132.793V299.001H84.848V132.793H82.848ZM83.848 298.001H0.744001V300.001H83.848V298.001ZM1.744 299.001V0.0814514H-0.255999V299.001H1.744ZM0.744001 1.08145H101.232V-0.918549H0.744001V1.08145ZM100.299 0.441925L175.347 194.634L177.213 193.913L102.165 -0.279037L100.299 0.441925ZM177.215 194.627L250.568 0.434814L248.697 -0.271912L175.345 193.92L177.215 194.627ZM249.632 1.08145H349.696V-0.918549H249.632V1.08145Z"
                  fill="#D4D4D4"
                  mask="url(#path-1-outside-1_1897_12614)"
                ></path>
              </svg>{" "}
            </div>

            <div className="relative z-20 lg:ms-[11.3rem]">
              <div className="flex items-baseline gap-4 mb-6">
                <h3 className="text-[2.1875rem] font-bold text-slate-300 leading-normal">
                  Our Mission
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="84"
                  height="84"
                  viewBox="0 0 94 94"
                  fill="none"
                  className="group-hover:[&_path]:fill-[#B89650] [&_path]:transition-all [&_path]:duration-300"
                >
                  <path
                    d="M0 44.0632C0.23815 42.3426 0.407159 40.6065 0.729814 38.9012C3.28032 25.3585 10.2865 14.7655 21.8944 7.32205C29.8532 2.21377 38.6264 -0.167532 48.0832 0.00914525C52.4467 0.0936431 56.7181 0.808034 60.8895 2.11391C62.1648 2.51335 62.7717 3.44283 62.6487 4.66421C62.5412 5.73195 61.7192 6.59229 60.6129 6.69216C60.1751 6.73056 59.6988 6.62302 59.2686 6.50012C45.6018 2.67467 32.9338 4.7948 21.541 13.2446C12.6296 19.8585 7.20595 28.8075 5.33916 39.7462C3.14972 52.5668 6.2764 64.1123 14.5425 74.1291C21.1108 82.095 29.6151 86.9958 39.8171 88.6704C53.4377 90.9135 65.5757 87.4183 75.6702 78.0391C86.2793 68.1835 90.6045 55.8008 88.8913 41.3977C88.6224 39.1393 87.9925 36.9117 87.4547 34.6917C87.0706 33.1092 87.6237 31.8034 88.9528 31.427C90.3202 31.0429 91.5033 31.8034 91.9719 33.3704C100.054 60.2407 83.1757 87.9791 55.5503 93.2103C53.6989 93.5636 51.8091 93.7403 49.9346 94.0015H44.0577C43.858 93.9477 43.6582 93.8786 43.4508 93.8478C41.2767 93.5252 39.0796 93.3255 36.9363 92.8723C18.5296 89.0238 3.81808 73.6605 0.722131 55.0941C0.437888 53.3811 0.23815 51.6527 0 49.932C0 47.9732 0 46.0144 0 44.0556V44.0632Z"
                    fill="#DADADA"
                  ></path>
                  <path
                    d="M47.1612 79.8133C31.1821 79.6136 17.454 68.0066 14.8497 52.3515C11.9458 34.8604 23.2233 18.3142 40.5084 14.7346C43.274 14.1585 46.078 13.9741 48.9051 14.1431C49.9115 14.2046 50.7565 14.5502 51.2712 15.4643C51.7091 16.2402 51.7552 17.0391 51.2712 17.8149C50.7488 18.6522 49.9499 18.9595 48.9896 18.8673C44.603 18.4525 40.4008 19.2437 36.3523 20.9106C24.8981 25.6195 17.8304 37.5721 19.2286 49.8242C20.7036 62.7294 30.2526 72.6463 43.1588 74.6589C57.7627 76.9327 72.2284 66.647 74.7098 52.121C75.1016 49.8242 75.0939 47.4429 75.1092 45.1C75.1246 43.5944 75.8698 42.4422 77.268 42.3116C78.5893 42.181 79.8031 43.1336 79.7954 44.6161C79.7877 47.2663 79.9183 49.9932 79.3806 52.5589C76.4844 66.455 68.0723 75.2427 54.3134 78.784C51.9934 79.3831 49.5504 79.4753 47.1612 79.8056V79.8133Z"
                    fill="#DADADA"
                  ></path>
                  <path
                    d="M61.1969 25.0666C61.1969 23.8759 61.2123 22.6776 61.1969 21.4869C61.1816 20.5805 61.4735 19.8354 62.1265 19.1901C66.659 14.681 71.1762 10.1565 75.6933 5.63206C76.5076 4.81781 77.4218 4.46445 78.5127 4.90231C79.5882 5.34016 79.9493 6.23123 79.9416 7.33738C79.9262 9.32692 79.957 11.3165 79.9263 13.2983C79.9186 13.9052 80.126 14.0895 80.7175 14.0818C82.6765 14.0511 84.6355 14.0818 86.5944 14.0665C87.7314 14.0511 88.6686 14.3891 89.1142 15.5106C89.5521 16.6091 89.1834 17.5155 88.369 18.3298C83.8596 22.8235 79.3578 27.3173 74.8713 31.8264C74.203 32.5024 73.4424 32.8173 72.4975 32.8096C70.2313 32.7866 67.965 32.848 65.7064 32.7789C64.8229 32.7559 64.2391 33.0478 63.6399 33.6623C58.8769 38.4633 54.0908 43.2336 49.3125 48.0116C47.9143 49.4096 46.5469 49.5863 45.4867 48.5109C44.4266 47.4354 44.611 46.0912 46.0168 44.6854C50.8643 39.8383 55.7041 34.9912 60.567 30.1595C61.0433 29.6909 61.2507 29.2223 61.2277 28.554C61.1816 27.3941 61.2123 26.2265 61.2123 25.0666H61.1969Z"
                    fill="#DADADA"
                    className="hovericon"
                  ></path>
                  <path
                    d="M47.0918 65.5563C37.4276 65.5256 29.3382 58.1052 28.4931 48.4955C27.6481 38.855 34.3086 30.1133 43.7962 28.4311C44.7872 28.2544 45.7935 28.1545 46.7999 28.1161C48.3594 28.0547 49.4426 28.9995 49.4887 30.3745C49.5348 31.7342 48.5284 32.7558 46.9459 32.8019C44.9562 32.8634 43.074 33.2628 41.2687 34.0924C35.5531 36.7195 32.2267 42.9647 33.2792 49.0946C34.37 55.4473 39.448 60.2022 45.7859 60.8091C53.8906 61.5849 60.82 55.5318 61.1657 47.3509C61.2195 46.1679 61.4961 45.1539 62.6945 44.67C64.3078 44.0248 65.9133 45.2231 65.8826 47.082C65.7981 51.4145 64.4153 55.3014 61.6727 58.6659C58.0544 63.1059 52.7921 65.5717 47.0842 65.5563H47.0918Z"
                    fill="#DADADA"
                  ></path>
                </svg>{" "}
              </div>
              <p className="text-[1.25rem] text-mainGold font-medium leading-relaxed max-w-[90%]">
                Our mission is to empower our clients with the knowledge and
                tools they need to make informed real estate decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Explore />
    </div>
  );
};

export default AboutPage;
