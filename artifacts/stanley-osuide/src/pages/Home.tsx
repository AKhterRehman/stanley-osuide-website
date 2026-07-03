import React from "react";
import { Loader } from "@/components/sections/Loader";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Impact } from "@/components/sections/Impact";
import { Topics } from "@/components/sections/Topics";
import { IdealEvents } from "@/components/sections/IdealEvents";
import { WhyBook } from "@/components/sections/WhyBook";
import { Organisations } from "@/components/sections/Organisations";
import { Booking } from "@/components/sections/Booking";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-black">
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Impact />
        <Topics />
        <IdealEvents />
        <WhyBook />
        <Organisations />
        <Booking />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
