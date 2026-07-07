import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { siteData } from "@/data/content";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ArrowRight, Download, Linkedin } from "lucide-react";
import { useLocation } from "wouter";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const [, setLocation] = useLocation();

  const handleBookClick = () => {
    setLocation("/book");
  };

  const pdfUrl = `${import.meta.env.BASE_URL.replace(/\/$/, '')}/Stanley-Osuide-Speaker-Profile.pdf`;
  const portraitUrl = `${import.meta.env.BASE_URL.replace(/\/$/, '')}/images/stanley-osuide.jpg`;
  const fallbackPortraitUrl = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=85";

  return (
    <section
      className="relative min-h-[100dvh] flex items-center overflow-hidden bg-background pt-20"
      id="home"
    >
      {/* Subtle background accent shapes */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Top-left soft blue wash */}
        <div className="absolute -top-20 -left-20 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, hsla(215,68%,28%,0.07) 0%, transparent 65%)" }}
        />
        {/* Bottom-right accent */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, hsla(215,68%,28%,0.05) 0%, transparent 65%)" }}
        />
        {/* Subtle grid dots */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(hsl(215 68% 28%) 1px, transparent 1px)`,
            backgroundSize: '44px 44px'
          }}
        />
      </motion.div>

      {/* ============ TWO-COLUMN TOOBA-STYLE LAYOUT ============ */}
      <div className="container relative z-10 mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100dvh-5rem)]">

          {/* ——— LEFT COLUMN: Content ——— */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col justify-center py-12 lg:py-20 order-2 lg:order-1"
          >
            {/* Eyebrow label — Tooba style with horizontal rule */}
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-7">
              <div className="w-10 h-[2px] bg-primary rounded-full" />
              <span className="text-primary text-xs tracking-[0.25em] uppercase font-semibold">
                {siteData.hero.subheadline}
              </span>
            </motion.div>

            {/* Name — large serif, left-aligned */}
            <motion.div variants={fadeInUp} className="overflow-hidden mb-4">
              <h1 className="font-serif text-[clamp(3.5rem,8vw,6.5rem)] leading-[0.88] tracking-tight text-foreground select-none">
                STANLEY
              </h1>
            </motion.div>
            <motion.div variants={fadeInUp} className="overflow-hidden mb-8">
              <h1 className="font-serif text-[clamp(3.5rem,8vw,6.5rem)] leading-[0.88] tracking-tight text-primary select-none">
                OSUIDE
              </h1>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground text-lg leading-relaxed max-w-[42ch] mb-10"
            >
              {siteData.hero.body}
            </motion.p>

            <motion.div variants={fadeInUp} className="mb-10 flex flex-wrap gap-3">
              {["Leadership", "Investment", "Legacy", "African Opportunity"].map((item) => (
                <span key={item} className="rounded-full border border-border bg-white/75 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground/65 shadow-sm">
                  {item}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              {/* Primary CTA */}
              <MagneticButton
                className="bg-primary text-primary-foreground px-8 py-4 text-sm tracking-widest uppercase font-semibold hover:bg-primary/90 transition-all shadow-[0_4px_20px_hsla(215,68%,28%,0.20)] flex items-center gap-2 group w-full sm:w-auto justify-center"
                onClick={handleBookClick}
              >
                Book to Speak
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </MagneticButton>

              {/* Secondary CTA */}
              <a
                href={pdfUrl}
                download="Stanley-Osuide-Speaker-Profile.pdf"
                className="w-full sm:w-auto block"
              >
                <MagneticButton
                  className="border-2 border-foreground/20 text-foreground px-8 py-4 text-sm tracking-widest uppercase font-semibold hover:border-primary hover:text-primary hover:bg-primary/5 w-full transition-all flex items-center gap-2 group justify-center"
                >
                  <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                  Speaker Profile
                </MagneticButton>
              </a>

              
            </motion.div>

            {/* Trust metrics strip */}
            <motion.div
              variants={fadeInUp}
              className="mt-12 pt-10 border-t border-border grid grid-cols-3 gap-4 max-w-xl"
            >
              {[
                { value: "50+", label: "Countries" },
                { value: "200+", label: "Events" },
                { value: "10K+", label: "Leaders Impacted" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col rounded-xl border border-border bg-white/65 p-4 shadow-sm">
                  <span className="font-serif text-2xl font-bold text-primary leading-none">{stat.value}</span>
                  <span className="text-muted-foreground text-xs tracking-wider uppercase mt-1">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ——— RIGHT COLUMN: Portrait Photo ——— */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end items-center py-10 lg:py-20"
          >
            {/* Decorative offset frame */}
            <div
              className="absolute bottom-8 right-4 lg:right-0 w-[88%] max-w-[420px] aspect-[3/4] border-2 border-primary/20 rounded-2xl"
              style={{ transform: "translate(18px, 18px)" }}
            />

            {/* Photo container */}
            <div className="relative w-[88%] max-w-[420px] aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_24px_80px_hsla(215,68%,28%,0.15)] bg-muted">
              <img
                src={portraitUrl}
                onError={(event) => {
                  event.currentTarget.src = fallbackPortraitUrl;
                }}
                alt="Stanley Osuide — International Speaker"
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover object-top"
              />

              {/* Subtle gradient overlay at bottom for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />

              {/* Floating badge bottom-left */}
              <div className="absolute bottom-6 left-6 bg-white/92 backdrop-blur-md rounded-xl px-4 py-3 shadow-lg border border-border/50">
                <p className="text-foreground font-semibold text-sm leading-tight">International Speaker</p>
                <p className="text-primary text-xs tracking-wide mt-0.5">& Leadership Voice</p>
              </div>
            </div>

            {/* Decorative vertical text */}
            <div className="absolute left-0 lg:-left-4 top-1/2 -translate-y-1/2 hidden xl:block">
              <span
                className="text-[10px] tracking-[0.4em] text-primary/50 uppercase font-semibold"
                style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }}
              >
                Global Presence · Leadership · Impact
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
