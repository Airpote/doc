# WhatsApp Connection (via Twilio)

Connect WhatsApp through Twilio to send messages and notifications.

## Required Credentials

- **Account SID**
- **Auth Token**
- **From Number** (Twilio WhatsApp number)

## Setup Steps

1. Sign up at [Twilio](https://www.twilio.com/)
2. Navigate to Console Dashboard
3. Copy your Account SID and Auth Token
4. Go to Messaging → Try it out → Send a WhatsApp message
5. Follow the sandbox setup or use a purchased WhatsApp number
6. Note your Twilio WhatsApp number (format: `whatsapp:+14155238886`)
7. Add credentials to your Workflow Builder connections

## Sandbox vs Production

### Sandbox (Testing)
- Free to use for development
- Recipients must opt-in by sending a code to Twilio sandbox
- Limited to pre-approved message templates

### Production
- Requires WhatsApp Business API approval
- Supports custom templates
- Higher message limits

## Features

- Send text messages
- Send media (images, documents)
- Use message templates
- Receive and respond to messages

## Best Practices

- Always use approved message templates for business messages
- Respect WhatsApp's 24-hour messaging window
- Handle opt-in/opt-out properly
- Monitor delivery status and failures
