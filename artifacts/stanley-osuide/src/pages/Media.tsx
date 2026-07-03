import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { mediaData } from "@/data/content";
import { fadeInUp, clipReveal } from "@/lib/animations";
import { Camera, PlayCircle, Mic, Newspaper } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

export default function Media() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const categories = ["All", "Conference", "Corporate", "Workshop", "Faith"];
  
  const filteredGallery = activeCategory === "All" 
    ? mediaData.gallery 
    : mediaData.gallery.filter(item => item.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-black">
      <Navbar />
      
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-background pt-24">
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[25vw] font-serif font-bold text-white/[0.02] leading-none tracking-tighter">MEDIA</span>
        </div>
        <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
          <motion.span variants={fadeInUp} initial="hidden" animate="visible" className="text-primary tracking-[0.2em] text-sm uppercase font-semibold mb-4 block">
            Gallery & Press
          </motion.span>
          <motion.h1 variants={clipReveal} initial="hidden" animate="visible" className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tighter leading-none mb-6">
            MEDIA
          </motion.h1>
          <motion.p variants={fadeInUp} initial="hidden" animate="visible" className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            On Stage. On Air. In Print.
          </motion.p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 md:px-12">
          <SectionHeader title="Speaking Gallery" subtitle="On Stage" />
          
          <div className="flex flex-wrap justify-center gap-3 mb-12 mt-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full border text-sm transition-all duration-300 ${
                  activeCategory === cat 
                    ? "bg-primary border-primary text-black font-bold" 
                    : "bg-transparent border-white/10 text-white/70 hover:border-white/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredGallery.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  className="aspect-[4/3] bg-card border border-white/5 rounded-xl flex flex-col items-center justify-center relative overflow-hidden group"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-primary/20 group-hover:bg-primary transition-colors" />
                  <Camera className="w-10 h-10 text-white/10 mb-4 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-[10px] text-primary uppercase tracking-widest">{item.category}</span>
                    <h4 className="text-white font-serif text-lg mt-1">{item.title}</h4>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Videos */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 mb-12">
          <SectionHeader title="Video Highlights" subtitle="Watch" />
        </div>
        
        {/* Horizontal scroll container */}
        <div className="flex overflow-x-auto pb-12 px-6 md:px-12 gap-6 snap-x hide-scrollbar">
          {mediaData.videos.map((video, i) => (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={video.id}
              className="min-w-[300px] md:min-w-[400px] aspect-video bg-card border border-white/5 rounded-xl flex flex-col justify-end p-6 relative overflow-hidden group snap-center cursor-pointer"
            >
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <PlayCircle className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-white/20 group-hover:text-primary transition-colors duration-300" />
              
              <div className="relative z-10 mt-auto">
                <div className="flex gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-black/50 backdrop-blur text-[10px] text-white rounded">{video.duration}</span>
                  <span className="px-2 py-0.5 bg-[#FF0000]/20 text-[#FF0000] border border-[#FF0000]/30 text-[10px] rounded">{video.platform}</span>
                </div>
                <h4 className="text-white font-serif text-lg leading-tight group-hover:text-primary transition-colors">{video.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Podcasts & Interviews */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Podcasts */}
            <div>
              <div className="flex items-center gap-3 mb-10">
                <Mic className="text-primary w-6 h-6" />
                <h3 className="text-3xl font-serif text-white">Podcasts</h3>
              </div>
              <div className="space-y-4">
                {mediaData.podcasts.map((pod) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    key={pod.id} 
                    className="bg-background p-6 rounded-xl border border-white/5 flex items-center justify-between group hover:border-primary/30 transition-colors"
                  >
                    <div>
                      <p className="text-xs text-primary uppercase tracking-widest mb-1">{pod.platform}</p>
                      <h4 className="text-white font-medium mb-1">{pod.title}</h4>
                      <p className="text-white/50 text-sm">{pod.episode}</p>
                    </div>
                    <PlayCircle className="w-8 h-8 text-white/20 group-hover:text-primary transition-colors shrink-0 ml-4" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Interviews */}
            <div>
              <div className="flex items-center gap-3 mb-10">
                <Newspaper className="text-primary w-6 h-6" />
                <h3 className="text-3xl font-serif text-white">Interviews</h3>
              </div>
              <div className="space-y-4">
                {mediaData.interviews.map((int) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    key={int.id} 
                    className="bg-background p-6 rounded-xl border border-white/5 group hover:border-primary/30 transition-colors"
                  >
                    <p className="text-xs text-primary uppercase tracking-widest mb-2">{int.outlet}</p>
                    <h4 className="text-white font-serif text-xl mb-3">{int.title}</h4>
                    <span className="px-2 py-1 bg-white/5 text-[10px] text-white/50 rounded">{int.type}</span>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Press Marquee */}
      <section className="py-24 bg-primary text-black overflow-hidden flex flex-col items-center">
        <span className="text-xs uppercase tracking-[0.3em] font-bold mb-12">As Seen In</span>
        <div className="w-full flex overflow-hidden group">
          <div className="flex space-x-16 whitespace-nowrap animate-[marquee_20s_linear_infinite] px-8">
            {mediaData.press.map((item, i) => (
              <div key={i} className="text-2xl md:text-4xl font-serif font-black opacity-60 hover:opacity-100 transition-opacity">
                {item.outlet}
              </div>
            ))}
            {mediaData.press.map((item, i) => (
              <div key={`dup-${i}`} className="text-2xl md:text-4xl font-serif font-black opacity-60 hover:opacity-100 transition-opacity">
                {item.outlet}
              </div>
            ))}
            {mediaData.press.map((item, i) => (
              <div key={`dup2-${i}`} className="text-2xl md:text-4xl font-serif font-black opacity-60 hover:opacity-100 transition-opacity">
                {item.outlet}
              </div>
            ))}
            {mediaData.press.map((item, i) => (
              <div key={`dup3-${i}`} className="text-2xl md:text-4xl font-serif font-black opacity-60 hover:opacity-100 transition-opacity">
                {item.outlet}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
