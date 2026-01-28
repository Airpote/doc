# Qdrant Connection

Connect Qdrant for high-performance vector similarity search.

## Required Credentials

- **URL** (Qdrant instance URL)
- **API Key** (optional, for cloud instances)

## Setup Steps

### Qdrant Cloud
1. Go to [Qdrant Cloud](https://cloud.qdrant.io/)
2. Create a cluster
3. Copy the cluster URL
4. Generate an API key
5. Add credentials to your Workflow Builder connections

### Self-hosted Qdrant
1. Deploy Qdrant using Docker or other methods
2. Use format: `http://host:6333`
3. Add URL to your Workflow Builder connections

## Features

- Create and manage collections
- Upsert points with vectors
- Search similar vectors
- Filter searches with conditions
- Delete points

## Best Practices

- Choose appropriate vector dimensions
- Use payload filtering for hybrid search
- Configure collection settings for your use case
- Monitor collection size and performance
