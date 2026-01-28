# Weaviate Connection

Connect Weaviate for vector search with built-in ML models.

## Required Credentials

- **URL** (Weaviate instance URL)
- **API Key** (optional)

## Setup Steps

### Weaviate Cloud Services (WCS)
1. Go to [Weaviate Console](https://console.weaviate.cloud/)
2. Create a cluster
3. Copy the cluster URL
4. Generate an API key if needed
5. Add credentials to your Workflow Builder connections

### Self-hosted Weaviate
1. Deploy Weaviate using Docker or Kubernetes
2. Use format: `http://host:8080`
3. Add URL to your Workflow Builder connections

## Features

- Create schemas and classes
- Add objects with vectors
- Semantic search with AI
- GraphQL queries
- Batch operations

## Best Practices

- Design your schema before adding data
- Use appropriate vectorizers
- Leverage Weaviate's built-in modules
- Monitor resource usage
