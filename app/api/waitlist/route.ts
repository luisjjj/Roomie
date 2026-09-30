import { NextResponse } from "next/server";
import { getSql } from "@/lib/db";
import { validateWaitlist, makeReferralCode } from "@/lib/validation";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    const v = validateWaitlist(body);
    if (!v.ok) {
      return NextResponse.json({ error: v.error }, { status: 400 });
    }
    const d = v.data;
    const referralCode = makeReferralCode(d.email);

    let sql;
    try {
      sql = getSql();
    } catch {
      // No DB configured (local preview) — still return success with a code
      return NextResponse.json(
        { ok: true, referralCode, preview: true },
        { status: 200 }
      );
    }

    try {
      await sql`
        insert into waitlist
          (name, email, phone, user_type, university, campus_area, city, area, intent, budget, move_in_timing, referral_source, referral_code, referred_by)
        values
          (${d.name}, ${d.email}, ${d.phone}, ${d.userType}, ${d.university || null}, ${d.campusArea || null}, ${d.city || null}, ${d.area || null}, ${d.intent}, ${d.budget}, ${d.moveInTiming}, ${d.referralSource || null}, ${referralCode}, ${d.referredBy || null})
      `;
    } catch (e: any) {
      const msg = String(e?.message || e);
      // unique violation on email
      if (msg.includes("duplicate") || msg.includes("unique") || msg.includes("already exists")) {
        return NextResponse.json(
          { error: "Looks like you're already on the list 👀" },
          { status: 409 }
        );
      }
      console.error("waitlist insert failed", e);
      return NextResponse.json(
        { error: "Something went wrong. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, referralCode }, { status: 201 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
