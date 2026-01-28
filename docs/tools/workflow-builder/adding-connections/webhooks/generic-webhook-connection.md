# Generic Webhook Connection

Connect to any webhook endpoint for custom integrations.

## Required Credentials

- **URL** (webhook endpoint)
- **Secret** (optional, for signature verification)
- **Headers** (optional, custom headers as JSON)

## Setup Steps

1. Get the webhook URL from your target service
2. Note any required authentication headers
3. If using signature verification, note the secret key
4. Add credentials to your Workflow Builder connections

## Configuration

### URL
The full webhook endpoint URL (e.g., `https://api.example.com/webhook`)

### Secret (Optional)
Used to sign the payload for verification. The signature is typically sent in a header like `X-Webhook-Signature`.

### Headers (Optional)
Custom headers in JSON format:
```json
{
  "Authorization": "Bearer your-token",
  "Content-Type": "application/json",
  "X-Custom-Header": "custom-value"
}
```

## Features

- Send POST requests to any endpoint
- Include custom headers
- Sign payloads for verification
- Send JSON payloads

## Use Cases

- Integrate with custom APIs
- Connect to services without native support
- Send notifications to internal systems
- Trigger external workflows

## Best Practices

- Use HTTPS for secure communication
- Implement signature verification when available
- Handle timeouts and retries
- Log webhook responses for debugging
- Test with staging endpoints first
