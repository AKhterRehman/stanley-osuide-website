import React from "react";
import { siteData } from "@/data/content";
import { Link } from "wouter";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Linkedin, Twitter, Instagram, Youtube, Facebook, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/stanleyosuide", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/stanleyosuide", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/stanleyosuide", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com/@stanleyosuide", label: "YouTube" },
    { icon: Facebook, href: "https://facebook.com/stanleyosuide", label: "Facebook" },
  ];

  return (
    <footer className="bg-background pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Subtle gold line at top */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex flex-col group inline-block mb-6 w-max">
              <span className="font-serif text-3xl font-bold tracking-widest text-white">
                STANLEY
              </span>
              <span className="font-sans text-xs tracking-[0.4em] text-primary transition-colors group-hover:text-white">
                OSUIDE
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm mt-6 text-sm leading-relaxed mb-8">
              {siteData.hero.tagline}
            </p>
            
            <div className="flex gap-4 mb-8">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

            <Link href="/book">
              <MagneticButton className="bg-primary text-black px-8 py-3 text-xs uppercase tracking-widest font-bold hover:bg-primary/90 transition-colors">
                Book Stanley
              </MagneticButton>
            </Link>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6 tracking-wide">Navigation</h4>
            <ul className="space-y-4">
              {[
                { name: "About", href: "/about" },
                { name: "Speaking", href: "/speaking" },
                { name: "Organisations", href: "/organisations" },
                { name: "Media", href: "/media" },
                { name: "Testimonials", href: "/testimonials" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm tracking-wide block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6 tracking-wide">Legal & Info</h4>
            <ul className="space-y-4 mb-8">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-sm tracking-wide block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors text-sm tracking-wide block">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/book" className="text-muted-foreground hover:text-primary transition-colors text-sm tracking-wide block">
                  Book Stanley
                </Link>
              </li>
            </ul>

            <h4 className="text-white font-serif text-lg mb-6 tracking-wide">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <a href={`mailto:${siteData.contact.email}`} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {siteData.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <a href={`tel:${siteData.contact.phone.replace(/[^0-9+]/g, '')}`} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {siteData.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
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
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-xs tracking-wider">Privacy Policy</Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors text-xs tracking-wider">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
