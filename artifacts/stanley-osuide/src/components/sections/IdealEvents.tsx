import React from "react";
import { motion } from "framer-motion";
import { siteData } from "@/data/content";
import { SectionHeader } from "@/components/ui/section-header";
import { staggerContainer, scaleUp } from "@/lib/animations";

export function IdealEvents() {
  return (
    <section className="py-24 bg-secondary relative overflow-hidden border-y border-white/5">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeader 
          title="Where Stanley Speaks" 
          subtitle="Ideal Events" 
          align="center"
        />

        <motion.div 
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {siteData.events.map((event, i) => (
            <motion.div
              key={i}
              variants={scaleUp}
              className="px-6 py-3 rounded-full border border-white/10 bg-background hover:border-primary hover:bg-primary/10 transition-all duration-300 cursor-default text-sm md:text-base text-white/80 hover:text-white"
            >
              {event}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
