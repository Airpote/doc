# Pinecone Connection

Connect Pinecone for vector database operations and AI-powered similarity search.

## Required Credentials

- **API Key**
- **Environment**
- **Index Name** (optional default)

## Setup Steps

1. Go to [Pinecone Console](https://app.pinecone.io/)
2. Create an account or sign in
3. Create an index or use existing
4. Go to API Keys section
5. Copy your API key
6. Note your environment (e.g., `us-east-1-aws`)
7. Note your index name
8. Add credentials to your Workflow Builder connections

## Features

- Upsert vectors
- Query similar vectors
- Delete vectors
- Describe index statistics

## Best Practices

- Choose appropriate dimensions for your embeddings
- Use namespaces to organize vectors
- Batch upserts for better performance
- Monitor index usage and costs
