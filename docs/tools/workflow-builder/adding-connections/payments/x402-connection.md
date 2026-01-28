# x402 Connection

x402 is a decentralized payment protocol that enables AI agents within AMI workflows to autonomously handle payments and financial transactions. It allows AI agents to pay for services, receive payments for completed tasks, and manage microtransactions seamlessly within automated workflows.

## What is x402?

x402 is a blockchain-based payment protocol specifically designed for AI agent interactions. It enables:

- **AI-to-Service Payments**: AI agents can pay for API calls, compute resources, or external services
- **Service-to-AI Payments**: External services can pay AI agents for completed tasks or provided value
- **Microtransactions**: Handle small payment amounts efficiently for AI-driven services
- **Automated Settlements**: Payments are processed automatically based on workflow triggers and conditions

## The x402 Protocol

x402 operates on a decentralized network that:

1. **Verifies Transactions**: Uses smart contracts to validate payment conditions
2. **Enables Cross-Chain Payments**: Supports multiple blockchain networks for flexibility
3. **Provides Escrow Services**: Holds funds in escrow until service completion
4. **Handles Gas Fees**: Automatically manages transaction fees for seamless operations

## Integration Status

x402 integration is **fully implemented** in the AMI Workflow Builder and available as a tool for your AI agents. You can add x402 as an action in your workflows to enable payment capabilities for your AI agents.

## Required Credentials

- **API Key** (`apiKey`): Your x402 API key for authentication
- **Webhook URL** (`webhookUrl`): Optional webhook endpoint for payment notifications

## Setup Steps

### 1. Add an AI Provider Connection

First, you need to connect an AI provider to power your AI agents:

1. Go to [AI Providers](https://docs.amichain.org/tools/workflow-builder/adding-connections/ai-providers)
2. Choose your preferred AI provider (OpenAI, Claude, Gemini, etc.)
3. Follow the setup instructions for your chosen provider
4. Test and save the connection

### 2. Create a Workflow with AI Agent

Create a new workflow that includes an AI agent:

1. Go to Workflow Builder
2. Create a new workflow
3. Add an AI agent action using your AI provider connection
4. Configure the AI agent's role and capabilities

### 3. Add x402 as Tools to Your AI Agents

Enable payment capabilities for your AI agent:

1. In your workflow, select the AI agent action
2. Go to the "Tools" or "Actions" section
3. Add "x402" from the available action list
4. Configure the x402 tool with your connection details

## Features

- **Send Payments**: AI agents can initiate payments to external services
- **Receive Payments**: AI agents can accept payments for completed work
- **Payment Verification**: Confirm transaction status and amounts
- **Balance Management**: Check available funds and transaction history
- **Automated Refunds**: Handle failed transactions or service cancellations

## Best Practices

- **Test in Development**: Use test networks before deploying to production
- **Monitor Transactions**: Set up webhooks to track payment events
- **Implement Error Handling**: Handle failed payments gracefully in your workflows
- **Secure API Keys**: Never expose x402 credentials in client-side code
- **Set Payment Limits**: Define maximum transaction amounts for security

## Example Use Cases

- **AI Content Creation**: Pay for image generation APIs, then receive payment for delivered content
- **Data Processing**: Pay for external data sources, charge for processed analytics
- **Automated Trading**: Handle transaction fees and profit distributions
- **Service Orchestration**: Pay for multiple microservices within a single workflow

## Security Considerations

- x402 uses encrypted transactions and secure key management
- All payments are recorded on the blockchain for transparency
- Smart contracts ensure funds are only released upon successful completion
- Multi-signature requirements can be configured for high-value transactions