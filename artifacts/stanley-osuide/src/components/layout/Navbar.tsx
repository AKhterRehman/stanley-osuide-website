import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Speaking", href: "/speaking" },
  { name: "Organisations", href: "/organisations" },
  { name: "Media", href: "/media" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-4 glass shadow-lg" : "py-6 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="flex flex-col group">
            <span className="font-serif text-xl md:text-2xl font-bold tracking-wider text-white">
              STANLEY
            </span>
            <span className="font-sans text-[10px] tracking-[0.3em] text-primary transition-colors group-hover:text-white">
              OSUIDE
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm transition-colors tracking-wide ${
                    isActive(link.href) 
                      ? "text-primary font-semibold" 
                      : "text-white/70 font-medium hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Link href="/book">
              <Button
                variant="gold"
                className="text-xs uppercase tracking-widest px-8"
              >
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            aria-label="Open navigation menu"
            className="md:hidden text-white hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex flex-col justify-center items-center"
          >
            <button
              aria-label="Close navigation menu"
              className="absolute top-6 right-6 text-white hover:text-primary transition-colors p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link, i) => (
                <Link key={link.name} href={link.href}>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-3xl font-serif block transition-colors ${
                      isActive(link.href) ? "text-primary" : "text-white hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </motion.span>
                </Link>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-8"
              >
                <Link href="/book" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button
                    variant="gold"
                    size="lg"
                    className="w-full text-sm uppercase tracking-widest px-12"
                  >
                    Book Stanley
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
