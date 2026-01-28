# Slack Connection

Connect Slack to send messages, upload files, and automate team notifications.

## Required Credentials

- **Webhook URL** (for incoming webhooks)
- **Bot Token** (optional, for advanced features)

## Setup Steps

### Webhook URL
1. Go to [Slack API Apps](https://api.slack.com/apps)
2. Create a new app or select existing
3. Navigate to "Incoming Webhooks"
4. Activate incoming webhooks
5. Click "Add New Webhook to Workspace"
6. Select a channel and authorize
7. Copy the Webhook URL
8. Add it to your Workflow Builder connections

### Bot Token (optional)
1. In your Slack app, go to "OAuth & Permissions"
2. Add required scopes (chat:write, files:write, reactions:write, etc.)
3. Install the app to your workspace
4. Copy the Bot User OAuth Token
5. Add it to your Workflow Builder connections

## Features

- Send messages to channels
- Upload files and documents
- Add emoji reactions
- Update existing messages
- Send rich formatted messages with blocks

## Best Practices

- Use webhooks for simple one-way notifications
- Use bot tokens for interactive features
- Test in a private channel first
- Monitor rate limits (1 message per second per channel)
