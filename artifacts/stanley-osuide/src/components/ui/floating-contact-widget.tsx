import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Mail, MessageSquare, Phone, X } from "lucide-react";

export default function FloatingContactWidget() {
  const [contactMenuOpen, setContactMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const refreshContactMenu = () => setContactMenuOpen(false);

  return (
    <>
      {contactMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/10 backdrop-blur-[2px] transition-all duration-300"
          onClick={() => setContactMenuOpen(false)}
        />
      )}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3.5">
        <AnimatePresence>
          {contactMenuOpen && (
            <div className="mb-2 flex flex-col items-end gap-3">
              {[
                { icon: <MessageSquare className="h-5 w-5 text-white" />, label: "WhatsApp", href: "https://wa.me/447752536750", bg: "bg-[#25D366]", shadow: "shadow-[0_4px_16px_rgba(37,211,102,0.35)]" },
                { icon: <Phone className="h-5 w-5 text-white" />, label: "Call Us", href: "tel:+447752536750", bg: "bg-[#3b82f6]", shadow: "shadow-[0_4px_16px_rgba(59,130,246,0.35)]" },
                { icon: <Mail className="h-5 w-5 text-white" />, label: "Email Us", href: "mailto:speaker@stanleyosuide.com", bg: "bg-[#C9A227]", shadow: "shadow-[0_4px_16px_rgba(201,162,39,0.35)]" },
              ].map((act, i) => (
                <motion.a
                  key={act.label}
                  href={act.href}
                  target={act.label === "WhatsApp" ? "_blank" : undefined}
                  rel={act.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                  onClick={refreshContactMenu}
                  initial={{ opacity: 0, y: 15, scale: 0.85 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.85 }}
                  transition={{ duration: 0.2, delay: i * 0.04 }}
                  className="flex cursor-pointer items-center gap-3 rounded-full border border-white/10 bg-[#111111] p-1 pr-4 shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all hover:shadow-[0_12px_36px_rgba(201,162,39,0.2)]"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="select-none pl-3 text-[12px] font-bold text-white/80">{act.label}</span>
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full ${act.bg} ${act.shadow}`}>{act.icon}</div>
                </motion.a>
              ))}
            </div>
          )}
        </AnimatePresence>

        <motion.button
          type="button"
          aria-label={contactMenuOpen ? "Close contact options" : "Open contact options"}
          onClick={() => setContactMenuOpen(!contactMenuOpen)}
          className={`relative flex h-14 w-14 items-center justify-center rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.4)] ring-2 ring-primary/30 transition-all duration-300 will-change-transform ${contactMenuOpen ? "bg-[#111]" : "bg-[#C9A227]"}`}
          animate={contactMenuOpen || shouldReduceMotion ? { scale: 1, x: 0 } : { scale: [1, 1.05, 1], x: [0, -1, 1, 0] }}
          transition={contactMenuOpen || shouldReduceMotion ? { duration: 0.2 } : { duration: 1.45, repeat: Infinity, repeatDelay: 0.35, ease: "easeInOut" }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
        >
          {!contactMenuOpen && !shouldReduceMotion && (
            <>
              <motion.span className="pointer-events-none absolute -inset-2.5 rounded-full border-2 border-primary bg-primary/20" animate={{ opacity: [0.95, 0], scale: [1, 1.55] }} transition={{ duration: 1.05, repeat: Infinity, ease: "easeOut" }} />
              <motion.span className="pointer-events-none absolute -inset-4 rounded-full border border-primary/50 bg-primary/10" animate={{ opacity: [0.7, 0], scale: [1, 1.85] }} transition={{ duration: 1.05, repeat: Infinity, delay: 0.32, ease: "easeOut" }} />
            </>
          )}
          <motion.div
            animate={contactMenuOpen ? { rotate: 90 } : shouldReduceMotion ? { rotate: 0 } : { rotate: [0, -16, 16, -14, 14, -10, 10, -6, 6, 0] }}
            transition={contactMenuOpen || shouldReduceMotion ? { duration: 0.2 } : { duration: 0.95, repeat: Infinity, repeatDelay: 0.25, ease: "easeInOut" }}
            className="relative z-10 flex items-center justify-center"
          >
            {contactMenuOpen ? <X className="h-6 w-6 text-white" /> : <Phone className="h-6 w-6 text-black" />}
          </motion.div>
        </motion.button>
      </div>
    </>
  );
}