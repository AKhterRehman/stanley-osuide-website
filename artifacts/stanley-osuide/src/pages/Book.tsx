import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { bookData, siteData } from "@/data/content";
import { fadeInUp, clipReveal } from "@/lib/animations";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { SectionHeader } from "@/components/ui/section-header";
import { Mail, Phone, MapPin, CheckCircle2, Upload } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const step1Schema = z.object({
  fullName: z.string().min(2, "Name is required"),
  organisation: z.string().min(2, "Organisation is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, "Phone number is required"),
  role: z.string().optional(),
});

const step2Schema = z.object({
  eventName: z.string().min(2, "Event name is required"),
  eventDate: z.string().min(1, "Event date is required"),
  location: z.string().min(2, "Location is required"),
  audienceSize: z.string().min(1, "Please select audience size"),
  eventType: z.string().min(1, "Please select event type"),
  speakingTopic: z.string().min(1, "Please select a topic"),
  budgetRange: z.string().min(1, "Please select a budget range"),
  additionalInfo: z.string().optional(),
});

type Step1Data = z.infer<typeof step1Schema>;
type Step2Data = z.infer<typeof step2Schema>;
type FormData = Step1Data & Step2Data;

export default function Book() {
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  
  const [formData, setFormData] = useState<Partial<FormData>>({});

  const {
    register: registerStep1,
    handleSubmit: handleSubmitStep1,
    formState: { errors: errorsStep1 },
    trigger: triggerStep1,
  } = useForm<Step1Data>({
    resolver: zodResolver(step1Schema),
    mode: "onBlur",
  });

  const {
    register: registerStep2,
    handleSubmit: handleSubmitStep2,
    formState: { errors: errorsStep2 },
  } = useForm<Step2Data>({
    resolver: zodResolver(step2Schema),
    mode: "onBlur",
  });

  const onNextStep1 = async (data: Step1Data) => {
    const isValid = await triggerStep1();
    if (isValid) {
      setFormData((prev) => ({ ...prev, ...data }));
      setStep(2);
      window.scrollTo({ top: document.getElementById("booking-form")?.offsetTop! - 100, behavior: "smooth" });
    }
  };

  const onNextStep2 = (data: Step2Data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep(3);
    window.scrollTo({ top: document.getElementById("booking-form")?.offsetTop! - 100, behavior: "smooth" });
  };

  const onSubmitFinal = async () => {
    // Simulate submit
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSuccess(true);
    window.scrollTo({ top: document.getElementById("booking-form")?.offsetTop! - 100, behavior: "smooth" });
  };

  const resetForm = () => {
    setStep(1);
    setIsSuccess(false);
    setFormData({});
    setUploadedFile(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setUploadedFile(e.target.files[0]);
    }
  };

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-black">
      <Navbar />
      
      {/* Hero */}
      <section
        className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-32 pb-20 premium-page-hero"
        style={{ backgroundImage: 'linear-gradient(120deg, hsl(210 22% 98% / 0.94), hsl(210 20% 95% / 0.84)), url("https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1800&q=85")' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[20vw] font-serif font-bold text-foreground/[0.03] leading-none tracking-tighter whitespace-nowrap">BOOKING</span>
        </div>
        <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
          <motion.span variants={fadeInUp} initial="hidden" animate="visible" className="text-primary tracking-[0.2em] text-sm uppercase font-semibold mb-4 block">
            Secure a Date
          </motion.span>
          <motion.h1 variants={clipReveal} initial="hidden" animate="visible" className="text-5xl md:text-7xl lg:text-8xl font-serif text-foreground tracking-tighter leading-none mb-6">
            BOOK STANLEY
          </motion.h1>
          <motion.p variants={fadeInUp} initial="hidden" animate="visible" className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Bring a World-Class Speaker to Your Next Event.
          </motion.p>
        </div>
      </section>

      {/* The Booking Form Section */}
      <div id="booking-form" className="relative z-10 py-16 bg-secondary">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          
          {isSuccess ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20 bg-card border border-border rounded-2xl p-10"
            >
              <motion.div className="w-24 h-24 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-8"
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0.4 }}>
                <CheckCircle2 className="w-12 h-12 text-primary" />
              </motion.div>
              <h3 className="text-4xl font-serif text-foreground mb-4">Request Received</h3>
              <p className="text-muted-foreground max-w-lg mx-auto mb-2">
                Thank you, {formData.fullName}. Stanley's team will review your engagement request and respond within 48 hours.
              </p>
              <p className="text-muted-foreground/60 text-sm mb-10">A confirmation has been sent to {formData.email}</p>
              
              <div className="inline-block border border-primary/20 rounded-lg px-6 py-3 mb-8 bg-primary/5">
                <span className="text-primary/60 text-xs tracking-widest uppercase">Reference</span>
                <div className="text-foreground font-mono text-lg mt-1">SO-{Math.random().toString(36).slice(2,8).toUpperCase()}</div>
              </div>
              
              <div>
                <Button variant="outline" onClick={resetForm} className="border-border hover:bg-muted">
                  Submit Another Request
                </Button>
              </div>
            </motion.div>
          ) : (
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm">
              {/* Progress Indicator */}
              <div className="mb-12 relative">
                <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-border -translate-y-1/2 z-0" />
                <div className="absolute top-1/2 left-0 h-[1px] bg-primary transition-all duration-500 ease-in-out z-0" style={{ width: `${(step - 1) * 50}%` }} />
                
                <div className="relative z-10 flex justify-between">
                  {[1, 2, 3].map((num) => (
                    <div key={num} className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors duration-300 ${
                        step >= num ? 'bg-primary text-primary-foreground' : 'bg-secondary border border-border text-muted-foreground'
                      }`}>
                        {step > num ? <CheckCircle2 className="w-6 h-6" /> : num}
                      </div>
                      <span className={`text-xs mt-3 font-medium uppercase tracking-wider hidden md:block ${
                        step >= num ? 'text-primary' : 'text-muted-foreground/50'
                      }`}>
                        {num === 1 ? 'Contact Details' : num === 2 ? 'Event Details' : 'Review & Submit'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 1: Contact Details */}
              {step === 1 && (
                <motion.form 
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  onSubmit={handleSubmitStep1(onNextStep1)} 
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-serif text-foreground mb-6">Contact Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">Full Name *</label>
                      <input {...registerStep1("fullName")} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                      {errorsStep1.fullName && <span className="text-red-500 text-xs mt-1">{errorsStep1.fullName.message}</span>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">Organisation *</label>
                      <input {...registerStep1("organisation")} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                      {errorsStep1.organisation && <span className="text-red-500 text-xs mt-1">{errorsStep1.organisation.message}</span>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">Email Address *</label>
                      <input type="email" {...registerStep1("email")} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                      {errorsStep1.email && <span className="text-red-500 text-xs mt-1">{errorsStep1.email.message}</span>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">Phone Number *</label>
                      <input {...registerStep1("phone")} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                      {errorsStep1.phone && <span className="text-red-500 text-xs mt-1">{errorsStep1.phone.message}</span>}
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-muted-foreground mb-2">Role / Title (Optional)</label>
                      <input {...registerStep1("role")} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                    </div>
                  </div>
                  <div className="pt-6 flex justify-end">
                    <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-sm uppercase tracking-widest font-bold">
                      Next Step <span className="ml-2">→</span>
                    </Button>
                  </div>
                </motion.form>
              )}

              {/* Step 2: Event Details */}
              {step === 2 && (
                <motion.form 
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  onSubmit={handleSubmitStep2(onNextStep2)} 
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-serif text-foreground mb-6">Event Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-muted-foreground mb-2">Event Name *</label>
                      <input {...registerStep2("eventName")} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                      {errorsStep2.eventName && <span className="text-red-500 text-xs mt-1">{errorsStep2.eventName.message}</span>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">Event Date *</label>
                      <input type="date" {...registerStep2("eventDate")} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                      {errorsStep2.eventDate && <span className="text-red-500 text-xs mt-1">{errorsStep2.eventDate.message}</span>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">Location (UK, International or Online) *</label>
                      <input {...registerStep2("location")} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="UK, International or Online" />
                      {errorsStep2.location && <span className="text-red-500 text-xs mt-1">{errorsStep2.location.message}</span>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">Audience Size *</label>
                      <select {...registerStep2("audienceSize")} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none">
                        <option value="">Select size...</option>
                        <option value="1-50">1 - 50</option>
                        <option value="51-200">51 - 200</option>
                        <option value="201-500">201 - 500</option>
                        <option value="500+">500+</option>
                      </select>
                      {errorsStep2.audienceSize && <span className="text-red-500 text-xs mt-1">{errorsStep2.audienceSize.message}</span>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">Type of Event *</label>
                      <select {...registerStep2("eventType")} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none">
                        <option value="">Select type...</option>
                        <option value="Conference Keynote">Conference Keynote</option>
                        <option value="Corporate Workshop">Corporate Workshop</option>
                        <option value="Panel Discussion">Panel Discussion</option>
                        <option value="Virtual Webinar">Virtual Webinar</option>
                      </select>
                      {errorsStep2.eventType && <span className="text-red-500 text-xs mt-1">{errorsStep2.eventType.message}</span>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">Speaking Topic *</label>
                      <select {...registerStep2("speakingTopic")} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none">
                        <option value="">Select topic...</option>
                        <option value="Leadership & Legacy">Leadership & Legacy</option>
                        <option value="Africa Investment Landscape">Africa Investment Landscape</option>
                        <option value="Corporate Strategy">Corporate Strategy</option>
                        <option value="Faith & Marketplace">Faith & Marketplace</option>
                        <option value="Other">Other (specify below)</option>
                      </select>
                      {errorsStep2.speakingTopic && <span className="text-red-500 text-xs mt-1">{errorsStep2.speakingTopic.message}</span>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">Budget Range *</label>
                      <select {...registerStep2("budgetRange")} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none">
                        <option value="">Select range...</option>
                        <option value="Under £5,000">Under £5,000</option>
                        <option value="£5,000 - £10,000">£5,000 - £10,000</option>
                        <option value="£10,000 - £20,000">£10,000 - £20,000</option>
                        <option value="£20,000+">£20,000+</option>
                      </select>
                      {errorsStep2.budgetRange && <span className="text-red-500 text-xs mt-1">{errorsStep2.budgetRange.message}</span>}
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-muted-foreground mb-2">Attach Event Brief / Agenda (Optional)</label>
                      <label className="border-2 border-dashed border-border hover:border-primary/50 rounded-xl p-8 flex flex-col items-center cursor-pointer transition-colors group">
                        <Upload className="w-8 h-8 text-primary/60 group-hover:text-primary mb-3 transition-colors" />
                        <span className="text-muted-foreground text-sm">Drop your event brief here or click to browse</span>
                        <span className="text-muted-foreground/50 text-xs mt-1">PDF, DOC, DOCX up to 10MB</span>
                        <input type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={handleFileChange} />
                      </label>
                      {uploadedFile && <div className="text-sm text-primary mt-2 flex items-center gap-2">File selected: {uploadedFile.name}</div>}
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-muted-foreground mb-2">Additional Information (Optional)</label>
                      <textarea {...registerStep2("additionalInfo")} rows={4} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"></textarea>
                    </div>
                  </div>
                  <div className="pt-6 flex justify-between">
                    <Button type="button" variant="outline" onClick={() => setStep(1)} className="border-border text-foreground hover:bg-muted px-8">
                      <span className="mr-2">←</span> Back
                    </Button>
                    <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-sm uppercase tracking-widest font-bold">
                      Review Request <span className="ml-2">→</span>
                    </Button>
                  </div>
                </motion.form>
              )}

              {/* Step 3: Review & Submit */}
              {step === 3 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-8"
                >
                  <h3 className="text-2xl font-serif text-foreground mb-6">Review & Submit</h3>
                  
                  <div className="bg-secondary rounded-xl p-6 border border-border mb-8">
                    <h4 className="text-primary text-sm uppercase tracking-widest font-bold mb-4">Contact Details</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-8 text-sm">
                      <div><span className="text-muted-foreground/60 block mb-1">Name</span><span className="text-foreground font-medium">{formData.fullName}</span></div>
                      <div><span className="text-muted-foreground/60 block mb-1">Organisation</span><span className="text-foreground font-medium">{formData.organisation}</span></div>
                      <div><span className="text-muted-foreground/60 block mb-1">Email</span><span className="text-foreground font-medium">{formData.email}</span></div>
                      <div><span className="text-muted-foreground/60 block mb-1">Phone</span><span className="text-foreground font-medium">{formData.phone}</span></div>
                    </div>

                    <div className="h-px bg-border w-full mb-8" />

                    <h4 className="text-primary text-sm uppercase tracking-widest font-bold mb-4">Event Details</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-sm">
                      <div><span className="text-muted-foreground/60 block mb-1">Event Name</span><span className="text-foreground font-medium">{formData.eventName}</span></div>
                      <div><span className="text-muted-foreground/60 block mb-1">Date</span><span className="text-foreground font-medium">{formData.eventDate}</span></div>
                      <div><span className="text-muted-foreground/60 block mb-1">Location</span><span className="text-foreground font-medium">{formData.location}</span></div>
                      <div><span className="text-muted-foreground/60 block mb-1">Audience Size</span><span className="text-foreground font-medium">{formData.audienceSize}</span></div>
                      <div><span className="text-muted-foreground/60 block mb-1">Event Type</span><span className="text-foreground font-medium">{formData.eventType}</span></div>
                      <div><span className="text-muted-foreground/60 block mb-1">Speaking Topic</span><span className="text-foreground font-medium">{formData.speakingTopic}</span></div>
                      <div><span className="text-muted-foreground/60 block mb-1">Budget Range</span><span className="text-foreground font-medium">{formData.budgetRange}</span></div>
                      {uploadedFile && <div><span className="text-muted-foreground/60 block mb-1">Attached File</span><span className="text-foreground font-medium">{uploadedFile.name}</span></div>}
                    </div>
                  </div>

                  <div className="pt-2 flex justify-between items-center">
                    <Button type="button" variant="outline" onClick={() => setStep(2)} className="border-border text-foreground hover:bg-muted px-8">
                      <span className="mr-2">←</span> Edit Details
                    </Button>
                    <MagneticButton 
                      onClick={onSubmitFinal}
                      className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-sm uppercase tracking-widest font-bold"
                    >
                      Submit Booking Request
                    </MagneticButton>
                  </div>
                </motion.div>
              )}
            </div>
          )}

          {/* Booking Process Steps */}
          {!isSuccess && (
            <div className="mt-20 pt-16 border-t border-border">
              <h4 className="text-center text-muted-foreground font-serif text-xl mb-12">How It Works</h4>
              <div className="flex flex-col md:flex-row justify-between gap-8 relative">
                <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-[1px] bg-border -z-10" />
                
                {[
                  { title: "Submit Request", desc: "Fill out the form with your event details" },
                  { title: "Team Reviews", desc: "We'll review and respond within 48 hours" },
                  { title: "Confirmation", desc: "Sign contract and secure the date" }
                ].map((step, i) => (
                  <div key={i} className="flex flex-col items-center text-center relative z-10 w-full md:w-1/3">
                    <div className="w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center text-primary font-bold mb-4 shadow-[0_0_15px_hsla(215,68%,28%,0.15)]">
                      {i + 1}
                    </div>
                    <h5 className="text-foreground font-medium mb-2">{step.title}</h5>
                    <p className="text-muted-foreground text-sm max-w-[200px]">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Contact Info */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border p-8 rounded-xl flex flex-col items-center text-center hover:border-primary/30 transition-colors"
            >
              <Mail className="w-8 h-8 text-primary mb-4" />
              <h4 className="text-foreground font-medium mb-2">Email</h4>
              <a href={`mailto:${siteData.contact.email}`} className="text-muted-foreground hover:text-primary transition-colors text-sm">{siteData.contact.email}</a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-border p-8 rounded-xl flex flex-col items-center text-center hover:border-primary/30 transition-colors"
            >
              <Phone className="w-8 h-8 text-primary mb-4" />
              <h4 className="text-foreground font-medium mb-2">Phone</h4>
              <a href={`tel:${siteData.contact.phone.replace(/[^0-9+]/g, '')}`} className="text-muted-foreground hover:text-primary transition-colors text-sm">{siteData.contact.phone}</a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border p-8 rounded-xl flex flex-col items-center text-center hover:border-primary/30 transition-colors"
            >
              <MapPin className="w-8 h-8 text-primary mb-4" />
              <h4 className="text-foreground font-medium mb-2">Location</h4>
              <span className="text-muted-foreground text-sm">{siteData.contact.location}</span>
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
                <AccordionItem key={i} value={`item-${i}`} className="border-border data-[state=open]:border-primary transition-colors">
                  <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline font-serif text-lg py-6">
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

      <section className="py-32 bg-secondary border-t border-border relative overflow-hidden flex items-center justify-center text-center">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsla(215,68%,28%,0.04)_0%,transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-4xl md:text-6xl font-serif text-foreground mb-10 leading-tight">
              Ready to Inspire <span className="text-primary text-glow">Your Audience?</span>
            </h2>
            <MagneticButton 
              className="bg-primary text-primary-foreground px-10 py-5 text-sm tracking-widest uppercase font-bold hover:bg-primary/90 transition-all shadow-[0_4px_20px_hsla(215,68%,28%,0.25)]"
              onClick={() => {
                document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" });
                setStep(1);
                setIsSuccess(false);
              }}
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
