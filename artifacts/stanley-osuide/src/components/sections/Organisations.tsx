import React from "react";
import { motion } from "framer-motion";
import { siteData } from "@/data/content";
import { SectionHeader } from "@/components/ui/section-header";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { ArrowUpRight } from "lucide-react";

const orgImages = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=85",
];

const orgSlugs = [
  "africa-investment-gateway",
  "john-chamberlain-sports",
  "biilm",
];

export function Organisations() {
  return (
    <section id="organisations" className="py-24 md:py-40 bg-background relative">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(hsl(215 68% 28% / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(215 68% 28% / 0.4) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeader
          title="Featured Organisations"
          subtitle="Leadership in Action"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {siteData.organisations.map((org, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="group relative h-full bg-card border border-border rounded-xl flex flex-col hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_30px_70px_hsla(215,68%,28%,0.15)] transition-all duration-500 ease-out overflow-hidden"
            >
              {/* Top accent line on hover */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-transparent group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-primary group-hover:to-transparent transition-all duration-500" />

              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={orgImages[i]}
                  alt={org.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Subtle gradient to make initials badge readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-foreground/10 to-transparent" />

                {/* Initials badge */}
                <div className="absolute bottom-5 left-5 h-12 w-12 border border-white/30 bg-white/20 backdrop-blur-md flex items-center justify-center font-serif text-base text-white group-hover:border-white/60 group-hover:scale-105 group-hover:bg-white/30 transition-all duration-500 rounded-lg">
                  {org.name.split(" ").map(w => w[0]).join("").substring(0, 2)}
                </div>
              </div>

              {/* Card body */}
              <div className="p-7 flex flex-col flex-1">
                <div className="text-primary text-[11px] tracking-widest uppercase mb-3 font-semibold">
                  {org.role}
                </div>
                <h3 className="text-lg font-serif text-foreground mb-3 leading-tight group-hover:text-primary transition-colors duration-300">
                  {org.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mt-auto">
                  {org.description}
                </p>
                <a
                  href={`/organisations#${orgSlugs[i]}`}
                  className="mt-6 inline-flex items-center justify-between gap-3 rounded-lg border border-border bg-background px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-primary hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  View Organisation
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
