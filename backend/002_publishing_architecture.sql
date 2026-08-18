
-- 002_publishing_architecture.sql
-- Publication identity + canonical content layer.
-- Designed to sit on top of 001_initial_schema.sql.

create type public.publication_code as enum (
  'blog_declassified',
  'forbidden',
  'editorial',
  'newsletter',
  'books',
  'podcast',
  'courses',
  'frameworks'
);

create type public.content_item_type as enum (
  'blog_post',
  'forbidden_post',
  'editorial_project',
  'editorial_series',
  'newsletter_issue',
  'book',
  'podcast_episode',
  'course',
  'framework'
);

create table public.publications (
  id uuid primary key default gen_random_uuid(),
  code public.publication_code unique not null,
  name text not null,
  domain text not null,
  route_prefix text not null,
  description text,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.content_items (
  id uuid primary key default gen_random_uuid(),
  canonical_key text unique not null,
  publication_id uuid not null references public.publications(id),
  content_type public.content_item_type not null,
  slug text not null,
  title text not null,
  summary text,
  body text,
  status public.content_status not null default 'draft',
  canonical_url text not null,
  published_at timestamptz,
  metadata jsonb not null default '{}'::jsonb,
  seo_title text,
  seo_description text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(publication_id, slug)
);

create table public.content_relationships (
  id uuid primary key default gen_random_uuid(),
  source_content_id uuid not null references public.content_items(id) on delete cascade,
  target_content_id uuid not null references public.content_items(id) on delete cascade,
  relationship_type text not null,
  provenance text,
  confidence text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  unique(source_content_id,target_content_id,relationship_type),
  check (source_content_id <> target_content_id)
);

create table public.content_tags (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text unique not null,
  description text,
  created_at timestamptz not null default now()
);

create table public.content_item_tags (
  content_item_id uuid not null references public.content_items(id) on delete cascade,
  tag_id uuid not null references public.content_tags(id) on delete cascade,
  primary key(content_item_id,tag_id)
);

create table public.editorial_projects (
  content_item_id uuid primary key references public.content_items(id) on delete cascade,
  project_type text not null default 'project',
  editorial_note text
);

create table public.newsletter_issues (
  content_item_id uuid primary key references public.content_items(id) on delete cascade,
  issue_number integer,
  audience_note text,
  is_exclusive boolean not null default false,
  delivery_status text not null default 'draft',
  sent_at timestamptz
);

create table public.content_media (
  id uuid primary key default gen_random_uuid(),
  content_item_id uuid not null references public.content_items(id) on delete cascade,
  media_type text not null,
  role text not null,
  asset_path text,
  alt_text text,
  sort_order integer not null default 0,
  metadata jsonb not null default '{}'::jsonb
);

create index idx_content_publication on public.content_items(publication_id);
create index idx_content_type on public.content_items(content_type);
create index idx_content_status on public.content_items(status);
create index idx_content_published on public.content_items(published_at);
create index idx_content_relationship_source on public.content_relationships(source_content_id);
create index idx_content_relationship_target on public.content_relationships(target_content_id);
create index idx_content_tag_slug on public.content_tags(slug);

alter table public.publications enable row level security;
alter table public.content_items enable row level security;
alter table public.content_relationships enable row level security;
alter table public.content_tags enable row level security;
alter table public.content_item_tags enable row level security;
alter table public.editorial_projects enable row level security;
alter table public.newsletter_issues enable row level security;
alter table public.content_media enable row level security;

create policy publications_public_read
  on public.publications for select using (is_active = true);

create policy content_public_read
  on public.content_items for select
  using (status = 'published');

create policy relationships_public_read
  on public.content_relationships for select
  using (
    exists (
      select 1 from public.content_items c
      where c.id = source_content_id and c.status = 'published'
    )
    and exists (
      select 1 from public.content_items c
      where c.id = target_content_id and c.status = 'published'
    )
  );

create policy tags_public_read
  on public.content_tags for select using (true);

create policy item_tags_public_read
  on public.content_item_tags for select using (
    exists (
      select 1 from public.content_items c
      where c.id = content_item_id and c.status = 'published'
    )
  );

create policy media_public_read
  on public.content_media for select using (
    exists (
      select 1 from public.content_items c
      where c.id = content_item_id and c.status = 'published'
    )
  );

-- Editorial/newsletter records are controlled by the server/admin layer.
-- Do not grant anonymous INSERT/UPDATE/DELETE privileges.
