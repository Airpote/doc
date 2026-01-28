# Workflow Builder — Action Types

This page is the complete action inventory for Workflow Builder. Each action includes purpose, inputs, outputs, and an example use-case.

## Execution model (high-level)

- Triggers start workflows.
- Actions run in order, using the selected Connection provider.
- Control flow actions route or repeat execution based on conditions.
- Webhook Trigger exposes a URL path; the request payload becomes the trigger output.

## Input types

- **connection**: pick a saved connection in Connections.
- **wallet**: select a wallet or wallet group (group enables Loop Fund features).
- **chainRpc**: select chain ID + RPC URL (public or private RPC). If chain is unsupported, add a custom chain ID + RPC.
- **variable**: pull output from a prior action (e.g., `{{actionId.outputKey}}`).
- **json**: user pastes JSON (must be valid JSON).
- **textarea**: multiline text.
- **amount**: accepts fixed amount; “random” support only if action says supportsRandom.

## Output usage

Outputs are named fields. Reference them in later steps using variables (for example `{{actionId.outputKey}}`). If an output is an object/array, you can drill into keys with dot notation.

---

## Triggers

### Manual Trigger (`trigger:manual`)
- **Purpose**: Start a workflow manually (ideal for testing).
- **Required inputs**: None.
- **Optional inputs**: None.
- **Outputs**: `startedAt` (timestamp), `triggerType`.
- **Example use-case**: Click Run to test a workflow before enabling schedules.

### Interval (`schedule:interval`)
- **Purpose**: Run on a fixed interval (seconds/minutes/hours/days).
- **Required inputs**: `interval` (number), `unit` (seconds/minutes/hours/days).
- **Optional inputs**: `timezone`.
- **Outputs**: `scheduledAt`, `triggerType`.
- **Example use-case**: Check a price every 5 minutes.

### Cron Schedule (`schedule:cron`)
- **Purpose**: Run on a cron schedule.
- **Required inputs**: `cron` expression.
- **Optional inputs**: `timezone`.
- **Outputs**: `scheduledAt`, `triggerType`.
- **Example use-case**: Run at 09:00 UTC on weekdays.

### Run Once (`schedule:once`)
- **Purpose**: Run once at a specific time.
- **Required inputs**: `runAt` date/time.
- **Optional inputs**: `timezone`.
- **Outputs**: `scheduledAt`, `triggerType`.
- **Example use-case**: Execute a one-off campaign at a launch time.

### Telegram Message (`trigger:telegram`)
- **Purpose**: Trigger when a Telegram bot receives a message.
- **Required inputs**: **Connection** (Telegram).
- **Optional inputs**: `allowedChatIds` filter.
- **Outputs**: `messageId`, `chatId`, `text`, `from`, `date`.
- **Example use-case**: Auto-reply to commands in a group.

### Discord Message (`trigger:discord`)
- **Purpose**: Trigger when a Discord bot receives a message.
- **Required inputs**: **Connection** (Discord bot token).
- **Optional inputs**: `channelId` filter.
- **Outputs**: `messageId`, `channelId`, `content`, `author`.
- **Example use-case**: Start a workflow when a keyword is posted.

### Webhook Trigger (`trigger:webhook`)
- **Purpose**: Trigger via HTTP request to a workflow-specific URL.
- **Required inputs**: `path` (URL path segment).
- **Optional inputs**: `secret` (for signature/verification).
- **Outputs**: `body`, `headers`, `query`, `method`.
- **Example use-case**: Trigger on a form submission from your app.

---

## Control Flow

### Pause (`control:pause`)
- **Purpose**: Pause execution for a duration.
- **Required inputs**: `duration`, `unit`.
- **Optional inputs**: None.
- **Outputs**: `resumedAt`.
- **Example use-case**: Wait 10 minutes between actions.

### Wait (`util:wait`)
- **Purpose**: Wait for a specified time (utility delay).
- **Required inputs**: `duration`, `unit`.
- **Optional inputs**: None.
- **Outputs**: `resumedAt`.
- **Example use-case**: Add a short cooldown before posting.

### If / Else (`control:if`)
- **Purpose**: Conditional branching based on a comparison.
- **Required inputs**: `left` (variable), `operator`, `right` (value).
- **Optional inputs**: None.
- **Outputs**: `conditionMet` (boolean).
- **Example use-case**: Only swap if price is below a threshold.

### Switch (`control:switch`)
- **Purpose**: Route execution based on a value.
- **Required inputs**: `value`, `cases` (array of value + branch name).
- **Optional inputs**: `defaultBranch`.
- **Outputs**: `matchedCase`.
- **Example use-case**: Route by chain ID to different actions.

### Router (`control:router`)
- **Purpose**: Run multiple branches simultaneously.
- **Required inputs**: `branches` (array of branch names).
- **Optional inputs**: None.
- **Outputs**: `branchResults` (array).
- **Example use-case**: Post to Twitter and Telegram in parallel.

### For Each (`control:forEach`)
- **Purpose**: Loop over an array.
- **Required inputs**: `items` (array).
- **Optional inputs**: `maxIterations`.
- **Outputs**: `item`, `index` (per iteration).
- **Example use-case**: Send a message to each user in a list.

### Repeat N Times (`control:repeat`)
- **Purpose**: Loop a fixed number of times.
- **Required inputs**: `times`.
- **Optional inputs**: `maxIterations` (safety).
- **Outputs**: `iteration`.
- **Example use-case**: Retry a request 3 times.

### While (`control:while`)
- **Purpose**: Loop while a condition is true.
- **Required inputs**: `condition` (boolean variable/expression).
- **Optional inputs**: `maxIterations`.
- **Outputs**: `iteration`.
- **Example use-case**: Keep polling until a tx is confirmed.

### Sticky Note (`ui:note`)
- **Purpose**: Add a note to the canvas (UI-only).
- **Required inputs**: `text` (textarea).
- **Optional inputs**: None.
- **Outputs**: None (not executed).
- **Example use-case**: Leave explanations for teammates.

---

## AI

### OpenAI Chat (`ai:openai`)
- **Purpose**: Generate text with GPT models.
- **Required inputs**: **Connection** (OpenAI), `prompt`.
- **Optional inputs**: `model`, `temperature`, `maxTokens`.
- **Outputs**: `content` (string).
- **Example use-case**: Draft a Twitter announcement from token data.

### Claude Chat (`ai:claude`)
- **Purpose**: Generate text with Claude models.
- **Required inputs**: **Connection** (Claude), `prompt`.
- **Optional inputs**: `model`, `temperature`, `maxTokens`.
- **Outputs**: `content` (string).
- **Example use-case**: Summarize a market report.

### Grok Chat (`ai:grok`)
- **Purpose**: Generate text with Grok.
- **Required inputs**: **Connection** (Grok), `prompt`.
- **Optional inputs**: `model`, `temperature`, `maxTokens`.
- **Outputs**: `content` (string).
- **Example use-case**: Produce a witty release note.

### Gemini Chat (`ai:gemini`)
- **Purpose**: Generate text with Gemini.
- **Required inputs**: **Connection** (Gemini), `prompt`.
- **Optional inputs**: `model`, `temperature`, `maxTokens`.
- **Outputs**: `content` (string).
- **Example use-case**: Analyze sentiment from chat logs.

### Sentiment Analysis (`ai:sentiment`)
- **Purpose**: Classify sentiment of a text.
- **Required inputs**: **Connection** (AI provider), `text`.
- **Optional inputs**: None.
- **Outputs**: `label`, `score`.
- **Example use-case**: Detect negative user feedback.

### Summarize (`ai:summarize`)
- **Purpose**: Summarize long text.
- **Required inputs**: **Connection** (AI provider), `text`.
- **Optional inputs**: `maxLength`.
- **Outputs**: `summary`.
- **Example use-case**: Condense a long forum thread.

### Translate (`ai:translate`)
- **Purpose**: Translate text to a target language.
- **Required inputs**: **Connection** (AI provider), `text`, `targetLanguage`.
- **Optional inputs**: `sourceLanguage`.
- **Outputs**: `translatedText`.
- **Example use-case**: Translate announcements to Spanish.

### Extract Data (`ai:extract`)
- **Purpose**: Pull structured fields from unstructured text.
- **Required inputs**: **Connection** (AI provider), `text`, `schema` (JSON).
- **Optional inputs**: None.
- **Outputs**: `fields` (object).
- **Example use-case**: Extract token address and chain from a message.

