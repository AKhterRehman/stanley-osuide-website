import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { mediaData } from "@/data/content";
import { fadeInUp, clipReveal } from "@/lib/animations";
import { Camera, Play, Mic, Newspaper } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const galleryItems = [
  { id: 1, title: "Speaker Address", category: "conference", image: "/images/client/stanley-client-14.jpeg" },
  { id: 2, title: "Executive Keynote Room", category: "conference", image: "/images/client/stanley-client-06.jpeg" },
  { id: 3, title: "Leadership Panel Event", category: "corporate", image: "/images/client/stanley-client-17.jpeg" },
  { id: 4, title: "Workshop Facilitation", category: "workshop", image: "/images/client/stanley-client-18.jpeg" },
  { id: 5, title: "Boardroom Workshop", category: "workshop", image: "/images/client/stanley-client-09.jpeg" },
  { id: 6, title: "Faith Leadership Address", category: "faith", image: "/images/client/stanley-client-21.jpeg" },
  { id: 7, title: "Faith & Marketplace Gathering", category: "faith", image: "/images/client/stanley-client-13.jpeg" },
  { id: 8, title: "Corporate Networking", category: "corporate", image: "/images/client/stanley-client-05.jpeg" },
  { id: 9, title: "International Panel", category: "conference", image: "/images/client/stanley-client-04.jpeg" },
  { id: 10, title: "Training Session", category: "workshop", image: "/images/client/stanley-client-23.jpeg" },
  { id: 11, title: "Keynote Moment", category: "conference", image: "/images/client/stanley-client-16.jpeg" },
  { id: 12, title: "Leadership Conversation", category: "corporate", image: "/images/client/stanley-client-11.jpeg" },
];

const videos = [
  { id: 1, title: "The Future of African Investment", youtubeId: "rBjft49MHPA", duration: "18 min" },
  { id: 2, title: "How Great Leaders Think Differently", youtubeId: "qp0HIF3SfI4", duration: "14 min" },
  { id: 3, title: "Africa — The New Frontier", youtubeId: "2VWxgHxOySo", duration: "22 min" },
  { id: 4, title: "Building Your Leadership Legacy", youtubeId: "VnPiVhVkm-4", duration: "16 min" },
];

