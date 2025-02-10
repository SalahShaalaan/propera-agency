import { motion } from 'framer-motion';

const SuccessToast = ({state}) => {
  const toastVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", duration: 0.6 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95, 
      y: 20,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div
    initial="hidden"
    animate="visible"
    exit="exit"
    variants={toastVariants}
    className="relative bg-gradient-to-br from-white to-mainGold/5 rounded-3xl shadow-2xl border border-mainGold/20 overflow-hidden w-[420px] backdrop-blur-sm"
  >
    {/* Progress bar */}
    <motion.div 
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 6, ease: "linear" }}
      className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-mainGold/80 to-mainGold/30 origin-left"
    />
    
    <div className="flex flex-col items-center p-6 gap-4">
      {/* Image container */}
      <div className="relative w-full h-48 bg-mainGold/5 rounded-2xl border border-mainGold/10 p-4 mb-4">
        <motion.img 
          src="/happy.svg"
          alt="Success"
          className="w-full h-full object-contain drop-shadow-lg"
          animate={{ 
            y: [0, -8, 0],
          }}
          transition={{ 
            y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        
        {/* Decorative elements */}
        <div className="absolute bottom-2 inset-x-0 flex justify-center gap-2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-mainGold/30 rounded-full"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="text-center space-y-4">
        {/* Success banner */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-mainGold/10 rounded-full">
          <span className="text-xs font-semibold text-mainGold tracking-widest uppercase">
            Listing Published
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 font-serif mb-2">
          Successfully Listed! 
          <motion.span
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="inline-block ml-2"
          >
            🏡
          </motion.span>
        </h3>

        {/* Message */}
        <p className="text-gray-600 text-lg leading-relaxed italic">
          {state?.message || "Your property is now visible to potential buyers. Good luck with your sale!"}
        </p>

        {/* Status row */}
        <div className="flex items-center justify-center gap-2 text-sm text-mainBlack mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span>Verified Listing</span>
        </div>
      </div>
    </div>
  </motion.div>

  );
};

export default SuccessToast;