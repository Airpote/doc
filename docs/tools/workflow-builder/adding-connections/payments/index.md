# Payment Connections

Connect payment processors and financial services to handle transactions, subscriptions, and financial operations in your workflows.

## Available Payment Providers

### Stripe
Process credit card payments, manage subscriptions, and handle complex billing scenarios.

[Setup Stripe Connection →](stripe-connection.md)

### PayPal
Accept PayPal payments, create invoices, and manage merchant transactions.

[Setup PayPal Connection →](paypal-connection.md)

### x402
Enable AI agents to handle payments and financial transactions autonomously using blockchain technology.

[Setup x402 Connection →](x402-connection.md)

## Common Use Cases

- **E-commerce Payments**: Process customer orders and payments
- **Subscription Management**: Handle recurring billing and plan changes
- **Invoice Generation**: Create and send professional invoices
- **AI Agent Payments**: Enable autonomous financial transactions for AI workflows
- **Refund Processing**: Handle returns and chargebacks automatically

## Security Best Practices

- Always use test/sandbox environments for development
- Implement proper error handling for failed payments
- Use webhooks for real-time payment status updates
- Store sensitive payment data securely
- Comply with PCI DSS requirements when handling card data

## Integration Tips

- Test payment flows thoroughly before going live
- Implement proper logging for transaction tracking
- Set up monitoring for payment failures
- Configure appropriate timeouts for payment processing
- Use idempotency keys to prevent duplicate charges