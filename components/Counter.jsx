"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts up to `value` the first time it scrolls into view.
 * The server-rendered markup already contains the final figure, so the number
 * is correct without JS (and in static HTML / crawlers); the animation only
 * replaces it once the element is actually on screen.
 */
export default function Counter({ value, decimals = 0 }) {
  const ref = useRef(null);
  const [current, setCurrent] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce || !("IntersectionObserver" in window)) {
      setCurrent(value);
      return;
    }

    let raf = 0;
    let started = false;

    const run = () => {
      const start = performance.now();
      const duration = 1500;
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        setCurrent(value * (1 - Math.pow(1 - p, 3)));
        if (p < 1) raf = requestAnimationFrame(tick);
        else setCurrent(value);
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true;
            io.unobserve(entry.target);
            setCurrent(0);
            run();
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  const text =
    decimals > 0 ? current.toFixed(decimals) : Math.round(current).toLocaleString("en-US");

  return <span ref={ref}>{text}</span>;
}
