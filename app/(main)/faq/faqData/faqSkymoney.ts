import type { FAQItem } from './types';

export const skymoney: FAQItem[] = [
  {
    question: 'What is an eligible user?',
    answer: `Some Sky Protocol features are unavailable to users in certain countries for regulatory compliance purposes. For more information, please refer to the [Terms of Use](https://docs.sky.money/legal-terms).`,
    categories: ['Sky.money']
  },
  {
    question: 'Are there risks involved with using the Sky.money web app?',
    answer: `For details regarding potential risks using Sky.money web app, please see the [User Risk Documentation](https://docs.sky.money/user-risks).`,
    categories: ['Sky.money']
  },
  {
    question: 'What tokens can I use to access Sky Token Rewards?',
    answer: `Currently, only USDS can be used to access Sky Token Rewards.`,
    categories: ['Sky.money']
  },
  {
    question: 'Does the Sky.money web app track my positions across multiple chains?',
    answer: `The Balances feature of the Sky.money web app displays all of your Sky-related assets on the network you are connected to at the moment. When you connect your crypto wallet to the Sky.money web app to access the decentralized Sky Protocol, only the tokens in the wallet that are relevant to the app are listed. With all of your Sky assets visible in one place, you can better self-manage your assets in line with your goals. Sky.money is non-custodial and permissionless.`,
    categories: ['Sky.money']
  },
  {
    question: 'How can I minimize gas fees when using multiple features of the Sky.money web app?',
    answer: `If you plan on using the Sky.money web app to access one or more Sky Protocol features regularly, consider switching to a supported network that offers reduced cost transaction fees, such as Base.`,
    categories: ['Sky.money']
  },
  {
    question: 'Is there a way to access Sky Protocol features without using the Sky.money web app?',
    answer: `The Sky.money web app is only one of the many gateways to the permissionless Sky Protocol. Some features may be restricted by the Sky.money frontend in certain jurisdictions based on regulatory considerations. Please refer to the [Terms of Use](https://docs.sky.money/legal-terms).`,
    categories: ['Sky.money']
  },
  {
    question: "Why can't I access Sky.money web app with a VPN?",
    answer: `The Sky.money web app restricts user access from certain jurisdictions in compliance with the Terms of Use. As a result, VPNs are blocked to ensure adherence to these restrictions. For more information, please refer to the [Terms of Use](https://docs.sky.money/legal-terms).`,
    categories: ['Sky.money']
  },
  {
    question: 'I accessed Sky.money some time ago, but now my access is restricted. Why?',
    answer: `The Sky.money web app restricts access from certain jurisdictions in compliance with the [Terms of Use](https://docs.sky.money/legal-terms), and some functionalities may not be available in all regions. As a result, VPNs are blocked to ensure adherence to these restrictions. Additionally, restrictions may be updated at any time in response to regulatory developments. For more information, please refer to the [Terms of Use](https://docs.sky.money/legal-terms).`,
    categories: ['Sky.money']
  },
  {
    question:
      'I supplied assets on the Sky Protocol, but now I can’t access the Sky.money web app. Is my money gone?',
    answer: `Not necessarily. You can use a block explorer to verify your assets are still on the blockchain. For details on the risks associated with cryptocurrencies, please review the [User Risk Documentation](https://docs.sky.money/user-risks).`,
    categories: ['Sky.money']
  },
  {
    question:
      'I accidentally rejected the Terms of Use when attempting to access the Sky.money web app. Now it’s completely inaccessible. What can I do?',
    answer: `Try deleting your cookies and reloading the page.`,
    categories: ['Sky.money']
  },
  {
    question:
      'I’m not in a banned country, but I see an access restricted message when trying to use Sky.money. Why?',
    answer: `Due to the modular design of the Sky.money web app for regulatory compliance purposes, you may not be able to access certain functionalities of the Sky Protocol in your jurisdiction. For more information, please refer to the [Terms of Use](https://docs.sky.money/legal-terms).`,
    categories: ['Sky.money']
  }
];
