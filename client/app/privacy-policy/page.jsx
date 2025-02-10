'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const colors = {
  mainGold: '#D4AF37',
  mainBlack: '#1A1A1A',
};

const sections = [
  {
    title: 'Terms of Use',
    id: 'terms',
    content: `Our Terms of Use establish the rules and regulations for using our services. By accessing this website, you accept these terms and conditions in full. Do not continue to use our website if you do not accept all of the terms and conditions stated on this page.

    The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company.

    License
    Unless otherwise stated, we own the intellectual property rights for all material on our website. All intellectual property rights are reserved. You may access this from our website for your own personal use subjected to restrictions set in these terms and conditions.`
  },
  {
    title: 'Privacy Policy',
    id: 'privacy',
    content: `Your privacy is important to us. It is our policy to respect your privacy regarding any information we may collect while operating our website. We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.

    We don't share any personally identifying information publicly or with third-parties, except when required to by law. Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites.

    How we use your information:
    • To provide and maintain our Service
    • To notify you about changes to our Service
    • To provide customer support
    • To gather analysis or valuable information so that we can improve our Service
    • To monitor the usage of our Service`
  },
  {
    title: 'Customer Conduct',
    id: 'conduct',
    content: `We expect all users to interact with our services and each other with respect and integrity. Users must refrain from any behavior that could harm, harass, or disadvantage others. This includes but is not limited to:

    • Posting inappropriate, inaccurate, or objectionable content
    • Attempting to circumvent any security features
    • Engaging in any activity that interferes with or disrupts services
    • Impersonating any person or entity, or falsely stating or misrepresenting your affiliation
    
    We reserve the right to terminate or suspend access to our services for violations of these conduct guidelines.`
  },
  {
    title: 'General Terms',
    id: 'general',
    content: `These General Terms govern your use of our services and form a binding contractual relationship between you and us. By using our services, you agree to these terms in their entirety.

    Modifications to Service
    We reserve the right to withdraw or amend our service, and any service or material we provide, in our sole discretion without notice. We will not be liable if for any reason all or any part of the service is unavailable at any time or for any period.

    Governing Law
    These terms and conditions are governed by and construed in accordance with applicable laws, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.`
  },
  {
    title: 'Services & Account',
    id: 'services',
    content: `Our services are provided "as is" without any warranty or condition, express, implied or statutory. We do not guarantee that our services will be uninterrupted, timely, secure, or error-free.

    Account Responsibilities
    You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password. You agree not to disclose your password to any third party.

    Service Updates
    We are constantly updating our services and that means sometimes we have to change the legal terms under which our services are offered. If we make changes that are material, we will let you know by posting on our website or by sending you an email before the changes take effect.`
  }
];

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState('privacy');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation - Now at top for mobile, sidebar for desktop */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="md:w-72 w-full bg-white border-b md:border-l md:border-b-0 border-gray-200 p-4 md:p-6  top-0 z-10 md:h-screen md:float-left"
      >
        <div className="md:sticky md:top-6">
          <ul className="flex md:flex-col gap-2 overflow-x-auto pb-2 md:pb-0">
            {sections.map((section) => (
              <motion.li 
                key={section.id}
                whileTap={{ scale: 0.98 }}
                className="flex-shrink-0 md:flex-shrink"
              >
                <button
                  onClick={() => setActiveSection(section.id)}
                  className={`text-left px-4 py-3 rounded-lg transition-all duration-200 text-sm md:text-base
                    ${activeSection === section.id 
                      ? 'bg-[#D4AF3726] text-mainGold border border-mainGold' 
                      : 'bg-transparent text-mainBlack border border-transparent'}
                  `}
                >
                  {section.title}
                </button>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="md:ml-72 p-4 md:p-8 lg:p-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-mainGold">
            Privacy & Legal Information
          </h1>
          
          <AnimatePresence mode="wait">
            {sections.map((section) => (
              activeSection === section.id && (
                <motion.section
                  key={section.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="mb-8"
                >
                  <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-mainGold">
                    {section.title}
                  </h2>
                  <div className="space-y-4 text-gray-700 text-sm md:text-base">
                    {section.content.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className="leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.section>
              )
            ))}
          </AnimatePresence>
        </motion.div>
      </main>
    </div>
  );
}