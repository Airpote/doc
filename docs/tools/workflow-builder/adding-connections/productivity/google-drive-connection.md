# Google Drive Connection

Connect Google Drive to upload, download, and manage files in your workflows.

## Required Credentials

- **Service Account JSON**

## Setup Steps

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable the Google Drive API
4. Go to "Credentials" → "Create Credentials" → "Service Account"
5. Name your service account and grant appropriate roles
6. Click on the service account → "Keys" → "Add Key" → "Create new key"
7. Select JSON format and download
8. Copy the entire JSON content
9. Share folders with the service account email if needed
10. Add the JSON to your Workflow Builder connections

## Features

- Upload files to Drive
- Download files from Drive
- List files and folders
- Search for files by name or type
- Create and manage folders

## Best Practices

- Share destination folders with service account email
- Use folder IDs for consistent file organization
- Handle large files with appropriate timeouts
- Monitor storage quotas
