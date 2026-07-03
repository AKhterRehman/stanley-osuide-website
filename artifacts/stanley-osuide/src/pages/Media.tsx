import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { mediaData } from "@/data/content";
import { fadeInUp, clipReveal } from "@/lib/animations";
import { Camera, Play, Mic, Newspaper } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const galleryItems = [
  { id: 1, title: "Global Leadership Summit — London", category: "conference", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&q=80&auto=format&fit=crop" },
  { id: 2, title: "Africa Investment Forum — Lagos", category: "conference", image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&q=80&auto=format&fit=crop" },
  { id: 3, title: "BIILM Leadership Conference", category: "conference", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&q=80&auto=format&fit=crop" },
  { id: 4, title: "Executive Roundtable — Dubai", category: "corporate", image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&h=400&q=80&auto=format&fit=crop" },
  { id: 5, title: "Youth Leadership Workshop", category: "workshop", image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=600&h=400&q=80&auto=format&fit=crop" },
  { id: 6, title: "Diaspora Investor Summit", category: "conference", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&q=80&auto=format&fit=crop" },
  { id: 7, title: "Faith & Marketplace Conference", category: "faith", image: "https://images.unsplash.com/photo-1438032005730-c779502df39b?w=600&h=400&q=80&auto=format&fit=crop" },
  { id: 8, title: "Keynote — Abuja Leadership Forum", category: "conference", image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&q=80&auto=format&fit=crop" },
  { id: 9, title: "Panel — UK-Africa Investment Week", category: "corporate", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&q=80&auto=format&fit=crop" },
];

const videos = [
  { id: 1, title: "The Future of African Investment", youtubeId: "rBjft49MHPA", duration: "18 min" },
  { id: 2, title: "How Great Leaders Think Differently", youtubeId: "qp0HIF3SfI4", duration: "14 min" },
  { id: 3, title: "Africa — The New Frontier", youtubeId: "2VWxgHxOySo", duration: "22 min" },
  { id: 4, title: "Building Your Leadership Legacy", youtubeId: "VnPiVhVkm-4", duration: "16 min" },
];

export default function Media() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [playingId, setPlayingId] = useState<number | null>(null);
  
  const categories = ["all", "conference", "corporate", "workshop", "faith"];
  
  const filteredGallery = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category.toLowerCase() === activeCategory.toLowerCase());

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
          
          <div className="flex flex-wrap gap-3 mb-12 mt-12">
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest transition-all duration-300 ${activeCategory === cat ? "bg-primary text-black font-bold" : "border border-white/20 text-white/60 hover:border-primary/50 hover:text-white"}`}>
                {cat === "all" ? "All" : cat}
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
                  className="group relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer"
                >
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-xs text-primary uppercase tracking-widest">{item.category}</span>
                    <div className="text-white font-medium text-sm mt-1">{item.title}</div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Videos */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <SectionHeader title="Featured Talks" subtitle="Video" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {videos.map((video) => (
              <div key={video.id} className="group relative rounded-xl overflow-hidden aspect-video bg-card border border-white/10 hover:border-primary/30 transition-all duration-500">
                {playingId === video.id ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                    className="w-full h-full"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    title={video.title}
                  />
                ) : (
                  <>
                    <img src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`} alt={video.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                    <button onClick={() => setPlayingId(video.id)} className="absolute inset-0 flex items-center justify-center w-full h-full">
                      <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(201,162,39,0.4)]">
                        <Play className="w-6 h-6 text-black ml-1 fill-black" />
                      </div>
                    </button>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-white font-medium text-sm">{video.title}</div>
                      <div className="text-primary/70 text-xs mt-1">{video.duration}</div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audio & Press */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Podcasts */}
            <div>
              <SectionHeader title="Podcast Appearances" subtitle="Audio" />
              <div className="space-y-4 mt-12">
                {mediaData.podcasts.map((pod, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    key={pod.id} 
                    className="bg-card p-4 rounded-xl border border-white/5 flex items-center gap-4 group hover:border-primary/30 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors shrink-0">
                      <Mic className="w-5 h-5 text-white/50 group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm">{pod.title}</h4>
                      <p className="text-muted-foreground text-xs mt-1">{pod.episode}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Interviews */}
            <div>
              <SectionHeader title="Written Interviews" subtitle="Press" />
              <div className="space-y-6 mt-12">
                {mediaData.interviews.map((int, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
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
      <section className="py-24 bg-primary relative overflow-hidden">
        {/* Dark overlay pattern */}
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }} />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-12">
            <span className="text-xs tracking-[0.4em] uppercase text-black/60 font-sans font-semibold">AS SEEN IN</span>
          </div>
          
          {/* Animated marquee — two rows */}
          <div className="overflow-hidden">
            {/* Row 1: scrolls left */}
            <div className="flex gap-12 animate-[marquee_25s_linear_infinite] whitespace-nowrap mb-6">
              {[...mediaData.press, ...mediaData.press, ...mediaData.press].map((p, i) => (
                <span key={i} className="text-2xl md:text-4xl font-serif font-bold text-black/70 hover:text-black transition-colors cursor-default shrink-0">
                  {p.outlet}
                </span>
              ))}
            </div>
            {/* Row 2: scrolls right */}
            <div className="flex gap-12 animate-[marquee-reverse_30s_linear_infinite] whitespace-nowrap">
              {[...mediaData.press, ...mediaData.press, ...mediaData.press].map((p, i) => (
                <span key={i} className="text-xl md:text-3xl font-serif font-bold text-black/50 hover:text-black/80 transition-colors cursor-default shrink-0">
                  {p.outlet}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}