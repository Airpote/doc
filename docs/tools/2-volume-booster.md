---
sidebar_custom_props:
    icon: ''
---

# 🔊️ Volume Booster

Boost the volume of a DEX pair through automated buy and sell cycles. Maintain liquidity and trading activity for your tokens.

## [YouTube Tutorials](https://www.youtube.com/watch?v=Yc7gJiR-QPs)

<div class="video-container">
<iframe src="https://www.youtube.com/embed/Yc7gJiR-QPs" title="Volume Booster Tutorial 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

<div class="video-container">
<iframe src="https://www.youtube.com/embed/dEPY_hteI8E" title="Volume Booster Tutorial 2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Supported dexes
Popular DEXs and their forks are supported:
:::note[Uniswap]
> **V2**  
> **V3**  
> **V4**
:::

:::note[LFJ]
> **V1**  
> **V2.0**  
> **V2.1**  
> **V2.2**
:::

## Supported pairs
The volume booster supports any pool pair that has sufficient tokens reserves.

## Supported chains
The volume booster supports any chain where the volume booster contract has been deployed.
:::note[Need custom chain support?]
Contact us and we will deploy the contract to any chain for free!
:::

## Features
- Boost the volume using a single wallet or a group of multiple wallets.
- Choose any amount of volume to generate.
- Select an interval ranging from 1 minute to 30 days.
- View real-time transaction details.
<br />
- Create volume booster tasks.
- Start and stop volume booster tasks.
- Edit volume booster tasks.
- Rename volume booster tasks.

## Loop Fund (Wallet Groups)

Loop Fund keeps volume tasks running by rotating funds across wallets in a **wallet group**.

**Availability**
- Only visible when the task source is a wallet group with multiple wallets.

**UI**
- **Active**: shows “Loop Fund” with a refresh icon and wallet index (e.g., Wallet 2/5).
- **Disabled**: shows “Disabled” and “Click to enable”.

**Behavior**
- Runner checks all wallets’ native balances and picks the highest viable wallet (minimum 0.001 native).
- After a successful transaction, it transfers nearly all remaining native balance to the next wallet in sequence.
- Keeps a dust reserve (0.0001 native) + gas cost.
- Updates `loopFundCurrentIndex` to the next wallet index.
- If transfer fails, the task continues and retries next cycle.

**Notes**
- Loop Fund does not change task logic; it only optimizes funding between wallets.
