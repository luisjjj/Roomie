"use client";
import { Reveal, SectionHeading, Chip } from "./ui";
import { track } from "@/lib/analytics";

export function Problem() {
  const cards = [
    { title: "Your friend's cousin", quote: "“He's cool apparently.”", emoji: "🧑🏾" },
    { title: "WhatsApp group", quote: "“Anybody still looking?”", emoji: "💬" },
    { title: "Random listing", quote: "“Nice room. No idea who's living there.”", emoji: "🏠" },
    { title: "The surprise", quote: "“Wait... you sleep at 2AM?”", emoji: "😳" },
  ];
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="The problem"
          title="Finding a roommate shouldn't feel like gambling."
          copy="Finding someone to split rent with is easy. Finding someone you can actually live with is harder."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <div className="h-full rounded-3xl border border-black/5 bg-white p-6 shadow-card">
                <div className="text-3xl">{c.emoji}</div>
                <p className="mt-3 font-extrabold">{c.title}</p>
                <p className="mt-1 text-[15px] italic text-muted">{c.quote}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mx-auto mt-8 max-w-xl rounded-3xl bg-ink p-6 text-center text-white">
          <p className="text-[17px] font-bold">Roomie is designed to help you understand the person — not just the room.</p>
        </Reveal>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    { n: "01", t: "Tell us about you", d: "Set your budget, location, university, lifestyle and accommodation needs.", tags: ["Budget", "Location", "Lifestyle"] },
    { n: "02", t: "Discover people", d: "Browse people looking for roommates around you. Real habits, not just photos.", tags: ["Profile cards", "Nearby first"] },
    { n: "03", t: "Match", d: "Interested in each other? You match. Simple.", tags: ["Mutual interest"] },
    { n: "04", t: "Talk before you move in", d: "Chat and figure out whether your lifestyles actually work together.", tags: ["Chat", "No surprises"] },
  ];
  return (
    <section id="how-it-works" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="How it works"
          title="Meet your potential roommate before you meet your roommate."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.07}>
              <div className="h-full rounded-3xl bg-cream p-6">
                <p className="text-[28px] font-black text-roomie">{s.n}</p>
                <p className="mt-2 text-[18px] font-extrabold">{s.t}</p>
                <p className="mt-2 text-[14.5px] leading-relaxed text-muted">{s.d}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href="#waitlist"
            onClick={() => track("how_it_works_click", { place: "steps" })}
            className="inline-block rounded-full bg-ink px-7 py-3.5 font-bold text-white hover:bg-roomie"
          >
            Get early access →
          </a>
        </div>
      </div>
    </section>
  );
}

const students = [
  { name: "Amaka, 21", uni: "University of Abuja", budget: "₦350–500k", tags: ["Clean", "Early sleeper", "Studies at home"], move: "Within 1 month", initial: "A", color: "bg-roomie" },
  { name: "Tobi, 23", uni: "UniLag", budget: "₦500–700k", tags: ["Quiet", "9–5 intern", "No smoking"], move: "ASAP", initial: "T", color: "bg-leaf" },
  { name: "Fatima, 20", uni: "ABU Zaria", budget: "₦300–450k", tags: ["Social", "Cooks", "Visitors rarely"], move: "Next semester", initial: "F", color: "bg-amber-600" },
  { name: "Chidi, 22", uni: "UNN", budget: "₦400–550k", tags: ["Night reader", "Clean", "Low noise"], move: "Within 1 month", initial: "C", color: "bg-sky-700" },
];

export function University() {
  return (
    <section id="students" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="For students"
          title="Built around campus life."
          copy="Your first roommate. A new apartment. A new semester. A terrible previous roommate. Whatever brought you here, Roomie helps you find people looking for the same thing."
        />
        <Reveal className="mx-auto mt-10 max-w-4xl rounded-[28px] border border-black/10 bg-white p-5 shadow-card sm:p-7">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-[22px] font-extrabold">University of Abuja</p>
              <p className="text-[14px] text-muted">Looking for roommates • 📍 Gwagwalada • ₦350k–₦500k • Move-in: Within 1 month</p>
            </div>
            <span className="rounded-full bg-green-100 px-3 py-1.5 text-[12px] font-bold text-green-800">● 128 looking nearby (preview)</span>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {students.map((s) => (
              <div key={s.name} className="rounded-2xl bg-cream p-4">
                <div className="flex items-center gap-3">
                  <div className={`grid h-12 w-12 place-items-center rounded-xl text-lg font-black text-white ${s.color}`}>{s.initial}</div>
                  <div>
                    <p className="font-extrabold">{s.name}</p>
                    <p className="text-[13px] text-muted">{s.uni} • {s.budget}</p>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>
                <p className="mt-2 text-[12.5px] font-semibold text-muted">Move-in: {s.move}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-center text-[11px] text-muted">Fictional student previews — not real people</p>
        </Reveal>
      </div>
    </section>
  );
}

export function StudentLife() {
  const pains = [
    "Resumption is getting closer.",
    "Your old roommate is moving out.",
    "Your friends already have accommodation.",
    "You don't want to live alone.",
    "Your budget doesn't match the available rooms.",
    "You're tired of asking every WhatsApp group.",
  ];
  return (
    <section className="bg-leaf py-16 text-white sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
            Because finding accommodation around school is already stressful enough.
          </h2>
          <div className="mx-auto mt-8 grid max-w-2xl gap-2 text-left">
            {pains.map((p) => (
              <div key={p} className="rounded-2xl bg-white/10 px-5 py-3.5 text-[15px] font-medium">
                • {p}
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-md text-[18px] font-bold text-amber-200">
            “Let me ask around” shouldn&apos;t be your entire accommodation strategy.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
