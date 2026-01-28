# Adding Connections

Connections link external providers to Workflow Builder. Actions that require a **Connection** will only show providers that match the action’s provider ID.

## Add Connection flow

1. Open the provider in **Connections**.
2. Fill the required fields.
3. Click **Test** (required).
4. Click **Save**.

> Editing credentials requires a successful re-test before saving.

## Provider list and required fields

### AI Providers
- **OpenAI** (`openai`): `apiKey`* , `organizationId`, `defaultModel`
- **Claude** (`claude`): `apiKey`* , `defaultModel`
- **Google Gemini** (`gemini`): `apiKey`* , `defaultModel`
- **Grok** (`grok`): `apiKey`* , `defaultModel`
- **DeepSeek** (`deepseek`): `apiKey`*
- **Replicate** (`replicate`): `apiKey`*
- **Hugging Face** (`huggingface`): `apiKey`*

### Social & Messaging
- **X/Twitter** (`twitter`): `apiKey`* , `apiSecret`* , `accessToken`* , `accessTokenSecret`*
- **Telegram** (`telegram`): `botToken`*
- **Discord** (`discord`): `botToken`* (for triggers), `webhookUrl` optional
- **Slack** (`slack`): `webhookUrl`* , `botToken` optional
- **Microsoft Teams** (`teams`): `webhookUrl`*
- **WhatsApp via Twilio** (`whatsapp`): `accountSid`* , `authToken`* , `fromNumber`*

### Productivity
- **Google Sheets** (`google-sheets`): `serviceAccountJson`* , `defaultSpreadsheetId` optional
- **Google Drive** (`google-drive`): `serviceAccountJson`*
- **Google Calendar** (`google-calendar`): `serviceAccountJson`*
- **Notion** (`notion`): `apiKey`*
- **Airtable** (`airtable`): `apiKey`* , `baseId` optional
- **Trello** (`trello`): `apiKey`* , `token`*
- **Asana** (`asana`): `accessToken`*
- **Linear** (`linear`): `apiKey`*
- **Jira** (`jira`): `domain`* , `email`* , `apiToken`*
- **Dropbox** (`dropbox`): `accessToken`*

### Developer Tools
- **GitHub** (`github`): `accessToken`*
- **GitLab** (`gitlab`): `accessToken`* , `baseUrl` optional

### Databases & Memory
- **MongoDB** (`mongodb`): `connectionString`* , `database` optional
- **Redis** (`redis`): `url`* , `password` optional
- **Supabase** (`supabase`): `url`* , `anonKey`* , `serviceRoleKey` optional
- **Pinecone** (`pinecone`): `apiKey`* , `environment`* , `indexName` optional
- **Qdrant** (`qdrant`): `url`* , `apiKey` optional
- **Weaviate** (`weaviate`): `url`* , `apiKey` optional

### Email & Marketing
- **SendGrid** (`sendgrid`): `apiKey`* , `fromEmail` optional
- **Mailchimp** (`mailchimp`): `apiKey`* , `server`*
- **Mailgun** (`mailgun`): `apiKey`* , `domain`*
- **Resend** (`resend`): `apiKey`*
- **Twilio SMS** (`twilio`): `accountSid`* , `authToken`* , `fromNumber`*

### Payments
- **Stripe** (`stripe`): `secretKey`* , `webhookSecret` optional
- **PayPal** (`paypal`): `clientId`* , `clientSecret`* , `sandbox` optional

### E-Commerce
- **Shopify** (`shopify`): `shopDomain`* , `accessToken`*

### Cloud & Storage
- **AWS S3** (`aws-s3`): `accessKeyId`* , `secretAccessKey`* , `region`* , `bucket` optional

### Blockchain
- **AvaCloud** (`avacloud`): `apiKey`* , `projectId` optional
- **Alchemy** (`alchemy`): `apiKey`*
- **Infura** (`infura`): `projectId`* , `projectSecret` optional

### Data & Analytics
- **CoinGecko** (`coingecko`): `apiKey` optional
- **DexScreener** (`dexscreener`): `apiKey` optional
- **Typeform** (`typeform`): `accessToken`*

### Webhooks
- **Generic Webhook** (`webhook`): `url`* , `secret` optional, `headers` (JSON) optional
