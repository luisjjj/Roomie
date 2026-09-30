"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 20,
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
      viewport={{ once: true, margin: "-64px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-[12px] font-medium uppercase tracking-[0.16em] text-muted">
      {children}
    </p>
  );
}

export function SectionHead({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: ReactNode;
  copy?: string;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 text-[32px] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-[44px]">
        {title}
      </h2>
      {copy ? (
        <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-muted">{copy}</p>
      ) : null}
    </Reveal>
  );
}

export function IconBadge({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-ink/[0.04]">
      <Icon size={19} strokeWidth={1.8} className="text-ink" />
    </span>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-hairline bg-white px-3 py-1 text-[12.5px] font-medium text-ink">
      {children}
    </span>
  );
}

export function FloatCard({
  children,
  className,
  lift = -6,
}: {
  children: ReactNode;
  className?: string;
  lift?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      whileHover={{ y: lift }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      {children}
    </motion.div>
  );
}
