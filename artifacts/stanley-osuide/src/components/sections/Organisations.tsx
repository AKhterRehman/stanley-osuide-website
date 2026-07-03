import React from "react";
import { motion } from "framer-motion";
import { siteData } from "@/data/content";
import { SectionHeader } from "@/components/ui/section-header";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export function Organisations() {
  return (
    <section id="organisations" className="py-24 md:py-40 bg-secondary relative">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ 
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`, 
          backgroundSize: '100px 100px' 
        }} 
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeader 
          title="Featured Organisations" 
          subtitle="Leadership in Action" 
        />

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {siteData.organisations.map((org, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="group relative h-full bg-background p-10 border border-white/10 flex flex-col hover:-translate-y-2 transition-transform duration-500"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-white/10 group-hover:bg-primary transition-colors duration-500" />
              
              {/* Abstract Logo Representation */}
              <div className="w-16 h-16 mb-8 border border-white/20 flex items-center justify-center font-serif text-2xl text-white group-hover:border-primary group-hover:text-primary transition-colors duration-500">
                {org.name.split(" ").map(w => w[0]).join("").substring(0, 2)}
              </div>
              
              <h3 className="text-xl font-serif text-white mb-2 leading-tight">
                {org.name}
              </h3>
              
              <div className="text-primary text-xs tracking-widest uppercase mb-6 font-semibold">
                {org.role}
              </div>
              
              <p className="text-muted-foreground text-sm leading-relaxed mt-auto">
                {org.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
