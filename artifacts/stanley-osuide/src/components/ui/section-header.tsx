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
        <div className={`flex items-center gap-3 mb-5 ${align === "center" ? "justify-center" : "justify-start"}`}>
          <div className="w-8 h-[2px] bg-primary rounded-full" />
          <span className="text-primary tracking-[0.22em] text-xs uppercase font-semibold">
            {subtitle}
          </span>
          {align === "center" && <div className="w-8 h-[2px] bg-primary rounded-full" />}
        </div>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground tracking-tight">
        {title}
      </h2>
    </motion.div>
  );
}
