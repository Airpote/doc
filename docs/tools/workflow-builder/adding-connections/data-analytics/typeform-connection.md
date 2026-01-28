# Typeform Connection

Connect Typeform to retrieve form responses and survey data.

## Required Credentials

- **Access Token** (Personal Access Token)

## Setup Steps

1. Go to [Typeform Admin](https://admin.typeform.com/)
2. Sign in to your account
3. Click your profile icon → Account → Personal tokens
4. Click "Generate a new token"
5. Name your token
6. Select scopes:
   - `forms:read` (to list forms)
   - `responses:read` (to get responses)
7. Click "Generate token"
8. Copy the token (shown only once)
9. Add it to your Workflow Builder connections

## Features

- List all forms
- Get form responses
- Filter responses by date
- Access response metadata
- Track completion rates

## Best Practices

- Use webhooks for real-time response notifications
- Handle pagination for large response sets
- Store form IDs for consistent access
- Monitor API rate limits
