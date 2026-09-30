"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal, SectionHeading } from "./ui";
import { track } from "@/lib/analytics";

export function Marketplace() {
  const cards = [
    { t: "2-bedroom apartment", loc: "Gwarinpa", price: "₦1.2m/year", note: "Room available" },
    { t: "Shared apartment", loc: "Yaba", price: "₦650k/year", note: "1 room available" },
    { t: "Student hostel", loc: "Near campus", price: "₦450k/year", note: "2 spaces left" },
  ];
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="The vision"
          title="And when you need the room too..."
          copy="Eventually, Roomie can connect people not only with compatible roommates, but with rooms, apartments, hostels and accommodation providers."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.t} delay={i * 0.06}>
              <div className="relative h-full rounded-3xl bg-cream p-6">
                <span className="absolute right-4 top-4 rounded-full bg-ink px-2.5 py-1 text-[11px] font-bold text-white">
                  Coming later
                </span>
                <div className="h-28 rounded-2xl bg-sand" />
                <p className="mt-4 font-extrabold">{c.t}</p>
                <p className="text-[14px] text-muted">📍 {c.loc} • {c.price}</p>
                <p className="mt-1 text-[13px] font-bold text-roomie">{c.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-4 text-center text-[12px] text-muted">Illustrative previews — not real listings.</p>
      </div>
    </section>
  );
}

