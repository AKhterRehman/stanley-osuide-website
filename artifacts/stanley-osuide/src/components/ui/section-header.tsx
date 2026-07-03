import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeader({ title, subtitle, align = "center" }: SectionHeaderProps) {
  return (
    <motion.div 
      className={`mb-16 md:mb-24 ${align === "center" ? "text-center" : "text-left"}`}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {subtitle && (
        <span className="text-primary tracking-[0.2em] text-sm md:text-xs uppercase font-semibold mb-4 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-tight">
        {title}
      </h2>
    </motion.div>
  );
}
