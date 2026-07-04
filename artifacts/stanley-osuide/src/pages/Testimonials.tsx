import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { testimonialsData } from "@/data/content";
import { fadeInUp, clipReveal, staggerContainer } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/section-header";
import { CountUp } from "@/components/ui/count-up";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reviews = testimonialsData.reviews;
  
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const handlePrev = () => {
    setActiveIndex(prev => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex(prev => (prev + 1) % reviews.length);
  };

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-black">
      <Navbar />
      
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-32 pb-20 premium-page-hero"
        style={{ backgroundImage: 'linear-gradient(120deg, hsl(210 22% 98% / 0.94), hsl(210 20% 95% / 0.84)), url("https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1800&q=85")' }}>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[12vw] font-serif font-bold text-foreground/[0.02] leading-none tracking-tighter whitespace-nowrap">TESTIMONIALS</span>
        </div>
        <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
          <motion.span variants={fadeInUp} initial="hidden" animate="visible" className="text-primary tracking-[0.2em] text-sm uppercase font-semibold mb-4 block">
            Client Impact
          </motion.span>
          <motion.h1 variants={clipReveal} initial="hidden" animate="visible" className="text-5xl md:text-7xl lg:text-8xl font-serif text-foreground tracking-tighter leading-none mb-6">
            TESTIMONIALS
          </motion.h1>
          <motion.p variants={fadeInUp} initial="hidden" animate="visible" className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Voices from the Rooms Where Stanley Speaks.
          </motion.p>
        </div>
      </section>

      {/* Highlight Stats */}
      <section className="py-16 bg-[#0a0a0a] w-full border-y border-white/5">
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

      {/* Reviews Carousel */}
      <section className="py-24 md:py-32 bg-secondary relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <SectionHeader title="What They Say" subtitle="Client Reviews" />
          
          <div className="relative mt-16 max-w-6xl mx-auto">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {reviews.map((review, i) => (
                  <div key={i} className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] p-4">
                    <div className="bg-card border border-white/5 rounded-2xl p-8 flex flex-col h-full group hover:border-primary/30 transition-all duration-500">
                      {/* Large gold quote mark */}
                      <div className="text-6xl font-serif text-primary/20 leading-none mb-4">"</div>
                      {/* Review text */}
                      <p className="text-white/80 leading-relaxed text-sm flex-1 italic">{review.text}</p>
                      {/* Stars */}
                      <div className="flex gap-1 my-4">{Array(5).fill(0).map((_, i) => <Star key={i} className="w-3 h-3 fill-primary text-primary" />)}</div>
                      {/* Event tag */}
                      <div className="text-xs text-primary/60 tracking-wider mb-4">{review.event}</div>
                      {/* Divider */}
                      <div className="h-px bg-white/5 mb-4" />
                      {/* Author */}
                      <div className="flex items-center gap-3">
                        {review.image && <img src={review.image} alt={review.name} className="w-10 h-10 rounded-full object-cover border border-white/10" />}
                        <div>
                          <div className="text-white font-medium text-sm">{review.name}</div>
                          <div className="text-muted-foreground text-xs">{review.title}</div>
                          <div className="text-primary/60 text-xs">{review.location}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="flex justify-center items-center gap-6 mt-12">
              <button 
                onClick={handlePrev} 
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary/50 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex gap-2">
                {reviews.map((_, i) => (
                  <button 
                    key={i} 
                    onClick={() => setActiveIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${activeIndex === i ? "w-8 bg-primary" : "w-2 bg-white/20"}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={handleNext} 
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary/50 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-6 md:px-12">
          <SectionHeader title="Event Highlights" subtitle="Success Stories" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
            {testimonialsData.successStories.map((story, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-8 border border-white/5 rounded-2xl hover:border-primary/30 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500" />
                <span className="inline-block px-3 py-1 bg-white/5 text-[10px] uppercase tracking-widest text-primary/80 border border-primary/20 rounded-full mb-6">
                  {story.tag}
                </span>
                <h3 className="text-2xl font-serif text-white mb-4 relative z-10">{story.title}</h3>
                <p className="text-muted-foreground leading-relaxed relative z-10">{story.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners / Trusted By */}
      <section className="py-24 bg-card border-t border-white/5 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="container mx-auto px-6 md:px-12 text-center">
          <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-primary/60 mb-12 block">TRUSTED BY</span>
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {testimonialsData.partners.map((partner, i) => (
              <motion.div 
                key={partner.name} 
                className="px-6 py-3 border border-white/10 rounded-full bg-white/[0.03] hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 cursor-default" 
                whileHover={{ y: -2 }}
              >
                <span className="text-white/60 hover:text-white/90 text-sm font-medium tracking-wide transition-colors">{partner.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
