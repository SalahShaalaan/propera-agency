"use client";
import Image from "next/image";
import { useState } from "react";
import Heading from "../shared/Heading";
const faqData = [
  {
    question: "How can I start using the platform?",
    answer:
      "Getting started is easy! Simply create an account, complete your profile, and you'll have immediate access to all our features and tools.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and bank transfers. Our payment system is secure and compliant with international standards.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes! We offer a 14-day free trial with full access to all premium features. No credit card required during the trial period.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "Our support team is available 24/7 through live chat, email, or phone. We typically respond within 2 hours during business hours.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-secondaryColor">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-8">
            <Heading
              title="Frequently Asked Questions"
              description="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
            />

            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="bg-roseColor rounded-xl shadow-sm overflow-hidden"
                >
                  <button
                    className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="text-lg font-medium text-secondaryColor">
                      {faq.question}
                    </span>
                    <span className="text-2xl text-secondaryColor">
                      {activeIndex === index ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    className={`px-6 transition-all duration-300 ease-in-out ${
                      activeIndex === index
                        ? "max-h-48 py-4 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-secondaryColor">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block sticky top-8">
            <Image
              src="/faq.svg"
              alt="FAQ Illustration"
              className="w-full h-auto rounded-xl object-cover"
              width={500}
              height={500}
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
