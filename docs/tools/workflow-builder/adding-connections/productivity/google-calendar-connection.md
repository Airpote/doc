# Google Calendar Connection

Connect Google Calendar to create, update, and manage calendar events.

## Required Credentials

- **Service Account JSON**

## Setup Steps

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable the Google Calendar API
4. Go to "Credentials" → "Create Credentials" → "Service Account"
5. Name your service account and grant appropriate roles
6. Click on the service account → "Keys" → "Add Key" → "Create new key"
7. Select JSON format and download
8. Copy the entire JSON content
9. Share calendars with the service account email
10. Add the JSON to your Workflow Builder connections

## Features

- Create calendar events
- List upcoming events
- Update existing events
- Delete events
- Check availability

## Best Practices

- Share calendars with service account email before using
- Use proper timezone handling
- Include clear event descriptions
- Set appropriate reminders
