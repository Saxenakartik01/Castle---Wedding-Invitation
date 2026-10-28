import { useEffect } from "react";

/**
 * Attaches an IntersectionObserver to every element carrying a
 * `.reveal` or `.reveal-scale` class and toggles `.is-visible`
 * when the element scrolls into view.
 */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal, .reveal-scale");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay;
            if (delay) el.style.transitionDelay = `${delay}ms`;
            el.classList.add("is-visible");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
