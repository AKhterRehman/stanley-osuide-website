import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { siteData } from "@/data/content";
import { clipReveal, staggerContainer, fadeInUp } from "@/lib/animations";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ChevronDown, Download } from "lucide-react";
import { AnimatedText } from "@/components/ui/animated-text";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section 
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-background pt-20"
      id="home"
    >
      {/* Background Elements */}
      <motion.div 
        style={{ y, opacity }} 
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] mix-blend-screen" />
        
        {/* Subtle grid texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{ 
            backgroundImage: `radial-gradient(#C9A227 1px, transparent 1px)`, 
            backgroundSize: '40px 40px' 
          }} 
        />
      </motion.div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="mb-6 inline-block">
            <span className="px-4 py-1.5 border border-primary/30 rounded-full text-xs md:text-sm tracking-[0.2em] text-primary uppercase bg-primary/5 backdrop-blur-sm">
              {siteData.hero.subheadline}
            </span>
          </motion.div>

          <motion.h1 
            variants={clipReveal}
            className="text-5xl md:text-7xl lg:text-9xl font-serif text-white tracking-tighter leading-[0.9] mb-8"
          >
            STANLEY<br/>OSUIDE
          </motion.h1>

          <div className="max-w-2xl mx-auto mb-12">
            <AnimatedText 
              text={siteData.hero.body} 
              className="text-lg md:text-xl text-muted-foreground leading-relaxed justify-center" 
            />
          </div>

          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <MagneticButton 
              className="bg-primary text-primary-foreground px-8 py-4 text-sm tracking-widest uppercase font-semibold hover:bg-primary/90 w-full sm:w-auto"
              onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
            >
              Book to Speak
            </MagneticButton>
            <MagneticButton 
              className="border border-white/20 text-white px-8 py-4 text-sm tracking-widest uppercase font-semibold hover:bg-white hover:text-black w-full sm:w-auto transition-colors group"
            >
              <Download className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform" />
              Speaker Profile
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center text-white/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] mb-2 rotate-90 origin-left translate-x-3 translate-y-8">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 mt-16" />
        </motion.div>
      </motion.div>
    </section>
  );
}