const tedxVideos = [
  { id: 1, title: "Start With Why: How Great Leaders Inspire Action", youtubeId: "u4ZoJKF_VuA", duration: "TEDx Talk", image: "https://img.youtube.com/vi/u4ZoJKF_VuA/hqdefault.jpg" },
  { id: 2, title: "Rethinking Startup Investment In Africa", youtubeId: "aeD0gZCWosw", duration: "TEDx Talk", image: "https://img.youtube.com/vi/aeD0gZCWosw/hqdefault.jpg" },
  { id: 3, title: "Using Entrepreneurship to Rewrite the Story of Africa", youtubeId: "FfunEvuuNDM", duration: "TEDx Talk", image: "https://img.youtube.com/vi/FfunEvuuNDM/hqdefault.jpg" },
  { id: 4, title: "What is Legacy to You?", youtubeId: "C2gC_R56nQs", duration: "TEDx Talk", image: "https://img.youtube.com/vi/C2gC_R56nQs/hqdefault.jpg" },
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
      <section className="relative min-h-[58vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-20 md:pt-36 md:pb-24 bg-gradient-to-br from-white via-slate-50 to-blue-50/40">
        <div className="absolute inset-0 opacity-[0.28] pointer-events-none" style={{ backgroundImage: 'linear-gradient(120deg, rgba(255,255,255,0.94), rgba(248,250,252,0.88)), url("/images/client/stanley-client-17.jpeg")', backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,58,120,0.12)_0%,transparent_65%)] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "radial-gradient(rgba(15,23,42,0.7) 1px, transparent 1px)", backgroundSize: "34px 34px" }} />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[18vw] sm:text-[15vw] lg:text-[12vw] font-serif font-black text-primary/[0.035] leading-none tracking-[-0.08em] whitespace-nowrap">MEDIA</span>
        </div>
        <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-px bg-primary/30 rounded-full" />
            <span className="text-primary tracking-[0.28em] text-xs sm:text-sm uppercase font-bold">Gallery & Press</span>
            <div className="w-10 h-px bg-primary/30 rounded-full" />
          </motion.div>
          <motion.h1 variants={clipReveal} initial="hidden" animate="visible" className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-slate-950 tracking-[-0.06em] leading-[0.92] mb-6">
            MEDIA
          </motion.h1>
          <motion.p variants={fadeInUp} initial="hidden" animate="visible" className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
            On Stage. On Air. In Print.
          </motion.p>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.45, duration: 0.8, ease: "easeOut" }} className="h-px w-24 bg-primary/50 mx-auto mt-10 origin-center" />
        </div>
      </section>

      {/* Gallery */}
      <section className="relative overflow-hidden bg-slate-50 py-20 md:py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="absolute inset-0 pointer-events-none opacity-70" style={{ backgroundImage: "radial-gradient(rgba(30,58,120,0.08) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="absolute -right-24 top-16 h-72 w-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <div className="h-px w-10 bg-primary/40" />
              <span className="text-primary tracking-[0.28em] text-xs uppercase font-bold">On Stage</span>
              <div className="h-px w-10 bg-primary/40" />
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-slate-950 tracking-[-0.05em] leading-none">
              Speaking Gallery
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-600">
              Moments from keynotes, workshops, corporate rooms, and faith-based leadership gatherings.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-2.5 rounded-2xl border border-slate-200 bg-white/80 p-2 shadow-[0_18px_55px_rgba(15,23,42,0.07)] backdrop-blur-xl sm:mx-auto sm:w-fit">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-xl px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-[0_12px_30px_rgba(30,58,120,0.25)]"
                    : "text-slate-500 hover:bg-slate-100 hover:text-slate-950"
                }`}
              >
                {cat === "all" ? "All" : cat}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-12"
            >
              {filteredGallery.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.35, delay: Math.min(index * 0.035, 0.22), ease: "easeOut" }}
                  className={`group relative overflow-hidden rounded-2xl border border-white bg-white shadow-[0_18px_50px_rgba(15,23,42,0.10)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(30,58,120,0.16)] ${
                    index === 0 ? "lg:col-span-6 lg:row-span-2" : "sm:min-h-0 lg:col-span-3"
                  }`}
                >
                  <div className={`relative overflow-hidden ${index === 0 ? "aspect-[16/13] lg:aspect-auto lg:h-full" : "aspect-[4/3]"}`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      loading={index < 3 ? "eager" : "lazy"}
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent opacity-90" />
                    <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-primary shadow-sm backdrop-blur">
                      {item.category}
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                      <h3 className={`${index === 0 ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"} font-serif leading-tight text-white`}>
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Videos */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <SectionHeader title="Featured Talks" subtitle="Video" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {tedxVideos.map((video) => (
              <div key={video.id} className="group relative rounded-xl overflow-hidden aspect-video bg-card border border-border hover:border-primary/30 transition-all duration-500">
                {playingId === video.id ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    title={video.title}
                  />
                ) : (
                  <>
                    <img src={video.image} alt={video.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                    <button onClick={() => setPlayingId(video.id)} className="absolute inset-0 flex items-center justify-center w-full h-full">
                      <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(201,162,39,0.4)]">
                        <Play className="w-6 h-6 text-primary-foreground ml-1 fill-primary-foreground" />
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
<section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-br from-slate-50 via-white to-blue-50/40">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(30,58,120,0.07),transparent_42%)] pointer-events-none" />
  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

  <div className="container mx-auto px-6 md:px-12 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
      {/* Podcasts */}
      <motion.div
        initial={{ opacity: 0, x: -28 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <SectionHeader title="Podcast Appearances" subtitle="Audio" />

        <div className="space-y-4 mt-10 md:mt-12">
          {mediaData.podcasts.map((pod, i) => (
            <motion.div
              key={pod.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.35, ease: "easeOut", delay: i * 0.04 }}
              whileHover={{
                y: -5,
                scale: 1.015,
                transition: { duration: 0.18, ease: "easeOut" },
              }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/85 backdrop-blur-xl p-4 sm:p-5 flex items-center gap-4 shadow-[0_12px_35px_rgba(15,23,42,0.06)] hover:border-primary/30 hover:shadow-[0_22px_55px_rgba(30,58,120,0.12)] transition-all duration-300"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/[0.06] via-transparent to-transparent transition-opacity duration-300" />

              <div className="relative z-10 w-12 h-12 rounded-xl bg-primary/8 border border-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300 shrink-0">
                <Mic className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
              </div>

              <div className="relative z-10 min-w-0">
                <h4 className="text-slate-950 font-serif text-base sm:text-lg leading-snug group-hover:text-primary transition-colors duration-300">
                  {pod.title}
                </h4>
                <p className="text-slate-500 text-xs sm:text-sm mt-1 leading-relaxed">
                  {pod.episode}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Interviews */}
      <motion.div
        initial={{ opacity: 0, x: 28 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <SectionHeader title="Written Interviews" subtitle="Press" />

        <div className="space-y-5 mt-10 md:mt-12">
          {mediaData.interviews.map((int, i) => (
            <motion.div
              key={int.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.35, ease: "easeOut", delay: i * 0.04 }}
              whileHover={{
                y: -6,
                scale: 1.015,
                transition: { duration: 0.18, ease: "easeOut" },
              }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/85 backdrop-blur-xl p-6 sm:p-7 shadow-[0_12px_35px_rgba(15,23,42,0.06)] hover:border-primary/30 hover:shadow-[0_24px_60px_rgba(30,58,120,0.12)] transition-all duration-300"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/[0.06] via-transparent to-transparent transition-opacity duration-300" />

              <div className="relative z-10">
                <p className="text-[11px] text-primary uppercase tracking-[0.24em] font-bold mb-3">
                  {int.outlet}
                </p>

                <h4 className="text-slate-950 font-serif text-xl sm:text-2xl leading-snug mb-4 group-hover:text-primary transition-colors duration-300">
                  {int.title}
                </h4>

                <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-slate-500 group-hover:border-primary/20 group-hover:text-primary transition-all duration-300">
                  {int.type}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
</section>

      <Footer />
    </div>
  );
}
