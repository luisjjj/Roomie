"use client";
import { Reveal, SectionHeading, Chip } from "./ui";

export function Everyone() {
  const profiles = [
    { tag: "Young professional", loc: "Lagos", budget: "₦800k–₦1.5m", lines: ["Works 9–5", "Quiet evenings", "Clean"], initial: "K", color: "bg-ink" },
    { tag: "NYSC member", loc: "Abuja", budget: "₦300k–₦500k", lines: ["Moving soon", "Shared accommodation", "Flexible"], initial: "S", color: "bg-roomie" },
    { tag: "Relocating", loc: "Port Harcourt", budget: "Flexible", lines: ["Needs accommodation", "Low noise", "No smoking"], initial: "E", color: "bg-leaf" },
  ];
  return (
    <section id="everyone" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="Not just students"
          title="Not a student? Roomie is for you too."
          copy="Roomie is also for young professionals, NYSC members, people relocating, and anyone who'd rather share a place than live alone."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {profiles.map((p, i) => (
            <Reveal key={p.tag} delay={i * 0.06}>
              <div className="h-full rounded-3xl border border-black/5 bg-cream p-6">
                <div className="flex items-center gap-3">
                  <div className={`grid h-12 w-12 place-items-center rounded-xl text-lg font-black text-white ${p.color}`}>{p.initial}</div>
                  <div>
                    <p className="text-[13px] font-bold uppercase tracking-wider text-roomie">{p.tag}</p>
                    <p className="font-extrabold">📍 {p.loc} • {p.budget}</p>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.lines.map((l) => (
                    <Chip key={l}>{l}</Chip>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Compatibility() {
  const you = ["🌙 Sleeps: 10:30 PM", "🧹 Cleanliness: High", "🔊 Noise: Low", "👥 Visitors: Rarely", "📚 Studies at home"];
  const them = ["🌙 Sleeps: 11 PM", "🧹 Cleanliness: High", "🔊 Noise: Low", "👥 Visitors: Sometimes", "📚 Studies at home"];
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          kicker="Compatibility"
          title="It's more than “Do you have a room?”"
          copy="Two people can have the same budget and still be terrible roommates."
        />
        <Reveal className="mt-10 grid gap-4 rounded-[28px] border border-black/10 bg-white p-5 shadow-card sm:grid-cols-2 sm:p-7">
          <div className="rounded-2xl bg-cream p-5">
            <p className="font-extrabold">You</p>
            <ul className="mt-3 space-y-2 text-[14.5px] font-medium">
              {you.map((l) => (
                <li key={l} className="rounded-xl bg-white px-3 py-2">{l}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-cream p-5">
            <p className="font-extrabold">Them <span className="ml-1 text-[11px] font-bold text-muted">(preview)</span></p>
            <ul className="mt-3 space-y-2 text-[14.5px] font-medium">
              {them.map((l) => (
                <li key={l} className="rounded-xl bg-white px-3 py-2">{l}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-green-50 p-5">
            <p className="font-bold text-green-800">You agree on</p>
            <p className="mt-1 text-[14.5px] font-medium text-green-900">✓ Quiet nights • ✓ Clean spaces • ✓ Similar routines</p>
          </div>
          <div className="rounded-2xl bg-amber-50 p-5">
            <p className="font-bold text-amber-800">Talk about</p>
            <p className="mt-1 text-[14.5px] font-medium text-amber-900">• Visitors • Cooking • Shared expenses</p>
          </div>
        </Reveal>
        <p className="mt-4 text-center text-[13px] text-muted">
          No fake “97% compatibility” scores. Roomie is about conversation and informed decisions.
        </p>
      </div>
    </section>
  );
}

export function Awkward() {
  const cards = [
    { t: "Visitors", q: "“What happens when someone wants to bring a friend over?”" },
    { t: "Cleaning", q: "“What does 'clean' actually mean to both of you?”" },
    { t: "Money", q: "“How are electricity, Wi-Fi and shared expenses handled?”" },
    { t: "Moving out", q: "“What happens if one person needs to leave early?”" },
    { t: "Noise", q: "“How late is too late for music?”" },
    { t: "Food", q: "“Are we cooking together or minding our business?”" },
  ];
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="Real talk"
          title="Before you sign the lease, talk about the awkward stuff."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.t} delay={(i % 3) * 0.06}>
              <div className="h-full rounded-3xl bg-ink p-6 text-white">
                <p className="text-[12px] font-bold uppercase tracking-widest text-amber-300">{c.t}</p>
                <p className="mt-2 text-[17px] font-bold leading-snug">{c.q}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Safety() {
  const items = [
    { t: "Identity verification", d: "Phone verification and, where practical, university verification." },
    { t: "Privacy controls", d: "Don't expose exact addresses publicly. Share details when you choose to." },
    { t: "Report & block", d: "Users can report suspicious or inappropriate behaviour." },
    { t: "Safer conversations", d: "Meet in public places first. Tell someone where you're going." },
  ];
  return (
    <section id="safety" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="Safety"
          title="Find people. Keep your boundaries."
          copy="Verification and moderation can reduce risk, but users should still use their own judgment when communicating or meeting someone."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.06}>
              <div className="h-full rounded-3xl border border-black/5 bg-white p-6 shadow-card">
                <p className="font-extrabold">{s.t}</p>
                <p className="mt-2 text-[14.5px] text-muted">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
