"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { track } from "@/lib/analytics";

const links = [
  { label: "How it works", href: "#how-it-works" },
  { label: "For Students", href: "#students" },
  { label: "For Everyone", href: "#everyone" },
  { label: "Safety", href: "#safety" },
];

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="Roomie home">
      <span
        className={`grid h-7 w-7 place-items-center rounded-lg text-[15px] font-semibold text-white ${
          dark ? "bg-white text-ink" : "bg-ink"
        }`}
      >
        R
      </span>
      <span className={`text-[17px] font-semibold tracking-[-0.01em] ${dark ? "text-white" : "text-ink"}`}>
        Roomie
      </span>
    </a>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-xl transition-colors ${
        scrolled ? "border-b border-hairline" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
        <Logo />
        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[14px] font-normal text-ink/70 transition hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a
            href="#waitlist"
            onClick={() => track("hero_cta_click", { place: "nav" })}
            className="rounded-full bg-ink px-4 py-2 text-[14px] font-medium text-white transition hover:bg-ink/85"
          >
            Join early access
          </a>
          <button
            className="grid h-9 w-9 place-items-center rounded-full text-ink md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="border-t border-hairline bg-white px-5 pb-4 pt-2 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-2 py-3 text-[15px] text-ink/80 hover:bg-wash"
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
    <footer className="border-t border-hairline bg-white">
      <div className="mx-auto max-w-5xl px-5 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-[14px] leading-relaxed text-muted">
              Find someone you&apos;ll actually enjoy living with.
            </p>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
              Early access · Nigeria
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 text-[14px] sm:grid-cols-3">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">Product</p>
              <div className="mt-4 flex flex-col gap-2.5 text-ink/70">
                <a href="#how-it-works" className="hover:text-ink">How it works</a>
                <a href="#students" className="hover:text-ink">For Students</a>
                <a href="#everyone" className="hover:text-ink">For Everyone</a>
                <a href="#safety" className="hover:text-ink">Safety</a>
              </div>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">Company</p>
              <div className="mt-4 flex flex-col gap-2.5 text-ink/70">
                <a href="#waitlist" className="hover:text-ink">Early access</a>
                <a href="mailto:hello@roomie.ng" className="hover:text-ink">Contact</a>
                <a href="#safety" className="hover:text-ink">Privacy</a>
                <a href="#safety" className="hover:text-ink">Terms</a>
              </div>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">Social</p>
              <p className="mt-4 text-ink/70">TikTok & Instagram launching soon.</p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-hairline pt-6 text-[12.5px] text-faint sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Roomie</p>
          <p>All profiles and listings shown are fictional previews.</p>
        </div>
      </div>
    </footer>
  );
}