### Classify (`ai:classify`)
- **Purpose**: Classify text into predefined categories.
- **Required inputs**: **Connection** (AI provider), `text`, `categories` (array).
- **Optional inputs**: None.
- **Outputs**: `label`, `confidence`.
- **Example use-case**: Route tickets to support queues.

### Rewrite (`ai:rewrite`)
- **Purpose**: Rewrite text with style/tone controls.
- **Required inputs**: **Connection** (AI provider), `text`.
- **Optional inputs**: `tone`, `style`, `length`.
- **Outputs**: `output` (string).
- **Example use-case**: Turn a formal note into a casual tweet.

### Template Writer (`ai:template`)
- **Purpose**: Fill a text template with variables.
- **Required inputs**: **Connection** (AI provider), `template`, `variables` (object).
- **Optional inputs**: None.
- **Outputs**: `content` (string).
- **Example use-case**: Generate a personalized email.

### Replicate Run Model (`ai:replicate`)
- **Purpose**: Run an AI model on Replicate.
- **Required inputs**: **Connection** (Replicate), `model`, `input` (json).
- **Optional inputs**: None.
- **Outputs**: `output` (object/string).
- **Example use-case**: Generate an image from a prompt.

### Hugging Face Inference (`ai:huggingface`)
- **Purpose**: Run a Hugging Face model.
- **Required inputs**: **Connection** (Hugging Face), `model`, `input`.
- **Optional inputs**: None.
- **Outputs**: `output` (object/string).
- **Example use-case**: Run a classifier on a text sample.

---

## Swap

### Velora Quote (`swap:velora:quote`)
- **Purpose**: Preview a Velora swap.
- **Required inputs**: `fromToken`, `toToken`, `amount`.
- **Optional inputs**: `slippage`.
- **Outputs**: `quote` (object), `expectedOutput`.
- **Example use-case**: Estimate output before executing a swap.

### Velora Swap (`swap:velora:swap`)
- **Purpose**: Execute a Velora swap.
- **Required inputs**: **wallet**, `fromToken`, `toToken`, `amount`.
- **Optional inputs**: `slippage`.
- **Outputs**: `txHash`, `explorerUrl`.
- **Example use-case**: Swap AVAX for a token.

### Odos Quote (`swap:odos:quote`)
- **Purpose**: Preview an Odos swap.
- **Required inputs**: `fromToken`, `toToken`, `amount`.
- **Optional inputs**: `slippage`.
- **Outputs**: `quote`, `expectedOutput`.
- **Example use-case**: Compare Odos price before swapping.

### Odos Swap (`swap:odos:swap`)
- **Purpose**: Execute an Odos swap.
- **Required inputs**: **wallet**, `fromToken`, `toToken`, `amount`.
- **Optional inputs**: `slippage`.
- **Outputs**: `txHash`, `explorerUrl`.
- **Example use-case**: Swap using Odos routing.

### LFJ Quote (`swap:lfj:quote`)
- **Purpose**: Preview an LFJ swap.
- **Required inputs**: `fromToken`, `toToken`, `amount`.
- **Optional inputs**: `slippage`.
- **Outputs**: `quote`, `expectedOutput`.
- **Example use-case**: Estimate output on LFJ V2.2.

### LFJ Swap V2.2 (`swap:lfj:swap`)
- **Purpose**: Execute an LFJ V2.2 swap.
- **Required inputs**: **wallet**, `fromToken`, `toToken`, `amount`.
- **Optional inputs**: `slippage`.
- **Outputs**: `txHash`, `explorerUrl`.
- **Example use-case**: Swap on LFJ V2.2.

### Best Quote (`swap:best-quote`)
- **Purpose**: Get the best quote across DEXes.
- **Required inputs**: `fromToken`, `toToken`, `amount`.
- **Optional inputs**: `slippage`.
- **Outputs**: `bestRoute`, `expectedOutput`.
- **Example use-case**: Find the best price across providers.

### Best Swap (`swap:best-swap`)
- **Purpose**: Swap using the best route.
- **Required inputs**: **wallet**, `fromToken`, `toToken`, `amount`.
- **Optional inputs**: `slippage`.
- **Outputs**: `txHash`, `explorerUrl`.
- **Example use-case**: Execute the best-priced swap automatically.

---

## Buy Token

### Buy with Native (`buy:with-native`)
- **Purpose**: Spend native token to buy another token.
- **Required inputs**: **wallet**, `tokenAddress`, `amount`.
- **Optional inputs**: `slippage`.
- **Outputs**: `txHash`, `explorerUrl`.
- **Example use-case**: Buy a token with AVAX.

### Buy with Stable (`buy:with-stable`)
- **Purpose**: Spend stablecoin to buy a token.
- **Required inputs**: **wallet**, `tokenAddress`, `amount`, `stableToken`.
- **Optional inputs**: `slippage`.
- **Outputs**: `txHash`, `explorerUrl`.
- **Example use-case**: Buy using USDC.

### Buy by % Balance (`buy:percentage`)
- **Purpose**: Buy using a percentage of balance.
- **Required inputs**: **wallet**, `tokenAddress`, `percent`.
- **Optional inputs**: `slippage`.
- **Outputs**: `txHash`, `explorerUrl`.
- **Example use-case**: Buy using 25% of AVAX balance.

### Buy at Price (`buy:at-price`)
- **Purpose**: Buy when a price target is met.
- **Required inputs**: **wallet**, `tokenAddress`, `targetPrice`, `condition`.
- **Optional inputs**: `slippage`.
- **Outputs**: `conditionMet` (boolean), `txHash` (if executed).
- **Example use-case**: Buy if price drops below $0.10.

---

## Sell Token

### Sell to Native (`sell:to-native`)
- **Purpose**: Sell token for native.
- **Required inputs**: **wallet**, `tokenAddress`, `amount`.
- **Optional inputs**: `slippage`.
- **Outputs**: `txHash`, `explorerUrl`.
- **Example use-case**: Sell token to AVAX.

### Sell to Stable (`sell:to-stable`)
- **Purpose**: Sell token to stablecoin.
- **Required inputs**: **wallet**, `tokenAddress`, `amount`, `stableToken`.
- **Optional inputs**: `slippage`.
- **Outputs**: `txHash`, `explorerUrl`.
- **Example use-case**: Sell to USDT.

### Sell All (`sell:all`)
- **Purpose**: Sell entire token balance.
- **Required inputs**: **wallet**, `tokenAddress`.
- **Optional inputs**: `slippage`.
- **Outputs**: `txHash`, `explorerUrl`.
- **Example use-case**: Exit a position completely.

### Sell Percentage (`sell:percentage`)
- **Purpose**: Sell a % of holdings.
- **Required inputs**: **wallet**, `tokenAddress`, `percent`.
- **Optional inputs**: `slippage`.
- **Outputs**: `txHash`, `explorerUrl`.
- **Example use-case**: Take profit on 40% of holdings.

### Sell at Price (`sell:at-price`)
- **Purpose**: Sell when price target is met.
- **Required inputs**: **wallet**, `tokenAddress`, `targetPrice`, `condition`.
- **Optional inputs**: `slippage`.
- **Outputs**: `conditionMet` (boolean), `txHash` (if executed).
- **Example use-case**: Sell if price exceeds $0.20.

---

## Wallet

### Get Native Balance (`wallet:get-balance`)
- **Purpose**: Fetch native balance (AVAX/ETH).
- **Required inputs**: **wallet**.
- **Optional inputs**: None.
- **Outputs**: `balance`.
- **Example use-case**: Check balance before a swap.

### Get Token Balance (`wallet:get-token-balance`)
- **Purpose**: Fetch ERC-20 balance.
- **Required inputs**: **wallet**, `tokenAddress`.
- **Optional inputs**: None.
- **Outputs**: `balance`.
- **Example use-case**: Check holdings before selling.

### Get All Balances (`wallet:get-all-balances`)
- **Purpose**: Fetch native + token balances.
- **Required inputs**: **wallet**.
- **Optional inputs**: None.
- **Outputs**: `balances` (array).
- **Example use-case**: Display a portfolio snapshot.

### Send Native (`wallet:send-native`)
- **Purpose**: Send native token.
- **Required inputs**: **wallet**, `to`, `amount`.
- **Optional inputs**: None.
- **Outputs**: `txHash`, `explorerUrl`.
- **Example use-case**: Pay a treasury address in AVAX.

