import React from "react";
import { motion } from "framer-motion";
import { siteData } from "@/data/content";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function About() {
  return (
    <section id="about" className="py-24 md:py-40 bg-secondary relative overflow-hidden">
      {/* Subtle watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 w-full overflow-hidden flex justify-center">
        <span className="text-[18vw] font-serif font-bold text-foreground/[0.025] tracking-tighter leading-none whitespace-nowrap">
          STANLEY
        </span>
      </div>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Styled portrait frame */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full aspect-[3/4] max-w-md mx-auto lg:mx-0"
          >
            {/* Offset decorative frame */}
            <div className="absolute inset-0 border-2 border-primary/15 rounded-t-[50%] translate-x-4 translate-y-4" />

            {/* Main container */}
            <div className="absolute inset-0 bg-card rounded-t-[50%] overflow-hidden flex flex-col justify-end items-center group shadow-[0_20px_60px_hsla(215,68%,28%,0.10)]">
              {/* Interior gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/15 via-transparent to-primary/5" />

              {/* Silhouette form */}
              <div className="w-3/4 h-[80%] bg-gradient-to-t from-muted to-secondary/80 rounded-t-[50%] shadow-inner relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent opacity-40" />
              </div>
            </div>

            {/* Decorative label */}
            <div className="absolute -left-8 top-1/3 -rotate-90 origin-left text-[10px] tracking-[0.4em] text-primary/60 uppercase font-semibold">
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
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-primary rounded-full" />
              <span className="text-primary tracking-[0.2em] text-sm uppercase font-semibold">
                The Leader
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-serif text-foreground leading-tight mb-8"
            >
              Building institutions and creating opportunities across the globe.
            </motion.h2>

            <div className="space-y-5 text-muted-foreground text-[1.05rem] leading-relaxed">
              {siteData.about.paragraphs.map((p, i) => (
                <motion.p key={i} variants={fadeInUp}>
                  {p}
                </motion.p>
              ))}
            </div>

            {/* Signature style */}
            <motion.div
              variants={fadeInUp}
              className="mt-12 pt-8 border-t border-border"
            >
              <div className="font-serif text-3xl md:text-4xl italic text-foreground/35">
                Stanley Osuide
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
