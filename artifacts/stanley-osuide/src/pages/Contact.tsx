import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { siteData } from "@/data/content";
import { clipReveal, fadeInUp } from "@/lib/animations";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SectionHeader } from "@/components/ui/section-header";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().optional(),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message is too short"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSuccess(true);
  };

  const contactCards = [
    { icon: Mail, label: "Email", value: "speaker@stanleyosuide.com", href: "mailto:speaker@stanleyosuide.com", desc: "Enquiries & Bookings" },
    { icon: Phone, label: "Phone", value: "+44 (0) 7752 536750", href: "tel:+447752536750", desc: "Mon–Fri, 9am–6pm GMT" },
    { icon: MapPin, label: "Office", value: "London, United Kingdom", href: null, desc: "Serving UK, Africa & Global" },
  ];

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-black">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-background pt-24">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[20vw] font-serif font-bold text-white/[0.02] leading-none tracking-tighter whitespace-nowrap">CONTACT</span>
        </div>
        <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
          <motion.span variants={fadeInUp} initial="hidden" animate="visible" className="text-primary tracking-[0.2em] text-sm uppercase font-semibold mb-4 block">
            Let's Start a Conversation
          </motion.span>
          <motion.h1 variants={clipReveal} initial="hidden" animate="visible" className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tighter leading-none mb-6">
            CONTACT
          </motion.h1>
        </div>
      </section>

      <section className="py-12 bg-background relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-24">
            {contactCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-white/5 p-8 rounded-xl flex flex-col items-center text-center hover:border-primary/30 transition-colors"
                >
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h4 className="text-white font-medium mb-2">{card.label}</h4>
                  {card.href ? (
                    <a href={card.href} className="text-white/80 hover:text-primary transition-colors mb-1">{card.value}</a>
                  ) : (
                    <span className="text-white/80 mb-1">{card.value}</span>
                  )}
                  <span className="text-muted-foreground text-sm">{card.desc}</span>
                </motion.div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Left: Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-serif text-white mb-8">Send a Message</h3>
              
              {isSuccess ? (
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-2xl font-serif text-white mb-2">Message Sent</h4>
                  <p className="text-muted-foreground">Thank you for reaching out. Our team will get back to you shortly.</p>
                  <Button 
                    variant="outline" 
                    className="mt-8"
                    onClick={() => { setIsSuccess(false); reset(); }}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">Name *</label>
                      <input
                        {...register("name")}
                        className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        placeholder="John Doe"
                      />
                      {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name.message}</span>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">Email *</label>
                      <input
                        {...register("email")}
                        className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        placeholder="john@example.com"
                      />
                      {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">Phone</label>
                      <input
                        {...register("phone")}
                        className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        placeholder="+44 7700 900000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">Subject *</label>
                      <input
                        {...register("subject")}
                        className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        placeholder="How can we help?"
                      />
                      {errors.subject && <span className="text-red-500 text-xs mt-1">{errors.subject.message}</span>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Message *</label>
                    <textarea
                      {...register("message")}
                      rows={5}
                      className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                      placeholder="Your message here..."
                    />
                    {errors.message && <span className="text-red-500 text-xs mt-1">{errors.message.message}</span>}
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-primary text-black hover:bg-primary/90 py-6 text-sm uppercase tracking-widest font-bold">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Right: Info Panel & Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-card border border-white/5 rounded-xl p-8">
                <h4 className="text-xl font-serif text-white mb-6">Business Hours</h4>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex justify-between border-b border-white/5 pb-2">
                    <span>Monday – Friday</span>
                    <span className="text-white">9:00 AM – 6:00 PM (GMT)</span>
                  </li>
                  <li className="flex justify-between border-b border-white/5 pb-2">
                    <span>Saturday</span>
                    <span className="text-white">By appointment</span>
                  </li>
                  <li className="flex justify-between border-white/5 pb-2">
                    <span>Sunday</span>
                    <span className="text-white">Closed</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl overflow-hidden border border-white/10 h-80 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 pointer-events-none" />
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.47340002653!2d-0.24168120642766046!3d51.52855824164916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Stanley Osuide Office Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}