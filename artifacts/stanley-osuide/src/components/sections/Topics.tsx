import React from "react";
import { motion } from "framer-motion";
import { siteData } from "@/data/content";
import { SectionHeader } from "@/components/ui/section-header";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { ArrowUpRight } from "lucide-react";

export function Topics() {
  return (
    <section id="topics" className="py-24 md:py-40 bg-background relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeader
          title="Signature Speaking Topics"
          subtitle="What He Speaks About"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {siteData.topics.map((topic, i) => (
            <motion.div
              key={topic.id}
              variants={fadeInUp}
              className="group relative bg-card p-8 md:p-10 rounded-xl border border-border hover:border-primary/40 transition-all duration-500 flex flex-col h-full overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_50px_hsla(215,68%,28%,0.10)]"
            >
              {/* Background tint on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

              <div className="flex justify-between items-start mb-8 relative z-10">
                <span className="text-3xl font-serif text-primary/25 group-hover:text-primary/60 transition-colors duration-300">
                  {topic.id}
                </span>
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/40 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl font-serif text-foreground mb-4 leading-snug group-hover:text-primary transition-colors duration-300 relative z-10">
                {topic.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mt-auto relative z-10">
                {topic.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
