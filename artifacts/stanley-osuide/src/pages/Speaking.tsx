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
  const [isPlayingReel, setIsPlayingReel] = React.useState(false);

  return (
    <div className="bg-background min-h-screen text-foreground">
      <Navbar />
      
      {/* Hero */}
      <section className="relative min-h-[58vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-20 md:pt-36 md:pb-24 bg-gradient-to-br from-white via-slate-50 to-blue-50/40">
        <div className="absolute inset-0 opacity-[0.28] pointer-events-none" style={{ backgroundImage: 'linear-gradient(120deg, rgba(255,255,255,0.94), rgba(248,250,252,0.88)), url("https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1800&q=85")', backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,58,120,0.12)_0%,transparent_65%)] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "radial-gradient(rgba(15,23,42,0.7) 1px, transparent 1px)", backgroundSize: "34px 34px" }} />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[14vw] sm:text-[12vw] lg:text-[10vw] font-serif font-black text-primary/[0.035] leading-none tracking-[-0.08em] whitespace-nowrap">SPEAKING</span>
        </div>
        <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-px bg-primary/30 rounded-full" />
            <span className="text-primary tracking-[0.28em] text-xs sm:text-sm uppercase font-bold">The Voice</span>
            <div className="w-10 h-px bg-primary/30 rounded-full" />
          </motion.div>
          <motion.h1 variants={clipReveal} initial="hidden" animate="visible" className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-slate-950 tracking-[-0.06em] leading-[0.92] mb-6">
            SPEAKING
          </motion.h1>
          <motion.p variants={fadeInUp} initial="hidden" animate="visible" className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Inspiring Leaders, Investors and Institutions Across the World
          </motion.p>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.45, duration: 0.8, ease: "easeOut" }} className="h-px w-24 bg-primary/50 mx-auto mt-10 origin-center" />
        </div>
      </section>

      {/* Signature Topics - Extended */}
      {/* Signature Topics */}
