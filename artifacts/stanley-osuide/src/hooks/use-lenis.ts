import React, { useEffect } from "react";
import Lenis from "lenis";

export function useLenis() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const isAppleTouchDevice =
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

    if (prefersReducedMotion || isCoarsePointer || isAppleTouchDevice) {
      return;
    }

    const lenis = new Lenis({
      duration: 0.85,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth easeOutQuint
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    let frameId = 0;

    function raf(time: number) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }

    frameId = requestAnimationFrame(raf);

    // Setup anchor clicks to use Lenis
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      
      if (!anchor) return;
      
      const href = anchor.getAttribute("href");
      
      if (href && href.startsWith("#") && href.length > 1) {
        e.preventDefault();
        lenis.scrollTo(href, { offset: -80 }); // Offset for sticky navbar
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);
}
