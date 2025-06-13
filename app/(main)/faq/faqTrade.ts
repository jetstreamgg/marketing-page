import { FAQItem } from './faqData';

export const trade: FAQItem[] = [
  {
    question: 'What is a trade?',
    answer: `A trade is the direct exchange of one cryptocurrency token for another. Trading can occur on decentralized exchanges (DEXs) and centralized exchanges (CEXs).

A decentralized exchange (DEX) is a peer-to-peer marketplace made up of smart contracts where users can buy, sell and trade cryptocurrencies without having to share any personal information. No financial institution or third party is needed to facilitate DEX transactions. DEX users interact with smart contracts using crypto wallets. Because no bank or financial institution is involved in facilitating DEX transactions, a DEX can't be used to trade fiat currency for cryptocurrency (or vice versa).

Not all DEXs operate in the same way. To buy crypto on a specific DEX may require knowledge of that DEXs functions and/or underlying code base.

A centralized exchange (CEX) is a marketplace where users create an account by providing identifying information and documentation to a centralized entity in order to buy, sell and trade cryptocurrencies. Importantly, a CEX facilitates exchanges, meaning it acts as an intermediary between buyers and sellers. Some CEXs also require users to opt-in to one or more custodial wallets rather than use a private, non-custodial wallet. With a custodial wallet, the centralized entity, not the user, is in control of safeguarding assets and the wallet's private keys. In that sense, when using a CEX, users trade privacy for simplicity. Users can, however, transfer their assets from a custodial wallet to their own non-custodial wallet if they wish to do so.

Generally, CEXs operate in similar ways, but to learn how to use a specific CEX, obtain information from the exchange directly. Your use of any centralized exchange will likely be subject to that exchange's terms of service and applicable regulatory requirements.`,
    categories: ['Trade']
  },
  {
    question: 'Why would I trade tokens?',
    answer: `*The following statements are provided for informational purposes only and are not intended to be construed as financial advice or recommendations on trading strategies. Your use of the Sky Protocol is at your own risk. Please see our [User Risk Documentation](https://docs.sky.money/user-risks) and [Terms of Use](https://docs.sky.money/legal-terms) for further information.*

Market participants trade crypto for a variety of reasons. For example, users may trade crypto for portfolio diversification and to participate in DeFi. Regardless of the motivation, crypto trading can provide a diverse range of opportunities to market participants depending on their goals and risk appetite.`,
    categories: ['Trade']
  },
  {
    question: 'How do I trade Sky Protocol tokens?',
    answer: `Sky Protocol tokens are available to trade on crypto exchanges that list them.

For example, eligible users can access the [Sky.money web app](https://app.sky.money) to trade SKY tokens on Ethereum Mainnet via an API integration with the third-party decentralized exchange (DEX) [CoW Swap](https://swap.cow.fi). Users can trade USDC, USDT, ETH or SKY for USDS, and USDC, USDT, ETH and USDS for SKY. These trades occur through smart contracts on the blockchain without relying on centralized entities. The exact trade route is determined by CoW Swap and is not influenced by Sky.money or the Sky Protocol. Some Sky Protocol features are not available in certain countries for regulatory compliance purposes. USDS and SKY are native Sky Protocol tokens. Please see the [Terms of Use](https://docs.sky.money/legal-terms) for more information on third-party services.

Note that crypto price slippage—a change in the expected price of the asset(s) between the time of the trade order and its execution on the blockchain—can occur due to market volatility and low liquidity environments. When you trade via the Sky Protocol, you can set your slippage tolerance level to limit the amount of order slippage. Users who wish to trade on DEXs should be especially aware of MEV risk, front-running risk and token value risk.`,
    categories: ['Trade']
  },
  {
    question: `Why aren't all trading pairs available on the Sky.money web app?`,
    answer: `There are several key technical and practical reasons why some DeFi apps, including the [Sky.money web app](https://app.sky.money), don't support all cryptocurrencies. For example, each token would need to be specifically integrated into the Sky Protocol's smart contracts, which would require development work and security auditing. Regulatory risk is also a key consideration.

Note, however, that Sky.money web app users can trade a wide range of assets on Ethereum Mainnet through the [CoW Swap integration](https://swap.cow.fi). The Sky Protocol does not limit the assets available for trading via CoW Swap, as it is an independent, third-party decentralized exchange (DEX) that Sky does not control. Please see the [Terms of Use](https://docs.sky.money/legal-terms) for more information on third-party services.`,
    categories: ['Trade']
  },
  {
    question: 'Is trading using Sky.money free?',
    answer: `Accessing the [Sky.money web app](https://app.sky.money) is free. Trading, however, may involve a fee imposed by the third-party decentralized exchange (i.e., [CoW Swap](https://swap.cow.fi)) integrated with the non-custodial Sky Protocol that is used to make the trade. In addition, you will likely pay a blockchain network transaction fee called a gas fee, which is neither controlled, imposed nor received by Sky.money or the Sky Protocol. This fee is calculated based on current Ethereum network demand and the amount of gas required to process your transaction.

If you have shied away from the Ethereum blockchain due to the high price of gas, the Sky Protocol's SkyLink system enables users to move their Ethereum Mainnet-based Sky assets between supported L2 networks, including Base, with reduced fees and faster transaction speeds.

Please see the [Terms of Use](https://docs.sky.money/legal-terms) for more information on third-party services.`,
    categories: ['Trade']
  },
  {
    question: 'Can I trade USDS on the open market?',
    answer: `Yes, eligible sUSDS holders can access the [Sky.money web app](https://app.sky.money) to trade the tokens via an API integration with the third-party decentralized exchange [CoW Swap](https://swap.cow.fi). sUSDS holders are also free to access any other protocol or exchange that supports sUSDS trading; however, users do so at their own risk. Sky.money is not responsible for any loss or damages incurred while using such third-party platforms. Please see the [Terms of Use](https://docs.sky.money/legal-terms) for more information on third-party services.`,
    categories: ['Trade']
  },
  {
    question: 'What is an exchange rate?',
    answer: `Exchange rate refers to the price of one cryptocurrency relative to the price of another cryptocurrency or fiat currency at any given moment. Cryptocurrency exchange rates may be subject to price volatility and may fluctuate based on various factors.`,
    categories: ['Trade']
  },
  {
    question: 'Is trading risky?',
    answer: `Your use of the Sky Protocol Trade feature available to eligible users of the Sky.money frontend user interface is at your own risk. Please review the [User Risk Documentation](https://docs.sky.money/user-risks) and the [Terms of Use](https://docs.sky.money/legal-terms).`,
    categories: ['Trade']
  }
];
