import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { clipReveal, fadeInUp } from "@/lib/animations";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSuccess(true);
  };

  const contactCards = [
    {
      icon: Mail,
      label: "Email",
      value: "speaker@stanleyosuide.com",
      href: "mailto:speaker@stanleyosuide.com",
      desc: "Enquiries & Bookings",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+44 (0) 7752 536750",
      href: "tel:+447752536750",
      desc: "Mon–Fri, 9am–6pm GMT",
    },
    {
      icon: MapPin,
      label: "Office",
      value: "London, United Kingdom",
      href: null,
      desc: "Serving UK, Africa & Global",
    },
  ];

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-black">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[58vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-20 md:pt-36 md:pb-24 bg-gradient-to-br from-white via-slate-50 to-blue-50/40">
        <div
          className="absolute inset-0 opacity-[0.28] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(120deg, rgba(255,255,255,0.94), rgba(248,250,252,0.88)), url("https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=1800&q=85")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,58,120,0.12)_0%,transparent_65%)] pointer-events-none" />

        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(15,23,42,0.7) 1px, transparent 1px)",
            backgroundSize: "34px 34px",
          }}
        />

        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[14vw] sm:text-[12vw] lg:text-[10vw] font-serif font-black text-primary/[0.035] leading-none tracking-[-0.08em] whitespace-nowrap">
            CONTACT
          </span>
        </div>

        <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-10 h-px bg-primary/30 rounded-full" />
            <span className="text-primary tracking-[0.28em] text-xs sm:text-sm uppercase font-bold">
              Let's Start a Conversation
            </span>
            <div className="w-10 h-px bg-primary/30 rounded-full" />
          </motion.div>

          <motion.h1
            variants={clipReveal}
            initial="hidden"
            animate="visible"
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-slate-950 tracking-[-0.06em] leading-[0.92] mb-6"
          >
            CONTACT
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            Reach out to book Stanley or enquire about speaking engagements.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.45, duration: 0.8, ease: "easeOut" }}
            className="h-px w-24 bg-primary/50 mx-auto mt-10 origin-center"
          />
        </div>
      </section>

      {/* Contact Cards */}
      <section className="relative z-10 overflow-hidden py-16 md:py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(30,58,120,0.08),transparent_45%)] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto mb-20 md:mb-24"
          >
            {contactCards.map((card, i) => {
              const Icon = card.icon;

              const CardContent = (
                <motion.div
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    ease: "easeOut",
                    delay: i * 0.05,
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.018,
                    transition: { duration: 0.18, ease: "easeOut" },
                  }}
                  whileTap={{ scale: 0.99 }}
                  className="group relative overflow-hidden h-full rounded-3xl border border-slate-200 bg-white/85 backdrop-blur-xl p-8 md:p-9 flex flex-col items-center text-center shadow-[0_16px_45px_rgba(15,23,42,0.06)] hover:border-primary/30 hover:shadow-[0_28px_75px_rgba(30,58,120,0.14)] transition-all duration-300 ease-out"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/[0.07] via-transparent to-transparent transition-opacity duration-300" />
                  <div className="absolute -top-14 -right-14 w-36 h-36 rounded-full bg-primary/7 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/15 bg-primary/8 shadow-[0_10px_30px_rgba(30,58,120,0.08)] group-hover:bg-primary group-hover:border-primary group-hover:shadow-[0_18px_40px_rgba(30,58,120,0.22)] transition-all duration-300">
                    <Icon className="h-7 w-7 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h4 className="relative z-10 font-serif text-xl text-slate-950 mb-3 group-hover:text-primary transition-colors duration-300">
                    {card.label}
                  </h4>

                  <span className="relative z-10 text-base font-semibold text-slate-900 break-words">
                    {card.value}
                  </span>

                  <span className="relative z-10 mt-2 text-sm text-slate-500">
                    {card.desc}
                  </span>
                </motion.div>
              );

              return card.href ? (
                <a key={i} href={card.href} className="block h-full no-underline">
                  {CardContent}
                </a>
              ) : (
                <div key={i} className="h-full">
                  {CardContent}
                </div>
              );
            })}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            {/* Left: Form */}
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="rounded-3xl border border-slate-200 bg-white/85 backdrop-blur-xl p-7 sm:p-8 md:p-10 shadow-[0_20px_60px_rgba(15,23,42,0.07)]"
            >
              <h3 className="text-3xl md:text-4xl font-serif text-slate-950 mb-8">
                Send a Message
              </h3>

              {isSuccess ? (
                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 sm:p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>

                  <h4 className="text-2xl font-serif text-slate-950 mb-2">
                    Message Sent
                  </h4>

                  <p className="text-slate-600">
                    Thank you for reaching out. Our team will get back to you
                    shortly.
                  </p>

                  <Button
                    variant="outline"
                    className="mt-8"
                    onClick={() => {
                      setIsSuccess(false);
                      reset();
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Name *
                      </label>
                      <input
                        {...register("name")}
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-950 placeholder:text-slate-400 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <span className="text-red-500 text-xs mt-1 block">
                          {errors.name.message}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Email *
                      </label>
                      <input
                        {...register("email")}
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-950 placeholder:text-slate-400 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <span className="text-red-500 text-xs mt-1 block">
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Phone
                      </label>
                      <input
                        {...register("phone")}
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-950 placeholder:text-slate-400 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                        placeholder="+44 7700 900000"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Subject *
                      </label>
                      <input
                        {...register("subject")}
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-950 placeholder:text-slate-400 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                        placeholder="How can we help?"
                      />
                      {errors.subject && (
                        <span className="text-red-500 text-xs mt-1 block">
                          {errors.subject.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      {...register("message")}
                      rows={5}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-950 placeholder:text-slate-400 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all resize-none"
                      placeholder="Your message here..."
                    />
                    {errors.message && (
                      <span className="text-red-500 text-xs mt-1 block">
                        {errors.message.message}
                      </span>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary !text-white hover:bg-primary/90 py-6 text-sm uppercase tracking-widest font-bold rounded-xl shadow-[0_18px_40px_rgba(30,58,120,0.22)] hover:shadow-[0_24px_60px_rgba(30,58,120,0.30)] transition-all duration-300"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Right: Info Panel & Map */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="rounded-3xl border border-slate-200 bg-white/85 backdrop-blur-xl p-7 sm:p-8 shadow-[0_20px_60px_rgba(15,23,42,0.07)]">
                <h4 className="text-2xl font-serif text-slate-950 mb-6">
                  Business Hours
                </h4>

                <ul className="space-y-4 text-slate-600">
                  <li className="flex justify-between gap-6 border-b border-slate-200 pb-3">
                    <span>Monday – Friday</span>
                    <span className="text-slate-950 font-semibold text-right">
                      9:00 AM – 6:00 PM (GMT)
                    </span>
                  </li>

                  <li className="flex justify-between gap-6 border-b border-slate-200 pb-3">
                    <span>Saturday</span>
                    <span className="text-slate-950 font-semibold text-right">
                      By appointment
                    </span>
                  </li>

                  <li className="flex justify-between gap-6 pb-2">
                    <span>Sunday</span>
                    <span className="text-slate-950 font-semibold text-right">
                      Closed
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl overflow-hidden border border-slate-200 h-80 relative shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent z-10 pointer-events-none" />

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.47340002653!2d-0.24168120642766046!3d51.52855824164916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
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