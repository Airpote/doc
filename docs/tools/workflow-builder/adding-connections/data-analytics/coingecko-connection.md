# CoinGecko Connection

Connect CoinGecko for cryptocurrency price data and market information.

## Required Credentials

- **API Key** (optional for free tier)

## Setup Steps

### Free Tier (No API Key)
- CoinGecko offers free access with rate limits
- Simply use without adding a connection for basic queries

### Pro/Enterprise Tier
1. Go to [CoinGecko API](https://www.coingecko.com/en/api)
2. Sign up for a paid plan
3. Access your dashboard
4. Copy your API key
5. Add it to your Workflow Builder connections

## Features

- Get token prices (single or multiple)
- Get token information and metadata
- Access trending tokens
- Historical price data
- Market cap and volume data

## Rate Limits

- Free: 10-30 calls/minute
- Pro: Higher limits based on plan
- Enterprise: Custom limits

## Best Practices

- Cache frequently accessed data
- Use batch endpoints for multiple tokens
- Handle rate limit errors gracefully
- Consider Pro plan for production use
