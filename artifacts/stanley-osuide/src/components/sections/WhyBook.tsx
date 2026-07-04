import React from "react";
import { motion } from "framer-motion";
import { siteData } from "@/data/content";
import { staggerContainer, fadeInLeft, fadeInRight } from "@/lib/animations";
import { CheckCircle2 } from "lucide-react";

export function WhyBook() {
  return (
    <section className="py-24 md:py-40 bg-secondary relative overflow-hidden">
      {/* Accent line top */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInLeft}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-primary rounded-full" />
              <span className="text-primary tracking-[0.2em] text-sm uppercase font-semibold">
                The Value
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-tight mb-8">
              Why book{" "}
              <span className="text-primary italic">Stanley Osuide?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
              When Stanley speaks, audiences don't just listen — they shift. He brings a rare combination of boardroom acumen, international perspective, and deeply rooted values to every stage.
            </p>
          </motion.div>

          {/* Right: Reasons list */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            {siteData.whyBook.map((reason, i) => (
              <motion.div
                key={i}
                variants={fadeInRight}
                className="flex items-start gap-4 p-5 rounded-xl bg-card hover:shadow-[0_8px_30px_hsla(215,68%,28%,0.08)] border border-transparent hover:border-primary/15 transition-all duration-300"
              >
                <div className="mt-0.5 flex-shrink-0 text-primary">
                  <CheckCircle2 size={20} strokeWidth={2} />
                </div>
                <p className="text-foreground text-base leading-relaxed">{reason}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
