import React from "react";
import { motion } from "framer-motion";
import { siteData } from "@/data/content";
import { staggerContainer, fadeInLeft, fadeInRight } from "@/lib/animations";
import { Check } from "lucide-react";

export function WhyBook() {
  return (
    <section className="py-24 md:py-40 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInLeft}
          >
            <span className="text-primary tracking-[0.2em] text-sm uppercase font-semibold mb-4 block">
              The Value
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight mb-8">
              Why book <br/> <span className="text-primary italic">Stanley Osuide?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
              When Stanley speaks, audiences don't just listen—they shift. He brings a rare combination of boardroom acumen, international perspective, and deeply rooted values to every stage.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            {siteData.whyBook.map((reason, i) => (
              <motion.div 
                key={i}
                variants={fadeInRight}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-card/50 transition-colors border border-transparent hover:border-white/5"
              >
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <Check size={14} strokeWidth={3} />
                </div>
                <p className="text-white text-lg">{reason}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
