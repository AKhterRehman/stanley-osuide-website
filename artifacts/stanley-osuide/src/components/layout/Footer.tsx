import React from "react";
import { siteData } from "@/data/content";

export function Footer() {
  return (
    <footer className="bg-background pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Subtle gold line at top */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <a href="#" className="flex flex-col group inline-block mb-6">
              <span className="font-serif text-3xl font-bold tracking-widest text-white">
                STANLEY
              </span>
              <span className="font-sans text-xs tracking-[0.4em] text-primary">
                OSUIDE
              </span>
            </a>
            <p className="text-muted-foreground max-w-sm mt-6 text-sm leading-relaxed">
              {siteData.hero.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6 tracking-wide">Navigation</h4>
            <ul className="space-y-4">
              {["About", "Topics", "Impact", "Organisations", "Booking"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm tracking-wide"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6 tracking-wide">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href={`mailto:${siteData.contact.email}`} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {siteData.contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteData.contact.phone.replace(/[^0-9+]/g, '')}`} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {siteData.contact.phone}
                </a>
              </li>
              <li>
                <span className="text-muted-foreground text-sm">
                  London | Lagos | Global
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs tracking-wider">
            &copy; {new Date().getFullYear()} Stanley Osuide. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-xs tracking-wider">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-xs tracking-wider">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
