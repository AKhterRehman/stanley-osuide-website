import React from "react";
import { motion } from "framer-motion";
import { siteData } from "@/data/content";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function About() {
  return (
    <section id="about" className="py-24 md:py-40 bg-secondary relative overflow-hidden">
      {/* Large watermark text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 w-full overflow-hidden flex justify-center">
        <span className="text-[20vw] font-serif font-bold text-white/[0.02] tracking-tighter leading-none whitespace-nowrap">
          STANLEY
        </span>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Silhouette/Portrait visual placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full aspect-[3/4] max-w-md mx-auto lg:mx-0"
          >
            {/* The structural frame */}
            <div className="absolute inset-0 border border-primary/20 rounded-t-full translate-x-4 translate-y-4" />
            
            {/* The main container */}
            <div className="absolute inset-0 bg-card rounded-t-full overflow-hidden flex flex-col justify-end items-center group">
              {/* Internal glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-primary/10" />
              
              {/* Silhouette representation */}
              <div className="w-3/4 h-[80%] bg-gradient-to-t from-background to-zinc-800 rounded-t-full opacity-80 shadow-[0_0_50px_rgba(201,162,39,0.1)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent opacity-50 mix-blend-overlay" />
              </div>
            </div>
            
            {/* Decorative label */}
            <div className="absolute -left-8 top-1/3 -rotate-90 origin-left text-[10px] tracking-[0.4em] text-primary uppercase">
              Global Presence
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="text-primary tracking-[0.2em] text-sm uppercase font-semibold">
                The Leader
              </span>
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-serif text-white leading-tight mb-8"
            >
              Building institutions and creating opportunities across the globe.
            </motion.h2>

            <div className="space-y-6 text-muted-foreground/90 text-lg leading-relaxed">
              {siteData.about.paragraphs.map((p, i) => (
                <motion.p key={i} variants={fadeInUp}>
                  {p}
                </motion.p>
              ))}
            </div>

            {/* Signature style */}
            <motion.div 
              variants={fadeInUp} 
              className="mt-12 pt-8 border-t border-white/10"
            >
              <div className="font-serif text-3xl md:text-4xl italic text-white/50">
                Stanley Osuide
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
