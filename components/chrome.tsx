"use client";
import { useEffect, useState } from "react";
import { track } from "@/lib/analytics";

const links = [
  { label: "How it works", href: "#how-it-works" },
  { label: "For Students", href: "#students" },
  { label: "For Everyone", href: "#everyone" },
  { label: "Safety", href: "#safety" },
];

export function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2" aria-label="Roomie home">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-roomie text-xl font-black text-white shadow-pop">
        R
      </span>
      <span className="text-[20px] font-extrabold tracking-tight">Roomie</span>
      <span className="rounded-full bg-roomie-soft px-2 py-0.5 text-[11px] font-bold text-roomie-dark">
        early access
      </span>
    </a>
  );
}

export function Nav() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        stuck ? "bg-cream/90 shadow-card backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />
        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[14px] font-semibold text-ink/80 hover:text-ink">
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a
            href="#waitlist"
            onClick={() => track("hero_cta_click", { place: "nav" })}
            className="rounded-full bg-ink px-4 py-2.5 text-[14px] font-bold text-white transition hover:bg-roomie sm:px-5"
          >
            Join Early Access
          </a>
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>
      {open && (
        <div className="border-t border-black/5 bg-cream px-4 pb-4 pt-2 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-3 text-[15px] font-semibold hover:bg-white"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-3 text-[15px] text-muted">Find someone you&apos;ll actually enjoy living with.</p>
            <p className="mt-2 text-[13px] text-muted">Currently in early access across Nigeria 🇳🇬</p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-[14px] sm:grid-cols-3">
            <div>
              <p className="font-bold">Product</p>
              <div className="mt-3 flex flex-col gap-2 text-muted">
                <a href="#how-it-works" className="hover:text-ink">How it works</a>
                <a href="#students" className="hover:text-ink">For Students</a>
                <a href="#everyone" className="hover:text-ink">For Everyone</a>
                <a href="#safety" className="hover:text-ink">Safety</a>
              </div>
            </div>
            <div>
              <p className="font-bold">Company</p>
              <div className="mt-3 flex flex-col gap-2 text-muted">
                <a href="#waitlist" className="hover:text-ink">Early access</a>
                <a href="mailto:hello@roomie.ng" className="hover:text-ink">Contact</a>
                <a href="#safety" className="hover:text-ink">Privacy</a>
                <a href="#safety" className="hover:text-ink">Terms</a>
              </div>
            </div>
            <div>
              <p className="font-bold">Follow</p>
              <p className="mt-3 text-muted">TikTok & Instagram launching soon.</p>
            </div>
          </div>
        </div>
        <p className="mt-10 text-[12px] text-muted">© {new Date().getFullYear()} Roomie. All profile and listing previews are fictional illustrations.</p>
      </div>
    </footer>
  );
}
