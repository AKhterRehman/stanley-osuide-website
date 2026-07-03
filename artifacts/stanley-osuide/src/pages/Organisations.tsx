import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { organisationsData } from "@/data/content";
import { fadeInUp, clipReveal } from "@/lib/animations";

export default function Organisations() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-black">
      <Navbar />
      
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-background pt-24">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[15vw] md:text-[20vw] font-serif font-bold text-white/[0.02] leading-none tracking-tighter whitespace-nowrap">VENTURES</span>
        </div>
        <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
          <motion.span variants={fadeInUp} initial="hidden" animate="visible" className="text-primary tracking-[0.2em] text-sm uppercase font-semibold mb-4 block">
            Impact in Action
          </motion.span>
          <motion.h1 variants={clipReveal} initial="hidden" animate="visible" className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tighter leading-none mb-6">
            ORGANISATIONS
          </motion.h1>
          <motion.p variants={fadeInUp} initial="hidden" animate="visible" className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Three Organisations. One Vision. Transformational Impact.
          </motion.p>
        </div>
      </section>

      {/* Orgs List */}
      <div className="flex flex-col">
        {organisationsData.map((org, i) => (
          <section key={org.slug} className={`py-24 md:py-32 relative ${i % 2 !== 0 ? 'bg-secondary' : 'bg-background'}`}>
            {/* Background watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-5">
              <span className="text-[30vw] font-serif font-black leading-none">{org.shortName}</span>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
              <div className={`flex flex-col lg:flex-row gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Visual placeholder */}
                <motion.div 
                  initial={{ opacity: 0, x: i % 2 !== 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="w-full lg:w-5/12 aspect-square max-w-md mx-auto bg-card border border-white/5 rounded-3xl flex items-center justify-center relative overflow-hidden group shadow-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-50" />
                  <span className="text-6xl md:text-8xl font-serif text-white group-hover:scale-110 transition-transform duration-700">{org.shortName}</span>
                </motion.div>

                {/* Content */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="w-full lg:w-7/12"
                >
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary border border-primary/20 text-xs font-semibold uppercase tracking-widest mb-6">
                    {org.role}
                  </div>
                  <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">{org.name}</h2>
                  <p className="text-xl text-primary font-serif italic mb-8">{org.tagline}</p>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-10">{org.description}</p>
                  
                  <div className="mb-10">
                    <h4 className="text-sm text-white/50 uppercase tracking-widest mb-4">What We Do</h4>
                    <ul className="space-y-3">
                      {org.whatWeDo.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span className="text-white/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-10">
                    <div className="flex flex-wrap gap-2">
                      {org.sectors.map((sector, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/60">
                          {sector}
                        </span>
                      ))}
                    </div>
                  </div>

                  {org.website && (
                    <a href={`https://${org.website}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:text-white transition-colors uppercase tracking-widest text-sm font-bold gap-2 group">
                      Visit Website
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  )}
                </motion.div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <Footer />
    </div>
  );
}
