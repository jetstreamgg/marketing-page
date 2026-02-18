import type { FAQItem } from './types';

export const skymoney: FAQItem[] = [
  {
    question: 'What is the Sky.money web app, and what can I do with it?',
    answer: `The non-custodial Sky.money web app is one of many free-to-access frontend gateways to the Sky Protocol, which is designed around the USDS stablecoin. It provides eligible users with access to all Sky Protocol tokens (USDS, DAI, sUSDS, stUSDS, SKY and MKR) and features, including the Sky Savings Rate (SSR), Sky Token Rewards (STRs), the Staking Engine, Expert modules, and more.

Eligible Sky.money web app users can:

• **Trade.** Sky Protocol tokens are available to trade on crypto exchanges that list them. Depending on location or other criteria, eligible users of the Sky.money web app can access the non-custodial Sky Protocol to trade Sky tokens on Ethereum Mainnet and select L2s via an API integration with the third-party decentralized exchange (DEX) [CoW Swap](https://swap.cow.fi/#/1/swap/WETH). Please see the [Terms of Use](https://docs.sky.money/legal-terms) for more information on third-party services.

• **Upgrade.** Upgrading enables you to take advantage of the many Sky Ecosystem features.
  • Upgrade DAI to USDS 1:1, and revert USDS back to DAI 1:1. Upgrading and reverting are optional, instant, and free; however, you will likely pay gas fees for using the Ethereum blockchain network. That fee is not controlled, imposed or received by Sky.money or the Sky Protocol.

  • Upgrade MKR to the SKY token at a rate of 1:24,000 (1 MKR = 24,000 SKY). While MKR will continue to exist, reverting from SKY to MKR via the Sky Protocol is not possible. SKY is the technical and functional evolution of MKR and the sole governance token of the Sky Protocol. SKY inherited the governance functionalities previously held by MKR. For upgrade details and step-by-step upgrade instructions, please visit the [MKR to SKY Upgrade Hub](https://upgrademkrtosky.sky.money).

• **Save.** Supply USDS to the Sky Savings Rate module of the Sky Protocol to access the Sky Savings Rate and accumulate additional USDS over time. No minimum supply amount is required; withdraw at any time.
  • When you supply USDS to the Sky Savings Rate module, you receive sUSDS tokens. These sUSDS tokens serve as a digital record of your USDS interaction with the module and any value accrued to your position.

  • The Sky Protocol dynamically adds USDS tokens to the pool every few seconds, in accordance with the Sky Savings Rate. As those tokens auto-accumulate in the pool over time, the value of the sUSDS you hold may gradually increase. So, when you choose to redeem your sUSDS for USDS—which you can do at any time—the total USDS you receive will equal the amount originally supplied, plus any rewards accessed.

  • You can also supply DAI to the Sky Savings Rate module, which handles the upgrade of DAI to USDS and the deposit in a single transaction.

• **Access Sky Token Rewards.** Supply USDS to the Sky Token Rewards module of the Sky Protocol to access rewards over time. No minimum USDS supply amount is required; withdraw at any time.
  • The amount of Sky Token Rewards you receive is calculated based on your share of the entire pool of USDS tokens supplied to the Sky Token Rewards module by all participants, not on the amount of tokens you supply. This share, and consequently the rate of Sky Token Reward, can fluctuate as the total pool size changes over time. Sky.money does not control the issuance, determination, or distribution of these rewards.

  • The USDS stablecoin, as well as the rewards received, are supplied to a smart contract that represents the USDS pool of assets. This means that no intermediary takes custody over your assets.

• **Access Staking Rewards.** Supply SKY tokens to the Staking Engine of the Sky Protocol to create a position, enabling SKY holder access to Staking Rewards, and more:
  • **Access Rewards.** Supply SKY tokens to access Staking Rewards. Staking Reward parameters are determined by Sky Ecosystem Governance through the process of decentralized onchain voting.

  • **Borrow.** Borrow USDS against your supplied SKY. You can decide to pay back all of your debt, withdraw your staked SKY, and claim some or all of your rewards at any time. Your SKY and claimed rewards are then released from the Staking Engine smart contract back to your connected wallet. The USDS Borrow Rate and debt ceiling are determined by Sky Ecosystem Governance through the process of decentralized onchain voting. Your total debt increases each block according to the Borrow Rate.

  • **Delegate.** Transfer the voting power of your supplied SKY tokens to a recognized delegate or a contract that you own. Your chosen delegate can then participate in the Sky Ecosystem Governance voting process on your behalf. You can choose one delegate per position, meaning if you want to entrust your SKY to two different delegates using the Staking Engine, you will need to create two separate positions. You may manage you position(s) at any time.

• **Connect with SkyLink.** SkyLink is Sky Ecosystem’s multichain solution, connecting USDS, SKY and other Sky Ecosystem tokens from the Ethereum Mainnet to other chains and L2 protocols.

With Sky.money, you always remain in control of your supplied assets.`,
    categories: ['Sky.money']
  },
  {
    question: 'What is an eligible user?',
    answer:
      'Some Sky Protocol features are unavailable to users in certain countries. For more information, please refer to the [Terms of Use](https://docs.sky.money/legal-terms).',
    categories: ['Sky.money']
  },
  {
    question: 'Can I borrow assets using the Sky.money web app?',
    answer: `Eligible users of the Sky.money web app can supply SKY tokens to the Staking Engine of the Sky Protocol to access Staking Rewards and may also choose to create one or more positions, including one that enables them to generate and borrow USDS against supplied SKY.

If you create a borrow position, you can stake or un-stake your SKY collateral anytime, and withdraw or pay back USDS whenever you'd like. Your SKY and claimed rewards are then released from the Staking Engine smart contract back to your connected wallet. This means you are always able to actively manage your positions.

The debt ceiling and Borrow Rate are parameters determined by Sky Ecosystem Governance through a process of decentralized, community-driven onchain voting. The total debt increases each block according to the Borrow Rate.

USDS borrow positions are subject to liquidation risk if at any time the value of supplied collateral drops below the required threshold (liquidation price) and the position becomes undercollateralized. If this were to occur, the smart contract would automatically liquidate and auction the collateral, and any leftover collateral may be claimed through the [Unified Auctions portal](https://unified-auctions.makerdao.com/).`,
    categories: ['Sky.money']
  },
  {
    question: 'Is the Sky.money web app affiliated with an exchange?',
    answer:
      'The Sky.money web app integrates via an API with the third-party decentralized exchange (DEX) [CoW Swap](https://swap.cow.fi/#/1/swap/WETH) to facilitate trading. Depending on location or other criteria, eligible users of the Sky.money web app can trade USDC, USDT, ETH or SKY tokens for USDS, and vice versa. These trades occur through autonomous, non-custodial smart contracts on the blockchain without relying on centralized entities. The exact trade route is determined by CoW Swap and is not influenced by Sky.money or the Sky Protocol. Please see the [Terms of Use](https://docs.sky.money/legal-terms) for more information on third-party services.',
    categories: ['Sky.money']
  },
  {
    question: 'How can I minimize gas fees when using multiple features of the Sky.money web app?',
    answer:
      'If you plan on using the Sky.money web app to access one or more Sky Protocol features regularly, consider switching to a supported network that offers reduced cost transaction fees, such as Base.',
    categories: ['Sky.money']
  },
  {
    question: 'Is there a way to access Sky Protocol features without using the Sky.money web app?',
    answer:
      'The Sky.money web app is only one of the many gateways to the permissionless Sky Protocol. Some features may be restricted by the Sky.money frontend in certain jurisdictions based on regulatory considerations. Please refer to the [Terms of Use](https://docs.sky.money/legal-terms).',
    categories: ['Sky.money']
  },
  {
    question: 'Are there risks involved with using the Sky Protocol and Sky.money web app?',
    answer:
      'For details regarding potential risks of using Sky.money web app, please see the [User Risk Documentation](https://docs.sky.money/user-risks).',
    categories: ['Sky.money']
  },
  {
    question: 'Does the Sky.money web app track my positions across multiple chains?',
    answer:
      'The Balances feature of the Sky.money web app displays all of your Sky-related assets on the network you are connected to at the moment. When you connect your crypto wallet to the Sky.money web app to access the decentralized Sky Protocol, only the tokens in the wallet that are relevant to the app are displayed. With all of your Sky assets visible in one place, you can better self-manage your assets in line with your goals. Sky.money is non-custodial and permissionless.',
    categories: ['Sky.money']
  },
  {
    question: "Why can't I access Sky.money web app with a VPN?",
    answer:
      'The Sky.money web app restricts user access from certain jurisdictions. As a result, VPNs are blocked to ensure adherence to these restrictions. For more information, please refer to the [Terms of Use](https://docs.sky.money/legal-terms).',
    categories: ['Sky.money']
  },
  {
    question:
      "I supplied assets on the Sky Protocol, but now I can't access the Sky.money web app. Are my assets gone?",
    answer:
      'Not necessarily. You can use a block explorer to verify your assets are still on the blockchain. For details on the risks associated with cryptocurrencies, please review the [User Risk Documentation](https://docs.sky.money/user-risks).',
    categories: ['Sky.money']
  },
  {
    question:
      "I accidentally rejected the Terms of Use when attempting to access the Sky.money web app. Now it's completely inaccessible. What can I do?",
    answer: 'Try deleting your cookies and reloading the page.',
    categories: ['Sky.money']
  },
  {
    question:
      "I'm not in a banned country, but I see an access restricted message when trying to use Sky.money. Why?",
    answer:
      'Due to the modular design of the Sky.money web app, you may not be able to access certain functionalities of the Sky Protocol in your jurisdiction. For more information, please refer to the [Terms of Use](https://docs.sky.money/legal-terms).',
    categories: ['Sky.money']
  }
];