### Send Token (`wallet:send-token`)
- **Purpose**: Send ERC-20 token.
- **Required inputs**: **wallet**, `tokenAddress`, `to`, `amount`.
- **Optional inputs**: None.
- **Outputs**: `txHash`, `explorerUrl`.
- **Example use-case**: Transfer tokens to a recipient.

### Approve Token (`wallet:approve`)
- **Purpose**: Approve a spender for ERC-20.
- **Required inputs**: **wallet**, `tokenAddress`, `spender`.
- **Optional inputs**: `amount`, `unlimited` (boolean).
- **Outputs**: `txHash`, `explorerUrl`.
- **Example use-case**: Approve a router before swapping.

### Check Allowance (`wallet:check-allowance`)
- **Purpose**: Check token allowance.
- **Required inputs**: **wallet**, `tokenAddress`, `spender`.
- **Optional inputs**: None.
- **Outputs**: `allowance`.
- **Example use-case**: Confirm allowance before a swap.

### Get Token Info (`wallet:get-token-info`)
- **Purpose**: Read ERC-20 metadata.
- **Required inputs**: `tokenAddress`, **chain & RPC**.
- **Optional inputs**: None.
- **Outputs**: `name`, `symbol`, `decimals`.
- **Example use-case**: Display token info in a report.

### Get Nonce (`wallet:get-nonce`)
- **Purpose**: Get next transaction nonce.
- **Required inputs**: **wallet**.
- **Optional inputs**: None.
- **Outputs**: `nonce`.
- **Example use-case**: Prepare a custom transaction.

### Get Gas Price (`wallet:get-gas-price`)
- **Purpose**: Fetch current gas price.
- **Required inputs**: **chain & RPC**.
- **Optional inputs**: None.
- **Outputs**: `gasPrice`.
- **Example use-case**: Log gas before sending.

### Transfer All (`wallet:transfer-all`)
- **Purpose**: Transfer remaining native balance minus gas reserve.
- **Required inputs**: **wallet**, `to`.
- **Optional inputs**: `reserve`.
- **Outputs**: `txHash`, `explorerUrl`.
- **Example use-case**: Sweep funds to a treasury wallet.

---

## RPC / Blockchain

### RPC Native Balance (`rpc:balance:native`)
- **Purpose**: Query native balance via RPC.
- **Required inputs**: **chain & RPC**, `address`.
- **Optional inputs**: None.
- **Outputs**: `balance`.
- **Example use-case**: Check balance of any address.

### RPC Token Balance (`rpc:balance:token`)
- **Purpose**: Query token balance via RPC.
- **Required inputs**: **chain & RPC**, `address`, `tokenAddress`.
- **Optional inputs**: None.
- **Outputs**: `balance`.
- **Example use-case**: Read a holder’s balance.

### Get Transaction (`rpc:transaction:get`)
- **Purpose**: Fetch transaction by hash.
- **Required inputs**: **chain & RPC**, `txHash`.
- **Optional inputs**: None.
- **Outputs**: `transaction` (object).
- **Example use-case**: Inspect a submitted transaction.

### Get Tx Receipt (`rpc:transaction:receipt`)
- **Purpose**: Fetch transaction receipt.
- **Required inputs**: **chain & RPC**, `txHash`.
- **Optional inputs**: None.
- **Outputs**: `receipt` (object).
- **Example use-case**: Verify confirmations/status.

### RPC Gas Price (`rpc:gas:price`)
- **Purpose**: Get gas price/fees.
- **Required inputs**: **chain & RPC**.
- **Optional inputs**: None.
- **Outputs**: `gasPrice`.
- **Example use-case**: Log gas cost trends.

### Get Block (`rpc:block:get`)
- **Purpose**: Fetch block details.
- **Required inputs**: **chain & RPC**, `blockNumber`.
- **Optional inputs**: `includeTransactions`.
- **Outputs**: `block` (object).
- **Example use-case**: Audit a block’s transactions.

### Current Block Number (`rpc:block:number`)
- **Purpose**: Get latest block height.
- **Required inputs**: **chain & RPC**.
- **Optional inputs**: None.
- **Outputs**: `blockNumber`.
- **Example use-case**: Poll for new blocks.

### Call Contract (`rpc:contract:call`)
- **Purpose**: Read-only contract call.
- **Required inputs**: **chain & RPC**, `contractAddress`, `abi` (json), `function`, `args`.
- **Optional inputs**: `blockTag`.
- **Outputs**: `result`.
- **Example use-case**: Read total supply from a token.

### Estimate Gas (`rpc:gas:estimate`)
- **Purpose**: Estimate gas for a tx.
- **Required inputs**: **chain & RPC**, `from`, `to`, `data`, `value`.
- **Optional inputs**: None.
- **Outputs**: `gasEstimate`.
- **Example use-case**: Estimate gas for a contract call.

### Get Nonce (`rpc:nonce:get`)
- **Purpose**: Get account nonce.
- **Required inputs**: **chain & RPC**, `address`.
- **Optional inputs**: None.
- **Outputs**: `nonce`.
- **Example use-case**: Prevent nonce collisions.

---

## Social & Messaging

### Post Tweet (`twitter:post`)
- **Purpose**: Create a new tweet.
- **Required inputs**: **Connection** (Twitter), `text`.
- **Optional inputs**: `mediaUrls`, `replyToId`.
- **Outputs**: `tweetId`, `url`.
- **Example use-case**: Announce a token update.

### Reply to Tweet (`twitter:reply`)
- **Purpose**: Reply to an existing tweet.
- **Required inputs**: **Connection** (Twitter), `tweetId`, `text`.
- **Optional inputs**: `mediaUrls`.
- **Outputs**: `tweetId`, `url`.
- **Example use-case**: Auto-reply to mentions.

### Quote Tweet (`twitter:quote`)
- **Purpose**: Quote an existing tweet.
- **Required inputs**: **Connection** (Twitter), `tweetId`, `text`.
- **Optional inputs**: None.
- **Outputs**: `tweetId`, `url`.
- **Example use-case**: Quote a partner announcement.

### Retweet (`twitter:retweet`)
- **Purpose**: Retweet a tweet.
- **Required inputs**: **Connection** (Twitter), `tweetId`.
- **Optional inputs**: None.
- **Outputs**: `tweetId`, `url`.
- **Example use-case**: Retweet a launch post.

### Like Tweet (`twitter:like`)
- **Purpose**: Like a tweet.
- **Required inputs**: **Connection** (Twitter), `tweetId`.
- **Optional inputs**: None.
- **Outputs**: `liked` (boolean).
- **Example use-case**: Like tweets from a partner.

### Follow User (`twitter:follow`)
- **Purpose**: Follow a Twitter user.
- **Required inputs**: **Connection** (Twitter), `username` or `userId`.
- **Optional inputs**: None.
- **Outputs**: `followed` (boolean).
- **Example use-case**: Follow new community members.

### Search Tweets (`twitter:search`)
- **Purpose**: Search recent tweets.
- **Required inputs**: **Connection** (Twitter), `query`.
- **Optional inputs**: `maxResults`.
- **Outputs**: `tweets` (array).
- **Example use-case**: Find mentions of a token.

### Get User (`twitter:get-user`)
- **Purpose**: Fetch user profile.
- **Required inputs**: **Connection** (Twitter), `username` or `userId`.
- **Optional inputs**: None.
- **Outputs**: `user` (object).
- **Example use-case**: Enrich user data in a report.

### Get Tweet (`twitter:get-tweet`)
- **Purpose**: Fetch tweet details.
- **Required inputs**: **Connection** (Twitter), `tweetId`.
- **Optional inputs**: None.
- **Outputs**: `tweet` (object).
- **Example use-case**: Analyze engagement on a tweet.

### Telegram Send Message (`telegram:send`)
- **Purpose**: Send a message to a chat.
- **Required inputs**: **Connection** (Telegram), `text`.
- **Optional inputs**: `chatId` (auto-reply if triggered).
- **Outputs**: `messageId`, `chatId`.
- **Example use-case**: Send a price alert.

### Telegram Send Photo (`telegram:photo`)
- **Purpose**: Send a photo.
- **Required inputs**: **Connection** (Telegram), `photoUrl`.
- **Optional inputs**: `caption`, `chatId`.
- **Outputs**: `messageId`.
- **Example use-case**: Share a chart image.

