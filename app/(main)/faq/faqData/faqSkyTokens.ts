import type { FAQItem } from './types';

export const skyTokens: FAQItem[] = [
  {
    question: 'What is DAI?',
    answer: `DAI is the legacy stablecoin of the Maker Protocol. It is decentralized, backed by a surplus of collateral, soft-pegged to the value of the U.S. dollar, and easily user-generated and accessed. DAI is maintained by and will continue to be maintained by Sky Ecosystem Governance unless and until that body decides otherwise by vote. DAI can be upgraded to USDS, which powers the Sky Ecosystem.`,
    categories: ['Sky Tokens']
  },
  {
    question: 'Are DAI and USDS the same?',
    answer: `USDS is the upgraded version of DAI. Like DAI, USDS is freely transferable; it can be used in connection with any software protocol or platform that supports it. You can use USDS to participate in the Sky Savings Rate to accumulate additional USDS, and to access Sky Token Rewards in the form of SKY via the Sky.money web app.`,
    categories: ['Sky Tokens']
  },
  {
    question: 'How do I acquire USDS stablecoins?',
    answer: `You can use the Sky.money web app, a non-custodial gateway to the decentralized Sky Protocol, to trade USDC, USDT, ETH or SKY for USDS (or vice versa). You can also upgrade your DAI to USDS, subject to any applicable blockchain transaction, or gas, fees. Gas fees are neither controlled, imposed nor received by Sky.money or the Sky Protocol. You can also obtain USDS on various crypto exchanges that decide to make it available on their platforms.`,
    categories: ['Sky Tokens']
  },
  {
    question: 'How can I use USDS?',
    answer: `Like other decentralized stablecoins, USDS is freely transferable and can be used in connection with any software protocol or platform that supports it. Unlike other stablecoins, you can use USDS to participate in the Sky Savings Rate to accumulate additional USDS over time, and to access Sky Token Rewards to accumulate SKY, the governance token of the Sky Protocol, without giving up control of your digital assets. With Sky Token Rewards, you can participate—if you choose to do so—in the governance of the Sky Ecosystem.`,
    categories: ['Sky Tokens']
  },
  {
    question: 'Is the USDS stablecoin superior to DAI?',
    answer: `USDS can be used in several ways DAI cannot, including to participate in the Sky Savings Rate and to access Sky Token Rewards without giving up control of your assets. Both USDS and DAI are backed by a surplus of collateral and soft-pegged to the value of the U.S. dollar, meaning each is designed to maintain a value equal to or close to a dollar. They are both native Sky Protocol tokens maintained by a broad and diversified community of individuals and entities from around the world who hold SKY, the native governance token of the Sky Protocol.`,
    categories: ['Sky Tokens']
  },
  {
    question: 'How does USDS maintain stability and benefit the ecosystem?',
    answer: `Overcollateralization and other mechanisms helps USDS maintain stability while also helping to manage risk.

Overcollateralization means that the total value of the collateral that backs a specific stablecoin must always be higher than the aggregate value of all of those stablecoins in circulation. For example, if a governance community decides that its stablecoin must be overcollateralized by 20%, and the value of all its stablecoins in circulation is $1M, the collateral held in reserve must be worth at least $1.2M.

Other mechanisms of the decentralized Sky Protocol that are used to keep USDS stable are Peg Stability Modules (PSMs) and the Smart Burn Engine (SBE):

- **Peg Stability Modules (PSMs).** Peg Stability Modules (PSMs) are smart contracts that allow users to convert certain stablecoins directly with the Sky Protocol for USDS or DAI at a fixed rate and with relatively low fees. They are designed to maintain the stability of USDS and DAI.
  Unlike decentralized exchange (DEX) transactions, PSM operations do not involve trading between users. Instead, they are direct, non-custodial conversions (generate and burn) executed with the decentralized smart contracts of the Sky Protocol. PSMs effectively create a "price ceiling" and "price floor" for the stablecoins, keeping around $1, as users can always swap directly with the protocol when profitable.
  Through PSMs, USDS or DAI is obtained via predictable-rate conversion (typically a 1:1 ratio with certain stablecoins, or, in the case of sUSDS, for an amount reflecting its current price) rather than through borrowing. For example, given the existence of a USDC-backed PSM, a user could supply 100 USDC stablecoins to generate100 USDS or 100 DAI (minus fees), without taking on any debt. Given that PSM operations are facilitated on the Sky Protocol directly and not on a DEX, price slippage (i.e., the difference between the expected price of a token and the actual price when traded) is not a concern. Low (or zero) fees and no slippage are some of the benefits of using PSM, which adds liquidity to the assets backing the PSM. That liquidity helps to keep the value of USDS and DAI stable.

- **USDS, SKY and the Smart Burn Engine (SBE).** USDS and SKY work together with the help of the Smart Burn Engine to maintain their stability. The Smart Burn Engine is a Sky Protocol module that uses System Surplus income to buy and burn Sky Ecosystem Governance tokens. Moreover, it uses permissionless DEX markets on Ethereum, which also creates liquidity.

Importantly, the [Sky Ecosystem Dashboard](https://info.sky.money/), designed by [Block Analitica](https://blockanalitica.com/), allows anyone to examine the health of the decentralized Sky Protocol in real time. Users can view the total value locked (TVL) in the Protocol, TVL in the Sky Savings Rate module, TVL in the Sky Token Rewards module, the total collateral backing the system, an estimation of annual profits, and much more. For more on the Dashboard, see this [Substack post](https://blockanalitica.substack.com/p/the-sky-risk-and-analytics-dashboard) by Block Analitica.

For details on the risks associated with soft-pegged stablecoins, review the [User Risk Documentation](https://docs.sky.money/user-risks).`,
    categories: ['Sky Tokens']
  },
  {
    question: 'What are the characteristics of USDS?',
    answer: `USDS is a native stablecoin of the Sky Protocol. It contributes significantly to the stability and economic value the Protocol and to the Sky Ecosystem due to several of its key characteristics, including:

- **Accessibility.** USDS is inclusive. Regardless of economic standing, anyone with internet access can access the Ethereum blockchain and use USDS. Eligible Sky.money web app users can participate in the Sky Savings Rate and access Sky Token Rewards without giving up control of their assets.

- **Round-the-clock availability.** USDS is attainable 24/7.

- **Speed and affordability.** Because USDS moves on the blockchain, users can transfer it across the globe within seconds and at a fraction of the cost of wire services via traditional finance (TradFi). Users only pay a blockchain transaction, or gas, fee.

- **Transparency.** The Sky Protocol is transparent. Smart contracts are open source and all blockchain data is public, so users have complete insight into all USDS and other Sky Protocol token transactions.

- **Security.** The design of the blockchain and its network of nodes, miners and validators, combined with the fact that cryptocurrencies like USDS are rooted in cryptography, enhance user security.

- **Trading options.** Popular tokens can be traded for USDS at current market prices using permissionless rails. With the non-custodial Sky.money web app, you can access the decentralized Sky Protocol to directly trade on the blockchain instead of relying on centralized entities.

- **Ecosystem builder.** USDS is a key component of the Sky Ecosystem and the decentralized finance (DeFi) movement. The more people use USDS, the more the Sky Protocol and DeFi ecosystems, generally, expand.`,
    categories: ['Sky Tokens']
  },
  {
    question: 'Do I need to do anything with the DAI I’ve supplied to the DAI Savings Rate (DSR) contract?',
    answer: `The DAI Savings Rate (DSR) contract remains unchanged, so you don’t need to immediately do anything to your DAI in the DSR module. You can, however, withdraw your DSR position, and, if you’re an eligible user of the Sky.money web app, upgrade your DAI to USDS, and then use the USDS to access the Sky Savings Rate. Both DAI and USDS are native stablecoins of the Sky Protocol.

When you supply USDS to the Sky Savings Rate module of the decentralized, non-custodial Sky Protocol, you receive sUSDS savings tokens in return. When you choose to redeem your sUSDS for USDS—which you can do at any time—the total USDS you will receive will equal the amount you originally supplied, plus any rewards accumulated. No minimum supply amount is required to access the Sky Savings Rate, and you always maintain full control of your supplied assets.`,
    categories: ['Sky Tokens']
  }
];
