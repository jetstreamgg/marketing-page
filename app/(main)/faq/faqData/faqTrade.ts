import type { FAQItem } from './types';

export const trade: FAQItem[] = [
  {
    question: 'What is a trade?',
    answer: `A trade is the direct exchange of one cryptocurrency token for another at current market prices. Trading can occur on decentralized exchanges (DEXs) and centralized exchanges (CEXs).

A decentralized exchange (DEX) is a peer-to-peer marketplace made up of smart contracts where users can buy, sell and trade cryptocurrencies without having to share any personal information. No financial institution or third party is needed to facilitate DEX transactions. DEX users interact with smart contracts using crypto wallets. Because no bank or financial institution is involved in facilitating DEX transactions, a DEX can’t be used to trade fiat currency for cryptocurrency (or vice versa).

Not all DEXs operate in the same way. To buy crypto on a specific DEX may require knowledge of that DEXs functions and/or underlying code base.

A centralized exchange (CEX) is a marketplace where users create an account by providing identifying information and documentation to a centralized entity in order to buy, sell and trade cryptocurrencies. Importantly, a CEX facilitates exchanges, meaning it acts as an intermediary between buyers and sellers. Some CEXs also require users to opt-in to one or more custodial wallets rather than use a private, non-custodial wallet. With a custodial wallet, the centralized entity, not the user, is in control of safeguarding assets and the wallet’s private keys. In that sense, when using a CEX, users trade privacy for simplicity. Users can, however, transfer their assets from a custodial wallet to their own non-custodial wallet if they wish to do so.

Generally, CEXs operate in similar ways, but to learn how to use a specific CEX, obtain information from the exchange directly. Your use of any centralized exchange will likely be subject to that exchange's terms of service and applicable regulatory requirements.`,
    categories: ['Trade']
  },
  {
    question: 'Why would I trade tokens?',
    answer: `Market participants trade crypto for a variety of reasons. For example, users may trade crypto for portfolio diversification and to participate in DeFi. Regardless of the motivation, crypto trading can provide a diverse range of opportunities to market participants depending on their goals and risk appetite.`,
    categories: ['Trade']
  },
  {
    question: 'How do I trade Sky Protocol tokens?',
    answer: `Sky Protocol tokens are available to trade on crypto exchanges that list them.

For example, eligible users can access the Sky.money web app to trade SKY governance tokens on Ethereum Mainnet via an API integration with the third-party decentralized exchange (DEX) [CoW Swap](https://swap.cow.fi/#/1/swap/WETH) . Users can trade USDC, USDT, ETH or SKY for USDS, and USDC, USDT, ETH and USDS for SKY. These trades occur through smart contracts on the blockchain without relying on centralized entities. The exact trade route is determined by CoW Swap and is not influenced by Sky.money or the Sky Protocol. Some Sky Protocol features are not available in certain countries for regulatory compliance purposes. USDS and SKY are native Sky Protocol tokens.

Note that crypto price slippage—a change in the expected price of the asset(s) between the time of the trade order and its execution on the blockchain—can occur due to market volatility and low liquidity environments. When you trade via the Sky Protocol, you can set your slippage tolerance level to limit the amount of order slippage. Users who wish to trade on DEXs should be especially aware of MEV risk, front-running risk and token value risk.`,
    categories: ['Trade']
  },
  {
    question: "How do I know if there's enough liquidity for a large trade?",
    answer: `Typically, for any size trade, you can check the depth of liquidity on the exchange you are using or on other trading platforms where this information is reflected.

Decentralized exchanges and platforms typically show the number of tokens that are available in the pool you want to trade against. For example, If you want to trade 10,000 USDC for ETH on Uniswap, you can check the ETH/USDC pool size and the price impact (shown as a percentage) before making your trade. A high price impact means there is probably not enough liquidity to make the trade at a good price. Even if there appears to be enough liquidity to successfully make a trade, you should always be aware of liquidity risk and price slippage risk and be sure to set your slippage tolerance appropriately.

Centralized exchanges show all buy/sell orders at different price levels, illustrating exactly how much of a token is available to buy or sell at each price point. If you want to buy 3 ETH with USDC, for example, on a particular centralized exchange and see a large number of sell orders around the current price, it is possible that there will be enough liquidity for your trade on that centralized exchange.`,
    categories: ['Trade']
  },
  {
    question: 'Why aren’t all trading pairs available on the Sky.money web app?',
    answer: `There are several key technical and practical reasons why some DeFi apps, including the Sky.money web app, don't support all cryptocurrencies. For example, each token would need to be specifically integrated into the Sky Protocol’s smart contracts, which would require development work and security auditing. Regulatory risk is also a key consideration.

Note, however, that Sky.money web app users can trade a wide range of assets on Ethereum Mainnet through the [CoW Swap](https://swap.cow.fi/#/1/swap/WETH) integration.The Sky Protocol does not limit the assets available for trading via CoW Swap, as it is an independent, third-party decentralized exchange (DEX) that Sky does not control.`,
    categories: ['Trade']
  },
  {
    question: 'Is trading via Sky.money free?',
    answer: `Accessing the Sky.money web app is free. Trading, however,may involve a fee imposed by the third-party decentralized exchange (i.e., [CoW Swap](https://swap.cow.fi/#/1/swap/WETH)) integrated with the non-custodial Sky Protocol that is used to make the trade. In addition, you will likely pay a blockchain network transaction fee called a gas fee, which is neither controlled, imposed nor received by Sky.money or the Sky Protocol. This fee is calculated based on current Ethereum network demand and the amount of gas required to process your transaction.

If you have shied away from the Ethereum blockchain due to the high price of gas, the Sky Protocol’s bridge system, called SkyLink, enables users to move their Ethereum Mainnet-based Sky assets between supported L2 networks, including Base, with reduced fees and faster transaction speeds.`,
    categories: ['Trade']
  },
  {
    question: 'Is trading risky?',
    answer: `Your use of the Sky Protocol Trade feature available to eligible users of the Sky.money frontend user interface is at your own risk.`,
    categories: ['Trade']
  }
];
