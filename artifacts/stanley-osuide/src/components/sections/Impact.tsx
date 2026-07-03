import React from "react";
import { motion } from "framer-motion";
import { siteData } from "@/data/content";
import { CountUp } from "@/components/ui/count-up";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export function Impact() {
  return (
    <section id="impact" className="py-24 bg-background border-y border-white/5 relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          {siteData.about.stats.map((stat, i) => (
            <motion.div 
              key={i} 
              variants={fadeInUp}
              className="relative group p-6 md:p-8 flex flex-col items-center text-center justify-center border border-white/5 bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-500 rounded-lg overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="text-4xl md:text-6xl font-serif text-white mb-4 group-hover:scale-110 transition-transform duration-500 text-glow">
                {stat.value.includes('+') ? (
                  <CountUp 
                    end={parseInt(stat.value)} 
                    suffix="+" 
                    duration={2} 
                    delay={0.1 * i} 
                  />
                ) : (
                  <CountUp 
                    end={parseInt(stat.value)} 
                    duration={2} 
                    delay={0.1 * i} 
                  />
                )}
              </div>
              <div className="text-xs md:text-sm tracking-[0.2em] text-muted-foreground uppercase font-medium group-hover:text-primary transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
