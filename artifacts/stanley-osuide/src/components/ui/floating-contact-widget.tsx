import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Mail, MessageSquare, Phone, X } from "lucide-react";

export default function FloatingContactWidget() {
  const [contactMenuOpen, setContactMenuOpen] = useState(false);
  const [isCoarsePointer, setIsCoarsePointer] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const shouldLimitMotion = shouldReduceMotion || isCoarsePointer;
  const refreshContactMenu = () => setContactMenuOpen(false);

  useEffect(() => {
    const query = window.matchMedia("(pointer: coarse)");
    const update = () => setIsCoarsePointer(query.matches);

    update();
    query.addEventListener("change", update);

    return () => query.removeEventListener("change", update);
  }, []);

  return (
    <>
      {contactMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-foreground/5 backdrop-blur-[2px] transition-all duration-300"
          onClick={() => setContactMenuOpen(false)}
        />
      )}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3.5">
        <AnimatePresence>
          {contactMenuOpen && (
            <div className="mb-2 flex flex-col items-end gap-3">
              {[
                { icon: <MessageSquare className="h-5 w-5 text-white" />, label: "WhatsApp", href: "https://wa.me/447956823267", bg: "bg-[#25D366]", shadow: "shadow-[0_4px_16px_rgba(37,211,102,0.35)]" },
                { icon: <Phone className="h-5 w-5 text-white" />, label: "Call Us", href: "tel:+447956823267", bg: "bg-[#3b82f6]", shadow: "shadow-[0_4px_16px_rgba(59,130,246,0.35)]" },
                { icon: <Mail className="h-5 w-5 text-white" />, label: "Email Us", href: "mailto:speaker@stanleyosuide.com", bg: "bg-primary", shadow: "shadow-[0_4px_16px_hsla(215,68%,28%,0.35)]" },
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
                  className="flex cursor-pointer items-center gap-3 rounded-full border border-border bg-card p-1 pr-4 shadow-[0_8px_30px_hsla(215,68%,28%,0.12)] transition-all hover:shadow-[0_12px_36px_hsla(215,68%,28%,0.18)] hover:border-primary/20"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="select-none pl-3 text-[12px] font-bold text-foreground/70">{act.label}</span>
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full ${act.bg} ${act.shadow}`}>{act.icon}</div>
                </motion.a>
              ))}
            </div>
          )}
        </AnimatePresence>

        {/* Main FAB button */}
        <motion.button
          type="button"
          aria-label={contactMenuOpen ? "Close contact options" : "Open contact options"}
          onClick={() => setContactMenuOpen(!contactMenuOpen)}
          className={`relative flex h-14 w-14 items-center justify-center rounded-full shadow-[0_8px_24px_hsla(215,68%,28%,0.28)] transition-all duration-300 will-change-transform ${
            contactMenuOpen
              ? "bg-card border-2 border-border"
              : "bg-primary border-2 border-primary/20 text-white"
          }`}
          animate={contactMenuOpen || shouldLimitMotion ? { scale: 1, x: 0 } : { scale: [1, 1.05, 1], x: [0, -1, 1, 0] }}
          transition={contactMenuOpen || shouldLimitMotion ? { duration: 0.2 } : { duration: 1.45, repeat: Infinity, repeatDelay: 0.35, ease: "easeInOut" }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
        >
          {!contactMenuOpen && !shouldLimitMotion && (
            <>
              <motion.span className="pointer-events-none absolute -inset-2.5 rounded-full border-2 border-sky-500 bg-sky-500/15" animate={{ opacity: [0.95, 0], scale: [1, 1.55] }} transition={{ duration: 1.05, repeat: Infinity, ease: "easeOut" }} />
              <motion.span className="pointer-events-none absolute -inset-4 rounded-full border border-sky-500/40 bg-sky-500/8" animate={{ opacity: [0.7, 0], scale: [1, 1.85] }} transition={{ duration: 1.05, repeat: Infinity, delay: 0.32, ease: "easeOut" }} />
            </>
          )}
          <motion.div
            animate={contactMenuOpen ? { rotate: 90 } : shouldLimitMotion ? { rotate: 0 } : { rotate: [0, -16, 16, -14, 14, -10, 10, -6, 6, 0] }}
            transition={contactMenuOpen || shouldLimitMotion ? { duration: 0.2 } : { duration: 0.95, repeat: Infinity, repeatDelay: 0.25, ease: "easeInOut" }}
            className="relative z-10 flex items-center justify-center"
          >
            {contactMenuOpen
              ? <X className="h-6 w-6 text-foreground" />
              : <Phone className="h-6 w-6 text-sky-200 fill-sky-200/10" strokeWidth={2.2} />
            }
          </motion.div>
        </motion.button>
      </div>
    </>
  );
}
