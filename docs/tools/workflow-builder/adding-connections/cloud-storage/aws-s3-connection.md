# AWS S3 Connection

Connect AWS S3 to upload, download, and manage files in buckets.

## Required Credentials

- **Access Key ID**
- **Secret Access Key**
- **Region**
- **Bucket** (optional default)

## Setup Steps

1. Go to [AWS Console](https://console.aws.amazon.com/)
2. Navigate to IAM → Users
3. Create a new user or use existing
4. Attach the `AmazonS3FullAccess` policy (or create custom policy)
5. Go to Security credentials → Create access key
6. Choose "Application running outside AWS"
7. Copy the Access Key ID and Secret Access Key
8. Note your preferred region (e.g., `us-east-1`)
9. Create an S3 bucket if needed
10. Add credentials to your Workflow Builder connections

## Custom IAM Policy (Recommended)

For better security, use a custom policy:
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:PutObject",
        "s3:DeleteObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::your-bucket-name",
        "arn:aws:s3:::your-bucket-name/*"
      ]
    }
  ]
}
```

## Features

- Upload files to buckets
- Download files from buckets
- List objects in buckets
- Delete objects
- Generate presigned URLs

## Best Practices

- Use minimal required permissions
- Enable versioning for important buckets
- Set up lifecycle policies
- Monitor storage costs
- Use proper object naming conventions
