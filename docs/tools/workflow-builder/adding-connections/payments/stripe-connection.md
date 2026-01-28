# Stripe Connection

Connect Stripe to process payments, manage subscriptions, and handle invoices.

## Required Credentials

- **Secret Key**
- **Webhook Secret** (optional, for webhooks)

## Setup Steps

1. Go to [Stripe Dashboard](https://dashboard.stripe.com/)
2. Create an account or sign in
3. Go to Developers → API keys
4. Copy your Secret key (starts with `sk_`)
5. For webhooks: Go to Developers → Webhooks
6. Add an endpoint and copy the Webhook signing secret
7. Add credentials to your Workflow Builder connections

## Test vs Live Mode

- Use test keys (`sk_test_...`) for development
- Use live keys (`sk_live_...`) for production
- Toggle between modes in Stripe Dashboard

## Features

- Create charges and payments
- Manage customers
- Create invoices
- Handle subscriptions
- Process refunds

## Best Practices

- Always use test mode for development
- Implement proper error handling
- Use webhooks for async event handling
- Store customer IDs for recurring billing
- Handle PCI compliance properly
