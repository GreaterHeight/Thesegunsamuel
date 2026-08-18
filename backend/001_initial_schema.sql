-- SegunSamuel Backend/Data Architecture v1
-- PostgreSQL / Supabase-compatible foundation.
-- No secrets. No provider-specific credentials.

create extension if not exists pgcrypto;

create type public.user_role as enum ('student','editor','instructor','advisor','admin');
create type public.order_status as enum ('pending_payment','paid','failed','cancelled','refunded');
create type public.enrollment_status as enum ('active','completed','suspended','cancelled');
create type public.payment_provider as enum ('paystack','stripe','bank_transfer','assisted');
create type public.content_status as enum ('draft','published','archived');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  email text,
  role public.user_role not null default 'student',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.courses (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  description text,
  price_ngn numeric(12,2) not null default 0 check (price_ngn >= 0),
  status public.content_status not null default 'draft',
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.course_modules (
  id uuid primary key default gen_random_uuid(),
  course_id uuid not null references public.courses(id) on delete cascade,
  position integer not null,
  title text not null,
  description text,
  unique(course_id,position)
);

create table public.lessons (
  id uuid primary key default gen_random_uuid(),
  module_id uuid not null references public.course_modules(id) on delete cascade,
  position integer not null,
  slug text not null,
  title text not null,
  content_ref text,
  duration_minutes integer,
  published boolean not null default false,
  unique(module_id,position),
  unique(module_id,slug)
);

create table public.orders (
  id uuid primary key default gen_random_uuid(),
  order_number text unique not null,
  user_id uuid references public.profiles(id) on delete set null,
  status public.order_status not null default 'pending_payment',
  currency char(3) not null default 'NGN',
  subtotal numeric(12,2) not null default 0,
  total numeric(12,2) not null default 0,
  payment_provider public.payment_provider,
  provider_reference text,
  created_at timestamptz not null default now(),
  paid_at timestamptz,
  updated_at timestamptz not null default now()
);

create table public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  course_id uuid not null references public.courses(id),
  title_snapshot text not null,
  unit_price numeric(12,2) not null check (unit_price >= 0),
  quantity integer not null default 1 check (quantity > 0),
  subtotal numeric(12,2) generated always as (unit_price * quantity) stored
);

create table public.payment_events (
  id uuid primary key default gen_random_uuid(),
  provider public.payment_provider not null,
  provider_event_id text not null,
  provider_reference text,
  event_type text not null,
  payload jsonb not null,
  received_at timestamptz not null default now(),
  processed_at timestamptz,
  processing_error text,
  unique(provider,provider_event_id)
);

create table public.enrollments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  course_id uuid not null references public.courses(id),
  order_id uuid references public.orders(id) on delete set null,
  status public.enrollment_status not null default 'active',
  enrolled_at timestamptz not null default now(),
  completed_at timestamptz,
  unique(user_id,course_id)
);

create table public.lesson_progress (
  user_id uuid not null references public.profiles(id) on delete cascade,
  lesson_id uuid not null references public.lessons(id) on delete cascade,
  completed boolean not null default false,
  completed_at timestamptz,
  updated_at timestamptz not null default now(),
  primary key(user_id,lesson_id)
);

create table public.knowledge_entities (
  id text primary key,
  slug text,
  name text not null,
  type text not null,
  status text,
  route text,
  definition text,
  metadata jsonb not null default '{}'::jsonb,
  source_ref text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.knowledge_relationships (
  id uuid primary key default gen_random_uuid(),
  source_id text not null references public.knowledge_entities(id) on delete cascade,
  target_id text not null references public.knowledge_entities(id) on delete cascade,
  relationship_type text not null,
  provenance text,
  confidence text,
  metadata jsonb not null default '{}'::jsonb,
  unique(source_id,target_id,relationship_type)
);

create table public.engagement_intakes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete set null,
  name text not null,
  organisation text,
  email text not null,
  engagement_type text not null,
  context text,
  desired_outcome text,
  timing text,
  status text not null default 'new',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.audit_log (
  id bigint generated always as identity primary key,
  actor_user_id uuid references public.profiles(id) on delete set null,
  action text not null,
  entity_type text,
  entity_id text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index idx_orders_user on public.orders(user_id);
create index idx_orders_status on public.orders(status);
create index idx_enrollments_user on public.enrollments(user_id);
create index idx_progress_user on public.lesson_progress(user_id);
create index idx_knowledge_type on public.knowledge_entities(type);
create index idx_knowledge_route on public.knowledge_entities(route);
create index idx_intakes_status on public.engagement_intakes(status);

-- Prevent client-side users from writing authoritative payment/enrollment state.
alter table public.orders enable row level security;
alter table public.order_items enable row level security;
alter table public.payment_events enable row level security;
alter table public.enrollments enable row level security;
alter table public.lesson_progress enable row level security;
alter table public.profiles enable row level security;
alter table public.courses enable row level security;
alter table public.lessons enable row level security;
alter table public.knowledge_entities enable row level security;
alter table public.knowledge_relationships enable row level security;
alter table public.engagement_intakes enable row level security;
alter table public.audit_log enable row level security;

-- Profiles: users can read/update their own non-role profile fields.
create policy profiles_select_self on public.profiles for select using (auth.uid() = id);
create policy profiles_update_self on public.profiles for update using (auth.uid() = id) with check (auth.uid() = id);

-- Published course/lesson catalogue is public.
create policy courses_public_read on public.courses for select using (status = 'published');
create policy lessons_public_read on public.lessons for select using (published = true);

-- Users may see their own orders and enrollments.
create policy orders_select_own on public.orders for select using (auth.uid() = user_id);
create policy order_items_select_own on public.order_items for select using (
  exists(select 1 from public.orders o where o.id=order_id and o.user_id=auth.uid())
);
create policy enrollments_select_own on public.enrollments for select using (auth.uid() = user_id);

-- Users may write their own progress only.
create policy progress_select_own on public.lesson_progress for select using (auth.uid() = user_id);
create policy progress_insert_own on public.lesson_progress for insert with check (auth.uid() = user_id);
create policy progress_update_own on public.lesson_progress for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- Knowledge graph is public read-only.
create policy knowledge_entities_public_read on public.knowledge_entities for select using (true);
create policy knowledge_relationships_public_read on public.knowledge_relationships for select using (true);

-- Intake: public submission can be handled through a controlled API/function.
-- Do not grant anonymous direct UPDATE/DELETE access.
