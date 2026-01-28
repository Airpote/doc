# GitLab Connection

Connect GitLab to create issues, manage repositories, and automate development workflows.

## Required Credentials

- **Access Token** (Personal Access Token)
- **Base URL** (optional, for self-hosted instances)

## Setup Steps

1. Go to GitLab → User Settings → Access Tokens
2. Or navigate to: `https://gitlab.com/-/profile/personal_access_tokens`
3. Name your token
4. Set an expiration date
5. Select scopes:
   - `api` (full API access)
   - `read_api` (read-only API access)
   - `read_repository` (repository read access)
   - `write_repository` (repository write access)
6. Click "Create personal access token"
7. Copy the generated token (shown only once)
8. Add it to your Workflow Builder connections
9. For self-hosted: add your GitLab instance URL

## Features

- Create issues in projects
- Add comments to issues and MRs
- Create merge requests
- Get project information
- Manage CI/CD pipelines

## Best Practices

- Set appropriate token expiration
- Use minimal required scopes
- For self-hosted: use HTTPS base URLs
- Handle rate limits appropriately
