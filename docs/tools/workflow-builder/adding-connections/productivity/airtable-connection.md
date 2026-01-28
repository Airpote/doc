# Airtable Connection

Connect Airtable to manage records, query tables, and automate data workflows.

## Required Credentials

- **API Key** (Personal Access Token)
- **Base ID** (optional default)

## Setup Steps

1. Go to [Airtable Account Settings](https://airtable.com/account)
2. Navigate to "Developer hub" → "Personal access tokens"
3. Click "Create new token"
4. Name your token and select scopes:
   - `data.records:read`
   - `data.records:write`
   - `schema.bases:read`
5. Select which bases to grant access to
6. Click "Create token" and copy it
7. To find Base ID: open base → Help → API Documentation → Base ID in URL
8. Add credentials to your Workflow Builder connections

## Features

- List records from tables
- Create new records
- Update existing records
- Delete records
- Query with filters and sorting

## Best Practices

- Use specific scopes for security
- Batch operations when possible
- Handle pagination for large tables
- Monitor API rate limits (5 requests per second per base)
