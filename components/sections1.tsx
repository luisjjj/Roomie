"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BedDouble,
  Check,
  Clock,
  GraduationCap,
  Heart,
  Home,
  MessagesSquare,
  Search,
  SlidersHorizontal,
  Users,
  X,
} from "lucide-react";
import { IconBadge, Reveal, SectionHead, Tag } from "./ui";
import { track } from "@/lib/analytics";

const withoutCards = [
  { title: "Your friend's cousin", quote: "“He's cool apparently.”" },
  { title: "WhatsApp group", quote: "“Anybody still looking?”" },
  { title: "Random listing", quote: "“Nice room. No idea who's living there.”" },
  { title: "The surprise", quote: "“Wait... you sleep at 2AM?”" },
];

const withRows = [
  { title: "See the person, not just the room", desc: "Sleep schedule, cleanliness, noise and visitors, up front." },
  { title: "Match on budget and habits", desc: "Compatible ranges and routines, filtered around you." },
  { title: "Talk before you move in", desc: "Chat first. No surprises on resumption day." },
];

export function Problem() {
  const [tab, setTab] = useState<"without" | "with">("without");
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHead
          eyebrow="The problem"
          title="Finding a roommate shouldn't feel like gambling."
          copy="Finding someone to split rent with is easy. Finding someone you can actually live with is harder."
        />

        <Reveal className="mt-8 flex justify-center">
          <div className="inline-flex rounded-full border border-hairline bg-wash p-1">
            {(
              [
                { v: "without", label: "Without Roomie", icon: X },
                { v: "with", label: "With Roomie", icon: Check },
              ] as const
            ).map((t) => (
              <button
                key={t.v}
                onClick={() => setTab(t.v)}
                className={`flex items-center gap-1.5 rounded-full px-5 py-2 text-[14px] font-medium transition ${
                  tab === t.v ? "bg-ink text-white shadow" : "text-muted hover:text-ink"
                }`}
              >
                <t.icon size={14} strokeWidth={2.5} />
                {t.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-8">
          <AnimatePresence mode="wait">
            {tab === "without" ? (
              <motion.div
                key="without"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="grid gap-3 sm:grid-cols-2"
              >
                {withoutCards.map((c) => (
                  <div key={c.title} className="rounded-2xl border border-hairline p-6">
                    <p className="font-medium">{c.title}</p>
                    <p className="mt-1 text-[14.5px] text-muted">{c.quote}</p>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="with"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-2xl border border-hairline"
              >
                {withRows.map((r, i) => (
                  <div
                    key={r.title}
                    className={`flex items-start gap-4 bg-white p-6 ${i > 0 ? "border-t border-hairline" : ""}`}
                  >
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ink text-white">
                      <Check size={15} strokeWidth={2.5} />
                    </span>
                    <div>
                      <p className="font-medium">{r.title}</p>
                      <p className="mt-0.5 text-[14.5px] text-muted">{r.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    n: "01",
    icon: SlidersHorizontal,
    title: "Tell us about you",
    desc: "Budget, location, university, lifestyle and accommodation needs.",
  },
  {
    n: "02",
    icon: Search,
    title: "Discover people",
    desc: "Browse people looking for roommates around you.",
  },
  {
    n: "03",
    icon: Heart,
    title: "Match",
    desc: "Interested in each other? You match. Simple.",
  },
  {
    n: "04",
    icon: MessagesSquare,
    title: "Talk before you move in",
    desc: "Chat and check your lifestyles actually work together.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-hairline bg-wash/60 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHead
          eyebrow="How it works"
          title="Meet your potential roommate before you meet your roommate."
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="bg-white p-7">
              <IconBadge icon={s.icon} />
              <p className="mt-5 font-mono text-[12px] text-faint">{s.n}</p>
              <p className="mt-1 text-[17px] font-semibold tracking-[-0.01em]">{s.title}</p>
              <p className="mt-1.5 text-[14.5px] leading-relaxed text-muted">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href="#waitlist"
            onClick={() => track("how_it_works_click", { place: "steps" })}
            className="inline-flex items-center gap-1.5 rounded-full bg-ink px-6 py-3 text-[14.5px] font-medium text-white transition hover:bg-ink/85"
          >
            Get early access
          </a>
        </div>
      </div>
    </section>
  );
}

const students = [
  { name: "Amaka, 21", uni: "University of Abuja", budget: "₦350–500k", tags: ["Clean", "Early sleeper", "Studies at home"], move: "Within 1 month", initial: "A" },
  { name: "Tobi, 23", uni: "University of Lagos", budget: "₦500–700k", tags: ["Quiet", "Intern", "No smoking"], move: "ASAP", initial: "T" },
  { name: "Fatima, 20", uni: "ABU Zaria", budget: "₦300–450k", tags: ["Social", "Cooks", "Rare visitors"], move: "Next semester", initial: "F" },
  { name: "Chidi, 22", uni: "UNN", budget: "₦400–550k", tags: ["Night reader", "Clean", "Low noise"], move: "Within 1 month", initial: "C" },
];

export function University() {
  return (
    <section id="students" className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHead
          eyebrow="For students"
          title="Built around campus life."
          copy="Your first roommate. A new apartment. A new semester. A terrible previous roommate. Whatever brought you here, Roomie helps you find people looking for the same thing."
        />
        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-hairline shadow-frame">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-hairline px-6 py-5">
              <div className="flex items-center gap-3">
                <IconBadge icon={GraduationCap} />
                <div>
                  <p className="text-[16px] font-semibold">University of Abuja</p>
                  <p className="text-[13px] text-muted">Gwagwalada · ₦350k–₦500k · Move-in within 1 month</p>
                </div>
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-wash px-3 py-1.5 text-[12.5px] font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" /> 128 looking nearby
              </span>
            </div>
            <div className="grid gap-px bg-hairline sm:grid-cols-2">
              {students.map((s) => (
                <div key={s.name} className="bg-white p-6">
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-full bg-ink/[0.05] text-[16px] font-semibold">
                      {s.initial}
                    </div>
                    <div>
                      <p className="font-semibold">{s.name}</p>
                      <p className="text-[13px] text-muted">{s.uni}</p>
                    </div>
                    <p className="ml-auto font-mono text-[12px]">{s.budget}</p>
                  </div>
                  <div className="mt-3.5 flex flex-wrap gap-1.5">
                    {s.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                  <p className="mt-3 flex items-center gap-1.5 text-[12.5px] text-faint">
                    <Clock size={13} /> Move-in: {s.move}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-3 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
            Fictional preview
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const pains = [
  "Resumption is getting closer.",
  "Your old roommate is moving out.",
  "Your friends already have accommodation.",
  "You don't want to live alone.",
  "Your budget doesn't match the available rooms.",
  "You're tired of asking every WhatsApp group.",
];

export function StudentLife() {
  return (
    <section className="bg-ink py-24 text-white sm:py-32">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <Reveal>
          <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-white/50">
            Campus reality
          </p>
          <h2 className="mx-auto mt-4 max-w-xl text-[30px] font-semibold leading-[1.1] tracking-[-0.025em] sm:text-[40px]">
            Finding accommodation around school is stressful enough.
          </h2>
          <div className="mx-auto mt-10 max-w-xl overflow-hidden rounded-2xl border border-white/10 text-left">
            {pains.map((p, i) => (
              <div
                key={p}
                className={`flex items-center gap-3 px-5 py-3.5 text-[14.5px] text-white/80 ${i > 0 ? "border-t border-white/10" : ""}`}
              >
                {p === pains[5] ? (
                  <Users size={16} className="shrink-0 text-white/40" />
                ) : p === pains[0] ? (
                  <Clock size={16} className="shrink-0 text-white/40" />
                ) : p === pains[3] ? (
                  <BedDouble size={16} className="shrink-0 text-white/40" />
                ) : p === pains[4] ? (
                  <Home size={16} className="shrink-0 text-white/40" />
                ) : (
                  <span className="h-1 w-1 shrink-0 rounded-full bg-white/40" />
                )}
                {p}
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-md text-[17px] font-medium text-white/90">
            “Let me ask around” shouldn&apos;t be your entire accommodation strategy.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
