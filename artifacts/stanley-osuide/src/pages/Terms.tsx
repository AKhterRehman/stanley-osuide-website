import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { clipReveal, fadeInUp } from "@/lib/animations";

const sections = [
  { title: "Acceptance of Terms", content: "By accessing and using this website, you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use this website." },
  { title: "Use of the Website", content: "This website is provided for informational purposes about Stanley Osuide's speaking services. You may not use this site for any unlawful purpose or in any way that could damage, disable or impair the site." },
  { title: "Intellectual Property", content: "All content on this website, including text, graphics, logos and images, is the property of Stanley Osuide and is protected by applicable intellectual property laws. You may not reproduce, distribute or create derivative works without express written permission." },
  { title: "Booking Enquiries", content: "Submitting a booking enquiry does not constitute a binding agreement. Bookings are only confirmed upon receipt of a signed contract and confirmed deposit. Stanley Osuide reserves the right to decline any enquiry at our discretion." },
  { title: "Limitation of Liability", content: "Stanley Osuide shall not be liable for any indirect, incidental or consequential damages arising from your use of this website or reliance on any information provided herein." },
  { title: "Third-Party Links", content: "This website may contain links to third-party websites. We are not responsible for the content or privacy practices of those sites." },
  { title: "Changes to Terms", content: "We reserve the right to modify these terms at any time. Continued use of the website following any changes constitutes your acceptance of the revised terms." },
  { title: "Governing Law", content: "These Terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales." },
  { title: "Contact", content: "For any questions regarding these Terms, please contact us at speaker@stanleyosuide.com." },
];

export default function Terms() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-black">
      <Navbar />

      {/* Hero */}
      <section
        className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden premium-page-hero"
        style={{ backgroundImage: 'linear-gradient(120deg, hsl(210 22% 98% / 0.94), hsl(210 20% 95% / 0.84)), url("https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1800&q=85")' }}
      >
        <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
          <motion.h1 variants={clipReveal} initial="hidden" animate="visible" className="text-4xl md:text-6xl font-serif text-foreground mb-6">
            TERMS OF SERVICE
          </motion.h1>
          <motion.p variants={fadeInUp} initial="hidden" animate="visible" className="text-muted-foreground text-sm uppercase tracking-widest">
            Last updated: July 2025
          </motion.p>
        </div>
      </section>

      <section className="py-12 pb-32">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <div className="space-y-12">
            {sections.map((sec, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <h3 className="text-xl font-serif text-primary mb-4">{i + 1}. {sec.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{sec.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
