"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BedDouble,
  Building2,
  Check,
  GraduationCap,
  Home,
  MapPin,
  Share2,
} from "lucide-react";
import { Eyebrow, Reveal } from "./ui";
import { track } from "@/lib/analytics";

const listings = [
  { icon: Building2, title: "2-bedroom apartment", loc: "Gwarinpa", price: "₦1.2m/year", note: "Room available" },
  { icon: Home, title: "Shared apartment", loc: "Yaba", price: "₦650k/year", note: "1 room available" },
  { icon: BedDouble, title: "Student hostel", loc: "Near campus", price: "₦450k/year", note: "2 spaces left" },
];

export function Marketplace() {
  return (
    <section className="border-t border-hairline bg-wash/60 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>The vision</Eyebrow>
          <h2 className="mt-4 text-[32px] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-[44px]">
            And when you need the room too...
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-muted">
            Eventually, Roomie connects you not only with compatible roommates, but with
            rooms, apartments, hostels and accommodation providers.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-3 md:grid-cols-3">
          {listings.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <div className="relative h-full rounded-2xl border border-hairline bg-white p-6">
                <span className="absolute right-5 top-5 rounded-full bg-ink px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.1em] text-white">
                  Coming later
                </span>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-ink/[0.04]">
                  <c.icon size={19} strokeWidth={1.8} />
                </span>
                <p className="mt-4 font-semibold">{c.title}</p>
                <p className="mt-1 flex items-center gap-1.5 text-[13.5px] text-muted">
                  <MapPin size={13} /> {c.loc} · {c.price}
                </p>
                <p className="mt-1 text-[13px] font-medium">{c.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-4 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
          Illustrative previews · not real listings
        </p>
      </div>
    </section>
  );
}

const groups = [
  { icon: GraduationCap, title: "Students", items: ["Resumption", "New accommodation", "Roommate changes"] },
  { icon: Building2, title: "Young professionals", items: ["Relocation", "Job changes", "Shared apartments"] },
  { icon: Home, title: "Providers", items: ["Rooms", "Hostels", "Apartments & vacancies"] },
];

export function Network() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Why it scales</Eyebrow>
          <h2 className="mt-4 text-[32px] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-[44px]">
            One network. Different reasons to use it.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-3 md:grid-cols-3">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-hairline p-7 text-center">
                <span className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-xl bg-ink/[0.04]">
                  <g.icon size={19} strokeWidth={1.8} />
                </span>
                <p className="mt-4 text-[17px] font-semibold">{g.title}</p>
                <div className="mt-2 space-y-1 text-[14px] text-muted">
                  {g.items.map((x) => (
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
  "w-full rounded-xl border border-hairline bg-white px-4 py-3 text-[15px] outline-none transition placeholder:text-faint focus:border-ink";

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
      className={`rounded-full border px-4 py-2 text-[13.5px] font-medium transition ${
        selected
          ? "border-ink bg-ink text-white"
          : "border-hairline bg-white text-ink/70 hover:border-ink/40 hover:text-ink"
      }`}
    >
      {children}
    </button>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <p className="mb-2.5 text-[13.5px] font-medium">{children}</p>;
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
    const text = `I'm looking for a roommate and found Roomie. You should join too: ${url}`;
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

  const isStudent = form.userType === "student";

  return (
    <section id="waitlist" className="bg-ink py-24 text-white sm:py-32">
      <div className="mx-auto max-w-2xl px-5">
        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl bg-white p-8 text-center text-ink sm:p-10"
          >
            <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-ink text-white">
              <Check size={22} strokeWidth={2.5} />
            </span>
            <h2 className="mt-5 text-[30px] font-semibold tracking-[-0.02em]">
              You&apos;re on the list.
            </h2>
            <p className="mt-2 text-muted">We&apos;ll let you know when Roomie is ready in your area.</p>
            {code && (
              <p className="mx-auto mt-5 inline-block rounded-full bg-wash px-4 py-2 font-mono text-[13px]">
                Your code: <span className="font-semibold">{code}</span>
              </p>
            )}
            <div className="mt-6 rounded-2xl border border-hairline p-6 text-left">
              <p className="font-semibold">Know someone looking for a roommate?</p>
              <p className="mt-1 text-[14px] text-muted">
                Send them Roomie before they end up living with somebody&apos;s cousin&apos;s
                roommate&apos;s neighbor.
              </p>
              <button
                onClick={share}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-ink py-3.5 text-[15px] font-medium text-white transition hover:bg-ink/85"
              >
                <Share2 size={16} /> Share Roomie
              </button>
            </div>
          </motion.div>
        ) : (
          <>
            <Reveal className="text-center">
              <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-white/50">
                Early access
              </p>
              <h2 className="mt-4 text-[34px] font-semibold leading-[1.06] tracking-[-0.03em] sm:text-[48px]">
                Want Roomie in your area?
              </h2>
              <p className="mt-3 text-white/60">
                Join the early access list and tell us where you&apos;re looking.
              </p>
            </Reveal>
            <Reveal className="mt-10 rounded-3xl bg-white p-6 text-ink sm:p-9">
              <form onSubmit={submit} className="space-y-6">
                <div className="grid gap-3 sm:grid-cols-2">
                  <input className={inputCls} placeholder="Full name" value={form.name} onChange={(e) => set("name", e.target.value)} required minLength={2} />
                  <input className={inputCls} placeholder="Email" type="email" value={form.email} onChange={(e) => set("email", e.target.value)} required />
                </div>
                <input className={inputCls} placeholder="Phone number (e.g. 0803...)" value={form.phone} onChange={(e) => set("phone", e.target.value)} required inputMode="tel" />

                <div>
                  <FieldLabel>What describes you?</FieldLabel>
                  <div className="flex flex-wrap gap-2">
                    {USER_TYPES.map((u) => (
                      <Pill key={u.v} selected={form.userType === u.v} onClick={() => set("userType", u.v)}>{u.l}</Pill>
                    ))}
                  </div>
                </div>

                {form.userType !== "" &&
                  (isStudent ? (
                    <div className="grid gap-3 sm:grid-cols-2">
                      <input className={inputCls} placeholder="University" value={form.university} onChange={(e) => set("university", e.target.value)} required />
                      <input className={inputCls} placeholder="Campus / area" value={form.campusArea} onChange={(e) => set("campusArea", e.target.value)} />
                    </div>
                  ) : (
                    <div className="grid gap-3 sm:grid-cols-2">
                      <input className={inputCls} placeholder="City (e.g. Lagos)" value={form.city} onChange={(e) => set("city", e.target.value)} required />
                      <input className={inputCls} placeholder="Area (e.g. Yaba)" value={form.area} onChange={(e) => set("area", e.target.value)} />
                    </div>
                  ))}

                <div>
                  <FieldLabel>What are you looking for?</FieldLabel>
                  <div className="flex flex-wrap gap-2">
                    {INTENTS.map((u) => (
                      <Pill key={u.v} selected={form.intent === u.v} onClick={() => set("intent", u.v)}>{u.l}</Pill>
                    ))}
                  </div>
                </div>

                <div>
                  <FieldLabel>Approximate budget (per year)</FieldLabel>
                  <div className="flex flex-wrap gap-2">
                    {BUDGETS.map((u) => (
                      <Pill key={u.v} selected={form.budget === u.v} onClick={() => set("budget", u.v)}>{u.l}</Pill>
                    ))}
                  </div>
                </div>

                <div>
                  <FieldLabel>When do you need it?</FieldLabel>
                  <div className="flex flex-wrap gap-2">
                    {TIMINGS.map((u) => (
                      <Pill key={u.v} selected={form.moveInTiming === u.v} onClick={() => set("moveInTiming", u.v)}>{u.l}</Pill>
                    ))}
                  </div>
                </div>

                <div>
                  <FieldLabel>
                    How did you hear about Roomie? <span className="font-normal text-faint">(optional)</span>
                  </FieldLabel>
                  <div className="flex flex-wrap gap-2">
                    {SOURCES.map((s) => (
                      <Pill key={s} selected={form.referralSource === s} onClick={() => set("referralSource", s)}>{s}</Pill>
                    ))}
                  </div>
                </div>

                {error && (
                  <p className="rounded-xl bg-red-50 px-4 py-3 text-[14px] font-medium text-red-700">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group flex w-full items-center justify-center gap-1.5 rounded-full bg-ink py-4 text-[15.5px] font-medium text-white transition hover:bg-ink/85 disabled:opacity-60"
                >
                  {status === "loading" ? (
                    "Joining..."
                  ) : (
                    <>
                      Join Roomie
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
                <p className="text-center text-[12.5px] text-faint">
                  By joining you agree to be contacted about early access.
                </p>
              </form>
            </Reveal>
          </>
        )}
      </div>
    </section>
  );
}