export function Network() {
  const circles = [
    { t: "Students", items: ["Resumption", "New accommodation", "Roommate changes"] },
    { t: "Young professionals", items: ["Relocation", "Job changes", "Shared apartments"] },
    { t: "Providers", items: ["Rooms", "Hostels", "Apartments & vacancies"] },
  ];
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading kicker="Why it scales" title="One network. Different reasons to use it." />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {circles.map((c, i) => (
            <Reveal key={c.t} delay={i * 0.06}>
              <div className="rounded-full border border-black/10 bg-white p-8 text-center shadow-card md:aspect-square md:rounded-[48px] md:p-6 md:flex md:flex-col md:justify-center">
                <p className="text-[19px] font-extrabold">{c.t}</p>
                <div className="mt-2 space-y-1 text-[14px] text-muted">
                  {c.items.map((x) => (
                    <p key={x}>{x}</p>
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

const USER_TYPES = [
  { v: "student", l: "Student" },
  { v: "professional", l: "Young professional" },
  { v: "nysc", l: "NYSC" },
  { v: "relocating", l: "Relocating" },
  { v: "other", l: "Other" },
];
const INTENTS = [
  { v: "roommate", l: "A roommate" },
  { v: "have_room", l: "I have a room" },
  { v: "accommodation", l: "Accommodation" },
  { v: "exploring", l: "Just exploring" },
];
const BUDGETS = [
  { v: "under-300k", l: "Under ₦300k" },
  { v: "300-500k", l: "₦300k–₦500k" },
  { v: "500-800k", l: "₦500k–₦800k" },
  { v: "800-1_2m", l: "₦800k–₦1.2m" },
  { v: "1_2m-plus", l: "₦1.2m+" },
  { v: "flexible", l: "Flexible" },
];
const TIMINGS = [
  { v: "asap", l: "ASAP" },
  { v: "1-month", l: "Within 1 month" },
  { v: "1-3-months", l: "1–3 months" },
  { v: "later", l: "Later" },
];
const SOURCES = ["WhatsApp", "TikTok", "Instagram", "Friend", "University group", "Other"];

const inputCls =
  "w-full rounded-2xl border border-black/10 bg-white px-4 py-3.5 text-[15px] font-medium outline-none placeholder:text-black/30 focus:border-roomie focus:ring-2 focus:ring-roomie/20";

function Pill({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-2.5 text-[13.5px] font-bold transition ${
        selected ? "border-roomie bg-roomie text-white shadow-pop" : "border-black/10 bg-white hover:border-black/30"
      }`}
    >
      {children}
    </button>
  );
}

export function Waitlist() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    userType: "",
    university: "",
    campusArea: "",
    city: "",
    area: "",
    intent: "",
    budget: "",
    moveInTiming: "",
    referralSource: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const [code, setCode] = useState("");
  const [started, setStarted] = useState(false);

  const set = (k: string, v: string) => {
    if (!started) {
      setStarted(true);
      track("waitlist_form_start");
    }
    setForm((f) => ({ ...f, [k]: v }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError("");
    track("waitlist_submit", { userType: form.userType });
    try {
      const referredBy = new URLSearchParams(window.location.search).get("ref") || "";
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, referredBy }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        track("waitlist_error", { error: data.error });
        return;
      }
      setCode(data.referralCode || "");
      setStatus("success");
      track("waitlist_success");
    } catch {
      setError("Network error. Please check your connection and try again.");
      setStatus("error");
      track("waitlist_error", { error: "network" });
    }
  };

  const share = async () => {
    track("share_click", { code });
    const url = `${window.location.origin}/?ref=${encodeURIComponent(code)}`;
    const text = `I'm looking for a roommate and found Roomie. You should join too 👀 ${url}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: "Roomie", text, url });
        return;
      }
      throw new Error("no-share");
    } catch {
      try {
        await navigator.clipboard.writeText(text);
        alert("Referral message copied! Send it to anyone who needs a roommate.");
      } catch {
        prompt("Copy and share this:", text);
      }
    }
  };

  if (status === "success") {
    return (
      <section id="waitlist" className="bg-leaf py-16 text-white sm:py-24">
        <div className="mx-auto max-w-xl px-4 text-center sm:px-6">
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="rounded-[28px] bg-white p-8 text-ink">
            <p className="text-4xl">🎉</p>
            <h2 className="mt-3 text-3xl font-extrabold">You&apos;re on the list</h2>
            <p className="mt-2 text-muted">We&apos;ll let you know when Roomie is ready in your area.</p>
            {code && (
              <p className="mx-auto mt-4 inline-block rounded-full bg-cream px-4 py-2 font-bold">
                Your code: <span className="text-roomie">{code}</span>
              </p>
            )}
            <div className="mt-6 rounded-2xl bg-cream p-5 text-left">
              <p className="font-extrabold">Know someone looking for a roommate?</p>
              <p className="mt-1 text-[14px] text-muted">
                Send them Roomie before they end up living with somebody&apos;s cousin&apos;s roommate&apos;s neighbor. 😭
              </p>
              <button onClick={share} className="mt-4 w-full rounded-full bg-roomie py-3.5 font-bold text-white shadow-pop hover:bg-roomie-dark">
                Share Roomie
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  const isStudent = form.userType === "student";

  return (
    <section id="waitlist" className="bg-leaf py-16 text-white sm:py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <Reveal className="text-center">
          <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-amber-300">Early access</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-5xl">Want Roomie in your area?</h2>
          <p className="mt-3 text-white/70">Join the early access list and tell us where you&apos;re looking.</p>
        </Reveal>
        <Reveal className="mt-8 rounded-[28px] bg-cream p-5 text-ink sm:p-8">
          <form onSubmit={submit} className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <input className={inputCls} placeholder="Full name" value={form.name} onChange={(e) => set("name", e.target.value)} required minLength={2} />
              <input className={inputCls} placeholder="Email" type="email" value={form.email} onChange={(e) => set("email", e.target.value)} required />
            </div>
            <input className={inputCls} placeholder="Phone number (e.g. 0803...)" value={form.phone} onChange={(e) => set("phone", e.target.value)} required inputMode="tel" />

            <div>
              <p className="mb-2 text-[14px] font-bold">What describes you?</p>
              <div className="flex flex-wrap gap-2">
                {USER_TYPES.map((u) => (
                  <Pill key={u.v} selected={form.userType === u.v} onClick={() => set("userType", u.v)}>{u.l}</Pill>
                ))}
              </div>
            </div>

            {form.userType !== "" && (
              isStudent ? (
                <div className="grid gap-4 sm:grid-cols-2">
                  <input className={inputCls} placeholder="University" value={form.university} onChange={(e) => set("university", e.target.value)} required />
                  <input className={inputCls} placeholder="Campus / area" value={form.campusArea} onChange={(e) => set("campusArea", e.target.value)} />
                </div>
              ) : (
                <div className="grid gap-4 sm:grid-cols-2">
                  <input className={inputCls} placeholder="City (e.g. Lagos)" value={form.city} onChange={(e) => set("city", e.target.value)} required />
                  <input className={inputCls} placeholder="Area (e.g. Yaba)" value={form.area} onChange={(e) => set("area", e.target.value)} />
                </div>
              )
            )}

            <div>
              <p className="mb-2 text-[14px] font-bold">What are you looking for?</p>
              <div className="flex flex-wrap gap-2">
                {INTENTS.map((u) => (
                  <Pill key={u.v} selected={form.intent === u.v} onClick={() => set("intent", u.v)}>{u.l}</Pill>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-2 text-[14px] font-bold">Approximate budget (per year)</p>
              <div className="flex flex-wrap gap-2">
                {BUDGETS.map((u) => (
                  <Pill key={u.v} selected={form.budget === u.v} onClick={() => set("budget", u.v)}>{u.l}</Pill>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-2 text-[14px] font-bold">When do you need it?</p>
              <div className="flex flex-wrap gap-2">
                {TIMINGS.map((u) => (
                  <Pill key={u.v} selected={form.moveInTiming === u.v} onClick={() => set("moveInTiming", u.v)}>{u.l}</Pill>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-2 text-[14px] font-bold">How did you hear about Roomie? <span className="font-normal text-muted">(optional)</span></p>
              <div className="flex flex-wrap gap-2">
                {SOURCES.map((s) => (
                  <Pill key={s} selected={form.referralSource === s} onClick={() => set("referralSource", s)}>{s}</Pill>
                ))}
              </div>
            </div>

            {error && (
              <p className="rounded-2xl bg-red-50 px-4 py-3 text-[14px] font-bold text-red-700">{error}</p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-full bg-roomie py-4 text-[16px] font-bold text-white shadow-pop transition hover:bg-roomie-dark disabled:opacity-60"
            >
              {status === "loading" ? "Joining..." : "Join Roomie"}
            </button>
            <p className="text-center text-[12px] text-muted">By joining you agree to be contacted about early access.</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
