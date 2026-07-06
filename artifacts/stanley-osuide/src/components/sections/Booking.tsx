import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";

import { siteData } from "@/data/content";
import { fadeInUp } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MagneticButton } from "@/components/ui/magnetic-button";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  organisation: z.string().min(2, "Organisation is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, "Phone number is required"),
  eventName: z.string().min(2, "Event name is required"),
  eventDate: z.string().min(1, "Date is required"),
  eventLocation: z.string().min(2, "Location is required"),
  expectedAudienceSize: z.string().min(1, "Please select an audience size"),
  typeOfEvent: z.string().min(1, "Please select an event type"),
  speakingTopic: z.string().min(1, "Please select a topic"),
  budgetRange: z.string().min(1, "Please select a budget range"),
  additionalInfo: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function Booking() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      organisation: "",
      email: "",
      phone: "",
      eventName: "",
      eventDate: "",
      eventLocation: "",
      expectedAudienceSize: "",
      typeOfEvent: "",
      speakingTopic: "",
      budgetRange: "",
      additionalInfo: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <section id="booking" className="py-24 md:py-40 bg-background relative z-10">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-primary/5 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <span className="text-primary tracking-[0.2em] text-sm uppercase font-semibold mb-4 block">
              Engagement Request
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
              Book Stanley to Speak
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Bring Stanley Osuide to your next event and inspire your audience to
              lead with purpose, build with vision and create lasting legacy.
            </p>
          </div>

          <div className="bg-card p-8 md:p-12 rounded-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-20"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-3xl font-serif text-white mb-4">Request Submitted</h3>
                <p className="text-muted-foreground max-w-md mb-8">
                  Thank you for your interest. Stanley's team will review your engagement request and get back to you within 48 hours.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setIsSuccess(false);
                    form.reset();
                  }}
                >
                  Submit Another Request
                </Button>
              </motion.div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="organisation"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Organisation *</FormLabel>
                          <FormControl>
                            <Input placeholder="Acme Corp" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number *</FormLabel>
                          <FormControl>
                            <Input placeholder={siteData.contact.phone} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="md:col-span-2 pt-6 pb-2">
                      <h4 className="font-serif text-xl text-white border-b border-white/10 pb-2">Event Details</h4>
                    </div>

                    <FormField
                      control={form.control}
                      name="eventName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Event Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Global Leadership Summit 2025" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="eventDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Event Date *</FormLabel>
                          <FormControl>
                            <Input type="date" className="bg-input/50 invert-[0.8] dark:invert-0" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="eventLocation"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Location (UK, International or Online) *</FormLabel>
                          <FormControl>
                            <Input placeholder={siteData.contact.location} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="expectedAudienceSize"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Audience Size *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select size" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="under-100">Under 100</SelectItem>
                              <SelectItem value="100-500">100 - 500</SelectItem>
                              <SelectItem value="500-1000">500 - 1,000</SelectItem>
                              <SelectItem value="1000+">1,000+</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="typeOfEvent"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Type of Event *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select event type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {siteData.events.map((e) => (
                                <SelectItem key={e} value={e}>{e}</SelectItem>
                              ))}
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="speakingTopic"
                      render={({ field }) => (
                        <FormItem className="md:col-span-2">
                          <FormLabel>Topic of Interest *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a signature topic" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {siteData.topics.map((t) => (
                                <SelectItem key={t.id} value={t.id}>{t.title}</SelectItem>
                              ))}
                              <SelectItem value="custom">Custom tailored message</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="budgetRange"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Budget Range *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select range" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="standard">Standard Corporate Rate</SelectItem>
                              <SelectItem value="premium">Premium / Keynote</SelectItem>
                              <SelectItem value="non-profit">Non-Profit / NGO Rate</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="additionalInfo"
                      render={({ field }) => (
                        <FormItem className="md:col-span-2">
                          <FormLabel>Additional Information</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us more about the event goals, target audience, or specific requirements..." 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="pt-6 flex justify-end">
                    <MagneticButton 
                      type="submit" 
                      disabled={isSubmitting}
                      className="bg-primary text-primary-foreground font-bold uppercase tracking-widest px-10 py-4 w-full md:w-auto min-w-[200px]"
                    >
                      {isSubmitting ? (
                        <Loader2 className="w-5 h-5 animate-spin mx-auto" />
                      ) : (
                        "Submit Request"
                      )}
                    </MagneticButton>
                  </div>
                </form>
              </Form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
