import { FAQItem } from './faqData';

export const skyEcosystem: FAQItem[] = [
  {
    question: 'Who is behind the Sky Protocol?',
    answer: `Sky Ecosystem Governance relies on a decentralized, multi-faceted, detailed and transparent system of decision-making that includes discussion in the [Sky Forum](https://forum.sky.money/]) and polling and onchain voting in the [Sky Governance Voting Portal](https://vote.sky.money/) to maintain the non-custodial Sky Protocol and the Sky Ecosystem. Governance is shared among a broad and diversified community, comprising individuals and entities from around the world.
For a deeper dive into the facets and checks and balances of governance, please refer to the [Sky Atlas](https://sky-atlas.powerhouse.io/).`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'What is Sky.money web app, and what can I do with it?',
    answer: `The non-custodial Sky.money web app is one of many free-to-access frontend gateways to the Sky Protocol, which is designed around the USDS stablecoin. It provides eligible users with access to all Sky Protocol tokens (sUSDS, USDS, DAI, SKY and MKR) and features, including the Sky Savings Rate (SSR), Sky Token Rewards (STRs), the Staking Engine, SkyLink, more. 

Eligible Sky.money web app users can: 

* **Trade.** Sky Protocol tokens are available to trade on crypto exchanges that list them. Eligible users of the Sky.money web app can access the non-custodial Sky Protocol to trade some SKY on Ethereum Mainnet via an API integration with the third-party decentralized exchange (DEX) [CoW Swap](swap.cow.fi). Please see the [Terms of Use](https://docs.sky.money/legal-terms) for more information on third-party services. 


* **Upgrade.** Upgrading enables you to take advantage of the many Sky Ecosystem features.
  * Upgrade DAI to USDS 1:1, and revert USDS back to DAI 1:1. Upgrading and reverting are optional, instant, and free; however, you will likely pay gas fees for using the Ethereum blockchain network. That fee is not controlled, imposed or received by Sky.money or the Sky Protocol
  * Upgrade MKR to the SKY token at a rate of 1:24,000 (1 MKR = 24,000 SKY). While MKR will continue to exist, reverting from SKY to MKR via the Sky Protocol is not possible. SKY is the technical and functional evolution of MKR and the sole governance token of the Sky Protocol. SKY inherited the governance functionalities previously held by MKR. For upgrade details and step-by-step upgrade instructions, please visit the [MKR to SKY Upgrade Hub](https://upgrademkrtosky.sky.money).

* **Save.** Supply USDS to the Sky Savings Rate module of the Sky Protocol to access the Sky Savings Rate and accumulate additional USDS over time. No minimum supply amount is required; withdraw at any time.   
  * When you supply USDS to the Sky Savings Rate module, you receive sUSDS tokens. These sUSDS tokens serve as a digital record of your USDS interaction with the module and any value accrued to your position.   
  * The Sky Protocol dynamically adds USDS tokens to the pool every few seconds, in accordance with the Sky Savings Rate. As those tokens auto-accumulate in the pool over time, the value of the sUSDS you hold may gradually increase. So, when you choose to redeem your sUSDS for USDS—which you can do at any time—the total USDS you receive will equal the amount originally supplied, plus any rewards earned. 


* **Access Sky Token Rewards.** Supply USDS to the Sky Token Rewards module of the Sky Protocol to earn rewards over time. No minimum USDS supply amount is required; withdraw at any time.   
  * The amount of Sky Token Rewards you receive is calculated based on your share of the entire pool of USDS tokens supplied to the Sky Token Rewards module by all participants, not on the amount of tokens you supply. This share, and consequently the rate of Sky Token Reward, can fluctuate as the total pool size changes over time. Sky.money does not control the issuance, determination, or distribution of these rewards.  
  * The USDS stablecoin, as well as the rewards received, are supplied to a smart contract that represents the USDS pool of assets. This means that no intermediary takes custody over your assets.  


* **Access Staking Rewards.** Supply SKY tokens to the Staking Engine of the Sky Protocol to create a position, enabling SKY holder access to Staking Rewards, and more:
  * **Access Rewards.** Supply SKY tokens to access Staking Rewards, initially in the form of USDS. Staking Reward rates are determined by Sky Ecosystem Governance through the process of decentralized onchain voting.
  * **Borrow.** Borrow USDS against your supplied SKY. You can exit your borrow position at any time and draw or pay back USDS whenever you would like. The USDS Borrow Rate and Debt Ceiling are determined by Sky Ecosystem Governance through the process of decentralized onchain voting. Your total debt increases each block according to the Borrow Rate.
  * **Delegate.** Transfer the voting power of your supplied SKY tokens to a recognized delegate or a contract that you own. Your chosen delegate can then participate in the Sky Ecosystem Governance voting process on your behalf. You can choose one delegate per position, meaning if you want to entrust your SKY to two different delegates using the Staking Engine, you will need to create two separate positions. 
  You may exit your position(s) at any time; no exit fee applies.


* **Connect with SkyLink.** SkyLink is the Sky system that provides the rails for Sky Ecosystem projects, such as [Spark](https://spark.fi/), to link assets between the Sky Protocol on Ethereum Mainnet and supported L2 networks. This enables end users on L2s, such as Base, Arbitrum, Optimism and Unichain for example, to tap into Sky Protocol features via the Sky Ecosystem projects’ rails.


With Sky.money, you always remain in control of your supplied assets.`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'Is the Sky.money web app affiliated with an exchange?',
    answer:
      'The [Sky.money web app](https://app.sky.money/) integrates via an API with the third-party decentralized exchange (DEX) [CoW Swap](https://swap.cow.fi) to facilitate trading. Eligible users of the Sky.money web app can trade USDC, USDT, ETH or SKY tokens for USDS, and USDC, USDT, ETH and USDS for SKY. These trades occur through autonomous, non-custodial smart contracts on the blockchain without relying on centralized entities. The exact trade route is determined by CoW Swap. and is not influenced by Sky.money or the Sky Protocol. Please see the [Terms of Use](https://docs.sky.money/legal-terms) for more information on third-party services.',
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'Can I borrow assets using the Sky.money web app?',
    answer: `Eligible users of the [Sky.money web app](https://app.sky.money/) can supply SKY tokens to the Staking Engine of the Sky Protocol to access rewards and may also choose to create one or more positions, including a position that enables them to generate and borrow USDS against supplied SKY.

If you create a borrow position, you can stake or un-stake your SKY collateral anytime, and withdraw or pay back USDS whenever you’d like. This means you are always able to actively manage your positions.

The Debt Ceiling and Borrow Rate are parameters determined by Sky Ecosystem Governance through a process of decentralized, community-driven onchain voting. The total debt increases each block according to the Borrow Rate.

USDS borrow positions are subject to liquidation risk if at any time the value of supplied collateral drops below the required threshold (liquidation price) and the position becomes undercollateralized. If this were to occur, the smart contract would automatically liquidate and auction the collateral, and any leftover collateral may be claimed through the [Unified Auctions portal](https://unified-auctions.makerdao.com/).`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'What is an eligible user?',
    answer: `Some functionalities of the Sky Protocol as accessed through the [Sky.money web app](https://app.sky.money/) frontend user interface are not available in selected jurisdictions. Please refer to the [Terms of Use](https://docs.sky.money/legal-terms) for more information.`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'Are there risks involved with using the Sky.money web app?',
    answer: `For details regarding potential risks using [Sky.money web app](https://app.sky.money/), please see the [User Risk Documentation](https://docs.sky.money/user-risks).`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'Is there a way to access Sky Protocol features without using the Sky.money web app?',
    answer: `The [Sky.money web app](https://app.sky.money/) is only one of the many gateways to the permissionless Sky Protocol. Some features may be restricted by the Sky.money frontend in certain jurisdictions based on regulatory considerations. Please refer to the [Terms of Use](https://docs.sky.money/legal-terms) for more information.`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'Does the Sky.money web app track my positions across multiple chains?',
    answer: `The Balances feature of the [Sky.money web app](https://app.sky.money/) displays all of your Sky-related assets on the network you are connected to at the moment. When you connect your crypto wallet to the Sky.money web app to access the decentralized Sky Protocol, only the tokens in the wallet that are relevant to the app are listed. With all of your Sky assets visible in one place, you can better self-manage your assets in line with your goals. Sky.money is non-custodial and permissionless.`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: `Why can't I access Sky.money web app with a VPN?`,
    answer: `The [Sky.money web app](https://app.sky.money/) restricts user access from certain jurisdictions in compliance with the Terms of Use. As a result, VPNs are blocked to ensure adherence to these restrictions. For more information, please refer to the [Terms of Use](https://docs.sky.money/legal-terms).`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question:
      'I supplied assets on the Sky Protocol, but now I can’t access the Sky.money web app. Is my money gone? ',
    answer: `Not necessarily. You can use a block explorer to verify your assets are still on the blockchain. For details on the risks associated with cryptocurrencies, please review the [User Risk Documentation](https://docs.sky.money/user-risks).`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question:
      'I accidentally rejected the Terms of Use when attempting to access the Sky.money web app. Now it’s completely inaccessible. What can I do? ',
    answer: `Try deleting your cookies and reloading the page.`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question:
      'I’m not in a banned country, but I see an access restricted message when trying to use Sky.money. Why?',
    answer: `Due to the modular design of the [Sky.money web app](https://app.sky.money/) for regulatory compliance purposes, you may not be able to access certain functionalities of the Sky Protocol in your jurisdiction. For more information, please refer to the [Terms of Use](https://docs.sky.money/legal-terms).`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'What is the Sky Protocol?',
    answer: `The Sky Protocol is a decentralized financial application (dApp) developed around its native USDS stablecoin. It is designed to enable the Sky Ecosystem to operate autonomously and allow users to engage with blockchain technology. 

The Sky Protocol is made up of software code deployed to the Ethereum blockchain. The code takes the form of smart contracts that are self-executing, trustless, decentralized and permissionless. These smart contracts contain the rules and agreements that constitute the framework of the Sky Protocol, and are what allow for the fast and efficient creation, transfer and validation of digital assets, as well as for Sky Ecosystem community governance.

Smart contracts work a lot like vending machines. A vending machine automatically provides a product once you feed it a coin and choose the product you want. The machine does not call someone at the vending machine company to get permission or further instructions. Similarly, a smart contract automatically provides a specific output (O) when prompted by a specific input (I). For example, a smart contract deployed to serve an ecosystem can send money to contractors (O) on the first of every month (I), without any help or interference from a payroll manager, bank or other financial institution.

The Sky Protocol features several tokens— USDS, DAI, sUSDS, SKY and MKR—plus the Sky Savings Rate, Sky Token Rewards, the Staking Engine, SkyLink, and more.`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'Why should I use the Sky Protocol?',
    answer: `Here are the top five reasons users choose to access the powerful features of the Sky Protocol:

1. The Sky Protocol is easy to access and explore via the [Sky.money web app](https://app.sky.money/), a non-custodial gateway to Sky Protocol features.   
2. The Sky Protocol was built from the core module of the Maker Protocol, the oldest and one of the largest and most popular decentralized finance (DeFi) protocols in the world.    
3. With Sky, you always remain in full control of your supplied assets.  
4. Transparent Sky Ecosystem Governance facilitates continual improvements of the Sky Protocol including regular independent security audits, and ongoing monitoring of the financial stability of its native stablecoin, USDS.
5. Fast-moving Sky Protocol innovation is driven in the ecosystem by Star Agents (Stars), such as [Spark](https://spark.fi/). Stars are independent decentralized projects within the larger Sky Ecosystem. They are designed to enable focused, fast-moving innovation and development. Each Star is free to have its own treasury, governance processes and community, and governance token.`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'How many tokens does the Sky Protocol feature, and will others be added?',
    answer: `The Sky Protocol features four tokens: USDS, DAI, SKY and MKR. All Sky Protocol tokens are managed by Sky Ecosystem Governance through a system of decentralized onchain voting. The addition of new tokens, as well as any changes to current tokens, would need to be approved by Sky Ecosystem Governance.`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'How does the Sky Protocol generate revenue for the Sky Ecosystem?',
    answer: `The Sky Protocol generates profits for the ecosystem in a few ways, including from the fees paid by users who engage directly with the Sky Protocol’s features, and from the credit lines extended to Star Agents (Stars)—independent decentralized projects within the Sky Ecosystem.
    
User fees include the following:
    
* **Borrow Rate.** The Borrow Rate applies to users who borrow USDS or DAI. For example, if a user supplies ETH as collateral to borrow 10,0000 USDS at an assumed annual rate of 9.25%, that user would pay 76 USDS [10,000 USDS × (0.0925 / 365) × 30 ≈ 76] USDS. Here is the formula: Total Fee = Loan Amount × (Borrow Rate/ 365) × Number of Days.
    
* **Liquidation Penalty.** The Liquidation Penalty is the fee a user pays when their loan becomes too risky and is liquidated (closed) automatically by the protocol. The Liquidation Penalty varies, but for ETH it is typically 13% of the loan total. The penalty exists to protect the system and encourage responsible borrowing.
    
The Borrow Rate and Liquidation Penalty are both risk parameters determined by Sky Ecosystem Governance.  
 
Profits are also generated when an end user borrows USDS via Spark Borrow. Spark is the very first Sky Star. Sky earns a fixed margin on the extended credit, and Spark earns a spread on the credit extended, meaning the end user pays slightly higher fees than Spark does. But Spark also earns a profit, helping to fuel the Sky Ecosystem. 

Additionally, SKY helps to maintain the stability of USDS. This is done through the Smart Burn Engine (SBE)—a smart contract that programmatically acquires SKY on the DeFi markets and deposits it into Sky Protocol-owned USDS/SKY liquidity pools using Sky Protocol surplus once the Surplus Buffer has hit a certain threshold set by Sky Ecosystem Governance. Depositing SKY into these pools improves token liquidity and also increases the capital buffers of the Sky Protocol. Note that the SBE no longer holds DAI and MKR. and it no longer buys MKR.

The Surplus Buffer is where all the USDS revenue earned by the Sky Protocol from fees collected by users are accrued. Using the excess USDS in this way balances its supply with its demand, which stabilizes its price.
`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'Explain Peg Stability Modules, how they work, and their advantages?',
    answer: `Peg Stability Modules (PSMs) are smart contracts that allow users to convert certain stablecoins directly with the Sky Protocol for USDS or DAI at a fixed rate and with relatively low fees. They are designed to maintain the stability of USDS and DAI. Unlike decentralized exchange (DEX) transactions, PSM operations do not involve trading between users. Instead, they are direct, non-custodial conversions (generate and burn) executed with the decentralized smart contracts of the Sky Protocol.

Through PSMs, USDS or DAI is obtained via predictable-rate conversion (typically a 1:1 ratio with certain stablecoins, or, in the case of sUSDS, for an amount reflecting its current price) rather than through borrowing. For example, given the existence of a USDC-backed PSM, a user could supply 100 USDC stablecoins to generate100 USDS or 100 DAI (minus fees), without taking on any debt. Given that PSM operations are facilitated on the Sky Protocol directly and not on a DEX, price slippage (i.e., the difference between the expected price of a token and the actual price when traded) is not a concern. Zero Sky protocol fees and no slippage are some of the benefits of using PSM, which adds liquidity to the assets backing the PSM. That liquidity helps to keep the value of USDS and DAI stable. 

**Introduction of PSMs**

PSMs, first introduced in the Maker Forum in late 2020, replaced the need for the low liquidation-ratio stablecoin vaults once used to borrow DAI. PSMs help keep DAI and USDS soft-pegged to the U.S. dollar when demand for either token outstrips supply by absorbing supply and demand shocks that might otherwise affect the peg and providing instant arbitrage opportunities.

**Other benefits of PSMs**

* **Liquidity.** PSMs provide reliable liquidity and stability.
* **Cost Efficiency.** The Maker stability mechanisms (e.g., stability and liquidation fees collected from users generating and borrowing DAI) were complex and costly to use. PSMs offer a simpler and more cost-effective way to maintain the pegs of both DAI and USDS.
* **Increased User Adoption.** PSMs increase DAI and USDS adoption by making the tokens easier to obtain and by maintaining stability.
* **Improved UX.** Because PSMs could continue to be a large benefit to users, they support the overall value proposition of the Sky Protocol.

**PSM considerations**

  * A PSM can only hold an asset that is pegged to the same asset as DAI or USDS because it offers 1-to-1 conversions. A PSM with a non-stable asset would become undercollateralized as soon as the market price of that non-stable asset decreased.
  * The amount of conversions a PSM can offer is limited by its Debt Ceiling and the total current amount of collateral tokens supplied to it.

For more information, review the [Peg Stability Modules section](https://sky-atlas.powerhouse.io/A.3.4.2.1.1_Peg_Stability_Module/1b2f2ff0-8d73-80b4-9ad5-c91127628179%7C57eaaad19a16975d) of the [Sky Atlas](https://sky-atlas.powerhouse.io/).
`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'What is Sky Core?',
    answer: `Sky Core is the core code and decentralized mechanisms behind the Sky Protocol’s key functions.`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'What are oracles?',
    answer: `The decentralized, non-custodial Sky Protocol relies on oracles, which are third-party services that provide offchain price feed data to the blockchain. Oracles support DeFi protocols in a number of ways, and offer users and end users the following:
* **Increased stability:** Reliable price data ensures efficient collateralization of stablecoins and minimizes the risk of under-collateralized borrowing, safeguarding pegs.
* **Transparency and decentralization:** The use of multiple independent oracle feeds reduces a protocol’s or decentralized exchange’s reliance on any single source, promoting transparency and trust in a system.
* **Flexibility and innovation:** The modular design of an oracle system allows for both integration of new data sources and feeds, and separation. In other words, oracles can be on- and off-boarded when needs arise.
Sky Core uses oracles provided by [Chronicle](https://chroniclelabs.org/). Please see the [Terms of Use](https://docs.sky.money/legal-terms) for more information on third-party services.`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'Who is the provider of oracles for the Sky Protocol?',
    answer: `Sky Core uses oracles provided by [Chronicle](https://chroniclelabs.org/).`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'Has the Sky Protocol undergone security audits?',
    answer: `Yes. The code behind the Sky Protocol is open source and has undergone extensive [audits](https://developers.sky.money/security/security-measures/overview#audits) by highly regarded auditing firms within the industry, including ChainSecurity and Cantina . For more information, see the [User Risk Documentation](https://docs.sky.money/user-risks).`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'Where can I find all of the Sky Protocol’s smart contract addresses?',
    answer: `The Sky Protocol’s smart contract addresses are listed in the [Developer Documentation](https://developers.sky.money/).`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'Where can I find information and data about Sky Protocol and its performance? ',
    answer: `Comprehensive information and data about the Sky Protocol and its performance is available through the [Sky Ecosystem Dashboard](https://info.sky.money/). This dashboard, designed by [Block Analitica](https://blockanalitica.com/), allows anyone to examine the health of the Sky Protocol in real time. You can view the total value locked (TVL) in the Protocol, TVL in the Sky Savings Rate module, TVL in the Sky Token Rewards module, the total collateral backing the system, an estimation of annual profits, and much more.`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: `Where can I see the Sky Protocol’s total liquidity?`,
    answer: `The [Sky Ecosystem Dashboard](https://info.sky.money/), designed by [Block Analitica](https://blockanalitica.com/), enables anyone to examine the health of the Sky Protocol in real time. You can view the total value locked (TVL) in the Sky Protocol, TVL in the Sky Savings Rate module, TVL in the Sky Token Rewards module, the total amount of collateral backing the system, an estimation of annual rewards, and much more.`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'What is the Sky Ecosystem, and what does it offer users?',
    answer: `The Sky Ecosystem consists of the community and projects that support the Sky Protocol, a decentralized financial application (dApp) developed around its native USDS stablecoin and designed to enable the Sky Ecosystem to operate autonomously and enable users to engage with blockchain technology.

Governance of the Sky Ecosystem and Sky Protocol relies on a decentralized, multi-faceted, detailed and transparent system of decision-making that includes discussion, polling and onchain voting. The Sky Ecosystem Governance community is broad and diversified, comprising individuals and entities from around the world who hold SKY tokens.
The Sky Ecosystem also includes Star Agents (Stars). Stars are autonomous and independent decentralized projects within the larger Sky Ecosystem. They are designed to enable focused, fast-moving innovation and development.
`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'Is the Sky Ecosystem the same as the Sky Protocol?',
    answer: `No. The Sky Ecosystem consists of the community and projects that support the Sky Protocol, a decentralized financial application (dApp) developed around its native USDS stablecoin and designed to enable the Sky Ecosystem to operate autonomously and enable users to engage with blockchain technology.

The Sky Ecosystem also includes Star Agents (Stars). Stars are autonomous and independent decentralized projects within the larger Sky Ecosystem. They are designed to enable focused, fast-moving innovation and development.

The Sky Protocol is made up of software code deployed to the Ethereum blockchain. The code takes the form of smart contracts that are self-executing, trustless, decentralized and permissionless. These smart contracts contain the rules and agreements that constitute the framework of the Sky Protocol, and are what allow for the fast and efficient creation, transfer and validation of digital assets, as well as for Sky Ecosystem community governance.

Smart contracts work a lot like vending machines. A vending machine automatically provides a product once you feed it a coin and choose the product you want. The machine does not call someone at the vending machine company to get permission or further instructions. Similarly, a smart contract automatically provides a specific output (O) when prompted by a specific input (I). For example, a smart contract deployed to serve an ecosystem can send money to contractors (O) on the first of every month (I), without any help or interference from a payroll manager, bank or other financial institution.

The Sky Protocol features several tokens— USDS, DAI, sUSDS, SKY and MKR—plus the Sky Savings Rate, Sky Token Rewards, the Staking Engine, SkyLink, and more.
`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'What is the Sky Ecosystem Dashboard?',
    answer: `The [Sky Ecosystem Dashboard](https://info.sky.money/), designed by [Block Analitica](https://blockanalitica.com/), allows anyone to examine the health of the decentralized Sky Protocol in real time. Users can view the total value locked (TVL) in the Protocol, TVL in the Sky Savings Rate module, TVL in the Sky Token Rewards module, the total collateral backing the system, an estimation of annual profits, and much more. For more on the Dashboard, see this [blog post](https://blockanalitica.substack.com/p/the-sky-risk-and-analytics-dashboard) by Block Analitica.`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'Where can I make Sky Ecosystem Governance proposals? ',
    answer: `You can propose a change to the Sky Protocol or Sky Ecosystem Governance in the [Sky Forum](https://forum.sky.money/), where it can be reviewed by the community and debated. Depending on the results of community discussion in the Forum, your proposal may be placed in the [Sky Governance Voting portal](https://vote.sky.money/) and voted upon.`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'What is the Sky Forum, and how does it differ from other discussion platforms? ',
    answer: `The [Sky Forum](https://forum.sky.money/) (formerly the Maker Forum) is a public discussion platform group that includes conversation threads, tagging, categorization and active moderation. It is formally used for discussions focused mainly on Sky Ecosystem Governance and risk. Other platforms used by the Sky Ecosystem community, such as [Discord](https://discord.com/invite/skyecosystem) and X ([@SkyEcosystem](https://x.com/SkyEcosystem)), are much less formal, more ad hoc.`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: ' How is the Sky Ecosystem designed for community-driven innovation?',
    answer: `In addition to being designed for security, scalability and governance, the Sky Protocol’s architecture is built to enhance interoperability within the larger decentralized finance (DeFi) ecosystem. 

The Sky Protocol’s native USDS stablecoin powers the open Sky Ecosystem and is designed to scale. Sky provides liquidity for various DeFi applications, promoting efficient trading and enhancing the overall liquidity of the DeFi ecosystem. The composability features of the Protocol empower developers to build a richer DeFi environment by leveraging the tokens and rewards of the Sky Ecosystem, leading to integrations that offer new functionalities and efficiencies.
Visit the [Sky.money website](https://sky.money/) or the [Developer Documentation](https://developers.sky.money/) for more info.`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'Why rebrand MakerDAO to the Sky Ecosystem?',
    answer: `Maker began in 2014, as a small community-governed project responsible for developing the Maker Protocol on the Ethereum blockchain. Maker quickly grew to find success with the development of its DAI stablecoin. DAI enabled the Maker Protocol to become the first decentralized finance (DeFi) liquidity protocol with a product-market fit. The Maker Protocol grew to such an extent that by 2021, effective governance by its monolithic community proved challenging. 

While the complexity of Maker had been necessary to pursue the best opportunities in the market, the community felt that there existed scaling issues that ultimately held the project back. The rebrand of Maker to the Sky Ecosystem, in 2024, took the former Maker Protocol to the next level with technology that focuses on resilience and simplicity while remaining decentralized and non-custodial. In short, the Sky Protocol features products and tools, organizational restructuring, and token upgrades — i.e., USDS, the upgraded version of DAI; and SKY, the upgraded version of MKR. 

These advancements have vastly improved user experiences and enhanced network resilience while creating more alignment between product users, governance participants and the ecosystem as a whole. 
`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'Are Sky and Maker the same?',
    answer: `The Sky Ecosystem is the rebrand of Maker. Maker became Sky in 2024, taking the Maker Protocol to the next level with new technology that focuses on resilience and simplicity while remaining decentralized and non-custodial. The Sky Protocol is maintained by Sky Ecosystem Governance and is easy to access and explore via the [Sky.money web app](https://sky.money/), a gateway to the Protocol. `,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'What happens if I never upgrade my MKR?',
    answer: `All MKR holders are encouraged to upgrade to SKY promptly to maintain the ability to participate in key decisions shaping the Sky Protocol. Upgrading in a timely fashion ensures reduced governance complexity and a more effective, efficient and resilient ecosystem for all. Please note that while MKR will continue to exist, users will not be able to revert back to MKR from SKY via the Sky Protocol.

To facilitate a smooth and prompt transition, Sky Ecosystem Governance [voted to introduce a Delayed Upgrade Penalty](https://vote.makerdao.com/polling/QmTVd4iq). The penalty, which will [begin September 18, 2025](https://upgrademkrtosky.sky.money), reduces the amount of SKY received per MKR upgraded at a rate of 1%, and increases by 1% every three months thereafter until it reaches 100% in 25 years. The penalty will not apply to anyone upgrading their MKR to SKY before it kicks in.

Here are some examples of how the Delayed Upgrade Penalty works:


  * If a user upgrades 1 MKR before the Delayed Upgrade Penalty takes effect, the user will not pay a penalty and will receive 24,000 SKY.

  * If a user upgrades 1 MKR three months after the Delayed Upgrade Penalty takes effect, the penalty applies at 1%. So, the amount the user will receive as a result of the upgrade will be 23,760 SKY (24,000 minus 1%).  

  * If a user upgrades 1 MKR six months after the Delayed Upgrade Penalty takes effect, the penalty applies at 2%, meaning the user will receive 23,520 SKY (24,000 minus 2%).

Please note that blockchain, or gas, fees for using the Ethereum network apply when upgrading. Blockchain transaction fees are neither controlled, imposed nor received by Sky.money or the Sky Protocol. 

For upgrade details and step-by-step upgrade instructions, please visit the [MKR to SKY Upgrade Hub](https://upgrademkrtosky.sky.money).`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'Will the MKR I hold lose its value if I never upgrade to SKY?',
    answer: `All MKR holders are encouraged to upgrade to SKY promptly to maintain the ability to participate in key decisions shaping the Sky Protocol. Upgrading in a timely fashion ensures reduced governance complexity and a more effective, efficient and resilient ecosystem for all. Please note that while MKR will continue to exist, users will not be able to revert back to MKR from SKY via the Sky Protocol.

To facilitate a smooth and prompt transition, Sky Ecosystem Governance [voted to introduce a Delayed Upgrade Penalty](https://vote.makerdao.com/polling/QmTVd4iq). The penalty, which will [begin September 18, 2025](https://upgrademkrtosky.sky.money), reduces the amount of SKY received per MKR upgraded at a rate of 1%, and increases by 1% every three months thereafter until it reaches 100% in 25 years. The penalty will not apply to anyone upgrading their MKR to SKY before it kicks in.

Here are some examples of how the Delayed Upgrade Penalty works:


  * If a user upgrades 1 MKR before the Delayed Upgrade Penalty takes effect, the user will not pay a penalty and will receive 24,000 SKY.

  * If a user upgrades 1 MKR three months after the Delayed Upgrade Penalty takes effect, the penalty applies at 1%. So, the amount the user will receive as a result of the upgrade will be 23,760 SKY (24,000 minus 1%).  

  * If a user upgrades 1 MKR six months after the Delayed Upgrade Penalty takes effect, the penalty applies at 2%, meaning the user will receive 23,520 SKY (24,000 minus 2%).

Please note that blockchain, or gas, fees for using the Ethereum network apply when upgrading. Blockchain transaction fees are neither controlled, imposed nor received by Sky.money or the Sky Protocol. 

For upgrade details and step-by-step upgrade instructions, please visit the [MKR to SKY Upgrade Hub](https://upgrademkrtosky.sky.money).`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'Can I convert my SKY back to MKR?',
    answer: `While MKR will continue to exist, it is not possible to revert back to MKR from SKY via the Sky Protocol.`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'How do I vote with SKY?',
    answer: `SKY token holders can use their SKY to participate directly in Sky Ecosystem Governance through a system of decentralized onchain voting, and/or to transfer the voting power of their SKY tokens to a recognized delegate or a contract that they own. Voting with MKR is no longer possible.
 
**Direct Voting with SKY**
SKY holders participate directly in Sky Ecosystem Governance by supplying SKY to the Governance Contract of the Sky Protocol via the [Sky Governance Voting Portal](https://vote.sky.money/). Direct voting is weighted, meaning that voting power is proportional to the number of SKY tokens voters supply to that contract. For example, if 50 voters supply a total of 600 SKY in favor of proposal A, while 100 voters supply a total of 400 SKY in support of proposal B, then Proposal A would win with 60% of the vote. The number of people who voted for a proposal is irrelevant; rather, the combined power of SKY tokens behind a proposal decides the winner.

**Delegating with SKY**
SKY holders can use their tokens to entrust their voting power to one or more delegates via the Sky Governance Voting portal or the Staking Engine of the Sky Protocol. Sky Ecosystem Governance delegates are chosen and approved by governance vote. Creating a new delegate account can only be done via the Sky Governance Voting Portal.

Delegates in receipt of token voting power can never directly access any SKY tokens delegated to them. Throughout the delegation process, users always own and are in control of their SKY tokens, and can change their delegate(s) at any time (subject to the Sky Protocol’s rules that prevent double voting or misuse of delegated voting power). Delegating voting power may be a useful option for SKY token holders who have limited time to allocate to the process and who want to save on the cost of gas involved in voting on their own.
`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'Does the MKR to SKY upgrade affect DAI and USDS?',
    answer: `No. DAI and USDS are not affected by the MKR to SKY upgrade. Eligible users of the [Sky.money web app](https://sky.money/) can continue to upgrade any amount of DAI to USDS (and revert USDS to DAI) at any time without a fee. Please note, however, that blockchain fees for using the Ethereum network apply when upgrading. Blockchain transaction fees are neither controlled, imposed nor received by Sky.money or the Sky Protocol. `,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'Are DAI and MKR going away?',
    answer: `No. Sky Ecosystem Governance has not indicated that the DAI and MKR will go away. You can continue to hold DAI exactly as you have in the past, or you can upgrade it to USDS, which may enable more uses than DAI. 

SKY is the technical and functional evolution of MKR, inheriting and extending the governance rights and functionalities previously held by MKR. It reflects the community’s desire to streamline governance, increase voter participation, and support the ecosystem’s long-term growth and scalability. 

MKR holders can upgrade their tokens to SKY at the rate of 1:24,000 (1 MKR = 24,000 SKY). For upgrade details, see the [MKR to SKY Upgrade Hub](https://upgrademkrtosky.sky.money). For the most current information on all things Sky, join the community conversations in the [Sky Forum](https://forum.sky.money/), [Sky Discord](https://discord.com/invite/skyecosystem), and [Sky Builder Discord](https://discord.gg/skybuilder), where the Sky community dives deep into Sky Stars, the Star Agent Framework and Sky Ecosystem Governance.`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'What is Sky Ecosystem governance, and how does it work?',
    answer: `Sky Ecosystem Governance relies on a decentralized, multi-faceted, detailed and transparent system of decision-making that includes discussion, polling and onchain voting to maintain the Sky Protocol and the ecosystem. Governance is shared among a broad and diversified community comprising individuals and entities from around the world who hold Sky Ecosystem Governance tokens, SKY. 

Any Sky Ecosystem governance token holder can propose changes and additions to the Sky 
Protocol and ecosystem. Examples of changes and additions to the Sky Protocol and ecosystem may include, but are not limited to, the following:

  * Technical changes and additions to the Sky Protocol

  * Changes and additions to rules and processes outside the technical layer of the Sky Protocol, such as governance procedures or compensation amounts for delegates.

  * Adjustments to all risk parameters. 



**Voting with SKY**
SKY is the sole governance token of the Sky Ecosystem. SKY token holders can use their SKY to participate directly in Sky Ecosystem Governance through a system of decentralized onchain voting, and/or to to transfer the voting power of their SKY tokens to a recognized delegate or a contract that they own. Voting with MKR is no longer possible.

**Direct Voting with SKY**
SKY holders participate directly in Sky Ecosystem Governance by supplying SKY to the Governance Contract of the Sky Protocol via the [Sky Governance Voting Portal](https://vote.sky.money/). Direct voting is weighted, meaning that voting power is proportional to the number of SKY tokens voters supply to that contract. For example, if 50 voters supply a total of 600 SKY in favor of proposal A, while 100 voters supply a total of 400 SKY in support of proposal B, then Proposal A would win with 60% of the vote. The number of people who voted for a proposal is irrelevant; rather, the combined power of SKY tokens behind a proposal decides the winner.

**Delegating with SKY**
SKY holders can use their tokens to entrust their voting power to a contract they own or one or more delegates via the Sky Governance Voting portal or the Staking Engine of the Sky Protocol (more on the Staking Engine below). Sky Ecosystem Governance delegates are chosen and approved by governance vote. Creating a new delegate account can only be done via the Sky Governance Voting Portal.

Delegates in receipt of token voting power can never directly access any SKY tokens delegated to them. Throughout the delegation process, users always own and are in control of their SKY tokens, and can change their delegate(s) at any time (subject to the Sky Protocol’s rules that prevent double voting or misuse of delegated voting power). 

Delegating voting power may be a useful option for SKY token holders who have limited time to allocate to the process and who want to save on the cost of gas involved in voting on their own.  

**Staking SKY to Delegate**
When you supply SKY tokens to the Staking Engine using the [Sky.money web app](https://sky.money/), you can access Staking Rewards and may also choose to create one or more positions, including positions that enable you to generate and borrow USDS against your supplied SKY and to delegate the voting power your SKY tokens provide. Here’s a brief overview:

  * **Access Rewards.** Supply SKY tokens to access Staking Rewards, initially in the form of USDS. Staking Reward rates are determined by Sky Ecosystem Governance through the process of decentralized onchain voting.

  * **Borrow.** Borrow USDS against your supplied SKY. You can exit your borrow position at any time and withdraw or pay back USDS whenever you would like. The USDS Borrow Rate and Debt Ceiling are determined by Sky Ecosystem Governance through the process of decentralized onchain voting. Your total debt increases each block according to the Borrow Rate.

  * **Delegate.** Transfer the voting power of your supplied SKY tokens to a recognized delegate or a contract that you own. Your chosen delegate can then participate in the Sky Ecosystem Governance voting process on your behalf. You can choose one delegate per position, meaning if you want to entrust your SKY to two different delegates using the Staking Engine, you will need to create two separate positions.     

You may exit your Staking positions at any time; no exit fee applies. The Staking Reward rate and Borrow rate are determined by Sky Ecosystem Governance through the process of decentralized onchain voting. Your SKY, as well as any Staking Rewards that you accumulate, are supplied to a non-custodial smart contract, such that no intermediary ever takes custody of those tokens. With Sky, you always remain in control of your assets.

For a deeper dive into the facets and checks and balances of governance, please refer to the [Sky Forum](https://forum.sky.money/), the [Sky Governance Voting Portal](https://vote.sky.money/) and the [Sky Atlas](https://sky-atlas.powerhouse.io/).`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'Can I participate in Sky Ecosystem Governance using both MKR and SKY?',
    answer: `No. SKY is the sole governance token of the Sky Ecosystem and the upgrade of MKR. Only SKY token holders can use their SKY to participate directly in Sky Ecosystem Governance through a system of decentralized onchain voting, and/or to transfer the voting power of their SKY tokens to a recognized delegate or a contract that they own. Voting with MKR is no longer possible.`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'What is Spark?',
    answer: `[Spark](https://spark.fi/) is the first Star Agent (Star) focused on decentralized finance (DeFi) innovation. It is a gateway to the decentralized, non-custodial Sky Protocol and, like all Stars, an independent decentralized project within the larger Sky Ecosystem. For detailed information on Spark’s offerings and governance, review its [documentation](https://docs.spark.fi/). `,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'What is the Spark Liquidity Layer?',
    answer: `The Spark Liquidity Layer is a solution that utilizes smart contracts to deploy, withdraw and balance stablecoin liquidity across blockchains on demand. It distributes USDS, a native stablecoin of the decentralized Sky Protocol, and sUSDS, a native savings token for eligible users. 
When you supply USDS to the Sky Savings Rate module, you access the Sky Savings Rate and receive sUSDS tokens. These sUSDS tokens serve as a digital record of your USDS interaction with the module and any value accrued to your position. Note that some Sky Protocol features are not available in selected jurisdictions.
In short, the Spark Liquidity Layer dynamically balances the mix of a highly liquid stablecoin—USDC— with a savings generating stablecoin—sUSDS—across networks in real time. This ensures liquidity is provided precisely when users need it rather than being locked idly across networks. For more information, see [Spark Documentation](https://docs.spark.fi/user-guides/spark-liquidity-layer).`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'What is the Sky Atlas?',
    answer: `The [Sky Atlas](https://sky-atlas.powerhouse.io/) is the definitive rulebook of the Sky Ecosystem, as determined by Sky Ecosystem Governance.  It is a Sky artifact—a data structure encompassing Sky documents—which exists to stabilize and streamline the governance process to serve the evolving needs of the ecosystem. The Atlas is a partially immutable work in progress that will continue to be refined through an improvement proposal and decentralized voting framework until Sky Ecosystem Governance determines that modifications are no longer necessary. `,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'What is the difference between direct voting and delegating voting power?',
    answer: `With SKY tokens comes voting power. Every SKY holder can participate directly in Sky Ecosystem Governance through a system of decentralized onchain voting or  transfer the voting power of their SKY tokens to a recognized delegate or a contract that they own. Sky Ecosystem Governance delegates are chosen and approved by governance vote. Creating a new delegate account can only be done via the [Sky Governance Voting Portal](https://vote.sky.money/).

**Direct Voting with SKY**

SKY holders participate directly in Sky Ecosystem Governance by supplying SKY to the Governance Contract of the Sky Protocol via the Sky Governance Voting Portal. Direct voting is weighted, meaning that voting power is proportional to the number of SKY tokens voters supply to that contract. For example, if 50 voters supply a total of 600 SKY in favor of proposal A, while 100 voters supply a total of 400 SKY in support of proposal B, then Proposal A would win with 60% of the vote. The number of people who voted for a proposal is irrelevant; rather, the combined power of SKY tokens behind a proposal decides the winner.

**Delegating with SKY**

SKY holders can use their tokens to entrust their voting power to one or more delegates via the Sky Governance Voting portal or they can use the [Sky.money web app](https://app.sky.money/) to delegate via the Staking Engine of the Sky Protocol. 

Delegates in receipt of token voting power can never directly access any SKY tokens delegated to them. Throughout the delegation process, users always own and are in control of their SKY tokens, and can change their delegate(s) at any time (subject to the Sky Protocol’s rules that prevent double voting or misuse of delegated voting power). Delegating voting power may be a useful option for SKY token holders who have limited time to allocate to the process and who want to save on the cost of gas involved in voting on their own.  

For a deep dive into Sky Ecosystem Governance, please refer to the [Sky Atlas](https://sky-atlas.powerhouse.io/), the [Sky Governance Voting Portal](https://vote.sky.money/) and the [Sky Forum](https://forum.sky.money/).`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'What is onchain voting?',
    answer: `Onchain voting is a method used by some decentralized projects—Sky included—to facilitate decision-making and governance processes. This type of voting occurs directly on the blockchain, ensuring a transparent and secure democratic voting process. Onchain voting empowers SKY token holders to have a direct impact on the development and operation of the Sky Protocol.

For a deep dive into Sky Ecosystem Governance, please refer to the [Sky Atlas](https://sky-atlas.powerhouse.io/), the [Sky Governance Voting Portal](https://vote.sky.money/) and the [Sky Forum](https://forum.sky.money/).`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'Where can I go for technical help or to ask questions that aren’t answered here?',
    answer: `For answers to technical questions about the Sky Protocol, please refer to the [Developer Documentation](https://developers.sky.money/). 

You may also reach out to community members with general questions on X ([@SkyEcosystem](https://x.com/SkyEcosystem)) and on [Sky Discord](https://discord.com/invite/skyecosystem).`,
    categories: ['Sky Protocol & Ecosystem']
  }
];
