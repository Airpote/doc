# Notion Connection

Connect Notion to create pages, query databases, and manage content.

## Required Credentials

- **API Key** (Internal Integration Token)

## Setup Steps

1. Go to [Notion Integrations](https://www.notion.so/my-integrations)
2. Click "New integration"
3. Name your integration and select the workspace
4. Choose capabilities (Read content, Update content, Insert content)
5. Click "Submit"
6. Copy the Internal Integration Token
7. Share Notion pages/databases with your integration:
   - Open the page or database in Notion
   - Click "..." menu → "Add connections"
   - Select your integration
8. Add the token to your Workflow Builder connections

## Features

- Create new pages
- Query databases with filters
- Add items to databases
- Update page properties
- Search across workspace

## Best Practices

- Share specific pages/databases with the integration (not entire workspace)
- Use database IDs for consistent queries
- Handle rich text formatting properly
- Respect API rate limits (3 requests per second)
