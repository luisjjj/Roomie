-- Roomie waitlist schema (Neon Postgres)
-- Run this once in your Neon SQL editor, or via `npm run db:setup`.

create extension if not exists "pgcrypto";
create extension if not exists citext;

create table if not exists waitlist (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email citext not null unique,
  phone text not null,
  user_type text not null check (user_type in ('student','professional','nysc','relocating','other')),
  university text,
  campus_area text,
  city text,
  area text,
  intent text not null check (intent in ('roommate','have_room','accommodation','exploring')),
  budget text not null,
  move_in_timing text not null,
  referral_source text,
  referral_code text not null,
  referred_by text,
  created_at timestamptz not null default now()
);

create index if not exists waitlist_created_at_idx on waitlist (created_at desc);
create index if not exists waitlist_city_idx on waitlist (city);
create index if not exists waitlist_user_type_idx on waitlist (user_type);
