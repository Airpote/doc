---
sidebar_custom_props:
    icon: ''
---

# ⚙️ Workflow Builder

Visual workflow automation tool for complex DeFi operations. Create automated sequences with scheduling, conditions, DEX operations, social media integration, and more.

Features include:
- Schedule & Control: Time-based triggers and loops
- Logic Conditions: If/else, switches, filters
- DEX Operations: Swaps via Velora, Odos, LFJ
- Token Trading: Automated buy/sell strategies
- AMI Tools Integration: Volume boosting, airdrops
- DEX Screener: Real-time market data
- RPC Integration: On-chain data queries
- Social Automation: Twitter and Telegram integration

## YouTube Tutorial Intro to our workflow builder

<iframe width="560" height="315" src="https://www.youtube.com/embed/RZui-M-5LRo" title="Workflow Builder Intro" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Adding Connections

The Workflow Builder supports various external service connections to extend your automation capabilities:

### 🐦 X (Twitter) Connection

Connect your Twitter account to enable social media automation features like posting tweets, replying, retweeting, and monitoring mentions.

**Required Credentials:**
- API Key
- API Secret
- Access Token
- Access Token Secret

**Setup Steps:**
1. Go to [Twitter Developer Portal](https://developer.twitter.com/)
2. Create a new app or use existing one
3. Generate API keys and access tokens
4. Add the credentials to your Workflow Builder connections

### 📱 Telegram Connection

Connect Telegram bots to automate messaging, channel posting, and group management.

**Required Credentials:**
- Bot Token (obtained from @BotFather)

**Setup Steps:**
1. Message @BotFather on Telegram
2. Create a new bot with `/newbot` command
3. Copy the bot token
4. Add the token to your Workflow Builder connections

## YouTube Tutorial on How to add a telegram bot connection to our workflow builder

<iframe width="560" height="315" src="https://www.youtube.com/embed/RZui-M-5LRo" title="Telegram Connection Tutorial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### 🔗 RPC Connection

Connect to blockchain RPC endpoints for on-chain data queries and transaction monitoring.

**Supported Features:**
- Get native/token balances
- Read contract data
- Monitor transactions
- Gas price estimation

### 📊 DEX Screener Connection

Connect to DEX screener APIs for real-time market data and trading information.

**Supported Features:**
- Token price and market data
- Liquidity information
- Volume tracking
- Trending pairs

### 🤖 AI Provider Connections

Connect to various AI services to enhance your workflows with intelligent automation and decision-making capabilities.

#### OpenAI Connection

Integrate OpenAI's GPT models for natural language processing, content generation, and AI-powered decision making in your workflows.

**Required Credentials:**
- API Key (from OpenAI platform)

#### Grok Connection

Connect to xAI's Grok AI for advanced reasoning and analysis capabilities.

**Required Credentials:**
- API Key (from xAI platform)

#### General AI Connection

Connect to other AI services and custom AI endpoints for specialized automation tasks.

**Supported Features:**
- Text generation and analysis
- Sentiment analysis
- Automated decision making
- Content moderation
- Custom AI model integration