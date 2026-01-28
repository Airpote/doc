# Shopify Connection

Connect Shopify to manage products, orders, and customers.

## Required Credentials

- **Shop Domain** (your Shopify store URL)
- **Access Token** (Admin API access token)

## Setup Steps

### Custom App (Recommended)
1. Go to your Shopify Admin
2. Navigate to Settings → Apps and sales channels
3. Click "Develop apps" → "Create an app"
4. Name your app
5. Click "Configure Admin API scopes"
6. Select required scopes:
   - `read_orders`, `write_orders`
   - `read_products`, `write_products`
   - `read_customers`, `write_customers`
7. Click "Save" then "Install app"
8. Copy the Admin API access token
9. Note your shop domain (e.g., `your-store.myshopify.com`)
10. Add credentials to your Workflow Builder connections

## Features

- List and get orders
- Create and update products
- Manage customers
- Track inventory
- Process fulfillments

## Best Practices

- Use minimal required scopes
- Handle pagination for large datasets
- Monitor API rate limits (2 requests per second)
- Use webhooks for real-time updates
