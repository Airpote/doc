# GitHub Connection

Connect GitHub to create issues, manage repositories, and automate development workflows.

## Required Credentials

- **Access Token** (Personal Access Token)

## Setup Steps

1. Go to [GitHub Settings → Developer settings → Personal access tokens](https://github.com/settings/tokens)
2. Click "Generate new token" → "Generate new token (classic)" or "Fine-grained token"
3. Name your token
4. Select scopes:
   - `repo` (for repository access)
   - `issues` (for issue management)
   - `pull_request` (for PR management)
5. Click "Generate token"
6. Copy the generated token (shown only once)
7. Add it to your Workflow Builder connections

## Features

- Create issues in repositories
- Add comments to issues and PRs
- Create pull requests
- Get repository information
- List commits and branches

## Best Practices

- Use fine-grained tokens for better security
- Limit token scopes to only what's needed
- Rotate tokens periodically
- Store tokens securely
