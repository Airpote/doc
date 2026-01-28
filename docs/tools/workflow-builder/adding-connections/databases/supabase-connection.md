# Supabase Connection

Connect Supabase for PostgreSQL database access, authentication, and real-time features.

## Required Credentials

- **URL** (Project URL)
- **Anon Key** (public API key)
- **Service Role Key** (optional, for admin access)

## Setup Steps

1. Go to [Supabase Dashboard](https://app.supabase.com/)
2. Create a new project or select existing
3. Go to Project Settings → API
4. Copy the Project URL
5. Copy the `anon` public key
6. Optionally copy the `service_role` key for admin operations
7. Add credentials to your Workflow Builder connections

## Features

- Select data from tables
- Insert new rows
- Update existing rows
- Delete rows
- Real-time subscriptions

## Best Practices

- Use `anon` key for user-facing operations
- Use `service_role` key only for admin/server operations
- Enable Row Level Security (RLS) on tables
- Use proper filters to limit data access
