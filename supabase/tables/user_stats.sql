create table user_stats (
  id             uuid primary key,
  username       text not null,
  total_xp       integer default 0,
  current_streak integer default 0,
  longest_streak integer default 0,
  mastery        jsonb default '{}',
  updated_at     timestamptz default now()
);

alter table user_stats enable row level security;

create policy "anon_upsert" on user_stats
  for all using (true) with check (true);