### Telegram Send Document (`telegram:document`)
- **Purpose**: Send a file.
- **Required inputs**: **Connection** (Telegram), `fileUrl`.
- **Optional inputs**: `caption`, `chatId`.
- **Outputs**: `messageId`.
- **Example use-case**: Send a PDF report.

### Telegram Edit Message (`telegram:edit`)
- **Purpose**: Edit a sent message.
- **Required inputs**: **Connection** (Telegram), `chatId`, `messageId`, `text`.
- **Optional inputs**: None.
- **Outputs**: `messageId`.
- **Example use-case**: Update a status message.

### Telegram Delete (`telegram:delete`)
- **Purpose**: Delete a message.
- **Required inputs**: **Connection** (Telegram), `chatId`, `messageId`.
- **Optional inputs**: None.
- **Outputs**: `deleted` (boolean).
- **Example use-case**: Remove outdated announcements.

### Telegram Pin (`telegram:pin`)
- **Purpose**: Pin a message.
- **Required inputs**: **Connection** (Telegram), `chatId`, `messageId`.
- **Optional inputs**: `disableNotification`.
- **Outputs**: `pinned` (boolean).
- **Example use-case**: Pin a rules message.

### Discord Message (`discord:message`)
- **Purpose**: Send a Discord webhook message.
- **Required inputs**: `webhookUrl`, `content`.
- **Optional inputs**: `username`, `avatarUrl`.
- **Outputs**: `messageId`.
- **Example use-case**: Post a build status update.

### Discord Embed (`discord:embed`)
- **Purpose**: Send an embed payload.
- **Required inputs**: `webhookUrl`, `embed` (json).
- **Optional inputs**: None.
- **Outputs**: `messageId`.
- **Example use-case**: Send a rich token report.

### Discord Edit (`discord:edit`)
- **Purpose**: Edit a webhook message.
- **Required inputs**: `webhookUrl`, `messageId`, `content`.
- **Optional inputs**: None.
- **Outputs**: `messageId`.
- **Example use-case**: Update a progress post.

### Discord Delete (`discord:delete`)
- **Purpose**: Delete a webhook message.
- **Required inputs**: `webhookUrl`, `messageId`.
- **Optional inputs**: None.
- **Outputs**: `deleted` (boolean).
- **Example use-case**: Remove a stale alert.

### Twilio Send SMS (`twilio:sms:send`)
- **Purpose**: Send an SMS via Twilio.
- **Required inputs**: **Connection** (Twilio), `to`, `message`.
- **Optional inputs**: `fromNumber`.
- **Outputs**: `sid`, `status`.
- **Example use-case**: Send a critical alert to a phone.

### Twilio WhatsApp (`twilio:whatsapp:send`)
- **Purpose**: Send a WhatsApp message via Twilio.
- **Required inputs**: **Connection** (Twilio), `to`, `message`.
- **Optional inputs**: `fromNumber`.
- **Outputs**: `sid`, `status`.
- **Example use-case**: Send a WhatsApp update.

### Mailchimp Add Subscriber (`mailchimp:subscriber:add`)
- **Purpose**: Add subscriber to a list.
- **Required inputs**: **Connection** (Mailchimp), `listId`, `email`.
- **Optional inputs**: `mergeFields`.
- **Outputs**: `subscriberId`.
- **Example use-case**: Add users from a form.

### Mailchimp Send Campaign (`mailchimp:campaign:send`)
- **Purpose**: Send a Mailchimp campaign.
- **Required inputs**: **Connection** (Mailchimp), `campaignId`.
- **Optional inputs**: None.
- **Outputs**: `sent` (boolean).
- **Example use-case**: Trigger a newsletter send.

### SendGrid Send Email (`sendgrid:email:send`)
- **Purpose**: Send email via SendGrid.
- **Required inputs**: **Connection** (SendGrid), `to`, `subject`, `content`.
- **Optional inputs**: `from`, `cc`, `bcc`.
- **Outputs**: `messageId`, `status`.
- **Example use-case**: Send a verification email.

### YouTube List Videos (`youtube:video:list`)
- **Purpose**: List videos from a channel.
- **Required inputs**: **Connection** (YouTube), `channelId`.
- **Optional inputs**: `maxResults`.
- **Outputs**: `videos` (array).
- **Example use-case**: Track new uploads.

### YouTube Get Video (`youtube:video:get`)
- **Purpose**: Get video details.
- **Required inputs**: **Connection** (YouTube), `videoId`.
- **Optional inputs**: None.
- **Outputs**: `video` (object).
- **Example use-case**: Fetch stats for a specific video.

---

## Data Sources

### CoinGecko Price (`data:coingecko:price`)
- **Purpose**: Get token price(s).
- **Required inputs**: **Connection** (CoinGecko optional), `ids` or `contractAddresses`.
- **Optional inputs**: `vsCurrency`.
- **Outputs**: `prices` (object).
- **Example use-case**: Pull token price every hour.

### CoinGecko Info (`data:coingecko:info`)
- **Purpose**: Get token info.
- **Required inputs**: `id` or `contractAddress`.
- **Optional inputs**: `vsCurrency`.
- **Outputs**: `token` (object).
- **Example use-case**: Display token metadata.

### CoinGecko Trending (`data:coingecko:trending`)
- **Purpose**: Get trending tokens.
- **Required inputs**: None.
- **Optional inputs**: None.
- **Outputs**: `tokens` (array).
- **Example use-case**: Post trending tokens daily.

### DexScreener Token (`data:dexscreener:token`)
- **Purpose**: Get token data by address.
- **Required inputs**: **Connection** (DexScreener optional), `tokenAddress`.
- **Optional inputs**: None.
- **Outputs**: `pairs` (array).
- **Example use-case**: Pull liquidity/volume stats.

### DexScreener Search (`data:dexscreener:search`)
- **Purpose**: Search tokens/pairs.
- **Required inputs**: `query`.
- **Optional inputs**: None.
- **Outputs**: `results` (array).
- **Example use-case**: Find pools by symbol.

### Arena Token (`data:arena:token`)
- **Purpose**: Arena token info.
- **Required inputs**: `tokenAddress`.
- **Optional inputs**: None.
- **Outputs**: `token` (object).
- **Example use-case**: Fetch Arena stats.

### Arena User (`data:arena:user`)
- **Purpose**: Arena user profile.
- **Required inputs**: `userAddress`.
- **Optional inputs**: None.
- **Outputs**: `user` (object).
- **Example use-case**: Fetch user metrics.

### Frosty Metrics (`data:frosty:metrics`)
- **Purpose**: Token metrics.
- **Required inputs**: `tokenAddress`.
- **Optional inputs**: None.
- **Outputs**: `metrics` (object).
- **Example use-case**: Display holder metrics.

### Frosty Holders (`data:frosty:holders`)
- **Purpose**: Holder analysis.
- **Required inputs**: `tokenAddress`.
- **Optional inputs**: None.
- **Outputs**: `holders` (array).
- **Example use-case**: Analyze holder distribution.

### AvaCloud Data (`data:avacloud:data`)
- **Purpose**: Call AvaCloud data API.
- **Required inputs**: **Connection** (AvaCloud), `endpoint`, `params`.
- **Optional inputs**: None.
- **Outputs**: `data` (object).
- **Example use-case**: Query chain analytics.

### AvaCloud Transaction (`data:avacloud:transaction`)
- **Purpose**: Get transaction details via AvaCloud.
- **Required inputs**: **Connection** (AvaCloud), `txHash`.
- **Optional inputs**: None.
- **Outputs**: `transaction` (object).
- **Example use-case**: Fetch enriched tx data.

### AvaCloud Balance (`data:avacloud:balance`)
- **Purpose**: Get address balance via AvaCloud.
- **Required inputs**: **Connection** (AvaCloud), `address`.
- **Optional inputs**: None.
- **Outputs**: `balance`.
- **Example use-case**: Check balances using AvaCloud.

### Supabase Select (`supabase:select`)
- **Purpose**: Query data from a Supabase table.
- **Required inputs**: **Connection** (Supabase), `table`.
- **Optional inputs**: `filter`, `limit`, `order`.
- **Outputs**: `rows` (array).
- **Example use-case**: Pull recent rows.

### Supabase Insert (`supabase:insert`)
- **Purpose**: Insert data into a Supabase table.
- **Required inputs**: **Connection** (Supabase), `table`, `rows` (json).
- **Optional inputs**: None.
- **Outputs**: `inserted` (array).
- **Example use-case**: Log workflow events.

