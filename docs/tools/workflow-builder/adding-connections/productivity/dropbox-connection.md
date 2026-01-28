# Dropbox Connection

Connect Dropbox to upload, download, and manage files in your workflows.

## Required Credentials

- **Access Token**

## Setup Steps

1. Go to [Dropbox App Console](https://www.dropbox.com/developers/apps)
2. Click "Create app"
3. Choose "Scoped access"
4. Select "Full Dropbox" or "App folder" access
5. Name your app
6. Click "Create app"
7. In the app settings, go to "Permissions" tab
8. Enable required permissions (files.content.read, files.content.write, etc.)
9. Click "Submit"
10. Go to "Settings" tab → "Generated access token"
11. Click "Generate" to create an access token
12. Copy the token to your Workflow Builder connections

## Features

- Upload files to Dropbox
- Download files from Dropbox
- List files and folders
- Create folders
- Search for files

## Best Practices

- Use appropriate access level (App folder vs Full Dropbox)
- Handle large files with chunked uploads
- Monitor storage quotas
- Use proper file paths
