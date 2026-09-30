"use client";
import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  BedDouble,
  Building2,
  GraduationCap,
  Home,
  Loader2,
  MapPin,
  Share2,
} from "lucide-react";
import { Eyebrow, FloatCard, Reveal } from "./ui";
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
              <FloatCard className="h-full transition-shadow duration-300 hover:shadow-frame">
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
              </FloatCard>
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
  group,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
  group: string;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      className={`relative rounded-full border px-4 py-2 text-[13.5px] font-medium transition-colors ${
        selected
          ? "border-ink text-white"
          : "border-hairline bg-white text-ink/70 hover:border-ink/40 hover:text-ink"
      }`}
    >
      {selected && (
        <motion.span
          layoutId={group}
          className="absolute inset-0 rounded-full bg-ink"
          transition={{ type: "spring", stiffness: 420, damping: 33 }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <p className="mb-2.5 text-[13.5px] font-medium">{children}</p>;
}

const formVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const fieldVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

const successVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const successItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

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

  const isStudent = form.userType === "student";
  const stepsDone = [
    form.name.trim().length >= 2 &&
      /.+@.+\..+/.test(form.email.trim()) &&
      form.phone.trim().length >= 7,
    !!form.userType,
    isStudent ? !!form.university.trim() : form.userType ? !!form.city.trim() : false,
    !!form.intent,
    !!form.budget,
    !!form.moveInTiming,
  ].filter(Boolean).length;

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

  return (
    <section id="waitlist" className="bg-ink py-24 text-white sm:py-32">
      <div className="mx-auto max-w-2xl px-5">
        {status === "success" ? (
          <motion.div
            initial="hidden"
            animate="show"
            variants={successVariants}
            className="rounded-3xl bg-white p-8 text-center text-ink sm:p-10"
          >
            <motion.div
              variants={successItem}
              className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-ink"
            >
              <motion.svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                <motion.path
                  d="M5 13.5l5.5 5.5L21 8.5"
                  stroke="#fff"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                />
              </motion.svg>
            </motion.div>
            <motion.h2
              variants={successItem}
              className="mt-5 text-[30px] font-semibold tracking-[-0.02em]"
            >
              You&apos;re on the list.
            </motion.h2>
            <motion.p variants={successItem} className="mt-2 text-muted">
              We&apos;ll let you know when Roomie is ready in your area.
            </motion.p>
            {code && (
              <motion.p
                variants={successItem}
                className="mx-auto mt-5 inline-block rounded-full bg-wash px-4 py-2 font-mono text-[13px]"
              >
                Your code: <span className="font-semibold">{code}</span>
              </motion.p>
            )}
            <motion.div
              variants={successItem}
              className="mt-6 rounded-2xl border border-hairline p-6 text-left"
            >
              <p className="font-semibold">Know someone looking for a roommate?</p>
              <p className="mt-1 text-[14px] text-muted">
                Send them Roomie before they end up living with somebody&apos;s cousin&apos;s
                roommate&apos;s neighbor.
              </p>
              <motion.button
                onClick={share}
                whileTap={{ scale: 0.97 }}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-ink py-3.5 text-[15px] font-medium text-white transition hover:bg-ink/85"
              >
                <Share2 size={16} /> Share Roomie
              </motion.button>
            </motion.div>
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
              <div className="mb-7">
                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
                  <span>Your details</span>
                  <span>{stepsDone} of 6 complete</span>
                </div>
                <div className="mt-2 h-1 overflow-hidden rounded-full bg-wash">
                  <motion.div
                    className="h-full rounded-full bg-ink"
                    initial={false}
                    animate={{ width: `${(stepsDone / 6) * 100}%` }}
                    transition={{ type: "spring", stiffness: 140, damping: 22 }}
                  />
                </div>
              </div>
              <motion.form
                onSubmit={submit}
                variants={formVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                className="space-y-6"
              >
                <motion.div variants={fieldVariants} className="grid gap-3 sm:grid-cols-2">
                  <input className={inputCls} placeholder="Full name" value={form.name} onChange={(e) => set("name", e.target.value)} required minLength={2} />
                  <input className={inputCls} placeholder="Email" type="email" value={form.email} onChange={(e) => set("email", e.target.value)} required />
                </motion.div>
                <motion.input
                  variants={fieldVariants}
                  className={inputCls}
                  placeholder="Phone number (e.g. 0803...)"
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  required
                  inputMode="tel"
                />

                <motion.div variants={fieldVariants}>
                  <FieldLabel>What describes you?</FieldLabel>
                  <div className="flex flex-wrap gap-2">
                    {USER_TYPES.map((u) => (
                      <Pill key={u.v} group="pill-usertype" selected={form.userType === u.v} onClick={() => set("userType", u.v)}>{u.l}</Pill>
                    ))}
                  </div>
                </motion.div>

                {form.userType !== "" &&
                  (isStudent ? (
                    <motion.div
                      key="student-loc"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="grid gap-3 overflow-hidden sm:grid-cols-2"
                    >
                      <input className={inputCls} placeholder="University" value={form.university} onChange={(e) => set("university", e.target.value)} required />
                      <input className={inputCls} placeholder="Campus / area" value={form.campusArea} onChange={(e) => set("campusArea", e.target.value)} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="city-loc"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="grid gap-3 overflow-hidden sm:grid-cols-2"
                    >
                      <input className={inputCls} placeholder="City (e.g. Lagos)" value={form.city} onChange={(e) => set("city", e.target.value)} required />
                      <input className={inputCls} placeholder="Area (e.g. Yaba)" value={form.area} onChange={(e) => set("area", e.target.value)} />
                    </motion.div>
                  ))}

                <motion.div variants={fieldVariants}>
                  <FieldLabel>What are you looking for?</FieldLabel>
                  <div className="flex flex-wrap gap-2">
                    {INTENTS.map((u) => (
                      <Pill key={u.v} group="pill-intent" selected={form.intent === u.v} onClick={() => set("intent", u.v)}>{u.l}</Pill>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={fieldVariants}>
                  <FieldLabel>Approximate budget (per year)</FieldLabel>
                  <div className="flex flex-wrap gap-2">
                    {BUDGETS.map((u) => (
                      <Pill key={u.v} group="pill-budget" selected={form.budget === u.v} onClick={() => set("budget", u.v)}>{u.l}</Pill>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={fieldVariants}>
                  <FieldLabel>When do you need it?</FieldLabel>
                  <div className="flex flex-wrap gap-2">
                    {TIMINGS.map((u) => (
                      <Pill key={u.v} group="pill-timing" selected={form.moveInTiming === u.v} onClick={() => set("moveInTiming", u.v)}>{u.l}</Pill>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={fieldVariants}>
                  <FieldLabel>
                    How did you hear about Roomie? <span className="font-normal text-faint">(optional)</span>
                  </FieldLabel>
                  <div className="flex flex-wrap gap-2">
                    {SOURCES.map((s) => (
                      <Pill key={s} group="pill-source" selected={form.referralSource === s} onClick={() => set("referralSource", s)}>{s}</Pill>
                    ))}
                  </div>
                </motion.div>

                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-xl bg-red-50 px-4 py-3 text-[14px] font-medium text-red-700"
                  >
                    {error}
                  </motion.p>
                )}

                <motion.div variants={fieldVariants}>
                  <motion.button
                    type="submit"
                    disabled={status === "loading"}
                    whileTap={{ scale: 0.98 }}
                    className="group flex w-full items-center justify-center gap-2 rounded-full bg-ink py-4 text-[15.5px] font-medium text-white transition hover:bg-ink/85 disabled:opacity-60"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={17} className="animate-spin" /> Joining...
                      </>
                    ) : (
                      <>
                        Join Roomie
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                      </>
                    )}
                  </motion.button>
                  <p className="mt-3 text-center text-[12.5px] text-faint">
                    By joining you agree to be contacted about early access.
                  </p>
                </motion.div>
              </motion.form>
            </Reveal>
          </>
        )}
      </div>
    </section>
  );
}
