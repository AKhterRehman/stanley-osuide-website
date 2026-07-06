import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { aboutData } from "@/data/content";
import { fadeInUp, staggerContainer, clipReveal, lineReveal } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/section-header";
import { Eye, Target } from "lucide-react";

export default function About() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-black">
      <Navbar />
      
      {/* Hero */}
      <section className="relative min-h-[58vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-20 md:pt-36 md:pb-24 bg-gradient-to-br from-white via-slate-50 to-blue-50/40">
        <div className="absolute inset-0 opacity-[0.28] pointer-events-none" style={{ backgroundImage: 'linear-gradient(120deg, rgba(255,255,255,0.94), rgba(248,250,252,0.88)), url("/images/client/stanley-client-06.jpeg")', backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,58,120,0.12)_0%,transparent_65%)] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "radial-gradient(rgba(15,23,42,0.7) 1px, transparent 1px)", backgroundSize: "34px 34px" }} />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[18vw] sm:text-[15vw] lg:text-[12vw] font-serif font-black text-primary/[0.035] leading-none tracking-[-0.08em] whitespace-nowrap">ABOUT</span>
        </div>
        <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-px bg-primary/30 rounded-full" />
            <span className="text-primary tracking-[0.28em] text-xs sm:text-sm uppercase font-bold">Stanley Osuide</span>
            <div className="w-10 h-px bg-primary/30 rounded-full" />
          </motion.div>
          <motion.h1 variants={clipReveal} initial="hidden" animate="visible" className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-slate-950 tracking-[-0.06em] leading-[0.92] mb-6">
            ABOUT
          </motion.h1>
          <motion.p variants={fadeInUp} initial="hidden" animate="visible" className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
            A Life Built on Leadership, Purpose and Legacy
          </motion.p>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.45, duration: 0.8, ease: "easeOut" }} className="h-px w-24 bg-primary/50 mx-auto mt-10 origin-center" />
        </div>
      </section>

      {/* Full Story */}
      <section className="py-24 md:py-32 bg-secondary relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-full aspect-[3/4] max-w-md mx-auto lg:mx-0 lg:sticky lg:top-32"
            >
              <div className="absolute inset-0 border border-primary/20 rounded-2xl translate-x-4 translate-y-4" />
              <div className="absolute inset-0 bg-card rounded-2xl overflow-hidden flex flex-col justify-end items-center group">
                <img 
                  src="/images/client/stanley-client-03.jpeg" 
                  alt="Stanley Osuide" 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </motion.div>
            
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              {aboutData.fullStory.map((para, i) => (
                <motion.p key={i} variants={lineReveal} className="text-muted-foreground text-lg leading-relaxed">
                  {para}
                </motion.p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
{/* Vision & Mission */}
<section className="py-20 md:py-24 bg-background relative overflow-hidden">
  <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
  <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-[140px] pointer-events-none" />

  <div className="container mx-auto px-6 md:px-12 relative z-10">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      {[
        {
          title: "Vision",
          text: aboutData.vision,
          icon: Eye,
        },
        {
          title: "Mission",
          text: aboutData.mission,
          icon: Target,
        },
      ].map((item) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            variants={fadeInUp}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="group relative overflow-hidden bg-card border border-border p-8 md:p-10 rounded-3xl shadow-[0_12px_40px_rgba(30,58,120,0.04)] hover:shadow-[0_24px_70px_rgba(30,58,120,0.10)] hover:border-primary/25 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center mb-7 group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                <Icon className="w-7 h-7 text-primary group-hover:text-white transition-all duration-500" />
              </div>

              <h3 className="text-xs tracking-[0.28em] text-primary uppercase font-bold mb-5">
                {item.title}
              </h3>

              <p className="font-serif text-[1.55rem] md:text-[1.9rem] lg:text-[2.1rem] text-foreground/90 leading-[1.25] tracking-[-0.02em]">
                {item.text}
              </p>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  </div>
</section>
    

      {/* Leadership Philosophy */}
     {/* Leadership Philosophy */}
<section className="py-20 md:py-24 bg-secondary">
  <div className="container mx-auto px-6 md:px-12">
    <SectionHeader title="Leadership Philosophy" subtitle="Core Principles" />

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14"
    >
      {aboutData.philosophy.map((item, i) => (
        <motion.div
          key={i}
          variants={fadeInUp}
          whileHover={{
            y: -8,
            scale: 1.02,
            transition: { duration: 0.22, ease: "easeOut" },
          }}
          whileTap={{ scale: 0.99 }}
          className="group relative overflow-hidden bg-card p-10 rounded-2xl border border-border/70 shadow-[0_8px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_22px_55px_rgba(30,58,120,0.10)] hover:border-primary/35 transition-all duration-300 ease-out cursor-default"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.07] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />

          <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-primary/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative z-10">
            <div className="text-primary font-serif text-5xl mb-6 opacity-30 group-hover:opacity-80 group-hover:translate-x-1 transition-all duration-300 ease-out">
              0{i + 1}
            </div>

            <h3 className="text-2xl font-serif text-foreground mb-4 group-hover:text-primary transition-colors duration-300 ease-out">
              {item.principle}
            </h3>

            <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/75 transition-colors duration-300">
              {item.description}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

      {/* Timeline */}
      <section className="py-24 md:py-40 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <SectionHeader title="The Journey" subtitle="Timeline" />
          <div className="relative mt-24 max-w-4xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-primary/20 -translate-x-1/2" />
            
            {aboutData.timeline.map((item, i) => (
              <motion.div 
                key={i} 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className={`relative flex flex-col md:flex-row items-start mb-16 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-1/2 shadow-[0_0_15px_hsla(215,68%,28%,0.35)] mt-1.5" />
                
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pl-16' : 'md:pr-16 md:text-right'}`}>
                  <div className="text-primary font-serif text-xl md:text-2xl mb-2">{item.year}</div>
                  <h3 className="text-foreground font-bold text-lg uppercase tracking-wide mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
