"use client";
import {
  Banknote,
  BookOpen,
  Briefcase,
  Check,
  Coffee,
  EyeOff,
  Flag,
  KeyRound,
  MapPin,
  Minus,
  Moon,
  Music,
  ShieldCheck,
  Sparkles,
  Truck,
  Backpack,
  Users,
  UtensilsCrossed,
  VolumeX,
} from "lucide-react";
import { IconBadge, FloatCard, Reveal, SectionHead, Tag } from "./ui";

const profiles = [
  { icon: Briefcase, label: "Young professional", loc: "Lagos", budget: "₦800k–₦1.5m", tags: ["Works 9–5", "Quiet evenings", "Clean"], initial: "K" },
  { icon: Backpack, label: "NYSC member", loc: "Abuja", budget: "₦300k–₦500k", tags: ["Moving soon", "Shared flat", "Flexible"], initial: "S" },
  { icon: Truck, label: "Relocating", loc: "Port Harcourt", budget: "Flexible", tags: ["Needs a place", "Low noise", "No smoking"], initial: "E" },
];

export function Everyone() {
  return (
    <section id="everyone" className="border-t border-hairline bg-wash/60 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHead
          eyebrow="Not just students"
          title="Not a student? Roomie is for you too."
          copy="Young professionals, NYSC members, people relocating. Anyone who'd rather share a place than live alone."
        />
        <div className="mt-12 grid gap-3 md:grid-cols-3">
          {profiles.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.06}>
              <FloatCard className="h-full transition-shadow duration-300 hover:shadow-frame">
              <div className="h-full rounded-2xl border border-hairline bg-white p-7">
                <div className="flex items-center justify-between">
                  <IconBadge icon={p.icon} />
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-ink/[0.05] text-[15px] font-semibold">
                    {p.initial}
                  </span>
                </div>
                <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
                  {p.label}
                </p>
                <p className="mt-1.5 flex items-center gap-1.5 text-[16px] font-semibold">
                  <MapPin size={15} className="text-muted" /> {p.loc}
                  <span className="font-mono text-[12px] font-normal text-muted">· {p.budget}</span>
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
              </FloatCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const youRows = [
  { icon: Moon, text: "Sleeps 10:30 PM" },
  { icon: Sparkles, text: "Cleanliness: high" },
  { icon: VolumeX, text: "Noise: low" },
  { icon: Users, text: "Visitors: rarely" },
  { icon: BookOpen, text: "Studies at home" },
];
const themRows = [
  { icon: Moon, text: "Sleeps 11 PM" },
  { icon: Sparkles, text: "Cleanliness: high" },
  { icon: VolumeX, text: "Noise: low" },
  { icon: Users, text: "Visitors: sometimes" },
  { icon: BookOpen, text: "Studies at home" },
];

export function Compatibility() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5">
        <SectionHead
          eyebrow="Compatibility"
          title="It's more than “Do you have a room?”"
          copy="Two people can have the same budget and still be terrible roommates."
        />
        <Reveal className="mt-12">
          <FloatCard className="overflow-hidden rounded-2xl border border-hairline bg-white">
          <div className="grid sm:grid-cols-2">
            <div className="p-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">You</p>
              <ul className="mt-4 space-y-3">
                {youRows.map((r) => (
                  <li key={r.text} className="flex items-center gap-2.5 text-[14.5px]">
                    <r.icon size={16} strokeWidth={1.8} className="text-ink/50" /> {r.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-hairline bg-wash/60 p-7 sm:border-l sm:border-t-0">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
                Them · Preview
              </p>
              <ul className="mt-4 space-y-3">
                {themRows.map((r) => (
                  <li key={r.text} className="flex items-center gap-2.5 text-[14.5px]">
                    <r.icon size={16} strokeWidth={1.8} className="text-ink/50" /> {r.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid border-t border-hairline sm:grid-cols-2">
            <div className="flex items-start gap-3 p-6">
              <Check size={17} strokeWidth={2.5} className="mt-0.5 shrink-0" />
              <p className="text-[14px] leading-relaxed">
                <span className="font-medium">You agree on</span>
                <span className="text-muted">: quiet nights, clean spaces, similar routines.</span>
              </p>
            </div>
            <div className="flex items-start gap-3 border-t border-hairline p-6 sm:border-l sm:border-t-0">
              <Minus size={17} strokeWidth={2.5} className="mt-0.5 shrink-0 text-accent" />
              <p className="text-[14px] leading-relaxed">
                <span className="font-medium">Talk about</span>
                <span className="text-muted">: visitors, cooking, shared expenses.</span>
              </p>
            </div>
          </div>
          </FloatCard>
        </Reveal>
        <p className="mt-4 text-center text-[13px] text-faint">
          No fake “97% compatibility” scores. Roomie is about conversation and informed decisions.
        </p>
      </div>
    </section>
  );
}

const questions = [
  { icon: Users, label: "Visitors", q: "“What happens when someone wants to bring a friend over?”" },
  { icon: Sparkles, label: "Cleaning", q: "“What does 'clean' actually mean to both of you?”" },
  { icon: Banknote, label: "Money", q: "“How are electricity, Wi-Fi and shared expenses handled?”" },
  { icon: KeyRound, label: "Moving out", q: "“What happens if one person needs to leave early?”" },
  { icon: Music, label: "Noise", q: "“How late is too late for music?”" },
  { icon: UtensilsCrossed, label: "Food", q: "“Are we cooking together or minding our business?”" },
];

export function Awkward() {
  return (
    <section className="border-t border-hairline bg-wash/60 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHead
          eyebrow="Real talk"
          title="Before you sign the lease, talk about the awkward stuff."
        />
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {questions.map((c, i) => (
            <Reveal key={c.label} delay={(i % 3) * 0.06}>
              <div className="h-full rounded-2xl border border-hairline bg-white p-6">
                <IconBadge icon={c.icon} />
                <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
                  {c.label}
                </p>
                <p className="mt-1.5 text-[15.5px] font-medium leading-snug">{c.q}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const safety = [
  { icon: ShieldCheck, title: "Identity verification", desc: "Phone verification and, where practical, university verification." },
  { icon: EyeOff, title: "Privacy controls", desc: "Don't expose exact addresses publicly. Share details when you choose to." },
  { icon: Flag, title: "Report & block", desc: "Report suspicious or inappropriate behaviour. Bad actors get removed." },
  { icon: Coffee, title: "Meet in public first", desc: "Meet in a public place and tell someone where you're going." },
];

export function Safety() {
  return (
    <section id="safety" className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHead
          eyebrow="Safety"
          title="Find people. Keep your boundaries."
          copy="Verification and moderation can reduce risk. But please still use your own judgment when communicating or meeting someone."
        />
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {safety.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-hairline p-6">
                <IconBadge icon={s.icon} />
                <p className="mt-4 font-semibold">{s.title}</p>
                <p className="mt-1.5 text-[14px] leading-relaxed text-muted">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