### Supabase Update (`supabase:update`)
- **Purpose**: Update data in a Supabase table.
- **Required inputs**: **Connection** (Supabase), `table`, `values` (json).
- **Optional inputs**: `filter`.
- **Outputs**: `updated` (array).
- **Example use-case**: Update a status flag.

### MongoDB Find (`mongodb:find`)
- **Purpose**: Find documents.
- **Required inputs**: **Connection** (MongoDB), `collection`.
- **Optional inputs**: `filter`, `limit`, `sort`.
- **Outputs**: `documents` (array).
- **Example use-case**: Fetch tasks to process.

### MongoDB Insert (`mongodb:insert`)
- **Purpose**: Insert document.
- **Required inputs**: **Connection** (MongoDB), `collection`, `document` (json).
- **Optional inputs**: None.
- **Outputs**: `insertedId`.
- **Example use-case**: Store a webhook payload.

### MongoDB Update (`mongodb:update`)
- **Purpose**: Update documents.
- **Required inputs**: **Connection** (MongoDB), `collection`, `filter` (json), `update` (json).
- **Optional inputs**: None.
- **Outputs**: `matchedCount`, `modifiedCount`.
- **Example use-case**: Mark a record as processed.

---

## HTTP / Webhooks

### HTTP GET (`http:get`)
- **Purpose**: Make a GET request.
- **Required inputs**: `url`.
- **Optional inputs**: `headers` (json), `query` (json).
- **Outputs**: `status`, `headers`, `body`.
- **Example use-case**: Fetch price data from an API.

### HTTP POST (`http:post`)
- **Purpose**: Make a POST request.
- **Required inputs**: `url`, `body` (json).
- **Optional inputs**: `headers` (json).
- **Outputs**: `status`, `headers`, `body`.
- **Example use-case**: Send data to a webhook.

### HTTP PUT (`http:put`)
- **Purpose**: Make a PUT request.
- **Required inputs**: `url`, `body` (json).
- **Optional inputs**: `headers` (json).
- **Outputs**: `status`, `headers`, `body`.
- **Example use-case**: Update a record via API.

### HTTP PATCH (`http:patch`)
- **Purpose**: Make a PATCH request.
- **Required inputs**: `url`, `body` (json).
- **Optional inputs**: `headers` (json).
- **Outputs**: `status`, `headers`, `body`.
- **Example use-case**: Patch a remote setting.

### HTTP DELETE (`http:delete`)
- **Purpose**: Make a DELETE request.
- **Required inputs**: `url`.
- **Optional inputs**: `headers` (json).
- **Outputs**: `status`, `headers`, `body`.
- **Example use-case**: Remove a resource via API.

### Webhook (`http:webhook`)
- **Purpose**: Send a signed webhook.
- **Required inputs**: `url`, `payload` (json).
- **Optional inputs**: `secret`, `headers` (json).
- **Outputs**: `status`, `signature`.
- **Example use-case**: Notify an external system with verification.

### GraphQL (`http:graphql`)
- **Purpose**: GraphQL POST request.
- **Required inputs**: `url`, `query` (textarea).
- **Optional inputs**: `variables` (json), `headers` (json).
- **Outputs**: `data`, `errors`.
- **Example use-case**: Query a GraphQL API for data.

---

## AMI Tools

### Volume Booster Start (`ami:volume-booster:start`)
- **Purpose**: Create a buy/sell volume task.
- **Required inputs**: **wallet**, `pair`, `amount`, `interval`.
- **Optional inputs**: `duration`, `slippage`.
- **Outputs**: `taskId`, `status`.
- **Example use-case**: Start a daily volume task.

### Volume Booster Stop (`ami:volume-booster:stop`)
- **Purpose**: Pause a running volume task.
- **Required inputs**: `taskId`.
- **Optional inputs**: None.
- **Outputs**: `status`.
- **Example use-case**: Stop a task during maintenance.

### Volume Booster Status (`ami:volume-booster:status`)
- **Purpose**: Get task status.
- **Required inputs**: `taskId`.
- **Optional inputs**: None.
- **Outputs**: `status`, `lastRunAt`.
- **Example use-case**: Check if a task is running.

### Volume Booster List (`ami:volume-booster:list`)
- **Purpose**: List recent volume tasks.
- **Required inputs**: None.
- **Optional inputs**: `limit`.
- **Outputs**: `tasks` (array).
- **Example use-case**: Show recent tasks in a dashboard.

### Airdrop Tokens (`ami:airdrop:send-tokens`)
- **Purpose**: Distribute ERC-20 tokens.
- **Required inputs**: **wallet**, `recipients` (json array), `tokenAddress`.
- **Optional inputs**: None.
- **Outputs**: `txHash`, `explorerUrl`.
- **Example use-case**: Send rewards to holders.

### Airdrop Native (`ami:airdrop:send-native`)
- **Purpose**: Distribute native tokens.
- **Required inputs**: **wallet**, `recipients` (json array).
- **Optional inputs**: None.
- **Outputs**: `txHash`, `explorerUrl`.
- **Example use-case**: Airdrop AVAX to users.

### Airdrop from CSV (`ami:airdrop:from-csv`)
- **Purpose**: Parse CSV recipients.
- **Required inputs**: `csv` (textarea).
- **Optional inputs**: `delimiter`.
- **Outputs**: `recipients` (array).
- **Example use-case**: Load a CSV for an airdrop.

### Airdrop Equal Split (`ami:airdrop:equal-split`)
- **Purpose**: Split a total equally.
- **Required inputs**: `totalAmount`, `recipients` (json array).
- **Optional inputs**: None.
- **Outputs**: `recipients` (array with amounts).
- **Example use-case**: Split 1000 tokens across 50 wallets.

---

## Transform / Utilities

### Set Variable (`transform:variable:set`)
- **Purpose**: Store a value.
- **Required inputs**: `key`, `value`.
- **Optional inputs**: None.
- **Outputs**: `value`.
- **Example use-case**: Save a price for later steps.

### Get Variable (`transform:variable:get`)
- **Purpose**: Read stored value.
- **Required inputs**: `key`.
- **Optional inputs**: `defaultValue`.
- **Outputs**: `value`.
- **Example use-case**: Retrieve a saved token address.

### Delete Variable (`transform:variable:delete`)
- **Purpose**: Remove stored value.
- **Required inputs**: `key`.
- **Optional inputs**: None.
- **Outputs**: `deleted` (boolean).
- **Example use-case**: Clean up state after a run.

### Math Basic (`transform:math:calc`)
- **Purpose**: Add/subtract/multiply/divide.
- **Required inputs**: `a`, `b`, `operator`.
- **Optional inputs**: None.
- **Outputs**: `result`.
- **Example use-case**: Compute a percentage.

### Format Number (`transform:math:format`)
- **Purpose**: Format number with decimals.
- **Required inputs**: `value`, `decimals`.
- **Optional inputs**: `roundingMode`.
- **Outputs**: `formatted`.
- **Example use-case**: Format a price for display.

### Concat Strings (`transform:string:concat`)
- **Purpose**: Join strings with a separator.
- **Required inputs**: `items` (array), `separator`.
- **Optional inputs**: None.
- **Outputs**: `text`.
- **Example use-case**: Build a message from fields.

### Replace Text (`transform:string:replace`)
- **Purpose**: Find and replace text.
- **Required inputs**: `text`, `search`, `replace`.
- **Optional inputs**: `regex` (boolean).
- **Outputs**: `text`.
- **Example use-case**: Remove unwanted characters.

### String Transform (`transform:string:transform`)
- **Purpose**: Uppercase/lowercase/trim.
- **Required inputs**: `text`, `operation`.
- **Optional inputs**: None.
- **Outputs**: `text`.
- **Example use-case**: Normalize user input.

### Filter Array (`transform:array:filter`)
- **Purpose**: Filter array items.
- **Required inputs**: `items` (array), `condition`.
- **Optional inputs**: None.
- **Outputs**: `items` (array).
- **Example use-case**: Keep only holders above a threshold.

### Map Array (`transform:array:map`)
- **Purpose**: Pick property from items.
- **Required inputs**: `items` (array), `path`.
- **Optional inputs**: None.
- **Outputs**: `items` (array).
- **Example use-case**: Map to a list of addresses.

