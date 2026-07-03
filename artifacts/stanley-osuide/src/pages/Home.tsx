import React from "react";
import { Loader } from "@/components/sections/Loader";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Impact } from "@/components/sections/Impact";
import { Organisations } from "@/components/sections/Organisations";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { siteData } from "@/data/content";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

function AboutTeaser() {
  return (
    <section className="py-24 md:py-32 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full aspect-[4/5] max-w-md mx-auto lg:mx-0"
          >
            <div className="absolute inset-0 border border-primary/20 rounded-t-full translate-x-4 translate-y-4" />
            <div className="absolute inset-0 bg-card rounded-t-full overflow-hidden flex flex-col justify-end items-center group">
              <img 
                src="/images/stanley-osuide.jpg" 
                alt="Stanley Osuide" 
                className="w-full h-full object-cover object-top rounded-t-full"
              />
            </div>
            <div className="absolute -left-8 top-1/3 -rotate-90 origin-left text-[10px] tracking-[0.4em] text-primary uppercase">
              Global Presence
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="text-primary tracking-[0.2em] text-sm uppercase font-semibold">
                The Leader
              </span>
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-serif text-white leading-tight mb-8"
            >
              Building institutions and creating opportunities across the globe.
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-muted-foreground/90 text-lg leading-relaxed mb-10">
              {siteData.about.paragraphs[0]}
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Link href="/about">
                <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary hover:text-black transition-colors rounded-none px-8 py-6 text-xs uppercase tracking-widest group">
                  Read Full Story
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-black">
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <AboutTeaser />
        <Impact />
        <Organisations />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
