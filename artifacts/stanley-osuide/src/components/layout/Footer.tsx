import React from "react";
import { siteData } from "@/data/content";
import { Link } from "wouter";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Linkedin, Twitter, Instagram, Youtube, Facebook, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/stanleyosuide/", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/stanleyosuide", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/stanleyosuide", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com/@stanleyosuide", label: "YouTube" },
    { icon: Facebook, href: "https://facebook.com/stanleyosuide", label: "Facebook" },
  ];

  return (
    <footer className="bg-secondary pt-20 pb-12 border-t border-border relative overflow-hidden">
      {/* Subtle top accent */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex flex-col group inline-block mb-6 w-max">
              <span className="font-serif text-3xl font-bold tracking-widest text-foreground">
                STANLEY
              </span>
              <span className="font-sans text-xs tracking-[0.4em] text-primary transition-colors group-hover:text-foreground/50">
                OSUIDE
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm mt-4 text-sm leading-relaxed mb-8">
              {siteData.hero.tagline}
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mb-8">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

            <Link href="/book">
              <MagneticButton className="bg-primary text-primary-foreground px-8 py-3 text-xs uppercase tracking-widest font-bold hover:bg-primary/90 transition-colors shadow-sm">
                Book Stanley
              </MagneticButton>
            </Link>
          </div>

          {/* Navigation column */}
          <div>
            <h4 className="text-foreground font-serif text-lg mb-6 tracking-wide">Navigation</h4>
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

          {/* Legal & Contact column */}
          <div>
            <h4 className="text-foreground font-serif text-lg mb-6 tracking-wide">Legal & Info</h4>
            <ul className="space-y-4 mb-10">
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

            <h4 className="text-foreground font-serif text-lg mb-6 tracking-wide">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href={`mailto:${siteData.contact.email}`} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {siteData.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href={`tel:${siteData.contact.phone.replace(/[^0-9+]/g, '')}`} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {siteData.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  {siteData.contact.location}
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
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
