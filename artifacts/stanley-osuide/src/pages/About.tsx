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
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-background pt-24">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-[120px]" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[25vw] font-serif font-bold text-white/[0.02] leading-none tracking-tighter">ABOUT</span>
        </div>
        <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
          <motion.span variants={fadeInUp} initial="hidden" animate="visible" className="text-primary tracking-[0.2em] text-sm uppercase font-semibold mb-4 block">
            Stanley Osuide
          </motion.span>
          <motion.h1 variants={clipReveal} initial="hidden" animate="visible" className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tighter leading-none mb-6">
            ABOUT
          </motion.h1>
          <motion.p variants={fadeInUp} initial="hidden" animate="visible" className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A Life Built on Leadership, Purpose and Legacy
          </motion.p>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.5, duration: 1 }} className="h-[1px] w-24 bg-primary mx-auto mt-12 origin-left" />
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
              <div className="absolute inset-0 border border-primary/20 rounded-t-full translate-x-4 translate-y-4" />
              <div className="absolute inset-0 bg-card rounded-t-full overflow-hidden flex flex-col justify-end items-center group">
                <img 
                  src="/images/stanley-osuide.jpg" 
                  alt="Stanley Osuide" 
                  className="w-full h-full object-cover object-top rounded-t-full"
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
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-card border-t-2 border-t-primary border-x border-b border-white/5 p-12 rounded-b-xl flex flex-col items-start hover:border-primary/30 transition-colors">
              <Eye className="w-12 h-12 text-primary mb-8 opacity-80" />
              <h3 className="text-sm tracking-[0.3em] text-primary uppercase mb-6">Vision</h3>
              <p className="font-serif text-2xl md:text-3xl text-white leading-snug">{aboutData.vision}</p>
            </motion.div>
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-card border-t-2 border-t-primary border-x border-b border-white/5 p-12 rounded-b-xl flex flex-col items-start hover:border-primary/30 transition-colors">
              <Target className="w-12 h-12 text-primary mb-8 opacity-80" />
              <h3 className="text-sm tracking-[0.3em] text-primary uppercase mb-6">Mission</h3>
              <p className="font-serif text-2xl md:text-3xl text-white leading-snug">{aboutData.mission}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container mx-auto px-6 md:px-12">
          <SectionHeader title="Leadership Philosophy" subtitle="Core Principles" />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            {aboutData.philosophy.map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-card p-10 rounded-xl border border-white/5 hover:border-primary/30 transition-all duration-500">
                <div className="text-primary font-serif text-5xl mb-6 opacity-40">0{i + 1}</div>
                <h3 className="text-2xl font-serif text-white mb-4">{item.principle}</h3>
                <p className="text-muted-foreground">{item.description}</p>
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
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-1/2 shadow-[0_0_15px_rgba(201,162,39,0.5)] mt-1.5" />
                
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pl-16' : 'md:pr-16 md:text-right'}`}>
                  <div className="text-primary font-serif text-xl md:text-2xl mb-2">{item.year}</div>
                  <h3 className="text-white font-bold text-lg uppercase tracking-wide mb-3">{item.title}</h3>
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
