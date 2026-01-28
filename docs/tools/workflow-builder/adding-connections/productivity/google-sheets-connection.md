# Google Sheets Connection

Connect Google Sheets to read, write, and manage spreadsheet data in your workflows.

## Required Credentials

- **Service Account JSON**
- **Default Spreadsheet ID** (optional)

## Setup Steps

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable the Google Sheets API
4. Go to "Credentials" → "Create Credentials" → "Service Account"
5. Name your service account and grant appropriate roles
6. Click on the service account → "Keys" → "Add Key" → "Create new key"
7. Select JSON format and download
8. Copy the entire JSON content
9. Share your spreadsheet with the service account email (found in the JSON)
10. Add the JSON to your Workflow Builder connections

## Features

- Read data from spreadsheets
- Append rows to spreadsheets
- Update specific cells or ranges
- Create new sheets within a spreadsheet

## Best Practices

- Share spreadsheets with the service account email before using
- Use specific ranges instead of entire sheets for better performance
- Handle empty cells gracefully
- Monitor API quotas (100 requests per 100 seconds per user)
