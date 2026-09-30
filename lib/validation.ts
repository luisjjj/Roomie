export type WaitlistPayload = {
  name: string;
  email: string;
  phone: string;
  userType: string;
  university?: string;
  campusArea?: string;
  city?: string;
  area?: string;
  intent: string;
  budget: string;
  moveInTiming: string;
  referralSource?: string;
  referredBy?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+\d][\d\s\-()]{6,18}$/;

const USER_TYPES = ["student", "professional", "nysc", "relocating", "other"];
const INTENTS = ["roommate", "have_room", "accommodation", "exploring"];
const BUDGETS = ["under-300k", "300-500k", "500-800k", "800-1_2m", "1_2m-plus", "flexible"];
const TIMINGS = ["asap", "1-month", "1-3-months", "later"];

export function validateWaitlist(body: any): { ok: true; data: WaitlistPayload } | { ok: false; error: string } {
  if (!body || typeof body !== "object") return { ok: false, error: "Please fill the form to join." };
  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim().toLowerCase();
  const phone = String(body.phone || "").trim();
  const userType = String(body.userType || "").trim();
  const intent = String(body.intent || "").trim();
  const budget = String(body.budget || "").trim();
  const moveInTiming = String(body.moveInTiming || "").trim();

  if (name.length < 2) return { ok: false, error: "Please enter your full name." };
  if (!EMAIL_RE.test(email)) return { ok: false, error: "Please enter a valid email address." };
  if (!PHONE_RE.test(phone)) return { ok: false, error: "Please enter a valid phone number." };
  if (!USER_TYPES.includes(userType)) return { ok: false, error: "Please tell us what describes you." };
  if (!INTENTS.includes(intent)) return { ok: false, error: "Please tell us what you're looking for." };
  if (!BUDGETS.includes(budget)) return { ok: false, error: "Please choose a budget range." };
  if (!TIMINGS.includes(moveInTiming)) return { ok: false, error: "Please choose when you need it." };

  const university = String(body.university || "").trim().slice(0, 120);
  const campusArea = String(body.campusArea || "").trim().slice(0, 120);
  const city = String(body.city || "").trim().slice(0, 120);
  const area = String(body.area || "").trim().slice(0, 120);
  const referralSource = String(body.referralSource || "").trim().slice(0, 60);
  const referredBy = String(body.referredBy || "").trim().slice(0, 20);

  if (userType === "student" && !university) {
    return { ok: false, error: "Please enter your university." };
  }
  if (userType !== "student" && !city) {
    return { ok: false, error: "Please enter your city." };
  }

  return {
    ok: true,
    data: {
      name: name.slice(0, 120),
      email: email.slice(0, 160),
      phone: phone.slice(0, 30),
      userType,
      university,
      campusArea,
      city,
      area,
      intent,
      budget,
      moveInTiming,
      referralSource,
      referredBy,
    },
  };
}

export function makeReferralCode(email: string): string {
  let h = 0;
  for (let i = 0; i < email.length; i++) h = (h * 31 + email.charCodeAt(i)) >>> 0;
  return "RM-" + h.toString(36).toUpperCase().padStart(6, "0").slice(-6);
}
