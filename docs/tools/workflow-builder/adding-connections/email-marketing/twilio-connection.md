# Twilio SMS Connection

Connect Twilio to send and receive SMS messages.

## Required Credentials

- **Account SID**
- **Auth Token**
- **From Number** (your Twilio phone number)

## Setup Steps

1. Go to [Twilio Console](https://console.twilio.com/)
2. Create an account or sign in
3. From the dashboard, copy your Account SID and Auth Token
4. Go to Phone Numbers → Manage → Buy a Number
5. Purchase a phone number with SMS capability
6. Copy the phone number (format: `+1234567890`)
7. Add credentials to your Workflow Builder connections

## Features

- Send SMS messages
- Receive SMS via webhooks
- Send MMS with media
- Track message status
- Two-way conversations

## Best Practices

- Use proper phone number format (+E.164)
- Handle delivery status callbacks
- Comply with SMS regulations (TCPA, etc.)
- Monitor messaging costs
- Handle opt-outs properly
