import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { testimonialsData } from "@/data/content";
import { fadeInUp, clipReveal, staggerContainer } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/section-header";
import { CountUp } from "@/components/ui/count-up";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-black">
      <Navbar />
      
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-background pt-24">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[12vw] font-serif font-bold text-white/[0.02] leading-none tracking-tighter whitespace-nowrap">TESTIMONIALS</span>
        </div>
        <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
          <motion.span variants={fadeInUp} initial="hidden" animate="visible" className="text-primary tracking-[0.2em] text-sm uppercase font-semibold mb-4 block">
            Client Impact
          </motion.span>
          <motion.h1 variants={clipReveal} initial="hidden" animate="visible" className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tighter leading-none mb-6">
            TESTIMONIALS
          </motion.h1>
          <motion.p variants={fadeInUp} initial="hidden" animate="visible" className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Voices from the Rooms Where Stanley Speaks.
          </motion.p>
        </div>
      </section>

      {/* Highlight Stats */}
      <section className="py-16 bg-card border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {testimonialsData.highlights.map((stat, i) => {
              const numericValue = parseInt(stat.stat.replace(/\D/g, ''));
              const suffix = stat.stat.replace(/[0-9]/g, '');
              
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-serif text-primary mb-2">
                    <CountUp end={numericValue} suffix={suffix} duration={2} delay={0} />
                  </div>
                  <div className="text-xs uppercase tracking-widest text-white/50">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container mx-auto px-6 md:px-12">
          <SectionHeader title="What They Say" subtitle="Client Reviews" />
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
          >
            {testimonialsData.reviews.map((review, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className="bg-card border border-white/5 rounded-2xl p-8 md:p-10 relative group hover:border-primary/30 transition-colors flex flex-col h-full"
              >
                <Quote className="absolute top-8 right-8 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors" />
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg text-white/80 leading-relaxed mb-8 relative z-10 italic">
                  "{review.text}"
                </p>
                <div className="mt-auto">
                  <h4 className="text-white font-serif font-bold text-lg">{review.name}</h4>
                  <p className="text-primary text-sm">{review.title}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-6 md:px-12">
          <SectionHeader title="Event Highlights" subtitle="Success Stories" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16">
            {testimonialsData.successStories.map((story, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-8 border-t-2 border-t-primary border-x border-b border-white/5 rounded-b-xl"
              >
                <span className="inline-block px-3 py-1 bg-white/5 text-[10px] uppercase tracking-widest text-white/50 rounded mb-6">
                  {story.tag}
                </span>
                <h3 className="text-2xl font-serif text-white mb-4">{story.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{story.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners / Trusted By */}
      <section className="py-24 bg-secondary border-t border-white/5 text-center">
        <div className="container mx-auto px-6 md:px-12">
          <span className="text-sm uppercase tracking-[0.2em] text-white/40 mb-12 block">Trusted By</span>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 max-w-4xl mx-auto">
            {testimonialsData.partners.map((partner, i) => (
              <div key={i} className="text-xl md:text-2xl font-serif font-bold text-white/20 hover:text-white/60 transition-colors">
                {partner.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
