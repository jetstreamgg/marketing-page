import { FAQItem } from './faqData';

export const skyTokens: FAQItem[] = [
  {
    question: 'What is USDS?',
    answer: `USDS is a stablecoin of the decentralized Sky Protocol and the upgrade of DAI. It is backed by a surplus of collateral and soft-pegged to the value of the U.S. dollar, meaning it is designed to maintain a value equal to or close to a dollar. I

USDS is freely transferable and can be used in connection with any software protocol or platform that supports it. For example, you can use USDS to participate in the Sky Savings Rate to accumulate additional USDS, and to access Sky Token Rewards in the form of SKY tokens via the [Sky.money web app](https://app.sky.money).  

The Sky Protocol is governed by a community of broad and diversified individuals and entities from around the world, who hold SKY tokens and support the Sky Ecosystem by participating in a system of decentralized onchain voting. USDS powers the open Sky Ecosystem.

USDS is also available on networks other than Ethereum Mainnet, including Solana, Base, Arbitrum, Optimism and Unichain. You can follow the health of USDS and all Sky Protocol tokens using the [Sky Ecosystem Dashboard](https://info.sky.money).`,
    categories: ['Sky Tokens']
  },
  {
    question: 'Is USDS pegged to the U.S. dollar or soft-pegged to the U.S. dollar?',
    answer: `USDS is soft-pegged to the U.S. dollar, meaning that it is designed to stay close to $1 in value, but doesn't guarantee a strict 1:1 value ratio with the U.S. dollar. Its value can fluctuate based on market conditions. For example, USDS might trade at +/-$1, depending on supply and demand. Importantly, the stability of USDS is supported by various mechanisms within the Sky Protocol, including overcollateralization and the use of Peg Stability Modules (PSMs), which help manage its price relative to the dollar.`,
    categories: ['Sky Tokens']
  },
  {
    question: 'How does USDS and DAI maintain stability and benefit the ecosystem?',
    answer: `Overcollateralization and other mechanisms helps USDS maintain stability while also helping to manage risk. 
Overcollateralization means that the total value of the collateral that backs a specific stablecoin must always be higher than the aggregate value of all of those stablecoins in circulation. For example, if a governance community decides that its stablecoin must be overcollateralized by 20%, and the value of all its stablecoins in circulation is $1M, the collateral held in reserve must be worth at least $1.2M.
Other mechanisms of the decentralized Sky Protocol that are used to keep USDS stable are Peg Stability Modules (PSMs) and the Smart Burn Engine (SBE):

* **Peg Stability Modules (PSMs).** Peg Stability Modules (PSMs)  are smart contracts that allow users to convert certain stablecoins directly with the Sky Protocol for USDS or DAI at a fixed rate and with relatively low fees; however, blockchain (gas) fees may apply. They are designed to maintain the stability of USDS and DAI. Unlike decentralized exchange (DEX) transactions, PSM operations do not involve trading between users. Instead, they are direct, non-custodial conversions (generate and burn) executed with the decentralized smart contracts of the Sky Protocol.
* **The Smart Burn Engine.** The Smart Burn Engine is a smart contract that programmatically acquires SKY on the DeFi markets and deposits it into Sky Protocol-owned USDS/SKY liquidity pools using Sky Protocol surplus once the Surplus Buffer has hit a certain threshold set by Sky Ecosystem Governance. Depositing SKY into these pools improves token liquidity and also increases the capital buffers of the Sky Protocol. Note that the SBE no longer holds DAI and MKR. and it no longer buys MKR.

The Surplus Buffer is where all the USDS revenue earned by the Sky Protocol from fees collected by users are accrued. Using the excess USDS in this way balances its supply with its demand, which stabilizes its price

Importantly, the Sky Ecosystem Dashboard, designed by Block Analitica, allows anyone to examine the health of the decentralized Sky Protocol in real time. Users can view the total value locked (TVL) in the Protocol, TVL in the Sky Savings Rate module, TVL in the Sky Token Rewards module, the total collateral backing the system, an estimation of annual profits, and much more. For more on the Dashboard, see this Substack post by Block Analitica. 
For details on the risks associated with soft-pegged stablecoins, review the User Risk Documentation.`,
    categories: ['Sky Tokens']
  },
  {
    question: 'How can I use USDS?',
    answer: `Like other decentralized stablecoins, USDS is freely transferable and can be used in connection with any software protocol or platform that supports it. Unlike other stablecoins, you can use USDS to participate in the Sky Savings Rate to accumulate additional USDS over time, and to access Sky Token Rewards to accumulate SKY, the governance token of the Sky Protocol, without giving up control of your digital assets. With Sky Token Rewards, you can participate—if you choose to do so—in the governance of the Sky Ecosystem.`,
    categories: ['Sky Tokens']
  },
  {
    question: 'How do I acquire USDS stablecoins?',
    answer: `You can use the [Sky.money web app](https://app.sky.money), a non-custodial gateway to the decentralized Sky Protocol, to trade USDC, USDT, ETH or SKY for USDS (or vice versa). You can also upgrade your DAI to USDS, subject to any applicable blockchain transaction, or gas, fees. Gas fees are neither controlled, imposed nor received by Sky.money or the Sky Protocol. You can also obtain USDS on various crypto exchanges that decide to make it available on their platforms.`,
    categories: ['Sky Tokens']
  },
  {
    question: 'Is the USDS stablecoin superior to DAI?',
    answer: `USDS can be used in several ways DAI cannot, including to participate in the Sky Savings Rate and to access Sky Token Rewards without giving up control of your assets. Both USDS and DAI are backed by a surplus of collateral and soft-pegged to the value of the U.S. dollar, meaning each is designed to maintain a value equal to or close to a dollar. They are both native Sky Protocol tokens maintained by a broad and diversified community of individuals and entities from around the world who hold SKY, the native governance token of the Sky Protocol.`,
    categories: ['Sky Tokens']
  },
  {
    question: 'What are the characteristics of USDS?',
    answer: `USDS is a native stablecoin of the Sky Protocol. It contributes significantly to the stability and economic value the Protocol and to the Sky Ecosystem due to several of its key characteristics, including:

* **Accessibility.** USDS is inclusive. Regardless of economic standing, anyone with internet access can access the Ethereum blockchain and use USDS. Eligible [Sky.money web app](https://app.sky.money) users can participate in the Sky Savings Rate and access Sky Token Rewards without giving up control of their assets.
* **Round-the-clock availability.** USDS is attainable 24/7.
* **Speed and affordability.** Because USDS moves on the blockchain, users can transfer it across the globe within seconds and at a fraction of the cost of wire services via traditional finance (TradFi). Users only pay a blockchain transaction, or gas, fee. 
* **Transparency.** The Sky Protocol is transparent. Smart contracts are open source and all blockchain data is public, so users have complete insight into all USDS and other Sky Protocol token transactions.
* ** Security.** The design of the blockchain and its network of nodes, miners and validators, combined with the fact that cryptocurrencies like USDS are rooted in cryptography, enhance user security. 
* **Trading options.** Popular tokens can be traded for USDS at current market prices using permissionless rails. With the non-custodial Sky.money web app, you can access the decentralized Sky Protocol to directly trade on the blockchain instead of relying on centralized entities. 
* **Ecosystem builder.** USDS is a key component of the Sky Ecosystem and the decentralized finance (DeFi) movement. The more people use USDS, the more the Sky Protocol and DeFi ecosystems, generally, expand.`,
    categories: ['Sky Tokens']
  },
  {
    question: 'What is SKY, and how can I get it and use it?',
    answer: `SKY is the governance token of the Sky Ecosystem and the technical and functional evolution of MKR. 

SKY is freely transferable and can be acquired on crypto exchanges or via dApps that support the token. Eligible users of the [Sky.money web app](https://app.sky.money) can trade USDC, USDT, ETH, or USDS for SKY within that app. Those users can also supply USDS to the Sky Token Reward module of the Sky Protocol via the app and access SKY tokens as a reward.

Importantly, all SKY holders can use their SKY tokens to participate directly in Sky Ecosystem Governance through a system of onchain voting, and/or to transfer the voting power of their SKY tokens to a recognized delegate or a contract that they own. Here's how: 
 
**Direct Voting with SKY**

SKY holders participate directly in Sky Ecosystem Governance by supplying SKY to the Governance Contract of the Sky Protocol via the [Sky Governance Voting Portal](https://vote.sky.money). Direct voting is weighted, meaning that voting power is proportional to the number of SKY tokens voters supply to that contract. For example, if 50 voters supply a total of 600 SKY in favor of proposal A, while 100 voters supply a total of 400 SKY in support of proposal B, then Proposal A would win with 60% of the vote. The number of people who voted for a proposal is irrelevant; rather, the combined power of SKY tokens behind a proposal decides the winner.

**Delegating with SKY**

SKY holders can use their tokens to entrust their voting power to one or more delegates or a contract that they own via the Sky Governance Voting portal or the Staking Engine of the Sky Protocol (more on the Staking Engine below). Sky Ecosystem Governance delegates are chosen and approved by governance vote. Creating a new delegate account can only be done via the Sky Governance Voting Portal.

Delegates in receipt of token voting power can never directly access any SKY tokens delegated to them. Throughout the delegation process, users always own and are in control of their SKY tokens, and can change their delegate(s) at any time (subject to the Sky Protocol's rules that prevent double voting or misuse of delegated voting power). Delegating voting power may be a useful option for SKY token holders who have limited time to allocate to the process and who want to save on the cost of gas involved in voting on their own.  

**Staking SKY to Delegate**

When you supply SKY tokens to the Staking Engine using the Sky.money web app, you can access Staking Rewards and may also choose to create one or more positions, including positions that enable you to generate and borrow USDS against your supplied SKY and to delegate the voting power your SKY tokens provide. Here's a brief overview:

* **Access Rewards.** Supply SKY tokens to access Staking Rewards, initially in the form of USDS. Staking Reward rates are determined by Sky Ecosystem Governance through the process of decentralized onchain voting.

* **Borrow.** Borrow USDS against your supplied SKY. You can exit your borrow position at any time and withdraw or pay back USDS whenever you would like. The USDS Borrow Rate and Debt Deiling are determined by Sky Ecosystem Governance through the process of decentralized onchain voting. Your total debt increases each block according to the Borrow Rate.

* **Delegate.** Transfer the voting power of your supplied SKY tokens to a recognized delegate or a contract that you own.  Your chosen delegate can then participate in the Sky Ecosystem Governance voting process on your behalf. You can choose one delegate per position, meaning if you want to entrust your SKY to two different delegates using the Staking Engine, you will need to create two separate positions.  

You may exit your Staking positions at any time; no exit fee applies. The Staking Reward rate and Borrow rate are determined by Sky Ecosystem Governance through the process of decentralized onchain voting.

Your SKY, as well as any Staking Rewards that you accumulate, are supplied to a non-custodial smart contract, such that no intermediary ever takes custody of those tokens. With Sky, you always remain in control of your assets.`,
    categories: ['Sky Tokens']
  },
  {
    question: 'What is the difference between Sky and SKY?',
    answer: `The difference between "Sky" and "SKY" in the context of the Sky Ecosystem is quite straightforward: Sky refers to the Sky brand, the decentralized Sky Protocol and the overall Sky Ecosystem. This includes all of the marketing, operations, governance, and functionalities of the non-custodial platform.

SKY, when written in all caps, is the ticker symbol of  the native governance token of the Sky Protocol. SKY token holders have the ability to both participate directly in Sky Ecosystem Governance through a system of decentralized onchain voting and to access Staking Rewards via the Staking Engine of the Sky Protocol.

Understanding this distinction helps in navigating the ecosystem, whether you are accessing the features of the Sky Protocol, engaging effectively in governance, or both.`,
    categories: ['Sky Tokens']
  },
  {
    question: 'What is DAI?',
    answer: `DAI is the stablecoin of the Sky Protocol. It is decentralized, backed by a surplus of collateral, soft-pegged to the value of the U.S. dollar, and easily user-generated and accessed. DAI is maintained by and will continue to be maintained by Sky Ecosystem Governance unless and until that body decides otherwise by vote. DAI can be upgraded to USDS, which powers the Sky Ecosystem.`,
    categories: ['Sky Tokens']
  },
  {
    question: 'Are DAI and USDS the same?',
    answer: `USDS is the upgraded version of DAI. Like DAI, USDS is freely transferable; it can be used in connection with any software protocol or platform that supports it. You can use USDS to participate in the Sky Savings Rate to accumulate additional USDS, and to access Sky Token Rewards in the form of SKY via the [Sky.money web app](https://app.sky.money).`,
    categories: ['Sky Tokens']
  },
  {
    question: 'What is MKR?',
    answer: `MKR was the governance token of MakerDAO, which was rebranded to the Sky Ecosystem in September 2024. For a brief period of time, MKR joined SKY as a governance token of the Sky Ecosystem. In the spring of 2025, the Sky Ecosystem Governance community approved the upgrade of MKR to SKY, establishing SKY as the sole governance token of the Sky Protocol. The upgrade is at the rate of 1:24,000 (1 MKR = 24,000 SKY).

As the technical and functional evolution of MKR, SKY maintains the governance functionalities previously held by MKR. SKY holders can use the token to vote directly on Sky Ecosystem Governance proposals and/or to transfer the voting power of their SKY tokens to a recognized delegate or a contract that they own, just as they once could with MKR.`,
    categories: ['Sky Tokens']
  },
  {
    question: `What happens to the DAI I've supplied to the DAI Savings Rate (DSR) contract?`,
    answer: `The DAI Savings Rate (DSR) contract remains unchanged, so you don't need to immediately do anything to your DAI in the DSR module. You can, however, withdraw your DSR position, and, if you're an eligible user of the [Sky.money web app](https://app.sky.money), upgrade your DAI to USDS, and then use the USDS to access the Sky Savings Rate. Both DAI and USDS are native stablecoins of the Sky Protocol.
When you supply USDS to the Sky Savings Rate module of the decentralized, non-custodial Sky Protocol, you receive sUSDS savings tokens in return. When you choose to redeem your sUSDS for USDS—which you can do at any time—the total USDS you will receive will equal the amount you originally supplied, plus any rewards accumulated. No minimum supply amount is required to access the Sky Savings Rate, and you always maintain full control of your supplied assets.`,
    categories: ['Sky Tokens']
  }
];
