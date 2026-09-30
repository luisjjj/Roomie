"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Chip({ children, tone = "default" }: { children: ReactNode; tone?: "default" | "accent" | "dark" }) {
  const styles =
    tone === "accent"
      ? "bg-roomie-soft text-roomie-dark border-roomie/20"
      : tone === "dark"
      ? "bg-ink text-white border-ink"
      : "bg-white text-ink border-black/10";
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-[12px] font-semibold leading-none ${styles}`}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  kicker,
  title,
  copy,
}: {
  kicker: string;
  title: string;
  copy?: string;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-roomie">{kicker}</p>
      <h2 className="mt-3 text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl">{title}</h2>
      {copy ? <p className="mt-4 text-[16px] leading-relaxed text-muted">{copy}</p> : null}
    </Reveal>
  );
}
