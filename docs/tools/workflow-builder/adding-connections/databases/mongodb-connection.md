# MongoDB Connection

Connect MongoDB to store, query, and manage document data in your workflows.

## Required Credentials

- **Connection String**
- **Database** (optional default)

## Setup Steps

### MongoDB Atlas (Cloud)
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a cluster or use existing
3. Go to "Database Access" and create a user
4. Go to "Network Access" and whitelist your IP (or 0.0.0.0/0 for all)
5. Click "Connect" on your cluster
6. Select "Connect your application"
7. Copy the connection string
8. Replace `<password>` with your database user password
9. Add it to your Workflow Builder connections

### Self-hosted MongoDB
Use format: `mongodb://username:password@host:port/database`

## Features

- Find documents with filters
- Insert new documents
- Update existing documents
- Delete documents
- Aggregate queries

## Best Practices

- Use indexes for frequently queried fields
- Limit query results with pagination
- Handle connection timeouts gracefully
- Use proper authentication
