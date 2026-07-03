import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

export function Loader() {
  const [loading, setLoading] = useState(true);
  const name = "STANLEY OSUIDE";

  useEffect(() => {
    // Check if we've shown the loader in this session
    const hasSeenLoader = sessionStorage.getItem('hasSeenLoader');
    
    if (hasSeenLoader) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem('hasSeenLoader', 'true');
    }, 2500); // 2.5s display time

    return () => clearTimeout(timer);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    exit: { 
      opacity: 0, 
      transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number] } 
    }
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as const }
    }
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          exit="exit"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <motion.h1 
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-3xl md:text-5xl lg:text-7xl font-serif tracking-[0.2em] text-white flex gap-2 md:gap-4 overflow-hidden"
          >
            {name.split(" ").map((word, wordIndex) => (
              <span key={wordIndex} className="flex">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span key={`${wordIndex}-${letterIndex}`} variants={letterVariants}>
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-primary origin-left"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
