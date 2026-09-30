"use client";
import { motion, useReducedMotion } from "framer-motion";
import { track } from "@/lib/analytics";
import { Chip } from "./ui";

function PhoneCard() {
  const reduce = !!useReducedMotion();
  return (
    <motion.div
      initial={reduce ? {} : { opacity: 0, y: 32, rotate: 2 }}
      animate={reduce ? {} : { opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-[360px] rounded-[28px] border border-black/10 bg-white p-4 shadow-card"
    >
      {/* phone notch */}
      <div className="mx-auto mb-3 h-1.5 w-24 rounded-full bg-black/10" />
      <div className="flex items-center justify-between">
        <p className="text-[12px] font-bold uppercase tracking-widest text-muted">Roomie preview</p>
        <span className="rounded-full bg-green-100 px-2 py-1 text-[11px] font-bold text-green-800">● online</span>
      </div>

      {/* Profile */}
      <div className="mt-3 overflow-hidden rounded-2xl bg-cream">
        <div className="flex items-center gap-3 p-4">
          <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-leaf text-2xl font-black text-white">
            D
          </div>
          <div>
            <p className="text-[19px] font-extrabold leading-none">Daniel, 22</p>
            <p className="mt-1 text-[13px] font-medium text-muted">University of Abuja</p>
            <p className="mt-1 text-[13px] font-bold">₦450k–₦600k / year</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5 px-4 pb-3">
          <Chip>Early sleeper</Chip>
          <Chip>Clean</Chip>
          <Chip>Quiet</Chip>
          <Chip>Student</Chip>
          <Chip>No smoking</Chip>
        </div>
        <div className="grid grid-cols-2 gap-2 px-4 pb-4 text-[12.5px] font-medium">
          <div className="rounded-xl bg-white p-2.5">🌙 Sleeps: 10:30 PM</div>
          <div className="rounded-xl bg-white p-2.5">🧹 Cleanliness: High</div>
          <div className="rounded-xl bg-white p-2.5">📚 Study: Often</div>
          <div className="rounded-xl bg-white p-2.5">🔊 Noise: Low</div>
        </div>
      </div>

      {/* Agreement */}
      <div className="mt-3 grid grid-cols-2 gap-2">
        <div className="rounded-2xl bg-green-50 p-3">
          <p className="text-[12px] font-bold text-green-800">You agree on</p>
          <ul className="mt-1.5 space-y-1 text-[12.5px] font-medium text-green-900">
            <li>✓ Quiet evenings</li>
            <li>✓ Clean spaces</li>
            <li>✓ Similar budget</li>
          </ul>
        </div>
        <div className="rounded-2xl bg-amber-50 p-3">
          <p className="text-[12px] font-bold text-amber-800">Worth talking about</p>
          <ul className="mt-1.5 space-y-1 text-[12.5px] font-medium text-amber-900">
            <li>• Visitors</li>
            <li>• Cooking</li>
            <li>• Shared expenses</li>
          </ul>
        </div>
      </div>

      {/* Swipe */}
      <div className="mt-3 flex gap-2">
        <button className="flex-1 rounded-2xl border border-black/10 bg-white py-3 text-[15px] font-bold">
          ← Pass
        </button>
        <button className="flex-1 rounded-2xl bg-roomie py-3 text-[15px] font-bold text-white shadow-pop">
          ♡ Interested
        </button>
      </div>
      <p className="mt-2 text-center text-[11px] text-muted">Fictional preview — not a real person</p>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section id="top" className="texture-dots relative overflow-hidden pb-10 pt-[110px] sm:pt-[130px]">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1.5 text-[12.5px] font-bold shadow-card">
            🇳🇬 Built for Nigeria — starting with campuses
          </span>
          <h1 className="mt-4 text-[42px] font-extrabold leading-[0.98] tracking-tight sm:text-6xl">
            Find someone you&apos;ll <span className="text-roomie">actually enjoy</span> living with.
          </h1>
          <p className="mt-5 max-w-md text-[17px] leading-relaxed text-muted">
            Roomie helps you find compatible roommates based on your lifestyle, budget, location and
            accommodation needs — not just who happens to have a spare room.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#waitlist"
              onClick={() => track("hero_cta_click", { place: "hero_primary" })}
              className="rounded-full bg-roomie px-7 py-4 text-center text-[16px] font-bold text-white shadow-pop transition hover:bg-roomie-dark"
            >
              Join Early Access
            </a>
            <a
              href="#how-it-works"
              onClick={() => track("how_it_works_click", { place: "hero" })}
              className="rounded-full border border-black/10 bg-white px-7 py-4 text-center text-[16px] font-bold transition hover:border-black/25"
            >
              See How It Works ↓
            </a>
          </div>
          <p className="mt-4 text-[13px] font-medium text-muted">
            Free early access • 2 mins to join • No random roommates
          </p>
        </div>
        <div className="relative">
          <div className="absolute -right-6 -top-6 hidden rotate-6 rounded-2xl bg-ink px-4 py-3 text-white shadow-card sm:block">
            <p className="text-[13px] font-bold">💬 Match!</p>
            <p className="text-[12px] opacity-70">You both tapped Interested</p>
          </div>
          <PhoneCard />
        </div>
      </div>
    </section>
  );
}

export function SocialProof() {
  const items = [
    { tag: "WhatsApp groups", quote: "“Anybody looking for a roommate?”" },
    { tag: "Friends of friends", quote: "“My guy knows someone...”" },
    { tag: "Random posts", quote: "“₦500k. DM for details.”" },
  ];
  return (
    <section className="border-y border-black/5 bg-white py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-[15px] font-bold">Built for people who are tired of random roommate hunting.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {items.map((i) => (
            <div key={i.tag} className="rounded-2xl bg-cream p-5 text-center">
              <p className="text-[12px] font-bold uppercase tracking-widest text-roomie">{i.tag}</p>
              <p className="mt-2 text-[16px] font-semibold italic">{i.quote}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-[18px] font-extrabold">There should be an easier way.</p>
      </div>
    </section>
  );
}
