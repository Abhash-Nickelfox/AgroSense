import { useEffect } from "react";

/**
 * Observes every element with the `.reveal` class currently in the DOM and
 * adds `.active` once it scrolls into view, matching the Stitch design's
 * scroll-reveal animation.
 */
export default function useReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal, .reveal-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    reveals.forEach((reveal) => observer.observe(reveal));

    return () => observer.disconnect();
  }, []);
}
