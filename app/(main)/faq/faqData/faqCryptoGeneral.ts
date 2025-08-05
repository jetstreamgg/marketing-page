import type { FAQItem } from './types';

export const cryptoGeneral: FAQItem[] = [
  {
    question: 'What is cryptocurrency?',
    answer: `Cryptocurrency, also referred to as “crypto,” is a type of digital currency that uses cryptography to help improve the security and overall user control of associated transactions. Cryptography is like a secret code that embraces user pseudonymity while ensuring authentic and irreversible transactions.

There are thousands of cryptocurrencies in circulation, and they vary in purpose, functionality and value. In fact, many experience price volatility over very short periods of time. However, certain cryptocurrencies called stablecoins generally fluctuate to lesser degrees, as they are designed to attempt to maintain a stable value.

Stablecoins are typically pegged or soft-pegged to the value of a fiat, or government-issued, currency, such as the U.S. dollar or the euro, and are backed either by fiat currencies, commodities (real-world assets) or other cryptocurrencies held in reserves, the presence of which is intended to make them more stable mediums of exchange.

For more details on this and other risks associated with cryptocurrencies, please review the [User Risk Documentation](https://docs.sky.money/user-risks).`,
    categories: ['Crypto (General)']
  },
  {
    question: 'What are the benefits of cryptocurrency?',
    answer: `There are thousands of cryptocurrencies in circulation, and they vary in purpose, functionality and value. Some of the benefits crypto can offer are:

- **Inclusivity.** People in many regions of the world, regardless of their economic standing, can use crypto to transact freely and to access decentralized financial (DeFi) services that let them retain complete control of their assets.

- **Availability.** Many cryptocurrencies are easily exchanged on an expanding variety of both decentralized exchanges (DEXs) and centralized exchanges (CEXs).

- **Speed and affordability.** Users can transfer crypto across the globe within seconds and at a fraction of the cost of traditional wire services.

- **Transparency.** On public blockchains, such as Ethereum, all transactions and smart contracts are publicly viewable. This helps promote trust and accountability.

- **Privacy without secrecy.** While public blockchains are transparent, they don’t reveal your real-world identity in a straightforward manner unless you choose to expose that information. Instead, they reveal your wallet address(es) and transaction history. Please note, however, that your identity can be tied to your wallet address using IP addresses or other information you may not "choose" to disclose.

- **Immutability.** Once a transaction is recorded on a blockchain, it cannot be altered, which reinforces the integrity of the transaction data.

- **Security.** The code behind DeFi protocols is often open source, allowing for public visibility and analysis. This transparency _may_ enable vulnerabilities to be identified and addressed by a global community of open source contributors. Over time, publicly available and largely unchanged code _could_ provide additional security assurances. Additionally, some DeFi protocols _may_ undergo audits by reputable firms within the industry, which can contribute to enhanced security, though the extent and effectiveness of such measures may vary.

- **Round-the-clock accessibility.** Blockchains operate 24/7.`,
    categories: ['Crypto (General)']
  },
  {
    question: 'How do I get cryptocurrency?',
    answer: `Start your cryptocurrency journey by learning about the various types of crypto and how they work, the underlying technology, associated risks, and any regulations regarding crypto in your region. Taking time to understand these fundamentals and the basics of crypto exchanges will help you make more informed decisions about cryptocurrency.

There are two main types of crypto exchanges—decentralized exchanges (DEXs) and centralized exchanges (CEXs). A DEX is a peer-to-peer marketplace where users can buy, sell and trade cryptocurrencies directly from their own crypto wallets without having to share identifying information. No financial institution or other third party is needed to facilitate DEX transactions. A CEX is also a marketplace where users buy, sell and trade cryptocurrencies, but the CEX or a third party often facilitates trades, meaning it often acts as a middleman between buyers and sellers. CEXs often require users to create an account and verify their identity.

For risks associated with cryptocurrencies, please review the [User Risk Documentation](https://docs.sky.money/user-risks).`,
    categories: ['Crypto (General)']
  },
  {
    question: 'How is cryptography used with cryptocurrency?',
    answer: `Cryptography is the practice of encrypting information in an effort to keep it safe and hidden from prying eyes. Without cryptography there would be no cryptocurrency.

Crypto wallets work using a pair of cryptographic keys—one public, the other private. Public and private keys are long, unique series of alphanumeric characters used together to encrypt data to help to ensure the authenticity and verifiability of crypto transactions.

The public key, which can be compared to a traditional bank account number, is used to receive assets. Note the distinction between a public key and a public address (explained below). The private key, a long string of randomly generated letters and numbers, can be compared to a traditional bank account password, is unique to a single address, and is used to sign transactions and prove ownership of a digital wallet. A private key should be stored safely and kept secret to avoid the inadvertent loss of, or access to, one’s digital assets, which may result from someone else gaining access to the private key and thus controlling those assets as a result.

Typically, when initializing a new wallet for a user, the wallet software generates a “seed phrase,” which is a sequence of 12, 18, or 24 seemingly random words used as a mnemonic device to access the underlying private key(s) related to that wallet. The seed phrase can be used to recover the public and private keys if the public or private keys are lost or forgotten. Importantly, anyone who has access to a user’s seed phrase or private keys can easily gain access to that user’s crypto assets.

Because a public key is made up of a long, unique series of alphanumeric characters, it is usually compressed into a public address. Your public address is the shortened version of the public key, which can be freely shared with others so they can send crypto to that address.`,
    categories: ['Crypto (General)']
  },
  {
    question: 'Is cryptocurrency risky?',
    answer: `For risks associated with cryptocurrencies, please review the [User Risk Documentation](https://docs.sky.money/user-risks).`,
    categories: ['Crypto (General)']
  },
  {
    question: 'What is a decentralized exchange?',
    answer: `A decentralized exchange (DEX) is a peer-to-peer marketplace made up of smart contracts where users can buy, sell and trade cryptocurrencies without having to share any personal information. No financial institution or third party is needed to facilitate DEX transactions. An example of a DEX is [CoW Swap](https://swap.cow.fi/#/1/swap/WETH).

DEX users interact directly with smart contracts using crypto wallets that are secured by private keys. Because DEXs are non-custodial, users are fully responsible for their own assets. That means if you lose access to your private keys, your assets are irrecuperable. Additionally, because no bank or financial institution is involved in facilitating DEX transactions, a DEX can’t be used to trade fiat currency for cryptocurrency (or vice versa).

Not all DEXs operate in the same way. To buy crypto on a specific DEX may require knowledge of that DEXs functions and/or underlying code base.`,
    categories: ['Crypto (General)']
  },
  {
    question: 'What is a centralized exchange?',
    answer: `A centralized exchange (CEX) is a marketplace where users create an account by providing identifying information and documentation to a centralized entity in order to buy, sell and trade cryptocurrencies. Importantly, a CEX facilitates exchanges, meaning it acts as an intermediary between buyers and sellers. Some CEXs also require users to opt-in to one or more custodial wallets rather than use a private, non-custodial wallet. With a custodial wallet, the centralized entity, not the user, is in control of safeguarding assets and the wallet’s private keys. In that sense, when using a CEX, users trade privacy for simplicity. Users can, however, transfer their assets from a custodial wallet to their own non-custodial wallet if they wish to do so.

Centralized exchanges typically offer customer support through their websites, and may offer some fund recovery options in specific situations. For example, if you lose access to your CEX account but can verify your identity, a process might be employed to help you regain access.

Generally, CEXs operate in similar ways, but to learn how to use a specific CEX, obtain information from the exchange directly. Your use of any centralized exchange will likely be subject to that exchange's terms of service and applicable regulatory requirements.`,
    categories: ['Crypto (General)']
  },
  {
    question: 'Define exchange rate',
    answer: `Exchange rate refers to the price of one cryptocurrency relative to the price of another cryptocurrency or fiat currency at any given moment. Cryptocurrency exchange rates may be subject to price volatility and may fluctuate based on various factors.`,
    categories: ['Crypto (General)']
  },
  {
    question: 'Why do token prices vary between different DEXs and CEXs?',
    answer: `Token prices vary between different exchanges due to key market dynamics, such as:

- **Market Structure.** DEXs typically use automated market makers (AMMs), which price based on algorithms. CEXs typically use order books, which price based on actual bids/asks. The different mechanisms can lead to different price discoveries.

- **Market Segmentation.** Not all traders can access all exchanges for various reasons, including jurisdiction restrictions and Know Your Customer (KYC) requirements. Some exchanges may have more institutional flow versus retail flow, and different user bases can lead to different price dynamics.

- **Market Making and Liquidity.** Every exchange has its own separate liquidity pools and market makers. Different depths of liquidity pools affect how much the prices impact trades. Market makers provide buy and sell quotes in a market and attempt to profit from the spread between the bid and ask prices. Market makers may also help ensure smooth trading by absorbing temporary imbalances between buyers and sellers. Some exchanges may have tighter spreads due to better market making.

- **Arbitrage Opportunities.** Price differences may create profit opportunities for traders. Arbitrageurs buy on cheaper exchanges and sell on more expensive ones. That process helps prices converge, but differences persist due to transaction costs (e.g., gas and trading fees), execution speed, capital requirements and the technical complexity of the arbitrage.`,
    categories: ['Crypto (General)']
  },
  {
    question: "What's the relationship between TVL and token price?",
    answer: `TVL (Total Value Locked) generally represents the total value of cryptocurrency assets that are supplied to a protocol or reported as the total value locked in a contract representing a protocol’s features (e.g., a lending contract or a savings contract).

TVL is commonly measured in fiat currency, typically US dollars, not in a protocol’s native token. For example, If a protocol has 100 ETH locked, and ETH is worth $4,000, then the calculated TVL is $400,000. If the price of ETH falls or rises, the TVL fluctuates accordingly.`,
    categories: ['Crypto (General)']
  },
  {
    question: 'What is decentralized finance?',
    answer: `Decentralized finance (DeFi) refers to a sector of the cryptocurrency economy that aims to provide open and permissionless financial applications, products and services built on and accessed via blockchains. The term ‘permissionless’ in this context generally means that users do not need permission to join an open blockchain network, and are in complete and direct control of their assets and financial activities. ‘Open’ speaks to the complete transparency of public blockchains.

DeFi applications typically aim to enable fast, borderless transactions, via self-executing, autonomous smart contracts, often at a fraction of the cost of traditional wire services, as a result of being disintermediated (in direct control of their activities).

Finally, DeFi offerings are often managed by decentralized ecosystems that operate with the help of rules and agreements embedded in the smart contracts. Smart contracts are programs written in computer code and deployed to a blockchain. Ecosystem projects are controlled not by one person or entity, but by a global community of ecosystem participants, subject to their specific terms and technical limitations.`,
    categories: ['Crypto (General)']
  },
  {
    question: 'What is a DeFi primitive?',
    answer: `A DeFi (decentralized finance) primitive generally refers to a core function within a DeFi ecosystem that can be used as a building block for more complex financial products. Common examples include lending protocols, savings products and decentralized exchanges (DEXs).

**What is MEV?**

Maximal Extractable Value (MEV) refers to the profit extracted by ordering, including, or excluding transactions within blocks that are subsequently validated. Generally, MEV is an incentive mechanism in permissionless systems, rewarding those who optimize the transaction validation process.`,
    categories: ['Crypto (General)']
  },
  {
    question: 'What is impermanent loss?',
    answer: `Impermanent loss happens when you provide assets (trading pairs) to a liquidity pool and the prices of those assets change relative to each other, resulting in rebalancing that might ultimately mean the value of your combined liquidity is less than if you had simply held the assets separately. The occurrence is called "impermanent" because the losses are only realized when you withdraw the separate balances from the pool.`,
    categories: ['Crypto (General)']
  },
  {
    question: 'What is a blockchain?',
    answer: `Crypto transactions occur on networks (blockchains) powered by blockchain technology, which transcend borders. A permissionless blockchain is a distributed ledger ( list of transactions) that anyone can view and verify. In contrast, permissioned or private blockchains exist where transactions are not publicly visible to everyone. These blockchains are typically used by enterprises, governments, and organizations that require privacy. There are also privacy-enhanced blockchains, whereby transactions are encrypted or use advanced cryptographic techniques to hide details.

Generally, blockchain transactions are immutable, meaning that once executed, they are typically irreversible. While Bitcoin and Ethereum are among the most well known blockchain networks, there are many others.

There are generally two types of blockchains—public and private. Private blockchains, also called “trusted” or "permissioned” blockchains, are typically designed to meet the specific needs of a project or organization; therefore, they are closed to all but authorized users. Public blockchains are just that—open and accessible by all.

Like traditional accounting ledgers, blockchain networks keep a record of transactions; unlike traditional ledgers, permissionless blockchain networks are open, meaning that anyone, anywhere can view blockchain public transactions at any time by using a blockchain explorer. Blockchain explorers are pieces of software that allow anyone to see blockchain data and activity that is public. Etherscan is the public blockchain explorer for the Ethereum network.`,
    categories: ['Crypto (General)']
  },
  {
    question: 'What is a blockchain bridge?',
    answer: `A blockchain bridge is a protocol or platform that allows users to transact data and digital assets between different blockchains.

For example, if you have USDS, a native stablecoin of the Sky Protocol, which is built on the Ethereum blockchain, and you want to use it on another blockchain, you might use a bridge to make that transfer. The bridge infrastructure connects the two blockchains, handling the ‘messaging’ that tells the destination chain that the USDS tokens are locked in a smart contract on Ethereum, and it’s safe to generate the equivalent amount. Importantly, whether you receive a native version of USDS on the destination chain or an equivalent amount of a wrapped version depends on the destination chain’s implementation.`,
    categories: ['Crypto (General)']
  },
  {
    question: 'What is blockchain data verification?',
    answer: `Data verification is crucial to a blockchain network, as it confirms that all transactions added to the blockchain are valid. Verification prevents double-spending, helping to ensure the integrity of a chain.

Blockchain data is verified using a network of stakeholders called nodes, miners or validators. At the risk of oversimplifying a complicated process, nodes make sure that if you want to send $5 worth of a specific cryptocurrency to someone, you actually have $5 worth of that crypto in your possession. They also make sure that you follow the rules of the blockchain and don’t attempt to spend that $5 more than once (i.e., the prevention of a concept referred to as “double-spend”). In addition to making sure all transaction data is processed properly, nodes all have exact copies of the blockchain, which enables them to maintain all blockchain data synchronously (at the same time).

Note that both public and private blockchain networks use nodes to verify transactions; however, with private blockchains, the nodes are permissioned nodes that are authorized/pre-approved by the entity running the permissioned chain to participate in verifying the transactions.`,
    categories: ['Crypto (General)']
  },
  {
    question: 'What is a blockchain transaction (gas) fee?',
    answer: `Every time you engage in transactions with your digital assets (e.g., buy, sell, trade or transfer them) you will likely pay a transaction fee—called a gas fee—for using the blockchain network. That fee is neither controlled, imposed nor received by the Sky.money web app or the Sky Protocol; it is calculated based on current network demand and the amount of gas (i.e., units of compute resources) required to process your transaction. On the Ethereum blockchain, gas fees are paid in ETH, the native currency of the blockchain. So, be sure to have ETH in your wallet anytime you transact using the Sky Protocol.`,
    categories: ['Crypto (General)']
  },
  {
    question: 'What are the characteristics of public blockchain networks?',
    answer: `Blockchain networks are decentralized accounting ledgers, of which there are two types—public and private. Private blockchains, also called “trusted” or "permissioned” blockchains, are designed to meet the specific needs of a project or organization, therefore they are closed to all but authorised users. Public blockchains are just that—open and accessible by all, meaning that anyone, anywhere can view the blockchain transactions at any time by using a blockchain explorer. Etherscan is the blockchain explorer for the Ethereum network.

The unique characteristics of public blockchains are as follows:

- **Accessibility.** Anyone with internet access can participate in a public blockchain network, 24-7.

- **Decentralization.** Public blockchains are decentralized. No single entity controls public networks, which helps to reduce—not eliminate—the risk of fraud or manipulation.

- **Speed and affordability.** The lack of an intermediary in public blockchains increases transaction speed and reduces cost.

- **Mechanization.** Smart contracts—programmed functionalities written in computer code—self-execute, enabling the automation of complex financial transactions and operations.

- **Security.** Data is stored across a network of computers, making information difficult to tamper with.

- **Transparency.** All transactions on permissionless blockchains are visible to the public; therefore, anyone in any region with an internet connection can track blockchain activity.

- **Trustlessness.** decentralized blockchain technology ensures that all transactions are accurate, without having to put trust in a centralized third party to verify their accuracy.

- **Immutability.** Generally, blockchain transactions are immutable, meaning that once executed, they are irreversible.

- **Ingenuity.** In the same way blockchain networks have opened the door to decentralized finance (DeFi) they can open the door to apps and services not yet conceived.

Due to the characteristics listed above, blockchain networks may allow for worldwide coordination and collaboration without intermediaries. They add an ownership layer to the internet, which not only enables peer-to-peer finance, but also allows for communities to coordinate and self-manage through ecosystem governance processes using smart contracts and onchain incentives.`,
    categories: ['Crypto (General)']
  },
  {
    question: 'What are smart contracts?',
    answer: `Smart contracts are agreements written in computer code and deployed to a blockchain, where they self-execute automatically when called upon. No centralized entity or intermediary is needed to complete the steps laid out in those agreements. Smart contacts are used in various sectors, but they are key to the decentralized finance (DeFi) sector, as they are used to execute everything from simple transfers and trades to the governance of decentralized ecosystems in a peer-to-peer or peer-to-contract manner.

Smart contracts work a lot like vending machines. A vending machine automatically provides a product once you feed it a coin and choose the product you want. The machine does not call someone at the vending machine company to get permission or further instructions. Similarly, a smart contract automatically provides a specific output (O) when prompted by a specific input (I). For example, a smart contract deployed to serve an ecosystem can send money to contractors (O) on the first of every month (I), without any help or interference from a payroll manager, bank or other financial institution.

While most smart contracts are open source (transparent), most are immutable in theory, meaning no one can change them once they’re deployed. In DeFi ecosystems, including the Sky Ecosystem, smart contract changes can only be made through a system of decentralized community governance and onchain voting processes.

The importance of smart contracts to decentralized governance can’t be overstated, as the contracts related to voting enable more efficient and effective technical, economic and administrative decision-making by a global community of ecosystem participants.`,
    categories: ['Crypto (General)']
  },
  {
    question: 'How are smart contracts being explored across different sectors?',
    answer: `Smart contracts are programs written in computer code and deployed to a blockchain. They can execute automatically when specific conditions are met. These programs aim to reduce or eliminate the need for traditional intermediaries in certain processes. While smart contracts are frequently associated with the decentralized finance (DeFi) sector, various industries are exploring their potential applications, including:

- **Traditional Finance (TradFi):** Some financial institutions are exploring smart contracts to potentially offer blockchain-based products and services.

- **Gaming:** Smart contracts may be used to manage digital asset ownership, facilitate in-game transactions, and automate reward distributions, subject to specific game implementations.

- **Real Estate:** Organizations are investigating smart contract applications for property transactions, including lease automation, property financing, and asset tokenization, though regulatory and legal requirements vary by jurisdiction.

- **Healthcare:** Smart contracts could potentially assist with healthcare data management and HIPAA compliance. Proposed applications include secure sharing of patient records, claims processing, and supply chain management, subject to applicable regulations and security requirements.

- **Insurance:** Smart contracts may be used to automate certain operational tasks and claims processing, within applicable regulatory frameworks.

- **Government:** Some governments are exploring blockchain technology for data management and security purposes, though implementation faces various regulatory and technical considerations.`,
    categories: ['Crypto (General)']
  },
  {
    question: 'Are smart contracts secure?',
    answer: `Smart contracts are agreements written in computer code and deployed to a blockchain, where they self-execute automatically when called upon. No centralized entity or intermediary is needed to complete the steps laid out in those agreements. Smart contacts must be written correctly in order to work as expected. If there's a coding error in a smart contract, it might not perform as it should. Any vulnerabilities in a smart contract could cause security issues. Even meticulously written smart contracts can have vulnerabilities, which can manifest through complex interactions and economic attack vectors. For example, hackers might find errors and use them to their advantage, causing harm to users. Smart contract audits can help mitigate risks caused by developer error.

For details on the risks associated with smart contracts, please review the [User Risk Documentation](https://docs.sky.money/user-risks).`,
    categories: ['Crypto (General)']
  },
  {
    question: 'What are stablecoins, and how do they differ from other types of cryptocurrencies?',
    answer: `Stablecoins are cryptocurrencies that implement various mechanisms in an attempt to maintain a stable value. They are typically pegged or soft-pegged to the value of a fiat (government-issued) currency, such as the U.S. dollar or the euro. Different types of stablecoins may be backed either by fiat currencies, commodities (real-world assets) or other cryptocurrencies held in reserves, though the specific backing mechanisms and their effectiveness can vary significantly. The presence of these backing mechanisms is intended to support price stability, but does not guarantee it.

For details on the risks associated with stablecoins, please review the [User Risk Documentation](https://docs.sky.money/user-risks).`,
    categories: ['Crypto (General)']
  },
  {
    question: 'What role do stablecoins play in the DeFI ecosystem?',
    answer: `Stablecoins provide the foundation on which much of decentralized finance (DeFi) functions, and are essential to increasing DeFi adoption worldwide.They are typically pegged to the value of a fiat (government-issued) currency, such as the U.S. dollar or the euro.

Stablecoins are commonly used for:

- **Peer-to-peer, cross-border transfers**. Stablecoin (and other crypto) holders can send their tokens directly to anyone, anywhere, using networks powered by blockchain technology.

- **Trading.** Users can buy, sell and trade crypto using a centralized exchange (CEX), which acts as a trusted middleman and requires users to verify their identity, or a decentralized exchange (DEX), which allows users to trade directly from their own crypto wallets without sharing personal information.

  Sky Protocol tokens are available to trade on crypto exchanges that list them. Eligible users of the Sky.money web app can access the non-custodial Sky Protocol to trade some SKY on Ethereum Mainnet via an API integration with the third-party decentralized exchange (DEX) [CoW Swap](https://swap.cow.fi/#/1/swap/WETH).

- **Saving.** Some people use crypto as a way to save. For example, eligible users of the Sky.money web app can access the Sky Protocol to supply USDS to the Sky Savings Rate module to access the Sky Savings Rate and accumulate additional USDS over time.

- **Borrowing.** Some DeFi protocols allow users to borrow stablecoins using their crypto as collateral. Eligible users of the Sky.money web app can borrow USDS against SKY that they supply to the Staking Engine of the Sky Protocol. Additionally, [Spark](https://spark.fi/), a gateway to the Sky Protocol and the first Star Agent (Star) in the Sky Ecosystem, enables users to generate and borrow USDS when supplying certain types of crypto assets to its Borrow module. Spark, like all Stars, is a type of SubDAO, an independent decentralized project within the larger Sky Ecosystem. For more information regarding Spark, see its [detailed documentation](https://docs.spark.fi/).

- **Lending.** Some DeFi protocols enable users to supply crypto to a smart contract that acts as a pool from which others can borrow. Those crypto suppliers become liquidity providers, who earn rewards in the form of liquidity pool tokens (LPTs). The LPTs they receive represent their share of assets in the pool or a percentage of fees charged to those accessing the pool tokens.

- **Accessing Rewards.** Some people use crypto to access rewards without giving up control of their assets. For example, eligible Sky.money web app users can tap into the Sky Protocol to access Sky Tokens Rewards when they supply USDS to the Sky Token Rewards module. When eligible users supply SKY to the Staking Engine of the Protocol, they can access rewards in the form of USDS or, eventually, upon approval by Sky Ecosystem Governance Sky Star tokens

- **Risk management**. Stablecoins may offer a safe haven during market turbulence, allowing traders to quickly exit volatile positions without leaving the crypto ecosystem.

- **Cross-project integration**: Stablecoins enable seamless value transfer between different DeFi protocols and applications, creating interoperability across the ecosystem.

Stablecoins typically enable DeFi growth by:

- **Reducing barriers to entry for Traditional Finance (TradFi) users**: The fact that decentralized stablecoins are soft-pegged to the U. S. dollar makes it easier for newcomers to understand and use DeFi without first mastering cryptocurrency price dynamics.

- **Enabling complex financial products and strategies**: The stable value of stablecoins allows for the creation of predictable derivatives, synthetic assets and structured products.

- **Supporting the growth of decentralized lending markets**: Stablecoins provide the stable foundation needed for lending protocols to perhaps offer reliable savings rates and borrowing terms.

- **Facilitating price stability in exchanges**: Stablecoins reduce overall market volatility and improve price discovery mechanisms in exchanges.

- **Creating bridges between TradFi and DeFi**: Stablecoins can serve as a familiar entry and exit point between the traditional financial system and decentralized applications.

With the Sky.money web app, you always remain in control of your assets. You alone are responsible for managing your private keys and digital wallet access.`,
    categories: ['Crypto (General)']
  },
  {
    question: 'What is the difference between a centralized and decentralized stablecoin?',
    answer: `A centralized stablecoin, like USDC, is one that is issued and managed by a centralized entity, such as a bank or FinTech company. A decentralized stablecoin, such as USDS, is not issued or controlled by a centralized entity. Instead, a community of users participate in a transparent, decentralized system of governance that can influence how the underlying protocol is generated and managed, subject to the protocol's technical parameters and limitations.`,
    categories: ['Crypto (General)']
  },
  {
    question: "Explain the different mechanisms used to maintain the stability of a stablecoin's value.",
    answer: `Stablecoins are designed to attempt to maintain a stable value. They are typically pegged to the value of a fiat (government-issued) currency, such as the U.S. dollar or the euro. Stablecoins are backed either by fiat currencies, commodities (real-world assets) or other cryptocurrencies held in reserves, the presence of which is intended to make them more stable mediums of exchange. Stablecoins are most often used to make transfers, especially cross-border transfers, using networks powered by blockchain technology.

There are generally two broad categories of stablecoin structures:

- **Centralized stablecoins.** Centralized stablecoins are typically issued and managed by a centralized entity, such as a regulated financial institution. These entities generally claim to maintain reserves of backing assets.

- **Decentralized stablecoins.** Decentralized stablecoins typically operate through smart contracts and community-driven governance systems, where token holders may participate in decisions about the protocol's operation.

In order for a stablecoin to maintain its value over time, a method or mechanism that works to demonstrate long-term sustainability is typically employed. The choice of mechanism can depend on whether a stablecoin is centralized or decentralized.

Many stablecoins maintain their value through a process called asset-backed collateralization. These stablecoins aim to maintain reserves of assets intended to back the tokens in circulation. The actual value and composition of these reserves may vary and typically depend on the specific project's implementation.

Often, for stablecoins that are crypto-collateralized, overcollateralization combined with algorithmic methods, in the form of smart contracts, is used. Overcollateralization means that the total value of the collateral that backs a specific stablecoin must always be higher than the total value of every one of those stablecoins in circulation. For example, if a protocol’s governance community decides that its stablecoin must be overcollateralized by 20%, and the value of all its stablecoins in circulation is 1M, the collateral held in reserve must be worth at least $1.2M.

Other types of stability mechanisms include the following:

- **Algorithmic:** Algorithmic stablecoins maintain stability using algorithms and smart contracts to automatically adjust their supply based on demand. For example, if the market price of an algorithmic stablecoin is above its target value, a smart contract increases the supply of the stablecoin to decrease its price. If the market price is below its target value, a smart contract decreases the supply of the stablecoin to increase its price.

- **Real-world asset (RWA):** RWA-collateralized stablecoins are backed by tangible, physical assets, including gold, government bonds, real estate and artwork.

- **Hybrid:** Hybrid stablecoins use a mix of methods to maintain stability.`,
    categories: ['Crypto (General)']
  },
  {
    question: 'What are crypto-collateralized stablecoins, and how do they achieve stability?',
    answer: `A crypto-collateralized stablecoin is a type of decentralized digital currency that is typically soft-pegged to the value of a fiat currency, such as the U.S. dollar, and backed (collateralized) by other cryptocurrencies locked in a reserve or in a smart contract sometimes called a cryptocurrency vault. The stability mechanisms behind crypto-collateralized stablecoins generally include overcollateralization and algorithmic methods, though these mechanisms do not guarantee a stable value. Three examples of crypto collateral that back USDS are ETH, wBTC and USDC.`,
    categories: ['Crypto (General)']
  },
  {
    question: 'What happens when the value of the collateral backing a stablecoin falls significantly?',
    answer: `The collateral that backs a stablecoin is what allows it to be a trusted store of value and stable medium of exchange. If the value of that collateral declines significantly, the stablecoin may become insufficiently backed and drop in value below its peg. Stablecoin values often deviate only marginally from their target price; however, significant market events can lead to larger price movements. Typically, minor fluctuations in the value of collateral do not cause immediate instability. However, in cases of substantial collateral value decline, market participants may react by selling their holdings, which could further impact prices. Moreover, if a de-pegged stablecoin has a high market cap, meaning that a lot of people depend on its stability, the sell-off could cause fear to spread regarding the stability of other stablecoins, and lead to off-loading of stable assets throughout the market.

Importantly, stablecoins that aren’t backed by collateral can also de-peg, which in some cases has had an impact on the broader stablecoin market, including those that are collateral-backed. For example, in May 2022, the price of Tether, a centralized stablecoin that was stated to be fully backed by a reserve of assets, fell below its $1 peg after the value of another stable asset, TerraUSD (UST), an algorithmic stablecoin, dropped dramatically. Two days after the large drop in the value of TerraUSD, the value of its sister token, Luna, which was supposed to help keep UST stable, also dramatically dropped. Together, these events sparked fear in the stablecoin market, which led some Tether holders to begin to sell-off their Tether. Because Tether was the world’s largest stablecoin by market cap at the time, the de-pegging of both stablecoins caused a ripple effect throughout the market.`,
    categories: ['Crypto (General)']
  },
  {
    question: 'What is an example of a crypto-collateralized stablecoin?',
    answer: `A crypto-collateralized stablecoin is a type of decentralized digital currency that is typically soft-pegged to the value of a fiat currency, such as the U.S. dollar, and backed (collateralized) by other cryptocurrencies locked in a reserve or in a smart contract, which may sometimes be referred to as a cryptocurrency vault.

To maintain stability of crypto-collateralized stablecoins, algorithms and overcollateralization are probably the most widely used mechanisms. Examples of crypto-collateralized stablecoins are USDS and DAI. USDS powers the Sky Ecosystem.`,
    categories: ['Crypto (General)']
  },
  {
    question: 'What is a cryptocurrency wallet, and how do I get one?',
    answer: `A crypto wallet is a tool, typically in the form of software, that enables you to easily view a list of your digital assets, manage them, and help safeguard them. Note that with crypto wallets, your assets are recorded on a blockchain and only visible in the wallet—not stored there.

Your non-custodial wallet holds the private keys needed to sign crypto transactions, and gives you full control over those private keys, which are essential for accessing and managing your crypto. Unlike custodial wallets, where a third party holds the private keys, non-custodial wallets allow users to be the sole custodian of their keys. This means that only the user has the ability to sign transactions, making it more secure and private; however, it also means that if a user loses their private key or recovery phrase, they may permanently lose access to their assets. Because all crypto assets exist on a public or private blockchain, access to them depends on control of the corresponding private keys.

Non-custodial wallets can be software-based, like mobile apps, or hardware devices designed for enhanced security. There are several types of crypto wallets and no limit to the number of wallets you can own. Two popular software-based wallets are Metamask and Rainbow.

**What is Metamask?**

Metamask is a popular non-custodial software-based crypto wallet that allows users to connect to access decentralized finance (DeFi) services; buy and sell, trade, bridge, send, and receive tokens; and connect to blockchain networks directly from their web browser or mobile app. Metamask is used primarily with the Ethereum blockchain and Ethereum Virtual Machine (EVM) chains, but users can also access other networks using the wallet.

**What is the Rainbow Wallet?**

Rainbow Wallet is a popular non-custodial software-based crypto wallet designed to allow users to manage Ethereum-based assets, including tokens and NFTs, directly from their web browser or mobile app. With Rainbow Wallet, you can send, swap, and bridge assets. Rainbow Wallet supports Ethereum and other EVM chains including Polygon, Arbitrum, and Optimism.

**What are examples of software-based wallets?**

Metamask and Rainbow are examples of popular non-custodial software-based crypto wallets.`,
    categories: ['Crypto (General)']
  },
  {
    question: 'How do crypto wallets work?',
    answer: `Typical crypto wallets operate using a pair of cryptographic keys—one public, the other private. These keys are essential components of what is known as “public key cryptography,” the core concept underlying wallet security and actions.

Typically, when setting up a new non-custodial digital wallet, the wallet software generates a “seed phrase,” which is a sequence of 12, 18, or 24 seemingly random words used as a mnemonic device to access the underlying private key(s) related to that wallet. The seed phrase can be used to recover the public and private keys, and should therefore be stored somewhere safe and never shared with anyone.

A private key is a randomly generated string of letters and numbers which acts as a sort of password that gives anyone that knows it the capability to control the wallet assets. It is known only to the user and should be kept secure and confidential to ensure that only the user has access to and can control any associated assets. The private key is used to sign transactions. For example, when a user wants to send crypto or access their assets on the blockchain, they would use the private key to authorize the transaction.

A public key is usually derived from the private key using a mathematical algorithm. It is a string of characters that can be shared openly without compromising a wallet’s inherent security. The public key is used to generate wallet addresses and to encrypt data. For example, when someone wants to send digital assets to a user, they would use the user’s public key or the associated wallet address.`,
    categories: ['Crypto (General)']
  },
  {
    question: 'How do I use a non-custodial digital wallet to make a transaction?',
    answer: `Once you’ve set up your non-custodial digital wallet, and have your public and private keys, you can use it to manage (send and receive) your digital assets on the blockchain. Every time you transact, your wallet requires you to digitally sign the transaction with your private key. Signing when prompted is a simple but critical part of the process, demonstrating that you acknowledge your action, and ensuring that only you have control of your crypto.

Some onchain actions might require multiple wallet signatures to authorize them. For example, to complete a trade on the decentralized, non-custodial Sky Protocol using the Sky.money web app, you would first need to confirm that you allow the app to access the token you want to trade in your wallet (one signature), and then authorize the actual trade (another signature).`,
    categories: ['Crypto (General)']
  },
  {
    question: 'Explain the types of crypto wallets',
    answer: `There are several types of crypto wallets and theoretically no limit to the number of wallets a user can generate. But not all wallets are compatible with all blockchains. Therefore, depending on the cryptocurrencies you hold, you might need to use more than one wallet.

From a security perspective, crypto wallets can be classified under two broad categories: hot and cold. Hot wallets are those connected to the internet most of the time (i.e., software-based mobile, desktop, and browser wallets), making it easy to access and use for transactions but also potentially more vulnerable to hacking and cyber threats. Two popular software-based wallets are Metamask and Rainbow. Cold wallets include hardware wallets, which are physical appliances that connect to a computer, laptop, or mobile device via a cable or Bluetooth, further enhancing their security against hacking and cyber threats; and paper wallets, which consist simply of a piece of paper on which the public and private keys of a cryptocurrency address or a QR code are written. Cold wallets are completely offline. Two examples of cole wallets include Ledger and GridPlus. Each wallet type has specific advantages, so you’ll want to do your own research to choose the one that best meets your security and performance needs. SkyWing does not endorse products. For more info, see the [User Risk Documentation](https://docs.sky.money/user-risks).`,
    categories: ['Crypto (General)']
  },
  {
    question: 'What is the difference between a digital wallet and a crypto wallet?',
    answer: `In the context of decentralized finance (DeFi), there is no difference; the terms are used interchangeably.`,
    categories: ['Crypto (General)']
  },
  {
    question: 'What does it mean to whitelist tokens in a non-custodial wallet?',
    answer: `Your non-custodial wallet provider of choice might not always display all of the digital assets that you hold on blockchains. Metamask, for example, does not automatically integrate all tokens into its user interface in an effort to help protect its users from fake-token scams. What this means is that newly acquired tokens might not show up in the integrated asset list of your chosen wallet provider until you whitelist the contract addresses of those tokens. Notably, such tokens will still be visible if you are viewing the blockchain directly (i.e., outside the interface provided by your chosen wallet provider).

Whitelisting a token address communicates to the wallet that the address is approved, adding an extra layer of security to all transactions involving that token. This process does not impact the token’s availability on the blockchain, but ensures that it is visible and accessible within the wallet interface. Accordingly, a user of the decentralized Sky.money web app might choose to manually whitelist Sky Protocol native token addresses, including USDS and SKY. Metamask offers a one-click option to do so immediately after you've obtained tokens through trading or upgrading on the Sky.money web app.

Your use of Metamask or any other third-party digital wallet software may be subject to such third-party’s terms of service and any other applicable terms, conditions and policies that you may agree to with such third party. Please see the [User Risk Documentation](https://docs.sky.money/user-risks) and [Terms of Use](https://docs.sky.money/legal-terms) for more information. Sky.money is not responsible for any loss or damages incurred while using these third-party platforms.`,
    categories: ['Crypto (General)']
  },
  {
    question: 'Explain what a DAO is, and how it works',
    answer: `A DAO, or Decentralized Autonomous Organization, is a term typically used to describe a group of individuals who collaborate and self-govern in a decentralized way using technology, such as crypto blockchain and crypto, and who often manage their rules and their finances collectively via a set of self-executing processes and collective decision-making. DAOs are community-governed and their members often elect to abide by rules that are voted on and ratified using crypto token-based voting, and then encoded in blockchain-based smart contracts. In other words, a DAO is not managed in a traditional sense by a CEO or president, or any other form of centralized leadership.`,
    categories: ['Crypto (General)']
  },
  {
    question: 'What are the strengths and weaknesses of a DAO?',
    answer: `A decentralized Autonomous Organization, or DAO, is the formal description of a structured group of disparate individuals responsible for a blockchain-based project. DAOs are community-governed and abide by rules that are voted on by consensus, ratified, and then encoded in blockchain-based smart contracts. In other words, a DAO is not managed in a traditional sense or by a CEO or president.`,
    categories: ['Crypto (General)']
  }
];