### Reduce Array (`transform:array:reduce`)
- **Purpose**: Sum/avg/min/max/count.
- **Required inputs**: `items` (array), `operation`.
- **Optional inputs**: None.
- **Outputs**: `value`.
- **Example use-case**: Compute total volume.

### Unique Items (`transform:array:unique`)
- **Purpose**: Remove duplicates.
- **Required inputs**: `items` (array).
- **Optional inputs**: None.
- **Outputs**: `items` (array).
- **Example use-case**: De-duplicate addresses.

### Get Object Field (`transform:object:get`)
- **Purpose**: Get nested field.
- **Required inputs**: `object` (json), `path`.
- **Optional inputs**: None.
- **Outputs**: `value`.
- **Example use-case**: Read `data.price` from a response.

### Set Object Field (`transform:object:set`)
- **Purpose**: Set nested field.
- **Required inputs**: `object` (json), `path`, `value`.
- **Optional inputs**: None.
- **Outputs**: `object` (json).
- **Example use-case**: Add a field before sending.

### JSON Parse (`transform:json:parse`)
- **Purpose**: Parse JSON string.
- **Required inputs**: `text`.
- **Optional inputs**: None.
- **Outputs**: `object` (json).
- **Example use-case**: Parse a webhook body.

### JSON Stringify (`transform:json:stringify`)
- **Purpose**: Serialize object.
- **Required inputs**: `object` (json).
- **Optional inputs**: `pretty` (boolean).
- **Outputs**: `text`.
- **Example use-case**: Prepare JSON for an API.

### Date Now (`transform:date:now`)
- **Purpose**: Get current date/time.
- **Required inputs**: None.
- **Optional inputs**: `timezone`.
- **Outputs**: `now`.
- **Example use-case**: Timestamp a report.

### Date Difference (`transform:date:diff`)
- **Purpose**: Difference between two dates.
- **Required inputs**: `start`, `end`.
- **Optional inputs**: `unit`.
- **Outputs**: `diff`.
- **Example use-case**: Compute time since last run.

### Set Variable (`util:set`)
- **Purpose**: Set a variable value.
- **Required inputs**: `key`, `value`.
- **Optional inputs**: None.
- **Outputs**: `value`.
- **Example use-case**: Save an API key for reuse.

### Merge (`util:merge`)
- **Purpose**: Merge multiple inputs into one.
- **Required inputs**: `inputs` (array).
- **Optional inputs**: None.
- **Outputs**: `merged` (object/array).
- **Example use-case**: Combine data from two APIs.

### Filter (`util:filter`)
- **Purpose**: Filter array items.
- **Required inputs**: `items` (array), `condition`.
- **Optional inputs**: None.
- **Outputs**: `items` (array).
- **Example use-case**: Keep only completed tasks.

### Split (`util:split`)
- **Purpose**: Split text into array.
- **Required inputs**: `text`, `separator`.
- **Optional inputs**: None.
- **Outputs**: `items` (array).
- **Example use-case**: Split CSV line into values.

### Aggregate (`util:aggregate`)
- **Purpose**: Aggregate array values.
- **Required inputs**: `items` (array), `operation`.
- **Optional inputs**: None.
- **Outputs**: `value`.
- **Example use-case**: Count items in a list.

---

## Productivity & Collaboration

### Slack Send Message (`slack:send`)
- **Purpose**: Send message to Slack channel.
- **Required inputs**: **Connection** (Slack), `text`.
- **Optional inputs**: `channel`.
- **Outputs**: `messageId`, `timestamp`.
- **Example use-case**: Send daily summary to Slack.

### Slack Update Message (`slack:update`)
- **Purpose**: Update an existing Slack message.
- **Required inputs**: **Connection** (Slack), `channel`, `timestamp`, `text`.
- **Optional inputs**: None.
- **Outputs**: `updated` (boolean).
- **Example use-case**: Update a progress message.

### Slack Add Reaction (`slack:reaction`)
- **Purpose**: Add emoji reaction.
- **Required inputs**: **Connection** (Slack), `channel`, `timestamp`, `emoji`.
- **Optional inputs**: None.
- **Outputs**: `added` (boolean).
- **Example use-case**: React to a status message.

### Slack Upload File (`slack:file`)
- **Purpose**: Upload a file to Slack.
- **Required inputs**: **Connection** (Slack), `fileUrl` or `fileContent`.
- **Optional inputs**: `channel`, `title`.
- **Outputs**: `fileId`.
- **Example use-case**: Upload a report PDF.

### Google Sheets Read (`sheets:read`)
- **Purpose**: Read data from a spreadsheet.
- **Required inputs**: **Connection** (Google Sheets), `spreadsheetId`, `range`.
- **Optional inputs**: None.
- **Outputs**: `rows` (array).
- **Example use-case**: Load a list of recipients.

### Google Sheets Append (`sheets:append`)
- **Purpose**: Append rows to a spreadsheet.
- **Required inputs**: **Connection** (Google Sheets), `spreadsheetId`, `range`, `rows`.
- **Optional inputs**: None.
- **Outputs**: `updatedRange`.
- **Example use-case**: Log task runs.

### Google Sheets Update (`sheets:update`)
- **Purpose**: Update cells in a spreadsheet.
- **Required inputs**: **Connection** (Google Sheets), `spreadsheetId`, `range`, `values`.
- **Optional inputs**: None.
- **Outputs**: `updatedRange`.
- **Example use-case**: Update a status cell.

### Notion Create Page (`notion:page:create`)
- **Purpose**: Create a new Notion page.
- **Required inputs**: **Connection** (Notion), `parentId`, `properties` (json).
- **Optional inputs**: `content`.
- **Outputs**: `pageId`, `url`.
- **Example use-case**: Create a task page.

### Notion Query Database (`notion:database:query`)
- **Purpose**: Query a Notion database.
- **Required inputs**: **Connection** (Notion), `databaseId`.
- **Optional inputs**: `filter`, `sorts`.
- **Outputs**: `pages` (array).
- **Example use-case**: Fetch pending items.

### Notion Add to Database (`notion:database:add`)
- **Purpose**: Add a row to a database.
- **Required inputs**: **Connection** (Notion), `databaseId`, `properties`.
- **Optional inputs**: `content`.
- **Outputs**: `pageId`, `url`.
- **Example use-case**: Log a workflow run.

### Airtable List Records (`airtable:list`)
- **Purpose**: List records from a table.
- **Required inputs**: **Connection** (Airtable), `baseId`, `table`.
- **Optional inputs**: `filter`, `maxRecords`.
- **Outputs**: `records` (array).
- **Example use-case**: Load a queue.

### Airtable Create Record (`airtable:create`)
- **Purpose**: Create a record.
- **Required inputs**: **Connection** (Airtable), `baseId`, `table`, `fields`.
- **Optional inputs**: None.
- **Outputs**: `recordId`.
- **Example use-case**: Store a webhook payload.

### Airtable Update Record (`airtable:update`)
- **Purpose**: Update a record.
- **Required inputs**: **Connection** (Airtable), `baseId`, `table`, `recordId`, `fields`.
- **Optional inputs**: None.
- **Outputs**: `recordId`.
- **Example use-case**: Update a status flag.

### Send Email (`email:send`)
- **Purpose**: Send email via SMTP.
- **Required inputs**: **Connection** (SMTP), `to`, `subject`, `body`.
- **Optional inputs**: `cc`, `bcc`, `from`.
- **Outputs**: `messageId`, `status`.
- **Example use-case**: Send a daily report.

### Teams Send Message (`teams:send`)
- **Purpose**: Send message to a Teams channel.
- **Required inputs**: **Connection** (Teams), `text`.
- **Optional inputs**: None.
- **Outputs**: `messageId`.
- **Example use-case**: Notify a team about a task.

### Teams List Channels (`teams:channel:list`)
- **Purpose**: List channels in a team.
- **Required inputs**: **Connection** (Teams), `teamId`.
- **Optional inputs**: None.
- **Outputs**: `channels` (array).
- **Example use-case**: Select a channel by name.

### Google Drive Upload (`gdrive:upload`)
- **Purpose**: Upload file to Google Drive.
- **Required inputs**: **Connection** (Google Drive), `file` (url or data).
- **Optional inputs**: `folderId`.
- **Outputs**: `fileId`, `link`.
- **Example use-case**: Store a report in Drive.

