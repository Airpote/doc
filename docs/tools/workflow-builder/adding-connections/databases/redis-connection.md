# Redis Connection

Connect Redis for caching, session storage, and fast data operations.

## Required Credentials

- **URL** (Redis connection URL)
- **Password** (optional)

## Setup Steps

### Redis Cloud
1. Go to [Redis Cloud](https://redis.com/try-free/)
2. Create a free database
3. Copy the public endpoint
4. Copy the default user password
5. Format URL: `redis://default:password@host:port`
6. Add to your Workflow Builder connections

### Self-hosted Redis
Use format: `redis://host:port` or `redis://username:password@host:port`

## Features

- Get and set key-value pairs
- Set expiration on keys
- List operations
- Hash operations
- Pub/sub messaging

## Best Practices

- Use meaningful key naming conventions
- Set appropriate TTL on cached data
- Handle connection errors gracefully
- Monitor memory usage