<section className="py-20 md:py-24 bg-secondary relative overflow-hidden">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsla(215,68%,28%,0.05),transparent_70%)] pointer-events-none" />

  <div className="container mx-auto px-6 md:px-12 relative z-10">
    <SectionHeader
      title="Signature Topics"
      subtitle="What He Speaks About"
    />

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 mt-12 md:mt-14"
    >
      {speakingData.topicsExtended.map((topic) => (
        <motion.div
          key={topic.id}
          variants={fadeInUp}
          whileHover={{
            y: -8,
            scale: 1.015,
            transition: {
              duration: 0.22,
              ease: "easeOut",
            },
          }}
          whileTap={{ scale: 0.99 }}
          className="group relative overflow-hidden rounded-3xl border border-border/70 bg-card p-6 sm:p-8 md:p-10 flex flex-col break-words transition-all duration-300 ease-out shadow-[0_10px_35px_rgba(15,23,42,0.04)] hover:border-primary/35 hover:shadow-[0_24px_60px_rgba(30,58,120,0.10)]"
        >
          {/* Premium Background Glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/[0.06] via-transparent to-transparent" />

          <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative z-10 flex flex-col h-full">
            {/* Header */}
            <div className="flex justify-between items-start mb-7">
              <span className="font-serif text-5xl md:text-6xl text-primary/20 group-hover:text-primary/70 group-hover:translate-x-1 transition-all duration-300">
                {topic.id}
              </span>

              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 backdrop-blur-md px-3 py-1.5 text-xs font-medium text-muted-foreground transition-all duration-300 group-hover:border-primary/25 group-hover:text-primary">
                <BookOpen className="w-3.5 h-3.5" />
                {topic.format}
              </div>
            </div>

            {/* Title */}
            <h3 className="font-serif text-[1.75rem] leading-tight text-foreground mb-4 transition-colors duration-300 group-hover:text-primary">
              {topic.title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground leading-7 mb-5 font-medium transition-colors duration-300 group-hover:text-foreground/80">
              {topic.description}
            </p>

            {/* Details */}
            <p className="hidden md:block text-sm leading-7 text-muted-foreground/70 mb-8 transition-colors duration-300 group-hover:text-muted-foreground">
              {topic.detail}
            </p>

            {/* Footer */}
            <div className="mt-auto pt-6 border-t border-border/70 group-hover:border-primary/20 transition-colors duration-300">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                    <Users className="w-3.5 h-3.5 text-primary" />
                    Audience
                  </div>

                  <p className="text-sm font-semibold text-foreground/80 leading-relaxed">
                    {topic.audience}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                    <Clock className="w-3.5 h-3.5 text-primary" />
                    Duration
                  </div>

                  <p className="text-sm font-semibold text-foreground/80 leading-relaxed">
                    {topic.duration}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
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
                className="px-6 py-3 rounded-full border border-border bg-card text-foreground/70 text-sm hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-colors cursor-default"
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
              <motion.div key={i} variants={fadeInUp} className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                <span className="text-foreground font-medium">{reason}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Speaker Reel */}
      <section className="py-32 bg-background relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">Speaker Reel</h2>
            <p className="text-muted-foreground">{speakingData.speakerReel.description}</p>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-video w-full max-w-5xl mx-auto bg-card border border-border rounded-2xl flex flex-col items-center justify-center relative overflow-hidden group shadow-[0_24px_80px_hsla(215,68%,28%,0.10)]"
          >
            {isPlayingReel ? (
              <iframe
                src="https://www.youtube.com/embed/qp0HIF3SfI4?autoplay=1"
                className="w-full h-full absolute inset-0 z-20 border-0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Stanley Osuide - Speaker Reel"
              />
            ) : (
              <>
                <img 
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80&auto=format&fit=crop" 
                  alt="Stanley Osuide Keynote" 
                  className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                <button 
                  onClick={() => setIsPlayingReel(true)}
                  className="w-20 h-20 rounded-full bg-primary hover:bg-primary/90 border-2 border-white/30 text-white flex items-center justify-center z-20 group-hover:scale-110 transition-all duration-500 shadow-[0_0_40px_hsla(215,68%,28%,0.35)]"
                >
                  <Play className="w-8 h-8 ml-1 text-white fill-white" />
                </button>
                <div className="absolute bottom-10 z-20 text-center pointer-events-none">
                  <p className="text-white/80 text-sm tracking-widest uppercase font-bold mb-2">Watch Keynote Highlights</p>
                  <p className="text-white text-xs font-semibold">Click to play speaker video (2 min)</p>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* Download Profile Strip */}
      {/* Download Profile CTA */}
<section className="relative overflow-hidden py-20 sm:py-24 md:py-32 flex items-center justify-center text-center bg-accent text-accent-foreground">
  {/* Background Glow */}
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsla(210,80%,72%,0.18)_0%,transparent_65%)] pointer-events-none" />

  {/* Premium Grid */}
  <div
    className="absolute inset-0 opacity-[0.06] pointer-events-none"
    style={{
      backgroundImage:
        "radial-gradient(rgba(255,255,255,0.85) 1px, transparent 1px)",
      backgroundSize: "32px 32px",
    }}
  />

  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    className="container mx-auto px-6 relative z-10"
  >
    {/* Small Heading */}
    <div className="flex items-center justify-center gap-3 mb-8">
      <div className="w-10 h-px bg-white/30 rounded-full" />

      <span className="text-accent-foreground/70 text-xs tracking-[0.3em] uppercase font-semibold">
        Speaker Profile
      </span>

      <div className="w-10 h-px bg-white/30 rounded-full" />
    </div>

    {/* Main Heading */}
    <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif leading-tight mb-6 md:mb-8 text-accent-foreground">
      Download Speaker
      <br />
      <span className="text-accent-foreground/75">
        Profile
      </span>
    </h2>

    {/* Description */}
    <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 md:mb-12 font-medium leading-relaxed text-accent-foreground/70">
      {speakingData.downloadProfile.description}
    </p>

    {/* Download Button */}
    <a
      href={`${import.meta.env.BASE_URL.replace(
        /\/$/,
        ""
      )}/Stanley-Osuide-Speaker-Profile.pdf`}
      download="Stanley-Osuide-Speaker-Profile.pdf"
      className="inline-flex"
    >
      <Button
        className="
          group
          w-full sm:w-auto
          bg-white
          text-accent
          px-8 sm:px-10
          py-6
          text-xs sm:text-sm
          tracking-[0.18em]
          uppercase
          font-bold
          rounded-lg
          transition-all
          duration-300
          hover:bg-white/95
          hover:-translate-y-1
          hover:scale-[1.02]
          shadow-[0_16px_40px_rgba(0,0,0,0.22)]
          hover:shadow-[0_24px_60px_rgba(255,255,255,0.16)]
          flex
          items-center
          justify-center
          gap-3
        "
      >
        <Download className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />

        {speakingData.downloadProfile.label}
      </Button>
    </a>

    {/* File Label */}
    <p className="mt-6 text-[11px] sm:text-xs font-semibold tracking-wide break-words text-accent-foreground/45">
      {speakingData.downloadProfile.fileLabel}
    </p>
  </motion.div>
</section>

      <Footer />
    </div>
  );
}
