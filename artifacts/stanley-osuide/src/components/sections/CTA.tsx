import React from "react";
import { motion } from "framer-motion";
import { siteData } from "@/data/content";
import { fadeInUp } from "@/lib/animations";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function CTA() {
  return (
    <section className="py-32 bg-primary relative overflow-hidden flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjQzlBMjI3Ij48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+Cjwvc3ZnPg==')] opacity-20 pointer-events-none" />
      
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-5xl md:text-7xl font-serif text-black mb-8 leading-tight">
            Ready to Inspire <br/> Your Audience?
          </h2>
          
          <p className="text-black/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium">
            "Book Stanley Osuide for an international speaking engagement today."
          </p>
          
          <MagneticButton 
            className="bg-black text-white px-10 py-5 text-sm tracking-widest uppercase font-bold hover:bg-black/90 transition-all shadow-2xl hover:shadow-[0_0_30px_rgba(0,0,0,0.3)]"
            onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
          >
            Check Availability
          </MagneticButton>
          
          <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-6 text-black/60 text-sm font-medium">
            <a href={`mailto:${siteData.contact.email}`} className="hover:text-black transition-colors">{siteData.contact.email}</a>
            <span className="hidden sm:inline">•</span>
            <a href={`tel:${siteData.contact.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-black transition-colors">{siteData.contact.phone}</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
