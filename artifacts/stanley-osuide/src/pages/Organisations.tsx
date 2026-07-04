import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { organisationsData } from "@/data/content";
import { fadeInUp, clipReveal } from "@/lib/animations";

const orgImages: Record<string, string> = {
  "africa-investment-gateway": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85",
  "john-chamberlain-sports": "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=900&q=85",
  "biilm": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=85",
  "leadership-impact": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=85",
};

export default function Organisations() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-black">
      <Navbar />
      
      {/* Hero */}
   {/* Hero */}
<section
  className="relative min-h-[58vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-20 md:pt-36 md:pb-24 bg-gradient-to-br from-white via-slate-50 to-blue-50/40"
>
  <div
    className="absolute inset-0 opacity-[0.28] pointer-events-none"
    style={{
      backgroundImage:
        'linear-gradient(120deg, rgba(255,255,255,0.94), rgba(248,250,252,0.88)), url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85")',
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />

  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,58,120,0.12)_0%,transparent_65%)] pointer-events-none" />

  <div
    className="absolute inset-0 opacity-[0.05] pointer-events-none"
    style={{
      backgroundImage:
        "radial-gradient(rgba(15,23,42,0.7) 1px, transparent 1px)",
      backgroundSize: "34px 34px",
    }}
  />

  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

  <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
    <span className="text-[15vw] sm:text-[13vw] lg:text-[11vw] font-serif font-black text-primary/[0.035] leading-none tracking-[-0.08em] whitespace-nowrap">
      ORGANISATIONS
    </span>
  </div>

  <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className="flex items-center justify-center gap-3 mb-6"
    >
      <div className="w-10 h-px bg-primary/30 rounded-full" />
      <span className="text-primary tracking-[0.28em] text-xs sm:text-sm uppercase font-bold">
        Impact in Action
      </span>
      <div className="w-10 h-px bg-primary/30 rounded-full" />
    </motion.div>

    <motion.h1
      variants={clipReveal}
      initial="hidden"
      animate="visible"
      className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-slate-950 tracking-[-0.06em] leading-[0.92] mb-6"
    >
      ORGANISATIONS
    </motion.h1>

    <motion.p
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed"
    >
      Four Ventures. One Vision. Transformational Impact.
    </motion.p>

    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ delay: 0.45, duration: 0.8, ease: "easeOut" }}
      className="h-px w-24 bg-primary/50 mx-auto mt-10 origin-center"
    />
  </div>
</section>

      {/* Orgs List */}
      {/* Orgs List */}
<div className="flex flex-col">
  {organisationsData.map((org, i) => (
    <section
      id={org.slug}
      key={org.slug}
      className={`relative scroll-mt-28 overflow-hidden py-20 md:py-28 ${
        i % 2 !== 0 ? "bg-slate-50" : "bg-white"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,120,0.07),transparent_45%)] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
            i % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* Visual */}
          <motion.div
            whileHover={{
              y: -8,
              scale: 1.015,
              transition: { duration: 0.22, ease: "easeOut" },
            }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[4/4.6] sm:aspect-square max-w-md mx-auto rounded-[2rem] overflow-hidden bg-white border border-slate-200 shadow-[0_30px_90px_rgba(15,23,42,0.14)] group">
              <img
                src={orgImages[org.slug]}
                alt={org.name}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="inline-flex rounded-2xl border border-white/25 bg-white/20 px-5 py-3 backdrop-blur-xl shadow-[0_14px_38px_rgba(0,0,0,0.20)]">
                  <span className="font-serif text-2xl tracking-widest text-white">
                    {org.shortName}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: i % 2 !== 0 ? -24 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
            className="relative lg:col-span-7"
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
              <span className="text-[38vw] sm:text-[30vw] lg:text-[16vw] font-serif font-black leading-none text-primary/[0.03] whitespace-nowrap">
                {org.shortName}
              </span>
            </div>

            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-primary mb-6 shadow-[0_8px_24px_rgba(30,58,120,0.08)]">
                {org.role}
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-slate-950 mb-4 leading-[0.95] tracking-[-0.04em]">
                {org.name}
              </h2>

              <p className="text-lg md:text-xl text-primary font-serif italic mb-8 leading-relaxed">
                {org.tagline}
              </p>

              <p className="text-slate-600 text-base md:text-lg leading-8 mb-10 max-w-2xl">
                {org.description}
              </p>

              <div className="mb-10 rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
                <h4 className="text-[11px] text-slate-500 uppercase tracking-[0.26em] font-bold mb-5">
                  What We Do
                </h4>

                <ul className="space-y-3">
                  {org.whatWeDo.map((item, idx) => (
                    <motion.li
                      key={idx}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="flex items-start gap-3 text-slate-700"
                    >
                      <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0 shadow-[0_0_0_4px_rgba(30,58,120,0.10)]" />
                      <span className="leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="mb-10 flex flex-wrap gap-2">
                {org.sectors.map((sector, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ y: -3, scale: 1.04 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="rounded-full border border-slate-200 bg-white/90 px-3.5 py-1.5 text-xs font-medium text-slate-600 shadow-[0_8px_22px_rgba(15,23,42,0.05)] hover:border-primary/25 hover:text-primary"
                  >
                    {sector}
                  </motion.span>
                ))}
              </div>

             {org.website && (
  <motion.a
    href={`https://${org.website}`}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{
      y: -4,
      scale: 1.02,
    }}
    whileTap={{ scale: 0.98 }}
    transition={{
      duration: 0.22,
      ease: "easeOut",
    }}
    className="
      inline-flex
      items-center
      justify-center
      gap-3
      rounded-full
      bg-primary
      px-8
      py-4
      shadow-[0_18px_45px_rgba(30,58,120,0.28)]
      hover:shadow-[0_28px_70px_rgba(30,58,120,0.38)]
      hover:bg-primary/95
      transition-all
      duration-300
      no-underline
      group
    "
  >
    <span className="font-bold uppercase tracking-[0.22em] text-sm !text-white">
      Visit Website
    </span>

    <svg
      className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12h14m-6-6 6 6-6 6"
      />
    </svg>
  </motion.a>
)}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  ))}
</div>

      <Footer />
    </div>
  );
}
