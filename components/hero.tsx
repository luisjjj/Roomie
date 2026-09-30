"use client";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Check,
  Heart,
  Moon,
  Sparkles,
  Users,
  VolumeX,
  X,
} from "lucide-react";
import { track } from "@/lib/analytics";
import { Tag } from "./ui";

const habits = [
  { icon: Moon, label: "Sleeps", value: "10:30 PM" },
  { icon: Sparkles, label: "Cleanliness", value: "High" },
  { icon: BookOpen, label: "Study", value: "Often" },
  { icon: VolumeX, label: "Noise", value: "Low" },
];

function ProfileFrame() {
  const reduce = !!useReducedMotion();
  return (
    <motion.div
      initial={reduce ? {} : { opacity: 0, y: 28 }}
      animate={reduce ? {} : { opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto w-full max-w-[560px]"
    >
      <div className="overflow-hidden rounded-2xl border border-hairline bg-white shadow-frame">
        <div className="flex items-center gap-1.5 border-b border-hairline px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-ink/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/10" />
          <span className="ml-2 font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
            Roomie — Preview
          </span>
        </div>

        <div className="p-5 sm:p-6">
          <div className="flex items-center gap-4">
            <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-ink text-[22px] font-semibold text-white">
              D
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <p className="text-[20px] font-semibold tracking-[-0.01em]">Daniel, 22</p>
                <BadgeCheck size={17} className="shrink-0 text-ink/40" />
              </div>
              <p className="mt-0.5 text-[13.5px] text-muted">University of Abuja</p>
              <p className="mt-0.5 font-mono text-[12.5px] text-ink">₦450k–₦600k / year</p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {["Early sleeper", "Clean", "Quiet", "Student", "No smoking"].map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2">
            {habits.map((h) => (
              <div
                key={h.label}
                className="flex items-center gap-2.5 rounded-xl bg-wash px-3.5 py-3"
              >
                <h.icon size={16} strokeWidth={1.8} className="shrink-0 text-ink/60" />
                <p className="text-[13px] text-muted">
                  {h.label}: <span className="font-medium text-ink">{h.value}</span>
                </p>
              </div>
            ))}
          </div>

          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            <div className="rounded-xl border border-hairline p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                You agree on
              </p>
              <ul className="mt-2 space-y-1.5 text-[13.5px]">
                {["Quiet evenings", "Clean spaces", "Similar budget"].map((x) => (
                  <li key={x} className="flex items-center gap-2">
                    <Check size={14} strokeWidth={2.5} className="text-ink" /> {x}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-accent-soft p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent-dark">
                Worth talking about
              </p>
              <ul className="mt-2 space-y-1.5 text-[13.5px] text-ink">
                {["Visitors", "Cooking", "Shared expenses"].map((x) => (
                  <li key={x} className="flex items-center gap-2">
                    <Users size={14} className="text-accent" /> {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <button
              type="button"
              className="flex flex-1 items-center justify-center gap-2 rounded-full border border-hairline py-3 text-[14px] font-medium"
            >
              <X size={16} /> Pass
            </button>
            <button
              type="button"
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-ink py-3 text-[14px] font-medium text-white"
            >
              <Heart size={16} /> Interested
            </button>
          </div>
        </div>
      </div>
      <p className="mt-3 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
        Fictional preview
      </p>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section id="top" className="pt-32 sm:pt-40">
      <div className="mx-auto max-w-5xl px-5 text-center">
        <a
          href="#students"
          className="inline-flex items-center gap-2 rounded-full border border-hairline bg-white px-3.5 py-1.5 text-[13px] text-ink/70 transition hover:border-ink/25"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Built for Nigeria — starting with campuses
        </a>
        <h1 className="mx-auto mt-6 max-w-3xl text-[40px] font-semibold leading-[1.04] tracking-[-0.035em] sm:text-[64px]">
          Find someone you&apos;ll actually enjoy living with.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-[16.5px] leading-relaxed text-muted sm:text-[18px]">
          Roomie helps you find compatible roommates based on your lifestyle, budget,
          location and accommodation needs — not just who happens to have a spare room.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#waitlist"
            onClick={() => track("hero_cta_click", { place: "hero_primary" })}
            className="group inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-ink px-7 py-3.5 text-[15px] font-medium text-white transition hover:bg-ink/85 sm:w-auto"
          >
            Join early access
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#how-it-works"
            onClick={() => track("how_it_works_click", { place: "hero" })}
            className="inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-hairline px-7 py-3.5 text-[15px] font-medium transition hover:border-ink/30 sm:w-auto"
          >
            See how it works
            <ArrowDown size={16} />
          </a>
        </div>
      </div>
      <div className="mx-auto mt-14 max-w-5xl px-5">
        <ProfileFrame />
      </div>
    </section>
  );
}

export function ProofStrip() {
  const items = [
    { channel: "WhatsApp groups", quote: "“Anybody looking for a roommate?”" },
    { channel: "Friends of friends", quote: "“My guy knows someone...”" },
    { channel: "Random posts", quote: "“₦500k. DM for details.”" },
  ];
  return (
    <section className="mt-20 border-y border-hairline bg-wash/60">
      <div className="mx-auto max-w-5xl px-5 py-12">
        <p className="text-center text-[15px] font-medium">
          Built for people who are tired of random roommate hunting.
        </p>
        <div className="mt-7 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-3">
          {items.map((i) => (
            <div key={i.channel} className="bg-white p-6 text-center">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
                {i.channel}
              </p>
              <p className="mt-2 text-[15px] text-ink/80">{i.quote}</p>
            </div>
          ))}
        </div>
        <p className="mt-7 text-center text-[17px] font-semibold tracking-[-0.01em]">
          There should be an easier way.
        </p>
      </div>
    </section>
  );
}
