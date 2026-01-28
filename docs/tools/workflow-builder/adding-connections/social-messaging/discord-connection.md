# Discord Connection

Connect Discord bots and webhooks for messaging, notifications, and community automation.

## Required Credentials

- **Bot Token** (for triggers and bot actions)
- **Webhook URL** (optional, for webhook-based messages)

## Setup Steps

### Bot Token (for triggers)
1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Click "New Application" and name your bot
3. Navigate to the "Bot" section
4. Click "Add Bot"
5. Copy the bot token (keep it secure)
6. Enable required intents (Message Content, Guild Messages, etc.)
7. Invite the bot to your server using OAuth2 URL generator
8. Add the token to your Workflow Builder connections

### Webhook URL (for sending messages)
1. Open Discord and go to your server
2. Right-click the channel → Edit Channel
3. Go to Integrations → Webhooks
4. Click "New Webhook"
5. Copy the Webhook URL
6. Add it to your Workflow Builder connections

## Features

- Send messages to channels via webhook
- Send rich embeds with formatting
- React to messages (bot required)
- Trigger workflows on new messages (bot required)
- Edit and delete webhook messages

## Best Practices

- Use webhooks for simple notifications (no bot required)
- Use bot token for interactive features and triggers
- Keep tokens secure and rotate regularly
- Respect Discord rate limits (50 requests per second)
