"use client";

// Lightweight analytics: PostHog if configured, otherwise no-op + console in dev.
// Never blocks rendering.

type Props = Record<string, any>;

function posthogCapture(event: string, props?: Props) {
  try {
    const w = window as any;
    if (w?.posthog?.capture) {
      w.posthog.capture(event, props);
      return true;
    }
  } catch {}
  return false;
}

export function track(event: string, props?: Props) {
  try {
    if (typeof window === "undefined") return;
    const done = posthogCapture(event, props);
    if (!done && process.env.NODE_ENV === "development") {
      // eslint-disable-next-line no-console
      console.debug("[analytics]", event, props);
    }
    // Also beacon to our own API for basic counts (fire and forget)
    if (typeof navigator !== "undefined" && "sendBeacon" in navigator && event === "page_view") {
      // optional: could post to /api/metrics; skipped to keep it simple
    }
  } catch {}
}

export function initPosthog() {
  try {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://app.posthog.com";
    if (!key) return;
    // Lazy load posthog-js only when key exists
    import("posthog-js").then((m) => {
      const posthog = (m as any).default || m;
      posthog.init(key, { api_host: host, capture_pageview: true });
      (window as any).posthog = posthog;
    }).catch(() => {});
  } catch {}
}
