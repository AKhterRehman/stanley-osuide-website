import React from "react";
import { motion } from "framer-motion";
import { siteData } from "@/data/content";
import { fadeInUp } from "@/lib/animations";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ArrowRight } from "lucide-react";
import { useLocation } from "wouter";

export function CTA() {
  const [, setLocation] = useLocation();

  return (
    <section className="py-28 md:py-32 relative overflow-hidden flex items-center justify-center text-center bg-accent text-accent-foreground">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsla(210,80%,72%,0.18)_0%,transparent_65%)] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.85) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-px bg-white/30 rounded-full" />
            <span className="text-accent-foreground/70 text-xs tracking-[0.3em] uppercase font-semibold">Get In Touch</span>
            <div className="w-10 h-px bg-white/30 rounded-full" />
          </div>

          <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight text-accent-foreground">
            Ready to Inspire
            <br />
            <span className="text-accent-foreground/75">Your Audience?</span>
          </h2>

          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium text-accent-foreground/70">
            Book Stanley Osuide for an international speaking engagement today.
          </p>

          <MagneticButton
            className="bg-white text-accent px-10 py-5 text-sm tracking-widest uppercase font-bold hover:bg-white/90 transition-all shadow-[0_16px_40px_rgba(0,0,0,0.22)] flex items-center gap-2 mx-auto group"
            onClick={() => setLocation("/book")}
          >
            Check Availability
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </MagneticButton>

          <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-6 text-sm font-medium text-accent-foreground/60">
            <a href={`mailto:${siteData.contact.email}`} className="transition-colors hover:text-accent-foreground">
              {siteData.contact.email}
            </a>
            <span className="hidden sm:inline text-accent-foreground/25">/</span>
            <a
              href={`tel:${siteData.contact.phone.replace(/[^0-9+]/g, "")}`}
              className="transition-colors hover:text-accent-foreground"
            >
              {siteData.contact.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
