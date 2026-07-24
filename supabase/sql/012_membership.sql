-- ===========================
-- MASTER MEMBERSHIP
-- ===========================

create table if not exists public.membership_plans (

    id uuid primary key default gen_random_uuid(),

    name text not null,
    slug text unique not null,

    price numeric not null,

    listing_limit integer not null,

    ai_limit integer not null,

    featured_listing boolean default false,

    social_slot integer default 0,

    multi_agent boolean default false,

    priority_support boolean default false,

    active boolean default true,

    created_at timestamptz default now()

);

-- ===========================
-- USER MEMBERSHIP
-- ===========================

create table if not exists public.user_memberships (

    id uuid primary key default gen_random_uuid(),

    user_id uuid references auth.users(id) on delete cascade,

    plan_id uuid references membership_plans(id),

    status text default 'active',

    started_at timestamptz default now(),

    expired_at timestamptz,

    created_at timestamptz default now()

);

-- ===========================
-- DATA DEFAULT
-- ===========================

insert into membership_plans
(
name,
slug,
price,
listing_limit,
ai_limit,
featured_listing,
social_slot,
multi_agent,
priority_support
)

values

(
'Kaveling',
'kaveling',
300000,
10,
20,
false,
0,
false,
false
),

(
'Cluster',
'cluster',
500000,
30,
100,
true,
0,
false,
false
),

(
'Residence',
'residence',
1000000,
100,
999999,
true,
1,
false,
true
),

(
'Estate (VIP)',
'estate',
3000000,
999999,
999999,
true,
3,
true,
true
)

on conflict (slug) do nothing;
