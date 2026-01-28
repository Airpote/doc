# Jira Connection

Connect Jira to create issues, manage projects, and automate development workflows.

## Required Credentials

- **Domain** (your Jira instance domain)
- **Email** (your Atlassian account email)
- **API Token**

## Setup Steps

1. Go to [Atlassian API Tokens](https://id.atlassian.com/manage-profile/security/api-tokens)
2. Click "Create API token"
3. Name your token (e.g., "Workflow Builder")
4. Click "Create"
5. Copy the generated token
6. Note your Jira domain (e.g., `yourcompany.atlassian.net`)
7. Add all credentials to your Workflow Builder connections

## Features

- Create issues in projects
- Update issue fields and status
- Add comments to issues
- Transition issues through workflows
- Search issues with JQL

## Best Practices

- Use project keys and issue types correctly
- Handle custom fields with proper field IDs
- Use JQL for complex queries
- Monitor API rate limits
