# PayPal Connection

Connect PayPal to process payments and manage transactions.

## Required Credentials

- **Client ID**
- **Client Secret**
- **Sandbox** (optional, boolean for test mode)

## Setup Steps

1. Go to [PayPal Developer Dashboard](https://developer.paypal.com/)
2. Create an account or sign in
3. Go to My Apps & Credentials
4. Create a new app or use default
5. Copy the Client ID
6. Show and copy the Secret
7. Choose Sandbox or Live mode
8. Add credentials to your Workflow Builder connections

## Sandbox vs Live

- Use Sandbox for testing with fake money
- Switch to Live for real transactions
- Test thoroughly before going live

## Features

- Process payments
- Create invoices
- Manage subscriptions
- Handle refunds
- Verify transactions

## Best Practices

- Always test in Sandbox first
- Handle webhook events for payment confirmations
- Implement proper error handling
- Store transaction IDs for reference
