import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { siteData, speakingData } from "@/data/content";
import { fadeInUp, staggerContainer, clipReveal } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/section-header";
import { Play, Download, CheckCircle2, Clock, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Speaking() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-black">
      <Navbar />
      
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-background pt-24">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/8 rounded-full blur-[120px]" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[25vw] font-serif font-bold text-white/[0.02] leading-none tracking-tighter">SPEAKING</span>
        </div>
        <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
          <motion.span variants={fadeInUp} initial="hidden" animate="visible" className="text-primary tracking-[0.2em] text-sm uppercase font-semibold mb-4 block">
            The Voice
          </motion.span>
          <motion.h1 variants={clipReveal} initial="hidden" animate="visible" className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tighter leading-none mb-6">
            SPEAKING
          </motion.h1>
          <motion.p variants={fadeInUp} initial="hidden" animate="visible" className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Inspiring Leaders, Investors and Institutions Across the World
          </motion.p>
        </div>
      </section>

      {/* Signature Topics - Extended */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container mx-auto px-6 md:px-12">
          <SectionHeader title="Signature Topics" subtitle="What He Speaks About" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
            {speakingData.topicsExtended.map((topic) => (
              <motion.div
                key={topic.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-card border border-white/5 rounded-xl p-8 md:p-10 hover:border-primary/30 transition-all duration-500 group flex flex-col"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="text-4xl font-serif text-primary/30 group-hover:text-primary transition-colors">{topic.id}</span>
                  <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/70 flex items-center gap-2">
                    <BookOpen className="w-3 h-3" />
                    {topic.format}
                  </div>
                </div>
                <h3 className="text-2xl font-serif text-white mb-4">{topic.title}</h3>
                <p className="text-muted-foreground font-medium mb-4">{topic.description}</p>
                <p className="text-muted-foreground/70 text-sm leading-relaxed mb-8 hidden md:block">{topic.detail}</p>
                
                <div className="mt-auto grid grid-cols-2 gap-4 pt-6 border-t border-white/5">
                  <div>
                    <div className="text-xs text-white/40 uppercase tracking-wider mb-1 flex items-center gap-2"><Users className="w-3 h-3" /> Audience</div>
                    <div className="text-sm text-white/80">{topic.audience}</div>
                  </div>
                  <div>
                    <div className="text-xs text-white/40 uppercase tracking-wider mb-1 flex items-center gap-2"><Clock className="w-3 h-3" /> Duration</div>
                    <div className="text-sm text-white/80">{topic.duration}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events / Ideal Events */}
      <section className="py-24 bg-background relative">
        <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full w-1/2 h-1/2 left-1/4 top-1/4 pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <SectionHeader title="Where Stanley Speaks" subtitle="Event Types" />
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mt-12 max-w-4xl mx-auto"
          >
            {siteData.events.map((event, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="px-6 py-3 rounded-full border border-white/10 bg-card text-white/80 text-sm hover:border-primary/50 hover:text-primary transition-colors cursor-default"
              >
                {event}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Book Stanley */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <SectionHeader title="Why Book Stanley" subtitle="The Difference" />
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16"
          >
            {siteData.whyBook.map((reason, i) => (
              <motion.div key={i} variants={fadeInUp} className="flex items-start gap-4 p-6 bg-background rounded-xl border border-white/5">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                <span className="text-white/90 font-medium">{reason}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Speaker Reel */}
      <section className="py-32 bg-background relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Speaker Reel</h2>
            <p className="text-muted-foreground">{speakingData.speakerReel.description}</p>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-video w-full max-w-5xl mx-auto bg-card border border-white/10 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
            <div className="w-20 h-20 rounded-full bg-primary/20 border border-primary text-primary flex items-center justify-center z-20 group-hover:bg-primary group-hover:text-black group-hover:scale-110 transition-all duration-500">
              <Play className="w-8 h-8 ml-1" />
            </div>
            <div className="absolute bottom-10 z-20 text-center">
              <p className="text-white/60 text-sm tracking-widest uppercase mb-2">Watch Highlights</p>
              <p className="text-white text-xs">Reel available on request — contact us to view</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Download Profile Strip */}
      <section className="py-24 bg-primary text-black text-center px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Download Speaker Profile</h2>
          <p className="text-black/70 font-medium mb-10">{speakingData.downloadProfile.description}</p>
          <Button 
            variant="outline" 
            className="bg-transparent border-black text-black hover:bg-black hover:text-white px-8 py-6 rounded-none uppercase tracking-widest text-xs font-bold gap-3 transition-colors"
            onClick={() => window.alert("Speaker profile will be available for download shortly. Please contact us directly.")}
          >
            <Download className="w-4 h-4" />
            {speakingData.downloadProfile.label}
          </Button>
          <p className="mt-4 text-xs text-black/50 font-medium">{speakingData.downloadProfile.fileLabel}</p>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
