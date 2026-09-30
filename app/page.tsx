"use client";
import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import { Nav, Footer } from "@/components/chrome";
import { Hero, ProofStrip } from "@/components/hero";
import { Problem, HowItWorks, University, StudentLife } from "@/components/sections1";
import { Everyone, Compatibility, Awkward, Safety } from "@/components/sections2";
import { Marketplace, Network, Waitlist } from "@/components/sections3";
import { track, initPosthog } from "@/lib/analytics";

export default function Page() {
  useEffect(() => {
    track("page_view");
    initPosthog();

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = (e.target as HTMLElement).id;
            if (id === "students") track("student_section_view");
            if (id === "everyone") track("general_section_view");
          }
        });
      },
      { threshold: 0.25 }
    );
    ["students", "everyone"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen bg-white text-ink">
      <Nav />
      <Hero />
      <ProofStrip />
      <Problem />
      <HowItWorks />
      <University />
      <StudentLife />
      <Everyone />
      <Compatibility />
      <Awkward />
      <Safety />
      <Marketplace />
      <Network />
      <Waitlist />
      <Footer />
      </main>
    </MotionConfig>
  );
}
