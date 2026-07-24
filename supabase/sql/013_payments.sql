create table if not exists public.payments (

    id uuid primary key default gen_random_uuid(),

    user_id uuid references auth.users(id) on delete cascade,

    plan_id uuid references membership_plans(id),

    order_id text unique not null,

    payment_type text,

    transaction_id text,

    gross_amount numeric,

    transaction_status text,

    status text default 'pending',

    snap_token text,

    snap_redirect_url text,

    paid_at timestamptz,

    created_at timestamptz default now()

);

create index if not exists idx_payments_user
on payments(user_id);

create index if not exists idx_payments_order
on payments(order_id);
