"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

type CursorMode = "default" | "link" | "button" | "drag";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState<CursorMode>("default");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 500, damping: 32 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 32 });
  const outerX = useSpring(cursorX, { stiffness: 180, damping: 24 });
  const outerY = useSpring(cursorY, { stiffness: 180, damping: 24 });

  useEffect(() => {
    const coarse =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(!coarse && !reduced);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = document.elementFromPoint(e.clientX, e.clientY);
      if (!target) {
        setMode("default");
        return;
      }
      if (target.closest("[data-cursor-drag]")) setMode("drag");
      else if (target.closest("a, [role='link']")) setMode("link");
      else if (target.closest("button, [data-magnetic]")) setMode("button");
      else setMode("default");
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, [cursorX, cursorY, enabled]);

  useEffect(() => {
    if (!enabled) return;
    const magnetics = Array.from(
      document.querySelectorAll<HTMLElement>("[data-magnetic]"),
    );
    const cleanups: Array<() => void> = [];

    magnetics.forEach((el) => {
      const onMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
      };
      const onLeave = () => {
        el.style.transform = "translate(0,0)";
      };
      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
      cleanups.push(() => {
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseleave", onLeave);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, [enabled]);

  if (!enabled) return null;

  const ringColor =
    mode === "link"
      ? "border-cyan-tech/70"
      : mode === "button"
        ? "border-gold/70"
        : mode === "drag"
          ? "border-green-neon/70"
          : "border-white/40";

  const dotColor =
    mode === "link"
      ? "bg-cyan-tech"
      : mode === "button"
        ? "bg-gold"
        : mode === "drag"
          ? "bg-green-neon"
          : "bg-white";

  return (
    <>
      <motion.div
        className={`pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full ${dotColor} mix-blend-difference`}
        style={{ x: springX, y: springY }}
        aria-hidden
      />
      <motion.div
        className={`pointer-events-none fixed left-0 top-0 z-[9998] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border ${ringColor} mix-blend-difference`}
        style={{ x: outerX, y: outerY }}
        aria-hidden
      />
    </>
  );
}
