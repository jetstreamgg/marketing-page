import type { FAQItem } from './types';

export const trade: FAQItem[] = [
  {
    question: 'What is a trade?',
    answer: `A trade is the direct exchange of one cryptocurrency token for another. Trading can occur on decentralized exchanges (DEXs) and centralized exchanges (CEXs).

A decentralized exchange (DEX) is a peer-to-peer marketplace made up of smart contracts where users can buy, sell and trade cryptocurrencies without having to share any personal information. No financial institution or third party is needed to facilitate DEX transactions. Not all DEXs operate in the same way. To buy crypto on a specific DEX may require knowledge of that DEXs functions and/or underlying code base.

A centralized exchange (CEX) is a marketplace where users create an account by providing identifying information and documentation to a centralized entity in order to buy, sell and trade cryptocurrencies. Importantly, a CEX facilitates exchanges, meaning it acts as an intermediary between buyers and sellers. Some CEXs also require users to opt-in to one or more custodial wallets rather than use a private, non-custodial wallet. Your use of any centralized exchange will likely be subject to that exchange's terms of service and applicable regulatory requirements.`,
    categories: ['Trade']
  },
  {
    question: 'Why would I trade tokens?',
    answer: `_The following statements are provided for informational purposes only and are not intended to be construed as financial advice or recommendations on trading strategies. Your use of the Sky Protocol is at your own risk. Please see our [User Risk Documentation](https://docs.sky.money/user-risks) and [Terms of Use](https://docs.sky.money/legal-terms) for further information._

Market participants trade crypto for a variety of reasons. For example, users may trade crypto for portfolio diversification and to participate in DeFi. Regardless of the motivation, crypto trading can provide a diverse range of opportunities to market participants depending on their goals and risk appetite.`,
    categories: ['Trade']
  },
  {
    question: 'What is an exchange rate?',
    answer:
      'Exchange rate refers to the price of one cryptocurrency relative to the price of another cryptocurrency or fiat currency at any given moment. Cryptocurrency exchange rates may be subject to price volatility and may fluctuate based on various factors.',
    categories: ['Trade']
  },
  {
    question: 'Why do token prices vary between different DEXs and CEXs?',
    answer: `Token prices vary between different exchanges due to key market dynamics, such as:

• **Market Structure.** DEXs typically use automated market makers (AMMs), which price based on algorithms. CEXs typically use order books, which price based on actual bids/asks. The different mechanisms can lead to different price discoveries.

• **Market Segmentation.** Not all traders can access all exchanges for various reasons, including jurisdiction restrictions and Know Your Customer (KYC) requirements. Some exchanges may have more institutional flow versus retail flow, and different user bases can lead to different price dynamics.

• **Market Making and Liquidity.** Every exchange has its own separate liquidity pools and market makers. Different depths of liquidity pools affect how much the prices impact trades. Market makers provide buy and sell quotes in a market and attempt to profit from the spread between the bid and ask prices. Market makers may also help ensure smooth trading by absorbing temporary imbalances between buyers and sellers. Some exchanges may have tighter spreads due to better market making.

• **Arbitrage Opportunities.** Price differences may create profit opportunities for traders. Arbitrageurs buy on cheaper exchanges and sell on more expensive ones. That process helps prices converge, but differences persist due to transaction costs (e.g., gas and trading fees), execution speed, capital requirements and the technical complexity of the arbitrage.`,
    categories: ['Trade']
  },
  {
    question: 'How do I trade Sky Protocol tokens?',
    answer: `Sky Protocol tokens are available to trade on crypto exchanges that list them.

For example, eligible users can access the Sky.money web app to trade Sky tokens on Ethereum Mainnet and select L2s via an API integration with the third-party decentralized exchange (DEX) [CoW Swap](https://swap.cow.fi/#/1/swap/WETH). Users can trade USDC, USDT, ETH or SKY for USDS, and USDC, USDT, ETH and USDS for SKY. These trades occur through smart contracts on the blockchain without relying on centralized entities. The exact trade route is determined by CoW Swap and is not influenced by Sky.money or the Sky Protocol. Some Sky Protocol features are not available in certain countries for regulatory compliance purposes. USDS and SKY are native Sky Protocol tokens. Please see the [Terms of Use](https://docs.sky.money/legal-terms) for more information on third-party services.`,
    categories: ['Trade']
  },
  {
    question: 'Is trading using Sky.money free?',
    answer: `Accessing the Sky.money web app is free. Trading, however, may involve a fee imposed by the third-party decentralized exchange (i.e., [CoW Swap](https://swap.cow.fi/#/1/swap/WETH)) integrated with the non-custodial Sky Protocol that is used to make the trade. In addition, you will likely pay a blockchain network transaction fee called a gas fee, which is neither controlled, imposed nor received by Sky.money or the Sky Protocol. This fee is calculated based on current Ethereum network demand and the amount of gas required to process your transaction.

Please see the [Terms of Use](https://docs.sky.money/legal-terms) for more information on third-party services.`,
    categories: ['Trade']
  },
  {
    question: "Why aren't all trading pairs available on the Sky.money web app?",
    answer: `There are several key technical and practical reasons why some DeFi apps, including the Sky.money web app, don't support all cryptocurrencies. For example, each token would need to be specifically integrated into the Sky Protocol's smart contracts, which would require development work and security auditing. Regulatory risk is also a key consideration.

Note, however, that Sky.money web app users can trade a wide range of assets on Ethereum Mainnet through the [CoW Swap](https://swap.cow.fi/#/1/swap/WETH) integration.The Sky Protocol does not limit the assets available for trading via CoW Swap, as it is an independent, third-party decentralized exchange (DEX) that Sky does not control. Please see the [Terms of Use](https://docs.sky.money/legal-terms) for more information on third-party services.`,
    categories: ['Trade']
  },
  {
    question: 'Can I trade USDS on the open market?',
    answer:
      'Yes, eligible USDS holders can access the Sky.money web app to trade the tokens via an API integration with the third-party decentralized exchange [CoW Swap](https://swap.cow.fi/#/1/swap/WETH). USDS holders are also free to access any other protocol or exchange that supports USDS trading; however, users do so at their own risk. Sky.money is not responsible for any loss or damages incurred while using such third-party platforms. Please see the [Terms of Use](https://docs.sky.money/legal-terms) for more information on third-party services.',
    categories: ['Trade']
  }
];
