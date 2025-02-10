'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Explore from '../_components/shared/Explore';
import Heading from '../_components/shared/Heading';

const colors = {
  mainGold: '#D4AF37',  
  mainBlack: '#1A1A1A', 
};


const licenses = [
  {
    id: 'broker',
    title: 'Broker License',
    requirements: [
      'Must be at least 18 years old',
      'Complete 180 hours of approved pre-licensing courses',
      'Pass the state broker examination',
      'Have at least 3 years of active real estate sales experience',
      'Submit fingerprints for background check',
      'Provide proof of Errors and Omissions (E&O) insurance'
    ],
    description: 'A broker license allows you to operate your own real estate firm and hire other agents to work under you. This is the highest level of licensing available in real estate.',
    renewal: 'Every 2 years with 45 hours of continuing education'
  },
  {
    id: 'agent',
    title: 'Sales Agent License',
    requirements: [
      'Must be at least 18 years old',
      'Complete 90 hours of approved pre-licensing courses',
      'Pass the state sales agent examination',
      'Find a sponsoring broker',
      'Submit fingerprints for background check'
    ],
    description: 'A sales agent license allows you to represent buyers and sellers in real estate transactions under the supervision of a licensed broker.',
    renewal: 'Every 2 years with 22.5 hours of continuing education'
  },
  {
    id: 'property',
    title: 'Property Manager License',
    requirements: [
      'Must be at least 18 years old',
      'Complete 60 hours of approved property management courses',
      'Pass the property manager examination',
      'Provide proof of Errors and Omissions (E&O) insurance',
      'Submit fingerprints for background check'
    ],
    description: 'A property manager license allows you to manage residential and commercial properties on behalf of property owners.',
    renewal: 'Every 2 years with 30 hours of continuing education'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function LicensingPage() {
  const [selectedLicense, setSelectedLicense] = useState('broker');

  return (
    <>
      <Head>
        <title>Real Estate Licensing Requirements & Information | Your Brand</title>
        <meta 
          name="description" 
          content="Comprehensive guide to real estate licensing requirements, including broker, agent, and property manager licenses. Learn about requirements, renewals, and continuing education."
        />
        <meta 
          name="keywords" 
          content="real estate license, broker license, sales agent license, property manager license, real estate requirements, real estate education"
        />
        <meta property="og:title" content="Real Estate Licensing Requirements & Information" />
        <meta 
          property="og:description" 
          content="Complete guide to real estate licensing requirements and information for brokers, agents, and property managers."
        />
      </Head>

      <div className="min-h-screen bg-slate-300">
        <main className="py-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 container mx-auto px-4"
          >
            
            <Heading
          title="Real Estate Licensing Information"
          description="Learn about the different types of real estate licenses, requirements, and renewal processes"
          titleColor="text-mainGold"
          descriptionColor="text-mainBlack"
          className="mb-12"
          />
            
          </motion.div>

          {/* License Type Selection */}
          <div className="container mx-auto flex flex-wrap justify-center gap-4 mb-12 ">
            {licenses.map((license) => (
              <motion.button
                key={license.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedLicense(license.id)}
                className={`px-6 py-3 rounded-full text-base font-medium transition-all duration-200 ${
                  selectedLicense === license.id
                    ? 'bg-mainGold text-white'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-mainGold'
                }`}
                style={{
                  backgroundColor: selectedLicense === license.id ? colors.mainGold : 'white',
                }}
              >
                {license.title}
              </motion.button>
            ))}
          </div>

          {/* License Content */}
          <AnimatePresence mode="wait">
            {licenses.map((license) => (
              selectedLicense === license.id && (
                <motion.div
                  key={license.id}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={containerVariants}
                  className="container mx-auto px-4"
                >
                  <motion.div 
                    variants={itemVariants}
                    className="border border-mainGold rounded-2xl p-8 mb-8"
                  >
                    <h2 className="text-xl font-bold mb-6 text-mainBlack">
                      {license.title}
                    </h2>
                    <p className="text-gray-700 mb-8 text-base">
                      {license.description}
                    </p>
                  </motion.div>

                  <motion.div 
                    variants={itemVariants}
                    className="border border-mainGold rounded-2xl p-8 mb-8 text-mainBlack"
                  >
                    <h3 className="text-xl font-semibold mb-6">Requirements</h3>
                    <ul className="space-y-4">
                      {license.requirements.map((req, index) => (
                        <motion.li 
                          key={index}
                          variants={itemVariants}
                          className="flex items-start"
                        >
                          <span 
                            className="flex-shrink-0 w-6 h-6 rounded-full bg-mainGold/10 flex items-center justify-center mr-4 mt-1 text-mainBlack"
                            
                          >
                            •
                          </span>
                          <span className="text-gray-700">{req}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div 
                    variants={itemVariants}
                    className="border border-mainGold rounded-2xl p-8 text-mainBlack"
                  >
                    <h3 className="text-xl font-semibold mb-4">License Renewal</h3>
                    <p className="text-gray-700">{license.renewal}</p>
                  </motion.div>
                </motion.div>
              )
            ))}
          </AnimatePresence>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-16"
          >
            <Explore />
          </motion.div>
        </main>
      </div>
    </>
  );
}