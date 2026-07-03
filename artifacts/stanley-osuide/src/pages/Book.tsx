import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { bookData, siteData } from "@/data/content";
import { fadeInUp, clipReveal } from "@/lib/animations";
import { Booking } from "@/components/sections/Booking";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { SectionHeader } from "@/components/ui/section-header";
import { Mail, Phone, MapPin } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";

export default function Book() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-black">
      <Navbar />
      
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-background pt-24">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[20vw] font-serif font-bold text-white/[0.02] leading-none tracking-tighter whitespace-nowrap">BOOKING</span>
        </div>
        <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
          <motion.span variants={fadeInUp} initial="hidden" animate="visible" className="text-primary tracking-[0.2em] text-sm uppercase font-semibold mb-4 block">
            Secure a Date
          </motion.span>
          <motion.h1 variants={clipReveal} initial="hidden" animate="visible" className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tighter leading-none mb-6">
            BOOK STANLEY
          </motion.h1>
          <motion.p variants={fadeInUp} initial="hidden" animate="visible" className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Bring a World-Class Speaker to Your Next Event.
          </motion.p>
        </div>
      </section>

      {/* The Booking Form Section */}
      <div id="booking-form" className="relative z-10">
        <Booking />
      </div>

      {/* Contact Info */}
      <section className="py-24 bg-background border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-white/5 p-8 rounded-xl flex flex-col items-center text-center hover:border-primary/30 transition-colors"
            >
              <Mail className="w-8 h-8 text-primary mb-4" />
              <h4 className="text-white font-medium mb-2">Email</h4>
              <a href={`mailto:${siteData.contact.email}`} className="text-muted-foreground hover:text-primary transition-colors text-sm">{siteData.contact.email}</a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-white/5 p-8 rounded-xl flex flex-col items-center text-center hover:border-primary/30 transition-colors"
            >
              <Phone className="w-8 h-8 text-primary mb-4" />
              <h4 className="text-white font-medium mb-2">Phone</h4>
              <a href={`tel:${siteData.contact.phone.replace(/[^0-9+]/g, '')}`} className="text-muted-foreground hover:text-primary transition-colors text-sm">{siteData.contact.phone}</a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-white/5 p-8 rounded-xl flex flex-col items-center text-center hover:border-primary/30 transition-colors"
            >
              <MapPin className="w-8 h-8 text-primary mb-4" />
              <h4 className="text-white font-medium mb-2">Location</h4>
              <span className="text-muted-foreground text-sm">London | Lagos | Global</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <SectionHeader title="Frequently Asked Questions" subtitle="Details" />
          
          <div className="mt-16">
            <Accordion type="single" collapsible className="w-full">
              {bookData.faq.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-white/10 data-[state=open]:border-primary transition-colors">
                  <AccordionTrigger className="text-left text-white hover:text-primary hover:no-underline font-serif text-lg py-6">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-primary relative overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjQzlBMjI3Ij48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+Cjwvc3ZnPg==')] opacity-20 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-4xl md:text-6xl font-serif text-black mb-10 leading-tight">
              Ready to Inspire Your Audience?
            </h2>
            <MagneticButton 
              className="bg-black text-white px-10 py-5 text-sm tracking-widest uppercase font-bold hover:bg-black/90 transition-all shadow-2xl"
              onClick={() => document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              Submit Enquiry
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
