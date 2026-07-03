import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { clipReveal, fadeInUp } from "@/lib/animations";

const sections = [
  { title: "Introduction", content: "Stanley Osuide ('we', 'us', 'our') is committed to protecting your personal information. This Privacy Policy explains how we collect, use and protect your data when you visit our website or submit an enquiry." },
  { title: "Information We Collect", content: "We may collect: your name, email address, phone number, organisation name and any other information you provide when submitting a booking enquiry or contact form. We may also collect non-personal data such as browser type, IP address and pages visited through analytics tools." },
  { title: "How We Use Your Information", content: "We use your information to: respond to booking and speaking enquiries, communicate with you about events and engagements, improve our website and services, and send relevant updates (you may unsubscribe at any time)." },
  { title: "Information Sharing", content: "We do not sell, trade or transfer your personal information to third parties without your consent, except where required by law or to facilitate your enquiry (e.g. event organisers)." },
  { title: "Data Security", content: "We implement appropriate technical and organisational measures to protect your information against unauthorised access, loss or misuse. However, no internet transmission is entirely secure." },
  { title: "Cookies", content: "Our website may use cookies to enhance your browsing experience. You can disable cookies through your browser settings, though this may affect certain website functionality." },
  { title: "Your Rights", content: "You have the right to access, correct or request deletion of your personal data. To exercise these rights, please contact us using the details below." },
  { title: "Contact Us", content: `For any privacy-related enquiries, please contact us at speaker@stanleyosuide.com. This policy was last updated in July 2025.` },
];

export default function PrivacyPolicy() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-black">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden bg-background">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.h1 variants={clipReveal} initial="hidden" animate="visible" className="text-4xl md:text-6xl font-serif text-white mb-6">
            PRIVACY POLICY
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