### Google Drive List (`gdrive:list`)
- **Purpose**: List files in Drive.
- **Required inputs**: **Connection** (Google Drive), `query`.
- **Optional inputs**: `pageSize`.
- **Outputs**: `files` (array).
- **Example use-case**: Find a file by name.

### Google Drive Download (`gdrive:download`)
- **Purpose**: Download file from Drive.
- **Required inputs**: **Connection** (Google Drive), `fileId`.
- **Optional inputs**: None.
- **Outputs**: `file` (binary/url).
- **Example use-case**: Retrieve a config file.

### Dropbox Upload (`dropbox:upload`)
- **Purpose**: Upload file to Dropbox.
- **Required inputs**: **Connection** (Dropbox), `file`.
- **Optional inputs**: `path`.
- **Outputs**: `fileId`.
- **Example use-case**: Save reports to Dropbox.

### Dropbox Download (`dropbox:download`)
- **Purpose**: Download file from Dropbox.
- **Required inputs**: **Connection** (Dropbox), `path`.
- **Optional inputs**: None.
- **Outputs**: `file` (binary/url).
- **Example use-case**: Retrieve a backup.

### Stripe Create Charge (`stripe:charge:create`)
- **Purpose**: Create a Stripe charge.
- **Required inputs**: **Connection** (Stripe), `amount`, `currency`, `source`.
- **Optional inputs**: `description`.
- **Outputs**: `chargeId`, `status`.
- **Example use-case**: Charge a customer.

### Stripe Create Customer (`stripe:customer:create`)
- **Purpose**: Create a Stripe customer.
- **Required inputs**: **Connection** (Stripe), `email`.
- **Optional inputs**: `name`.
- **Outputs**: `customerId`.
- **Example use-case**: Store billing details.

### Stripe Create Invoice (`stripe:invoice:create`)
- **Purpose**: Create a Stripe invoice.
- **Required inputs**: **Connection** (Stripe), `customerId`.
- **Optional inputs**: `description`.
- **Outputs**: `invoiceId`, `status`.
- **Example use-case**: Bill a customer monthly.

### Google Calendar Create Event (`gcalendar:event:create`)
- **Purpose**: Create a calendar event.
- **Required inputs**: **Connection** (Google Calendar), `calendarId`, `summary`, `start`, `end`.
- **Optional inputs**: `description`, `location`.
- **Outputs**: `eventId`, `htmlLink`.
- **Example use-case**: Schedule a meeting.

### Google Calendar List Events (`gcalendar:event:list`)
- **Purpose**: List upcoming events.
- **Required inputs**: **Connection** (Google Calendar), `calendarId`.
- **Optional inputs**: `timeMin`, `timeMax`.
- **Outputs**: `events` (array).
- **Example use-case**: Fetch today's events.

### Trello Create Card (`trello:card:create`)
- **Purpose**: Create a Trello card.
- **Required inputs**: **Connection** (Trello), `listId`, `name`.
- **Optional inputs**: `desc`.
- **Outputs**: `cardId`, `url`.
- **Example use-case**: Create a task from a webhook.

### Trello Move Card (`trello:card:move`)
- **Purpose**: Move a Trello card.
- **Required inputs**: **Connection** (Trello), `cardId`, `listId`.
- **Optional inputs**: None.
- **Outputs**: `cardId`.
- **Example use-case**: Move a card to Done.

### Asana Create Task (`asana:task:create`)
- **Purpose**: Create an Asana task.
- **Required inputs**: **Connection** (Asana), `workspaceId`, `name`.
- **Optional inputs**: `notes`, `assignee`.
- **Outputs**: `taskId`, `url`.
- **Example use-case**: Create a task from an alert.

### Asana Update Task (`asana:task:update`)
- **Purpose**: Update an Asana task.
- **Required inputs**: **Connection** (Asana), `taskId`, `fields`.
- **Optional inputs**: None.
- **Outputs**: `taskId`.
- **Example use-case**: Mark a task complete.

### Typeform Get Responses (`typeform:responses:list`)
- **Purpose**: Get Typeform responses.
- **Required inputs**: **Connection** (Typeform), `formId`.
- **Optional inputs**: `pageSize`.
- **Outputs**: `responses` (array).
- **Example use-case**: Sync survey responses.

### Shopify Get Order (`shopify:order:get`)
- **Purpose**: Get a Shopify order.
- **Required inputs**: **Connection** (Shopify), `orderId`.
- **Optional inputs**: None.
- **Outputs**: `order` (object).
- **Example use-case**: Look up a purchase.

### Shopify List Orders (`shopify:order:list`)
- **Purpose**: List Shopify orders.
- **Required inputs**: **Connection** (Shopify).
- **Optional inputs**: `status`, `limit`.
- **Outputs**: `orders` (array).
- **Example use-case**: Sync daily orders.

### Shopify Create Product (`shopify:product:create`)
- **Purpose**: Create a Shopify product.
- **Required inputs**: **Connection** (Shopify), `product` (json).
- **Optional inputs**: None.
- **Outputs**: `productId`.
- **Example use-case**: Publish a new product.

---

## Dev Tools

### GitHub Create Issue (`github:issue:create`)
- **Purpose**: Create a new GitHub issue.
- **Required inputs**: **Connection** (GitHub), `repo`, `title`.
- **Optional inputs**: `body`, `labels`.
- **Outputs**: `issueNumber`, `url`.
- **Example use-case**: Open an issue from an alert.

### GitHub Add Comment (`github:issue:comment`)
- **Purpose**: Add a comment to an issue or PR.
- **Required inputs**: **Connection** (GitHub), `repo`, `issueNumber`, `comment`.
- **Optional inputs**: None.
- **Outputs**: `commentId`, `url`.
- **Example use-case**: Post build status to a PR.

### GitHub Get Repo (`github:repo:get`)
- **Purpose**: Get repository information.
- **Required inputs**: **Connection** (GitHub), `repo`.
- **Optional inputs**: None.
- **Outputs**: `repo` (object).
- **Example use-case**: Fetch repo metadata for reports.

### GitHub Create PR (`github:pr:create`)
- **Purpose**: Create a pull request.
- **Required inputs**: **Connection** (GitHub), `repo`, `title`, `head`, `base`.
- **Optional inputs**: `body`.
- **Outputs**: `prNumber`, `url`.
- **Example use-case**: Open a PR automatically.

### Jira Create Issue (`jira:issue:create`)
- **Purpose**: Create a Jira issue.
- **Required inputs**: **Connection** (Jira), `projectKey`, `summary`, `issueType`.
- **Optional inputs**: `description`.
- **Outputs**: `issueKey`, `url`.
- **Example use-case**: Log incidents to Jira.

### Jira Update Issue (`jira:issue:update`)
- **Purpose**: Update a Jira issue.
- **Required inputs**: **Connection** (Jira), `issueKey`, `fields`.
- **Optional inputs**: None.
- **Outputs**: `issueKey`.
- **Example use-case**: Change issue status.

### Linear Create Issue (`linear:issue:create`)
- **Purpose**: Create a Linear issue.
- **Required inputs**: **Connection** (Linear), `teamId`, `title`.
- **Optional inputs**: `description`, `labels`.
- **Outputs**: `issueId`, `url`.
- **Example use-case**: Create a task from an alert.

### S3 Upload (`s3:upload`)
- **Purpose**: Upload object to S3.
- **Required inputs**: **Connection** (AWS S3), `bucket`, `key`, `file`.
- **Optional inputs**: `acl`, `contentType`.
- **Outputs**: `etag`, `url`.
- **Example use-case**: Store build artifacts.

### S3 Download (`s3:download`)
- **Purpose**: Download object from S3.
- **Required inputs**: **Connection** (AWS S3), `bucket`, `key`.
- **Optional inputs**: None.
- **Outputs**: `file` (binary/url).
- **Example use-case**: Retrieve a stored report.

### S3 List Objects (`s3:list`)
- **Purpose**: List objects in a bucket.
- **Required inputs**: **Connection** (AWS S3), `bucket`.
- **Optional inputs**: `prefix`, `maxKeys`.
- **Outputs**: `objects` (array).
- **Example use-case**: List available backups.

---

## DeFi

### Salvor Supply (`defi:salvor:supply`)
- **Purpose**: Supply assets to Salvor.
- **Required inputs**: **wallet**, `tokenAddress`, `amount`.
- **Optional inputs**: None.
- **Outputs**: `txHash`, `explorerUrl`.
- **Example use-case**: Earn yield on Salvor.

