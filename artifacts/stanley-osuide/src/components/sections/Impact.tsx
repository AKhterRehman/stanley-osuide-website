import React from "react";
import { motion } from "framer-motion";
import { siteData } from "@/data/content";
import { CountUp } from "@/components/ui/count-up";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export function Impact() {
  return (
    <section id="impact" className="py-20 bg-background border-y border-border relative z-20">
      {/* Subtle top accent */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/15 to-transparent" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {siteData.about.stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="relative group p-6 md:p-8 flex flex-col items-center text-center justify-center border border-border bg-card hover:border-primary/40 hover:shadow-[0_12px_40px_hsla(215,68%,28%,0.10)] transition-all duration-500 rounded-xl overflow-hidden"
            >
              {/* Hover tint */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

              <div className="text-4xl md:text-6xl font-serif text-primary mb-4 group-hover:scale-110 transition-transform duration-500">
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
              <div className="text-xs md:text-sm tracking-[0.2em] text-muted-foreground uppercase font-medium group-hover:text-primary transition-colors relative z-10">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
