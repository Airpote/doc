# Hugging Face Connection

Connect Hugging Face Inference API to run thousands of ML models.

## Required Credentials

- **API Key** (User Access Token)

## Setup Steps

1. Go to [Hugging Face](https://huggingface.co/)
2. Create an account or sign in
3. Go to Settings → Access Tokens
4. Click "New token"
5. Name your token and select permissions:
   - `read` for inference only
   - `write` if you need to upload models
6. Click "Generate token"
7. Copy the token
8. Add it to your Workflow Builder connections

## Features

- Text generation
- Text classification
- Image classification
- Object detection
- Speech recognition
- Translation
- And thousands more models

## Free vs Pro Inference

### Free Tier
- Rate limited
- Shared infrastructure
- May have queuing

### Pro/Enterprise
- Higher rate limits
- Dedicated infrastructure
- Priority access

## Best Practices

- Check model cards for usage guidelines
- Handle model loading times
- Use popular models for faster cold starts
- Monitor API usage and costs
- Test models before production use
