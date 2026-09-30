# Roomie — Landing Page

Nigerian roommate discovery landing page. Next.js 14 + TypeScript + Tailwind + Framer Motion + Neon Postgres. Deploys to Vercel.

## Quick start

```bash
npm install
cp .env.example .env.local  # add NEON_DATABASE_URL
npm run dev
```

## Neon setup

1. Create a Neon project at https://neon.tech
2. Copy the connection string into `NEON_DATABASE_URL` (server-side only, never `NEXT_PUBLIC_`).
3. Run `sql/schema.sql` once in the Neon SQL editor.
4. Deploy to Vercel and set `NEON_DATABASE_URL` + `NEXT_PUBLIC_SITE_URL` in project env vars.

Table: `waitlist(id, name, email unique, phone, user_type, university, campus_area, city, area, intent, budget, move_in_timing, referral_source, referral_code, referred_by, created_at)`.

Duplicate emails return `409` with friendly message "Looks like you're already on the list 👀".

## Analytics

Events: `page_view, hero_cta_click, how_it_works_click, student_section_view, general_section_view, waitlist_form_start, waitlist_submit, waitlist_success, waitlist_error, share_click`.

Set `NEXT_PUBLIC_POSTHOG_KEY` (+ optional `NEXT_PUBLIC_POSTHOG_HOST`) to enable PostHog. Without it, tracking is a safe no-op.

## Structure

- `app/page.tsx` — section composition + view tracking
- `app/api/waitlist/route.ts` — server-side validation + Neon insert
- `components/hero.tsx` — hero + phone mock + social proof
- `components/sections1.tsx` — problem, how-it-works, university, student life
- `components/sections2.tsx` — everyone, compatibility, awkward questions, safety
- `components/sections3.tsx` — marketplace vision, network, waitlist + referral share
- `lib/validation.ts`, `lib/db.ts`, `lib/analytics.ts`