### Salvor Withdraw (`defi:salvor:withdraw`)
- **Purpose**: Withdraw assets from Salvor.
- **Required inputs**: **wallet**, `tokenAddress`, `amount`.
- **Optional inputs**: None.
- **Outputs**: `txHash`, `explorerUrl`.
- **Example use-case**: Redeem supplied assets.

### Salvor Borrow (`defi:salvor:borrow`)
- **Purpose**: Borrow assets from Salvor.
- **Required inputs**: **wallet**, `tokenAddress`, `amount`.
- **Optional inputs**: None.
- **Outputs**: `txHash`, `explorerUrl`.
- **Example use-case**: Borrow stablecoin.

### Salvor Repay (`defi:salvor:repay`)
- **Purpose**: Repay borrowed assets.
- **Required inputs**: **wallet**, `tokenAddress`, `amount`.
- **Optional inputs**: None.
- **Outputs**: `txHash`, `explorerUrl`.
- **Example use-case**: Repay a loan.

### Salvor User Data (`defi:salvor:get-user-data`)
- **Purpose**: Get user account data.
- **Required inputs**: **wallet**.
- **Optional inputs**: None.
- **Outputs**: `data` (object).
- **Example use-case**: Check health factor.

### Salvor Reserve Data (`defi:salvor:get-reserve-data`)
- **Purpose**: Get reserve/market data.
- **Required inputs**: `tokenAddress`.
- **Optional inputs**: None.
- **Outputs**: `data` (object).
- **Example use-case**: Inspect market rates.

### Salvor Enable Collateral (`defi:salvor:enable-collateral`)
- **Purpose**: Enable asset as collateral.
- **Required inputs**: **wallet**, `tokenAddress`, `enabled`.
- **Optional inputs**: None.
- **Outputs**: `txHash`, `explorerUrl`.
- **Example use-case**: Use collateral for borrowing.

### Salvor Flash Loan (`defi:salvor:flash-loan`)
- **Purpose**: Execute flash loan.
- **Required inputs**: **wallet**, `assets` (array), `amounts` (array), `receiver`.
- **Optional inputs**: `params` (json).
- **Outputs**: `txHash`, `explorerUrl`.
- **Example use-case**: Arbitrage with flash liquidity.

### Aave Supply (`defi:aave:supply`)
- **Purpose**: Supply assets to Aave V3.
- **Required inputs**: **wallet**, `tokenAddress`, `amount`.
- **Optional inputs**: None.
- **Outputs**: `txHash`, `explorerUrl`.
- **Example use-case**: Supply USDC to Aave.

### Aave Withdraw (`defi:aave:withdraw`)
- **Purpose**: Withdraw assets from Aave V3.
- **Required inputs**: **wallet**, `tokenAddress`, `amount`.
- **Optional inputs**: None.
- **Outputs**: `txHash`, `explorerUrl`.
- **Example use-case**: Withdraw supplied funds.

### Aave Borrow (`defi:aave:borrow`)
- **Purpose**: Borrow assets from Aave V3.
- **Required inputs**: **wallet**, `tokenAddress`, `amount`.
- **Optional inputs**: `rateMode`.
- **Outputs**: `txHash`, `explorerUrl`.
- **Example use-case**: Borrow USDT at variable rate.

### Aave Repay (`defi:aave:repay`)
- **Purpose**: Repay borrowed assets on Aave V3.
- **Required inputs**: **wallet**, `tokenAddress`, `amount`.
- **Optional inputs**: `rateMode`.
- **Outputs**: `txHash`, `explorerUrl`.
- **Example use-case**: Repay an Aave loan.

### Aave User Data (`defi:aave:get-user-data`)
- **Purpose**: Get user account data from Aave.
- **Required inputs**: **wallet**.
- **Optional inputs**: None.
- **Outputs**: `data` (object).
- **Example use-case**: Check Aave health factor.

### Aave Reserve Data (`defi:aave:get-reserve-data`)
- **Purpose**: Get market/reserve data from Aave.
- **Required inputs**: `tokenAddress`.
- **Optional inputs**: None.
- **Outputs**: `data` (object).
- **Example use-case**: Inspect interest rates.

### Aave Enable Collateral (`defi:aave:enable-collateral`)
- **Purpose**: Enable/disable asset as collateral.
- **Required inputs**: **wallet**, `tokenAddress`, `enabled`.
- **Optional inputs**: None.
- **Outputs**: `txHash`, `explorerUrl`.
- **Example use-case**: Toggle collateral usage.

### Aave Flash Loan (`defi:aave:flash-loan`)
- **Purpose**: Execute flash loan on Aave V3.
- **Required inputs**: **wallet**, `assets` (array), `amounts` (array), `receiver`.
- **Optional inputs**: `params` (json).
- **Outputs**: `txHash`, `explorerUrl`.
- **Example use-case**: Batch arbitrage across DEXes.

### Aave Swap Rate Mode (`defi:aave:swap-borrow-rate`)
- **Purpose**: Swap between stable and variable borrow rate.
- **Required inputs**: **wallet**, `tokenAddress`, `rateMode`.
- **Optional inputs**: None.
- **Outputs**: `txHash`, `explorerUrl`.
- **Example use-case**: Change borrow rate strategy.

### Health Factor Check (`defi:health-check`)
- **Purpose**: Check if health factor is above threshold.
- **Required inputs**: **wallet**, `threshold`.
- **Optional inputs**: None.
- **Outputs**: `isHealthy` (boolean), `healthFactor`.
- **Example use-case**: Alert when health factor is low.

### Calculate Max Borrow (`defi:calc-max-borrow`)
- **Purpose**: Calculate max borrowable amount with safety margin.
- **Required inputs**: **wallet**, `asset`, `safetyMargin`.
- **Optional inputs**: None.
- **Outputs**: `maxBorrow`.
- **Example use-case**: Determine safe borrowing limit.

### Liquidation Alert (`defi:liquidation-alert`)
- **Purpose**: Monitor and alert on liquidation risk.
- **Required inputs**: **wallet**, `threshold`.
- **Optional inputs**: None.
- **Outputs**: `alert` (boolean), `healthFactor`.
- **Example use-case**: Notify if health factor drops.

### Stake Tokens (`defi:stake`)
- **Purpose**: Stake tokens in a protocol.
- **Required inputs**: **wallet**, `tokenAddress`, `amount`.
- **Optional inputs**: None.
- **Outputs**: `txHash`, `explorerUrl`.
- **Example use-case**: Stake tokens for rewards.

### Unstake Tokens (`defi:unstake`)
- **Purpose**: Unstake tokens.
- **Required inputs**: **wallet**, `tokenAddress`, `amount`.
- **Optional inputs**: None.
- **Outputs**: `txHash`, `explorerUrl`.
- **Example use-case**: Unstake after lock period.

### Claim Rewards (`defi:claim-rewards`)
- **Purpose**: Claim pending rewards.
- **Required inputs**: **wallet**, `protocol`.
- **Optional inputs**: None.
- **Outputs**: `txHash`, `explorerUrl`.
- **Example use-case**: Claim farming rewards.

### Get Pending Rewards (`defi:get-pending-rewards`)
- **Purpose**: Check pending rewards balance.
- **Required inputs**: **wallet**, `protocol`.
- **Optional inputs**: None.
- **Outputs**: `rewards`.
- **Example use-case**: Display pending rewards.

### Add Liquidity (`defi:add-liquidity`)
- **Purpose**: Add liquidity to a DEX pool.
- **Required inputs**: **wallet**, `tokenA`, `tokenB`, `amountA`, `amountB`.
- **Optional inputs**: `slippage`.
- **Outputs**: `txHash`, `explorerUrl`.
- **Example use-case**: Provide liquidity to a pair.

### Remove Liquidity (`defi:remove-liquidity`)
- **Purpose**: Remove liquidity from a DEX pool.
- **Required inputs**: **wallet**, `lpToken`, `amount`.
- **Optional inputs**: `slippage`.
- **Outputs**: `txHash`, `explorerUrl`.
- **Example use-case**: Exit liquidity position.

### Get Pool Info (`defi:get-pool-info`)
- **Purpose**: Get DEX pool reserves and info.
- **Required inputs**: `poolAddress`.
- **Optional inputs**: None.
- **Outputs**: `pool` (object).
- **Example use-case**: Read pool reserves for analytics.
