import {
  ServiceItem,
  SolutionItem,
  CaseStudy,
  TeamMember,
  InsightArticle,
  Testimonial,
  StatItem,
  CareerPosition
} from '../types';

export const COMPANY_INFO = {
  name: 'ORVEXIQ',
  tagline: 'BUILD. GROW. SCALE. FROM WEB2 TO WEB3.',
  positioning: 'Web2 + Web3 Technology, Growth & Digital Solutions',
  statement:
    'ORVEXIQ helps startups, businesses and Web3 projects build powerful digital products, launch new ventures, reach global audiences and scale through technology, marketing and strategic growth.',
  email: 'contact@orvexiq.com',
  telegram: 'https://t.me/orvexiq',
  telegramHandle: '@orvexiq',
  whatsapp: '+1 (555) 389-4920',
  linkedin: 'https://www.linkedin.com/company/orvexiq',
  twitter: 'https://x.com/orvexiq',
  github: 'https://github.com/orvexiq',
  locations: ['San Francisco', 'Singapore', 'London', 'Dubai'],
};

export const INITIAL_STATS: StatItem[] = [
  {
    id: 'exchanges',
    value: '50+',
    label: 'Exchange & Platform Relationships',
    subtext: 'Direct communication channels with Tier-1 to Tier-3 venues',
  },
  {
    id: 'vcs',
    value: '100+',
    label: 'VC / Investor Connections',
    subtext: 'Global angel syndicates, Web3 funds, & institutional VCs',
  },
  {
    id: 'projects',
    value: '10+',
    label: 'Projects Supported',
    subtext: 'End-to-end architecture, incubation, and launch execution',
  },
  {
    id: 'funding',
    value: '$25M+',
    label: 'Funding Ecosystem Experience',
    subtext: 'Assisted in private, public, and strategic liquidity rounds',
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-development',
    slug: 'web-development',
    number: '01',
    title: 'Web Development',
    tagline: 'Build digital products that perform.',
    shortDescription:
      'High-performance corporate websites, SaaS platforms, custom software, and interactive web applications engineered for speed, conversion, and global scale.',
    longDescription:
      'At ORVEXIQ, we build mission-critical web applications that bridge intuitive user experiences with high-throughput cloud infrastructure. Whether launching an enterprise SaaS portal, an interactive digital experience, or high-converting product touchpoints, our engineering team brings Silicon Valley technical rigor to every deployment.',
    iconName: 'Layout',
    category: 'web2',
    deliverables: [
      'Corporate & Institutional Websites',
      'SaaS Platforms & Multi-tenant Portals',
      'High-conversion E-commerce & Checkout',
      'Interactive Analytics Dashboards',
      'Customer & Partner Portals',
      'High-performance API Integrations',
      'Custom Workflow Software',
      'Cloud Serverless Architectures',
    ],
    features: [
      {
        title: 'Modern Front-End Architecture',
        desc: 'Built with React, Next.js, and TypeScript for instantaneous load times and stellar SEO indices.',
      },
      {
        title: 'Enterprise-grade Backends',
        desc: 'Resilient Node.js, Python, and Go microservices with robust relational and document data stores.',
      },
      {
        title: 'API & Microservice Integration',
        desc: 'Effortless synchronization with CRM, payment gateways, ERPs, and custom enterprise databases.',
      },
      {
        title: 'Security & Compliance Auditing',
        desc: 'Strict adherence to OWASP guidelines, encrypted data at rest, and zero-trust authentication.',
      },
    ],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'Python',
      'PostgreSQL',
      'MongoDB',
      'Cloud Infrastructure (AWS / GCP)',
      'Tailwind CSS',
      'Redis',
    ],
    workflow: [
      {
        step: '01',
        title: 'Architecture & UX Wireframing',
        desc: 'Auditing product objectives, information hierarchy, and engineering technical blueprints.',
      },
      {
        step: '02',
        title: 'Full-Stack Rapid Prototyping',
        desc: 'Component-driven sprint builds with staging previews and continuous integration tests.',
      },
      {
        step: '03',
        title: 'Security & Stress Benchmarking',
        desc: 'Rigorous latency testing, vulnerability scanning, and cross-device performance optimization.',
      },
      {
        step: '04',
        title: 'Global Deployment & Monitoring',
        desc: 'Edge distribution across CDN networks with 99.99% uptime guarantees and real-time observability.',
      },
    ],
    faqs: [
      {
        question: 'What is the average turnaround time for a custom web platform?',
        answer:
          'Typically, enterprise websites take 3 to 6 weeks, while complex full-stack SaaS MVPs take between 6 to 12 weeks with weekly staged deliverables.',
      },
      {
        question: 'Do you provide maintenance and ongoing SLA support?',
        answer:
          'Yes. We offer continuous DevOps, performance monitoring, security patch management, and dedicated sprint team extensions.',
      },
      {
        question: 'Can you migrate our legacy stack to Next.js or React?',
        answer:
          'We frequently execute seamless zero-downtime migrations from legacy monoliths (WordPress, Drupal, PHP) into modern Jamstack and headless microservices.',
      },
    ],
    ctaText: 'Discuss Your Web Project →',
  },
  {
    id: 'web3-development',
    slug: 'web3-development',
    number: '02',
    title: 'Web3 Development',
    tagline: 'Build the next generation of Web3 products.',
    shortDescription:
      'DApps, DeFi protocols, secure wallet connect suites, token utilities, DAO governances, and cross-chain dApp interfaces with seamless UX.',
    longDescription:
      'Decentralized applications demand both robust on-chain reliability and effortless consumer-grade onboarding. ORVEXIQ architects production-grade DApps with modern account abstraction, gasless transactions, multi-wallet connectivity, and institutional-grade frontend resilience.',
    iconName: 'Coins',
    category: 'web3',
    deliverables: [
      'Custom Decentralized Applications (DApps)',
      'DeFi Yield, Staking & Swap Interfaces',
      'Account Abstraction & Social Login Wallets',
      'DAO Governance Portals & Voting Engines',
      'Token Utilities & Vesting Claim Portals',
      'Real-time On-Chain Data Dashboards',
      'Web3 SDKs & Developer API Hubs',
      'Cross-Chain Bridge Interfaces',
    ],
    features: [
      {
        title: 'Seamless Consumer Onboarding',
        desc: 'Social logins, passkeys, and fiat on-ramps that eliminate traditional Web3 friction.',
      },
      {
        title: 'Gas Optimization & Batching',
        desc: 'Optimized RPC calling, batched queries, and payload caching for ultra-responsive user interfaces.',
      },
      {
        title: 'Multi-wallet Ecosystem Compatibility',
        desc: 'Native support for MetaMask, Phantom, WalletConnect, Coinbase Wallet, and hardware keys.',
      },
      {
        title: 'Decentralized Data Indexing',
        desc: 'Custom Subgraphs (The Graph) and indexed query layers for sub-second blockchain state reads.',
      },
    ],
    technologies: [
      'Wagmi / Viem',
      'Ethers.js',
      'Solana Web3.js',
      'The Graph',
      'IPFS / Arweave',
      'RainbowKit',
      'Next.js',
      'Alchemy / Infura',
    ],
    workflow: [
      {
        step: '01',
        title: 'Protocol & Tokenomics Mapping',
        desc: 'Structuring smart contract interfaces, user state flows, and interaction security bounds.',
      },
      {
        step: '02',
        title: 'Interface & Wallet Engineering',
        desc: 'Constructing intuitive UI with state feedback, error fallbacks, and multi-network switches.',
      },
      {
        step: '03',
        title: 'Testnet Verification & Fuzzing',
        desc: 'Comprehensive simulated transactions across testnets to ensure bulletproof transaction life cycles.',
      },
      {
        step: '04',
        title: 'Mainnet Production Launch',
        desc: 'Coordinated rollout with fallback RPC infrastructure and real-time transaction telemetry.',
      },
    ],
    faqs: [
      {
        question: 'How do you handle Web3 onboarding for non-crypto native users?',
        answer:
          'We leverage ERC-4337 Account Abstraction, email/social logins (Privy/Dynamic), and integrated credit-card on-ramps so users can interact without needing prior crypto knowledge.',
      },
      {
        question: 'Which blockchain networks do you support?',
        answer:
          'We develop across Ethereum, Arbitrum, Optimism, Base, Polygon, BNB Chain, Avalanche, Solana, and Cosmos networks.',
      },
    ],
    ctaText: 'Build Your Web3 Product →',
  },
  {
    id: 'blockchain-development',
    slug: 'blockchain-development',
    number: '03',
    title: 'Blockchain Solutions',
    tagline: 'Blockchain infrastructure for real-world products.',
    shortDescription:
      'Audited smart contracts, token standard architectures (ERC-20, ERC-721, ERC-1155, SPL), on-chain registries, automated vesting schedules, and enterprise ledger integrations.',
    longDescription:
      'Smart contracts are immutable financial and logical infrastructure. ORVEXIQ designs, writes, and formally verifies smart contracts using modern battle-tested frameworks (Foundry, Hardhat) and works alongside premier tier-1 security audit firms to guarantee zero vulnerabilities.',
    iconName: 'Cpu',
    category: 'web3',
    deliverables: [
      'Custom Solidity & Rust Smart Contracts',
      'Token Architecture & Gas-Efficient Deployments',
      'Staking, Locking & Liquidity Contracts',
      'Multi-sig & Treasury Governance Systems',
      'Gas-Optimized Merkle Proof Airdrop Engines',
      'Formal Verification & Pre-Audit Hardening',
      'Cross-Chain Messaging (LayerZero, Chainlink CCIP)',
      'Enterprise Private & Hybrid Ledgers',
    ],
    features: [
      {
        title: 'Gas Optimization Standards',
        desc: 'Yul and low-level assembly optimizations to minimize end-user transaction costs by up to 40%.',
      },
      {
        title: 'Reentrancy & Flash-Loan Protection',
        desc: 'Strict check-effects-interaction patterns, reentrancy guards, and invariant-based fuzz tests.',
      },
      {
        title: 'Modular & Upgradeable Proxies',
        desc: 'UUPS and Diamond standard architectures allowing forward compatibility without sacrificing decentralization.',
      },
      {
        title: 'Comprehensive Test Coverage',
        desc: '100% branch test coverage with invariant testing and automated CI simulation pipelines.',
      },
    ],
    technologies: [
      'Solidity',
      'Rust',
      'Foundry',
      'Hardhat',
      'OpenZeppelin',
      'LayerZero',
      'Chainlink',
      'Slither & Echidna',
    ],
    workflow: [
      {
        step: '01',
        title: 'Specification & Threat Modeling',
        desc: 'Defining mathematical invariant conditions, state transitions, and actor permission hierarchies.',
      },
      {
        step: '02',
        title: 'Test-Driven Contract Implementation',
        desc: 'Writing smart contract code alongside unit, fuzz, and fork tests on Foundry.',
      },
      {
        step: '03',
        title: 'Security Audit Preparation & Remediation',
        desc: 'Running static analysis and collaborating with third-party auditors to remediate all findings.',
      },
      {
        step: '04',
        title: 'Deterministic Multi-Chain Deployment',
        desc: 'Verifying bytecode on explorers (Etherscan, Solscan) and transferring multi-sig ownership.',
      },
    ],
    faqs: [
      {
        question: 'Do you provide formal audit reports?',
        answer:
          'We perform internal security audits, automated fuzzing, and prepare comprehensive audit-ready packages for accredited third-party security auditors like CertiK, OpenZeppelin, or Halborn.',
      },
      {
        question: 'Can you help redesign an existing token contract with deflationary or staking mechanics?',
        answer:
          'Yes, we design mathematically sound token models, dynamic staking yield contracts, and safe migration bridges.',
      },
    ],
    ctaText: 'Talk to a Blockchain Specialist →',
  },
  {
    id: 'crypto-marketing',
    slug: 'crypto-marketing',
    number: '04',
    title: 'Crypto Marketing',
    tagline: 'Turn attention into community.',
    shortDescription:
      'High-impact crypto marketing campaigns, KOL & influencer syndicates, viral X/Twitter growth, Telegram & Discord community acceleration, PR placements, and narrative engineering.',
    longDescription:
      'In Web3, attention is the currency of market valuation. ORVEXIQ constructs hyper-targeted marketing funnels that don’t just generate fleeting hype, but convert genuine active holders, liquidity contributors, and passionate community evangelists across major global crypto markets.',
    iconName: 'Megaphone',
    category: 'growth',
    deliverables: [
      'Tier-1 KOL & Influencer Campaigns (YouTube, X, Telegram)',
      'Viral X/Twitter Organic & Guerilla Narrative Growth',
      'Telegram & Discord Community Cultivation',
      'Crypto PR Placements (CoinTelegraph, CoinDesk, Decrypt, BeInCrypto)',
      'Zealy & Galxe Ecosystem Quest Campaigns',
      'Spaces, AMAs & Podcast Booking Tours',
      'Content Production, Thread Design & Infographics',
      'Token Generation Event (TGE) Launch Hype Trajectories',
    ],
    features: [
      {
        title: 'Vetted Global KOL Network',
        desc: 'Direct relationships with over 250+ vetted crypto creators across North America, Europe, Asia, and LATAM.',
      },
      {
        title: 'Authentic Narrative Engineering',
        desc: 'Crafting compelling narratives that resonate with crypto native researchers, degens, and institutional backers.',
      },
      {
        title: 'Bot-Proof Community Moderation',
        desc: '24/7 bilingual community managers and automated anti-scam shield protocols for Discord and Telegram.',
      },
      {
        title: 'Conversion-Focused Attribution',
        desc: 'Tracking wallet activations, link telemetry, and community conversion with clean analytics.',
      },
    ],
    workflow: [
      { step: '01', title: 'Strategy & Narrative Blueprint', desc: 'Crafting the core value proposition, positioning angle, and target user persona.' },
      { step: '02', title: 'Distribution & Media Blitz', desc: 'Activating top-tier PR, KOL schedules, and social thread saturation simultaneously.' },
      { step: '03', title: 'Community Engagement Funnels', desc: 'Funneling traffic into highly active Telegram and Discord groups with interactive quests.' },
      { step: '04', title: 'Conversion & Retention Sprints', desc: 'Converting interest into active dApp users, testnet participants, and token adopters.' },
      { step: '05', title: 'Post-Launch Sustained Growth', desc: 'Maintaining momentum with secondary narrative cycles, milestone announcements, and co-marketing.' },
    ],
    packages: [
      {
        name: 'Seed / Testnet Launch',
        badge: 'Early Stage',
        priceDescription: 'Tailored for early protocols building initial waitlists',
        features: [
          'Targeted X narrative thread campaigns',
          'Foundational Telegram community setup & 24/7 moderation',
          '3-5 micro-KOL strategic endorsements',
          'Press release syndication across 30+ crypto outlets',
          'Community onboarding quest (Galxe/Zealy)',
        ],
      },
      {
        name: 'TGE / Mainnet Blitz',
        badge: 'Most Popular',
        priceDescription: 'Comprehensive launch blitz designed for maximum market presence',
        features: [
          'Full-scale Tier-1 & Tier-2 KOL campaign (15+ influencers)',
          'High-tier PR editorial on CoinTelegraph & Decrypt',
          'Guaranteed X trending & viral meme syndication',
          'Top-tier Spaces & AMA hosting with 50k+ listener reach',
          'Daily social content, motion graphics & thread writing',
          'Dedicated campaign manager and weekly ROI telemetry',
        ],
      },
      {
        name: 'Ecosystem Scale & Retainer',
        badge: 'Enterprise',
        priceDescription: 'Continuous monthly growth and institutional positioning',
        features: [
          'Global regional marketing (China, Korea, Turkey, US)',
          'Bi-weekly major KOL video reviews and tutorials',
          'Major conference activations & side event hosting support',
          'Ongoing podcast and Tier-1 financial media placement',
          'Dedicated growth hacker and full creative squad',
        ],
      },
    ],
    faqs: [
      {
        question: 'How do you prevent bot traffic during influencer campaigns?',
        answer:
          'We inspect wallet engagement, cross-reference follower engagement authenticity with proprietary audit tools, and require on-chain verification for campaign rewards.',
      },
      {
        question: 'Do you work on performance-based compensation?',
        answer:
          'We offer hybrid structures combining base agency deliverables with milestone-linked token or KPI incentives for qualified projects.',
      },
    ],
    ctaText: 'Plan a Marketing Campaign →',
  },
  {
    id: 'exchange-listing',
    slug: 'exchange-listing',
    number: '05',
    title: 'Exchange Listings',
    tagline: 'Strategic exchange listing support.',
    shortDescription:
      'Strategic listing roadmap, exchange BD outreach, technical documentation preparation, compliance advisory, and coordination for Tier-1, Tier-2, and Tier-3 centralized exchanges.',
    longDescription:
      'Navigating centralized exchange listings requires meticulous preparation, institutional credibility, and deep direct relationships with listing committees. ORVEXIQ prepares your legal opinions, tokenomics audits, and market structure to meet stringent exchange requirements.',
    iconName: 'Building2',
    category: 'strategy',
    deliverables: [
      'Strategic Exchange Listing Roadmap',
      'Direct Business Development Outreach',
      'Project Due Diligence & Technical Questionnaires',
      'Legal Opinion & Regulatory Document Preparation',
      'Exchange Integration & Smart Contract Verification',
      'Co-marketing & Listing Announcement Strategy',
      'Deposit/Withdrawal Technical Coordination',
      'Secondary Market Post-Listing Advisory',
    ],
    features: [
      {
        title: 'Direct Listing Desk Access',
        desc: 'Direct channels with listing and BD leads across top centralized and decentralized venues.',
      },
      {
        title: 'Strict Compliance & Zero False Claims',
        desc: 'Transparent advisory with zero unrealistic guarantees; all introductions subject to formal exchange review.',
      },
      {
        title: 'Fee Negotiation Advisory',
        desc: 'Ensuring your project avoids predatory brokers and negotiates fair listing deposits and marketing pledges.',
      },
      {
        title: 'Liquidity Provider Coordination',
        desc: 'Aligning with verified market makers to fulfill exchange order book spread and depth mandates.',
      },
    ],
    tiers: [
      {
        name: 'Tier 1 Exchanges',
        badge: 'Top Tier Global',
        description: 'Elite global platforms with monumental daily volume and stringent compliance standards.',
        highlights: [
          'Direct introductions to institutional listing directors',
          'Comprehensive legal opinion letter preparation (US/EU/Offshore)',
          'Deep volume and on-chain user audit preparation',
          'Security audit clearance and tokenomics validation',
        ],
        suitableFor: 'Mature protocols with substantial TVL, revenue, and active on-chain metrics.',
      },
      {
        name: 'Tier 2 Exchanges',
        badge: 'High Liquidity Regional',
        description: 'Major global exchanges providing significant liquidity, regional penetration, and retail discovery.',
        highlights: [
          'Expedited review channels and direct application tracking',
          'Coordinated marketing blitz & launchpool campaigns',
          'Deposit & trading competition planning',
          'Competitive listing and liquidity terms negotiation',
        ],
        suitableFor: 'Growth-stage protocols seeking strong global trading volume and user expansion.',
      },
      {
        name: 'Tier 3 Exchanges',
        badge: 'Initial Launchpads & Gateway',
        description: 'Accessible venues ideal for initial token discovery, secondary market testing, and early price discovery.',
        highlights: [
          'Rapid technical onboarding and contract verification',
          'Low upfront capital requirements',
          'Initial test ground for market making algorithms',
          'Gateway step toward Tier-2 consideration',
        ],
        suitableFor: 'Seed-stage projects or newly launched tokens seeking their first CEX presence.',
      },
    ],
    faqs: [
      {
        question: 'Do you guarantee exchange listings?',
        answer:
          'No reputable agency can guarantee listing approval. Final listing decisions rest solely with each exchange’s independent compliance and listing committee. ORVEXIQ provides strategic preparation, documentation, and executive introductions to maximize approval probability.',
      },
      {
        question: 'How long does an exchange listing process take?',
        answer:
          'Tier-2 and Tier-3 exchanges typically review and list within 2 to 4 weeks, while Tier-1 exchanges undergo thorough multi-month review and due diligence cycles.',
      },
    ],
    ctaText: 'Discuss Listing Strategy →',
  },
  {
    id: 'fundraising',
    slug: 'fundraising',
    number: '06',
    title: 'Fundraising Advisory',
    tagline: 'Connecting builders with capital.',
    shortDescription:
      'Fundraising strategy, institutional pitch decks, financial modeling, VC introductions, syndicate outreach, and strategic investor network access across Web2 & Web3 funds.',
    longDescription:
      'Raising capital in fast-evolving markets demands bulletproof narratives, solid financial mechanics, and access to decision makers. ORVEXIQ bridges visionary founders with top-tier venture capital firms, family offices, and crypto-native angel syndicates.',
    iconName: 'TrendingUp',
    category: 'strategy',
    deliverables: [
      'Comprehensive Fundraising Strategy & Valuation Models',
      'Institutional-grade Pitch Decks & One-Pagers',
      'Tokenomics & Cap Table Engineering',
      'Targeted VC & Family Office Outreach',
      'Deal Room Structuring (Data Room, Due Diligence)',
      'Strategic Partner & Syndicate Introductions',
      'Pitch Coaching & Investor Q&A Rehearsals',
      'SAFE + Token Warrant / SAFT Term Sheet Advisory',
    ],
    features: [
      {
        title: 'Global Investor Syndicate',
        desc: 'Connected with 100+ active venture funds, angel networks, and crypto venture studios in SF, NYC, London, and Singapore.',
      },
      {
        title: 'High-Impact Pitch Decks',
        desc: 'Story-driven slide decks designed by institutional venture specialists who know what partners look for.',
      },
      {
        title: 'Mathematical Tokenomics Modeling',
        desc: 'Dynamic emission schedules, cliff periods, and sink mechanics engineered to withstand secondary market pressure.',
      },
      {
        title: 'Founder-Friendly Terms',
        desc: 'Advising founders to retain governance and avoid predatory liquidation preferences or excessive dilution.',
      },
    ],
    workflow: [
      { step: '01', title: 'Equity & Tokenomics Audit', desc: 'Evaluating unit economics, token utility, and historical funding benchmarks.' },
      { step: '02', title: 'Pitch Deck & Data Room Synthesis', desc: 'Building high-converting decks, metrics tear-sheets, and comprehensive data rooms.' },
      { step: '03', title: 'Targeted Investor Matching', desc: 'Segmenting funds by thesis, check size, portfolio synergies, and geographic mandate.' },
      { step: '04', title: 'Warm Executive Introductions', desc: 'Initiating tailored introductions directly to managing directors and investment partners.' },
      { step: '05', title: 'Term Sheet Negotiation Advisory', desc: 'Supporting founders through closing mechanics, SAFT/SAFE agreements, and wire transfers.' },
    ],
    faqs: [
      {
        question: 'Do you promise fundraising results or specific investment amounts?',
        answer:
          'No. Investment decisions are made exclusively by investors based on market conditions, founder quality, and traction. We equip founders with premier positioning, pitch assets, and direct investor access to drastically increase closing rates.',
      },
      {
        question: 'What stages do you support?',
        answer:
          'We advise across Pre-Seed, Seed, Strategic Private Rounds, and Series A rounds for both Web2 tech and Web3 protocols.',
      },
    ],
    ctaText: 'Discuss Your Fundraising Strategy →',
  },
  {
    id: 'market-making',
    slug: 'market-making',
    number: '07',
    title: 'Market Making & Liquidity',
    tagline: 'Liquidity strategy for digital assets.',
    shortDescription:
      'Algorithmic liquidity strategy, DEX liquidity pool management, CEX order book depth coordination, spread minimization, and secondary market stabilization.',
    longDescription:
      'Healthy liquidity is the lifeblood of any digital asset. Wide spreads and thin order books discourage retail and institutional traders alike. ORVEXIQ coordinates with licensed, algorithmic market makers to ensure deep bid-ask spreads, continuous uptime, and sustainable liquidity across venues.',
    iconName: 'BarChart3',
    category: 'strategy',
    deliverables: [
      'Secondary Market Liquidity Strategy',
      'CEX Order Book Depth Optimization',
      'DEX Concentrated Liquidity Management (Uniswap v3, Raydium)',
      'Cross-Venue Arbitrage & Spread Minimization',
      'Token Launch Liquidity Provisioning',
      'Real-time Market Health & Slippage Monitoring',
      'Market Maker Selection & RFP Coordination',
      'Treasury Token Circulation Management',
    ],
    features: [
      {
        title: 'Order Book Depth & Tight Spreads',
        desc: 'Ensuring continuous two-sided liquidity so orders execute without excessive price impact or slippage.',
      },
      {
        title: 'Zero Wash Trading / Strict Compliance',
        desc: 'Purely legitimate, quantitative market making that complies with exchange standards and international regulations.',
      },
      {
        title: 'Algorithmic Arbitrage Efficiency',
        desc: 'Synchronizing price discovery between decentralized liquidity pools and centralized trading venues.',
      },
      {
        title: '24/7 Real-Time Telemetry',
        desc: 'Custom monitoring alerts for abnormal volatility, sudden drain events, or liquidity imbalances.',
      },
    ],
    faqs: [
      {
        question: 'Do you offer pump-and-dump services or price manipulation?',
        answer:
          'Absolutely not. ORVEXIQ exclusively advocates ethical, algorithmic liquidity provision to protect market integrity, narrow bid-ask spreads, and reduce volatility for organic market participants.',
      },
      {
        question: 'What capital is required for DEX / CEX liquidity?',
        answer:
          'Requirements depend on target trading volume and exchange tier. We calculate precise liquidity provisioning models during our initial liquidity strategy audit.',
      },
    ],
    ctaText: 'Discuss Liquidity →',
  },
  {
    id: 'ai-automation',
    slug: 'ai-automation',
    number: '08',
    title: 'AI Automation',
    tagline: 'Automate the work. Accelerate the business.',
    shortDescription:
      'Autonomous AI agents, customer support chatbots, CRM & lead routing automation, internal knowledge retrieval (RAG), and generative workflow systems.',
    longDescription:
      'Modern enterprises scale not by adding headcount linearly, but by deploying intelligent autonomous pipelines. ORVEXIQ designs custom AI automation architectures that handle repetitive tasks, qualify leads around the clock, and automate cross-system workflows.',
    iconName: 'Bot',
    category: 'web2',
    deliverables: [
      'Autonomous Multi-Agent Systems',
      'Intelligent Customer Support Chatbots',
      'Automated Lead Qualification & CRM Sync',
      'Internal Knowledge Base & RAG Pipelines',
      'Document Parsing & Synthesis Automations',
      'Custom LLM Fine-Tuning & Prompt Engineering',
      'E-commerce Inventory & Fulfillment Automation',
      'Enterprise Zapier / Make / Python Custom Webhooks',
    ],
    features: [
      {
        title: 'Context-Aware LLM Agents',
        desc: 'Trained on proprietary company documentation with strict guardrails against hallucinations.',
      },
      {
        title: 'Real-Time Multi-System Orchestration',
        desc: 'Connecting Slack, HubSpot, Salesforce, Notion, Stripe, and custom databases seamlessly.',
      },
      {
        title: 'Automated Sales Development (SDR)',
        desc: 'Enriching inbound leads, scoring intent, and drafting personalized outreach sequences automatically.',
      },
      {
        title: 'Privacy & Data Segregation',
        desc: 'Zero data retention architectures ensuring enterprise secrets and user data are never used to train public models.',
      },
    ],
    technologies: [
      'OpenAI / Anthropic / Gemini APIs',
      'LangChain / LlamaIndex',
      'Pinecone / Qdrant Vector DBs',
      'Python / FastAPI',
      'Temporal / Airflow',
      'Make / n8n',
    ],
    workflow: [
      { step: '01', title: 'Workflow Audit & Bottleneck Discovery', desc: 'Identifying highest-friction repetitive manual tasks and data silos.' },
      { step: '02', title: 'Agent Architecture & Prompt Tuning', desc: 'Developing custom agents, tool-calling definitions, and evaluation benchmarks.' },
      { step: '03', title: 'Integration & Guardrail Hardening', desc: 'Connecting agents with production APIs and setting strict response boundaries.' },
      { step: '04', title: 'Continuous Learning & Analytics', desc: 'Monitoring accuracy, user satisfaction scores, and operational cost savings.' },
    ],
    faqs: [
      {
        question: 'Will our proprietary business data be exposed to AI training?',
        answer:
          'No. We implement enterprise API tiers with explicit zero-data-retention agreements and self-hosted vector databases inside your private cloud boundary.',
      },
      {
        question: 'How quickly do businesses see ROI on AI automation?',
        answer:
          'Most clients recoup deployment investments within 60 to 90 days through reduced response latency and dozens of reclaimed hours per team member weekly.',
      },
    ],
    ctaText: 'Automate Your Business →',
  },
  {
    id: 'digital-growth',
    slug: 'digital-growth',
    number: '09',
    title: 'Digital Growth',
    tagline: 'Turn digital presence into business growth.',
    shortDescription:
      'Omnichannel performance marketing, programmatic SEO, conversion rate optimization (CRO), funnel architecture, retention email loops, and full-funnel analytics.',
    longDescription:
      'Growth is an engineered science, not guesswork. ORVEXIQ builds compounding acquisition engines that systematically acquire, activate, and retain high-LTV customers across search engines, paid acquisition channels, and algorithmic media.',
    iconName: 'Zap',
    category: 'growth',
    deliverables: [
      'Technical & Programmatic SEO Architectures',
      'Paid Search & Social Campaigns (Google, Meta, LinkedIn)',
      'High-Conversion Landing Page Systems',
      'Funnel Architecture & A/B Multivariate Testing',
      'Lifecycle Marketing & Retention Email Automation',
      'Full-Funnel Analytics & Attribution Modeling',
      'Content Marketing & Thought Leadership Engines',
      'Product-Led Growth (PLG) Onboarding Optimization',
    ],
    features: [
      {
        title: 'Scientific Hypothesis Testing',
        desc: 'Data-driven sprint experimentation to steadily compound user acquisition and lower CAC.',
      },
      {
        title: 'Programmatic SEO Scaling',
        desc: 'Generating thousands of search-optimized, high-utility landing pages that capture long-tail intent.',
      },
      {
        title: 'Behavioral Funnel Telemetry',
        desc: 'Heatmaps, scroll maps, drop-off analysis, and cohort retention tracking via PostHog / Mixpanel.',
      },
      {
        title: 'Conversion-Tuned Copywriting',
        desc: 'Compelling value propositions that address buyer objections and drive immediate action.',
      },
    ],
    technologies: [
      'Google Ads / Meta Ads',
      'PostHog / Mixpanel',
      'Ahrefs / SEMrush',
      'Klaviyo / Customer.io',
      'Next.js Dynamic Routing',
      'VWO / Optimizely',
    ],
    workflow: [
      { step: '01', title: 'Traffic & Funnel Diagnostic', desc: 'Uncovering friction points, high-bounce steps, and underperforming channels.' },
      { step: '02', title: 'Acquisition Channel Prioritization', desc: 'Deploying targeted search, paid, and organic distribution loops with tight unit economics.' },
      { step: '03', title: 'CRO & Onboarding Acceleration', desc: 'Redesigning landing pages and onboarding flows to double checkout and signup conversion.' },
      { step: '04', title: 'Retention & Expansion Loops', desc: 'Building automated email sequences and referral engines that maximize Customer Lifetime Value.' },
    ],
    faqs: [
      {
        question: 'What separates your growth approach from standard digital marketing agencies?',
        answer:
          'We are technical growth engineers. We write code, build automated funnels, optimize APIs, and integrate full-stack analytics rather than simply running basic ad spend.',
      },
      {
        question: 'How do you measure success?',
        answer:
          'We measure bottom-line revenue, Customer Acquisition Cost (CAC), Return on Ad Spend (ROAS), and net cohort retention, not vanity clicks.',
      },
    ],
    ctaText: 'Build a Growth Strategy →',
  },
];

export const SOLUTIONS_DATA: SolutionItem[] = [
  {
    id: 'startups',
    slug: 'startups',
    title: 'Startups & Founders',
    tagline: 'Build and launch faster.',
    heroHeadline: 'FROM IDEA TO MARKET WITHOUT WASTED CYCLES.',
    description:
      'We partner with ambitious early-stage founders to validate, architect, and launch high-velocity MVPs, secure early users, and structure compelling venture rounds.',
    audience: 'Pre-Seed, Seed, and Series A founders building transformative Web2 SaaS or Web3 protocols.',
    challenges: [
      'Protracted development cycles burning critical runway',
      'Unclear technical architecture leading to costly rewrites',
      'Difficulty articulating value proposition to institutional investors',
      'Zero initial traction and challenging early user acquisition',
    ],
    journeySteps: [
      { step: '01', title: 'Idea & Architecture Validation', desc: 'Rapid technical feasibility mapping, competitive teardown, and MVP scope definition.' },
      { step: '02', title: 'MVP Engineering Sprint', desc: 'Building a production-ready, beautiful product in 4 to 8 weeks.' },
      { step: '03', title: 'Launch & Early Distribution', desc: 'Orchestrating Product Hunt, viral social narratives, and initial beta user cohorts.' },
      { step: '04', title: 'Fundraising & Advisory', desc: 'Refining the pitch deck, financial model, and securing warm investor introductions.' },
      { step: '05', title: 'Product-Market Fit & Scale', desc: 'Iterating on user analytics to achieve compounding retention and expansion.' },
    ],
    recommendedServices: [
      'Web Development',
      'Web3 Development',
      'AI Automation',
      'Crypto Marketing',
      'Fundraising Advisory',
    ],
    caseStudyRef: 'nexus-flow',
    ctaHeadline: 'Ready to build your breakthrough startup?',
    ctaButtonText: 'Build Your Startup →',
  },
  {
    id: 'web2-business',
    slug: 'web2-business',
    title: 'Web2 Businesses',
    tagline: 'Modernize and scale digital operations.',
    heroHeadline: 'MODERNIZE INFRASTRUCTURE. UNLOCK NEW REVENUE CHANNELS.',
    description:
      'Established businesses and mid-market enterprises need agile digital products, automated operational backbones, and exploration into digital asset ecosystems without risking existing operations.',
    audience: 'Growing businesses, e-commerce brands, and traditional technology companies looking to upgrade their digital footprint.',
    challenges: [
      'Outdated legacy software restricting agility and speed',
      'Excessive manual operational overhead eating gross margins',
      'Unexploited digital customer channels and customer churn',
      'Uncertainty regarding how to safely implement AI and Web3 technologies',
    ],
    journeySteps: [
      { step: '01', title: 'Digital Maturity Audit', desc: 'Analyzing legacy tech bottlenecks, data structures, and operational workflows.' },
      { step: '02', title: 'Modern Cloud Architecture', desc: 'Replatforming to high-speed Next.js frontends and resilient cloud microservices.' },
      { step: '03', title: 'AI Operational Automation', desc: 'Automating internal workflows, customer support, and sales intelligence pipelines.' },
      { step: '04', title: 'Performance Omnichannel Growth', desc: 'Deploying high-converting SEO, digital ads, and retention funnels.' },
      { step: '05', title: 'Web3 & Loyalty Exploration', desc: 'Strategically launching digital collectibles, token rewards, or on-chain authentication.' },
    ],
    recommendedServices: [
      'Web Development',
      'AI Automation',
      'Digital Growth',
      'Blockchain Solutions',
    ],
    caseStudyRef: 'omni-retail',
    ctaHeadline: 'Transform your business with modern tech.',
    ctaButtonText: 'Modernize Your Business →',
  },
  {
    id: 'web3-projects',
    slug: 'web3-projects',
    title: 'Web3 Projects',
    tagline: 'Build, market and grow blockchain ecosystems.',
    heroHeadline: 'BUILD. LAUNCH. GROW YOUR WEB3 ECOSYSTEM.',
    description:
      'End-to-end strategic, technical, and marketing capabilities for Layer-1s, Layer-2s, DeFi protocols, GameFi ecosystems, and tokenized networks seeking global scale.',
    audience: 'Blockchain protocols, decentralized foundations, DAO contributors, and Web3 venture teams.',
    challenges: [
      'Smart contract security vulnerabilities and audit delays',
      'Poor frontend UX causing massive transaction abandonment',
      'Difficulty breaking out of small echo chambers into mainstream awareness',
      'Fragmented liquidity across decentralized and centralized venues',
    ],
    journeySteps: [
      { step: '01', title: 'Smart Contract & DApp Architecture', desc: 'Writing gas-efficient, audited contracts and responsive Web3 interfaces.' },
      { step: '02', title: 'Community & Narrative Ignition', desc: 'Launching international Telegram, Discord, and viral X campaigns.' },
      { step: '03', title: 'Testnet & Incentive Alignment', desc: 'Structuring gamified testnets, airdrop criteria, and developer bounty hubs.' },
      { step: '04', title: 'Exchange Strategy & TGE Execution', desc: 'Coordinating CEX listings, market making liquidity, and public distribution.' },
      { step: '05', title: 'Ecosystem Expansion & Grants', desc: 'Attracting institutional TVL, ecosystem integrations, and developer hackathons.' },
    ],
    recommendedServices: [
      'Web3 Development',
      'Blockchain Solutions',
      'Crypto Marketing',
      'Exchange Listings',
      'Market Making & Liquidity',
    ],
    caseStudyRef: 'aether-dex',
    ctaHeadline: 'Scale your decentralized protocol to the world.',
    ctaButtonText: 'Launch Your Web3 Protocol →',
  },
  {
    id: 'crypto-companies',
    slug: 'crypto-companies',
    title: 'Crypto Companies',
    tagline: 'Technology, marketing and strategic growth.',
    heroHeadline: 'INSTITUTIONAL RELIABILITY FOR DIGITAL ASSET FIRMS.',
    description:
      'Turnkey solutions for crypto hedge funds, custody providers, OTC desks, neo-banks, and analytics platforms requiring enterprise-grade security and compliant growth.',
    audience: 'Crypto-native corporations, fintech platforms, institutional traders, and digital asset custodians.',
    challenges: [
      'Maintaining 99.99% infrastructure uptime under intense market volatility',
      'Stringent regulatory compliance and licensing requirements',
      'Attracting institutional liquidity and accredited participants',
      'Differentiating in an increasingly crowded global market',
    ],
    journeySteps: [
      { step: '01', title: 'Security & Compliance Blueprint', desc: 'Aligning with jurisdictional standards and multi-sig security protocols.' },
      { step: '02', title: 'High-Throughput Institutional Portal', desc: 'Building latency-sensitive trading portals, OTC dashboards, and reporting suites.' },
      { step: '03', title: 'B2B Brand Positioning & PR', desc: 'Placing leadership op-eds in Bloomberg, CoinDesk, and institutional publications.' },
      { step: '04', title: 'Liquidity & Partner Syndication', desc: 'Integrating tier-1 market makers and institutional custodian bridges.' },
    ],
    recommendedServices: [
      'Blockchain Solutions',
      'Web Development',
      'Crypto Marketing',
      'Market Making & Liquidity',
      'Fundraising Advisory',
    ],
    caseStudyRef: 'vortex-capital',
    ctaHeadline: 'Empower your digital asset enterprise.',
    ctaButtonText: 'Consult Our Specialists →',
  },
  {
    id: 'enterprise',
    slug: 'enterprise',
    title: 'Enterprise',
    tagline: 'Custom technology and automation.',
    heroHeadline: 'ENTERPRISE-GRADE ARCHITECTURES. SEAMLESS DIGITAL TRANSFORMATION.',
    description:
      'We engineer high-concurrency cloud software, intelligent AI agent workflows, and private distributed ledger solutions for global organizations and institutions.',
    audience: 'CIOs, CTOs, and innovation directors looking for an elite external engineering and AI strike team.',
    challenges: [
      'Slow internal development cycles burdened by legacy debt',
      'Complex security, SOC2, and data sovereignty requirements',
      'Need for specialized talent in AI agents and distributed systems',
      'Executive mandate to innovate without jeopardizing core revenue',
    ],
    journeySteps: [
      { step: '01', title: 'Executive Discovery & Feasibility', desc: 'Aligning business KPIs with state-of-the-art technological architectures.' },
      { step: '02', title: 'Private Sandboxed Prototyping', desc: 'Delivering working prototypes within 30 days in isolated secure environments.' },
      { step: '03', title: 'Enterprise System Integration', desc: 'Connecting with internal SAP, Salesforce, Oracle, and active directories.' },
      { step: '04', title: 'Production Rollout & Team Handover', desc: 'Comprehensive documentation, internal team training, and 24/7 SLA support.' },
    ],
    recommendedServices: [
      'Web Development',
      'AI Automation',
      'Blockchain Solutions',
      'Digital Growth',
    ],
    caseStudyRef: 'solis-cloud',
    ctaHeadline: 'Partner with our enterprise engineering practice.',
    ctaButtonText: 'Request Enterprise Consultation →',
  },
];

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: 'nexus-flow',
    slug: 'nexus-flow',
    title: 'NexusFlow: Multi-Tenant AI Automation SaaS for Financial Operations',
    client: 'NexusFlow Technologies',
    industry: 'Enterprise SaaS & FinTech',
    category: 'AI',
    year: '2025',
    summary:
      'Designed, engineered, and scaled an autonomous AI invoice and reconciliation engine, cutting enterprise financial reporting latency from 4 days to 8 minutes.',
    challenge:
      'NexusFlow required a secure, high-concurrency SaaS architecture capable of extracting unstructured data from millions of corporate invoices with 99.8% precision, while maintaining sub-second UI interactions for enterprise finance officers.',
    strategy:
      'We engineered a multi-tenant cloud architecture using Next.js, Python FastAPI, and LangChain agents coupled with Qdrant vector retrieval. We established a dark-mode enterprise UI adhering to strict financial ergonomics.',
    solution:
      'Delivered a full-stack platform featuring custom RAG parsing pipelines, automated bank feed reconciliations, SOC2-compliant encrypted audit trails, and automated email follow-up agents.',
    technologies: ['Next.js', 'TypeScript', 'FastAPI', 'Python', 'PostgreSQL', 'LangChain', 'OpenAI API', 'Tailwind CSS'],
    services: ['Web Development', 'AI Automation', 'Digital Growth'],
    results: [
      { metric: '99.8%', label: 'Extraction Precision' },
      { metric: '94%', label: 'Manual Time Saved' },
      { metric: '$4.2M', label: 'Series A Capital Raised' },
      { metric: '35k+', label: 'Monthly Active Invoices' },
    ],
    testimonial: {
      quote:
        'ORVEXIQ operated as our true technical co-founder. Their engineering quality, design precision, and speed allowed us to beat competitors to market and close our Series A effortlessly.',
      author: 'Julian Vance',
      role: 'Co-Founder & CEO, NexusFlow',
    },
    imageTheme: 'cyan',
  },
  {
    id: 'aether-dex',
    slug: 'aether-dex',
    title: 'AetherDEX: Next-Generation Cross-Chain Liquidity & Staking Protocol',
    client: 'Aether Protocol Foundation',
    industry: 'Web3 & Decentralized Finance',
    category: 'Web3',
    year: '2025',
    summary:
      'Architected smart contract vaults, developed gas-optimized frontend interfaces, and orchestrated a global TGE campaign resulting in $120M in Total Value Locked.',
    challenge:
      'Aether suffered from fragmented multi-chain liquidity, confusing wallet connection steps, and needed a coordinated go-to-market strategy across X and Telegram to establish credibility ahead of mainnet launch.',
    strategy:
      'We redesigned the entire DApp frontend with Account Abstraction and instant routing, optimized Solidity smart contracts for layer-2 batch settlements, and deployed a 40-KOL marketing campaign across North America and Asia.',
    solution:
      'Launched an audited decentralized exchange supporting seamless EVM swaps, real-time staking APR dashboards, and automated LP rebalancing vaults, accompanied by Tier-2 exchange listing advisory.',
    technologies: ['Solidity', 'Foundry', 'Wagmi / Viem', 'The Graph', 'Next.js', 'Tailwind CSS', 'Chainlink Oracles'],
    services: ['Web3 Development', 'Blockchain Solutions', 'Crypto Marketing', 'Exchange Listings', 'Market Making & Liquidity'],
    results: [
      { metric: '$120M+', label: 'Mainnet TVL Achieved' },
      { metric: '180k+', label: 'Unique Active Wallets' },
      { metric: '3', label: 'Major CEX Listings' },
      { metric: '0', label: 'Vulnerabilities in Audits' },
    ],
    testimonial: {
      quote:
        'From our smart contract hardening to our global Telegram expansion, ORVEXIQ proved to be the most proficient Web3 growth and technical partner we have ever collaborated with.',
      author: 'Dr. Elena Rostova',
      role: 'Head of Research, Aether Foundation',
    },
    imageTheme: 'purple',
  },
  {
    id: 'omni-retail',
    slug: 'omni-retail',
    title: 'OmniBrand: Modern E-Commerce Replatforming & Digital Collectible Loyalty',
    client: 'Omni Retail Group',
    industry: 'Consumer Goods & Retail',
    category: 'Web2',
    year: '2024',
    summary:
      'Re-engineered legacy monolithic storefront into headless Jamstack architecture with embedded digital ownership loyalty passes, surging mobile conversions by 68%.',
    challenge:
      'A 15-year-old consumer luxury brand faced declining mobile conversions, slow 5-second page loads, and lacked modern customer retention hooks for Gen-Z and digital-native shoppers.',
    strategy:
      'Implemented headless Next.js e-commerce architecture combined with a zero-friction digital loyalty passport powered by gasless polygon tokens, enabling VIP access and automated rewards.',
    solution:
      'Engineered an ultrafast sub-second storefront, integrated seamless Stripe and Apple Pay checkouts, and launched a gamified customer passport that rewards recurring purchases with real-world perks.',
    technologies: ['Next.js', 'React', 'Shopify Storefront API', 'Polygon', 'Tailwind CSS', 'Klaviyo', 'Algolia'],
    services: ['Web Development', 'Digital Growth', 'Web3 Development'],
    results: [
      { metric: '+68%', label: 'Mobile Conversion Rate' },
      { metric: '0.8s', label: 'Average Page Load' },
      { metric: '42%', label: 'Loyalty Retention Increase' },
      { metric: '$18M+', label: 'Annual Online GMV' },
    ],
    testimonial: {
      quote:
        'ORVEXIQ showed us how Web2 speed and Web3 loyalty can merge without confusing our non-technical customers. The numbers speak for themselves.',
      author: 'Marcus Sterling',
      role: 'Chief Digital Officer, Omni Retail',
    },
    imageTheme: 'emerald',
  },
  {
    id: 'vortex-capital',
    slug: 'vortex-capital',
    title: 'Vortex Global: Institutional Digital Asset Management & OTC Portal',
    client: 'Vortex Capital Partners',
    industry: 'Digital Asset Hedge Fund',
    category: 'Blockchain',
    year: '2025',
    summary:
      'Constructed a high-security institutional client portal with real-time portfolio analytics, multi-sig treasury approvals, and automated reporting.',
    challenge:
      'Vortex required a bank-grade client portal for high-net-worth individuals and family offices to track holdings, approve OTC block trades, and download encrypted audit tax logs in real time.',
    strategy:
      'Built a hardened zero-trust web application with biometrics, hardware-key authentication, real-time WebSocket pricing feeds, and automated balance reconciliation across custody partners.',
    solution:
      'A sleek, responsive dark-mode portal with millisecond latency, custom exportable PnL statements, and automated compliance KYC/AML verification workflows.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'WebSockets', 'AWS KMS', 'Fireblocks API'],
    services: ['Web Development', 'Blockchain Solutions', 'AI Automation'],
    results: [
      { metric: '$450M+', label: 'Assets Monitored in Portal' },
      { metric: '100%', label: 'Client Audit Compliance' },
      { metric: '<15ms', label: 'WebSocket Stream Latency' },
      { metric: '99.99%', label: 'SLA Uptime Maintained' },
    ],
    testimonial: {
      quote:
        'Our LPs consistently comment on how intuitive and institutional our portal feels. ORVEXIQ sets the benchmark for financial software design.',
      author: 'David Chen',
      role: 'Managing Partner, Vortex Capital',
    },
    imageTheme: 'amber',
  },
  {
    id: 'solis-cloud',
    slug: 'solis-cloud',
    title: 'Solis Energy: Enterprise Autonomous IoT & Carbon Credit Ledger',
    client: 'Solis Renewable Systems',
    industry: 'CleanTech & Enterprise IoT',
    category: 'Growth',
    year: '2024',
    summary:
      'Built a real-time smart grid telemetry engine and verified on-chain carbon offset registry, enabling automated carbon credit generation for solar microgrids.',
    challenge:
      'Solis needed to aggregate power metrics from 12,000 decentralized solar arrays and automatically mint verified carbon offset certificates without manual auditing paperwork.',
    strategy:
      'Designed an IoT data ingestion pipeline on AWS, connected to smart contracts for automated algorithmic verification, and deployed an interactive public portal showcasing verified offsets.',
    solution:
      'High-throughput streaming backend handling 50k events per second, public verifiability explorer, and enterprise corporate sustainability reporting suite.',
    technologies: ['Python', 'Kafka', 'Ethereum EVM', 'React', 'Docker', 'PostgreSQL', 'Tailwind CSS'],
    services: ['Web Development', 'Blockchain Solutions', 'AI Automation'],
    results: [
      { metric: '12k+', label: 'Connected Microgrids' },
      { metric: '50k/s', label: 'Telemetry Events Processed' },
      { metric: '1.4M', label: 'Tons CO2 Tracked' },
      { metric: '4x', label: 'Faster Credit Verification' },
    ],
    testimonial: {
      quote:
        'The technical depth of ORVEXIQ’s team is unmatched. They understood both complex enterprise IoT streaming and smart contract verifications flawlessly.',
      author: 'Claire Beaulieu',
      role: 'VP of Technology, Solis Renewable',
    },
    imageTheme: 'cyan',
  },
  {
    id: 'krypton-launch',
    slug: 'krypton-launch',
    title: 'Krypton Protocol: Global Community Growth & Tier-1 Listing Campaign',
    client: 'Krypton Labs',
    industry: 'Layer-2 Ecosystem',
    category: 'Marketing',
    year: '2025',
    summary:
      'Executed a 90-day viral distribution sprint, generating 240,000 community members and securing top-tier exchange listings upon mainnet genesis.',
    challenge:
      'Krypton had outstanding zero-knowledge roll-up technology but lacked retail market visibility and was struggling to capture mindshare against incumbent L2 competitors.',
    strategy:
      'Engineered a multi-phase narrative campaign: "The Uncensored Scalability Era", partnering with 35 top crypto YouTubers, researchers, and podcast hosts while orchestrating viral testnet quests.',
    solution:
      'Delivered 14 million impressions, coordinated 2 Tier-1 CEX listing reviews, managed 24/7 multilingual Telegram groups, and oversaw institutional market maker onboarding.',
    technologies: ['Zealy', 'Galxe', 'X Campaign Suite', 'Telegram Bot Automation', 'Dune Analytics'],
    services: ['Crypto Marketing', 'Exchange Listings', 'Market Making & Liquidity', 'Digital Growth'],
    results: [
      { metric: '240k+', label: 'Verified Community Members' },
      { metric: '14M+', label: 'Organic X Impressions' },
      { metric: 'Top 5', label: 'Trending on CoinGecko' },
      { metric: '2', label: 'Tier-1 Listing Commitments' },
    ],
    testimonial: {
      quote:
        'ORVEXIQ turned our technical whitepaper into an industry-wide movement. They know how to command attention in crypto like no other.',
      author: 'Tariq Mansour',
      role: 'Head of Growth, Krypton Labs',
    },
    imageTheme: 'purple',
  },
];

export const TEAM_DATA: TeamMember[] = [
  {
    id: 'alexander-cross',
    name: 'Alexander Cross',
    position: 'Chief Executive Officer & Founder',
    roleCategory: 'Leadership',
    bio: 'Former venture partner and serial tech founder with 12+ years leading digital product agencies, SaaS platforms, and Web3 incubations across SF and London.',
    expertise: ['Corporate Strategy', 'Venture Capital', 'Tokenomics', 'Enterprise Architecture'],
    linkedin: 'https://linkedin.com/in/orvexiq-alexander',
    twitter: 'https://x.com/alex_orvexiq',
    avatarSeed: 'Alexander',
  },
  {
    id: 'sarah-zhang',
    name: 'Sarah Zhang',
    position: 'Chief Technology Officer',
    roleCategory: 'Leadership',
    bio: 'Former distributed systems staff engineer at Tier-1 cloud infrastructure providers. Directing ORVEXIQ’s full-stack and blockchain engineering practices.',
    expertise: ['Distributed Systems', 'Smart Contract Security', 'Next.js', 'High-concurrency APIs'],
    linkedin: 'https://linkedin.com/in/orvexiq-sarah',
    twitter: 'https://x.com/sarah_tech',
    avatarSeed: 'Sarah',
  },
  {
    id: 'marcus-vance',
    name: 'Marcus Vance',
    position: 'Head of Web3 & Blockchain Solutions',
    roleCategory: 'Web3',
    bio: 'Smart contract security researcher and EVM optimization specialist. Architected on-chain protocols securing over $200M in cumulative TVL.',
    expertise: ['Solidity', 'Foundry', 'Rust', 'EVM Architecture', 'DeFi Protocols'],
    linkedin: 'https://linkedin.com/in/orvexiq-marcus',
    twitter: 'https://x.com/marcus_eth',
    avatarSeed: 'Marcus',
  },
  {
    id: 'charlotte-dupre',
    name: 'Charlotte Dupré',
    position: 'VP of Growth & Marketing',
    roleCategory: 'Growth & Strategy',
    bio: 'Growth strategist specializing in viral crypto narratives, tier-1 PR campaigns, and programmatic acquisition models. Former lead at top international marketing firms.',
    expertise: ['KOL Syndication', 'Viral Growth', 'Public Relations', 'Brand Narrative'],
    linkedin: 'https://linkedin.com/in/orvexiq-charlotte',
    twitter: 'https://x.com/charlotte_growth',
    avatarSeed: 'Charlotte',
  },
  {
    id: 'kenji-sato',
    name: 'Kenji Sato',
    position: 'Head of AI & Automation Systems',
    roleCategory: 'Engineering',
    bio: 'Machine learning specialist focused on autonomous agentic systems, enterprise RAG workflows, and real-time LLM integration for business operations.',
    expertise: ['LLM Orchestration', 'LangChain', 'Vector Search', 'Process Automation'],
    linkedin: 'https://linkedin.com/in/orvexiq-kenji',
    avatarSeed: 'Kenji',
  },
  {
    id: 'elena-morales',
    name: 'Elena Morales',
    position: 'Head of Strategic Partnerships & Listings',
    roleCategory: 'Growth & Strategy',
    bio: 'Former institutional exchange BD director with extensive relationships across international crypto exchanges, market makers, and liquidity funds.',
    expertise: ['Exchange BD', 'Liquidity Strategy', 'Institutional Partnerships', 'Compliance'],
    linkedin: 'https://linkedin.com/in/orvexiq-elena',
    avatarSeed: 'Elena',
  },
];

export const INSIGHTS_DATA: InsightArticle[] = [
  {
    id: 'bridging-web2-to-web3',
    slug: 'bridging-web2-to-web3-playbook',
    title: 'From Web2 to Web3: The Enterprise Migration Playbook for 2026',
    excerpt:
      'A strategic breakdown of how established brands and SaaS businesses can integrate decentralized protocols and digital assets without compromising security or user experience.',
    category: 'Technology',
    readTime: '6 min read',
    author: {
      name: 'Alexander Cross',
      role: 'CEO & Founder',
      avatar: 'Alexander',
    },
    publishDate: 'May 14, 2026',
    keyTakeaways: [
      'Account abstraction makes crypto complexity completely invisible to end consumers.',
      'Hybrid architectures allow businesses to keep core databases secure while leveraging blockchain for transparency and loyalty.',
      'Regulated token utilities outperform speculative tokenomics in long-term enterprise value creation.',
    ],
    content: [
      'For the past decade, Web2 and Web3 existed in parallel universes. Web2 mastered frictionless user experience, sub-second latency, and behavioral conversion funnels. Web3 revolutionized provenance, programmatic settlement, and global liquidity.',
      'Today, the dividing line is dissolving. Through technologies like ERC-4337 Account Abstraction, passkeys, and fiat-denominated on-ramps, businesses can offer decentralized benefits without requiring users to store 12-word seed phrases or manage volatile gas fees.',
      'In this article, we examine the three pillars of a successful enterprise Web3 migration: architectural decoupling, regulatory compliance alignment, and community-driven incentive loops.',
    ],
    tags: ['Web3 Migration', 'Enterprise Tech', 'Account Abstraction', 'Digital Strategy'],
  },
  {
    id: 'ai-agents-modern-operating-system',
    slug: 'autonomous-ai-agents-for-business',
    title: 'Autonomous AI Agents: Redefining the Enterprise Operating System',
    excerpt:
      'Why simple chatbots are obsolete and how multi-agent autonomous pipelines are transforming customer operations, sales intelligence, and financial reconciliation.',
    category: 'AI',
    readTime: '8 min read',
    author: {
      name: 'Kenji Sato',
      role: 'Head of AI Systems',
      avatar: 'Kenji',
    },
    publishDate: 'June 02, 2026',
    keyTakeaways: [
      'Autonomous agents make decisions based on dynamic state machines rather than static rule trees.',
      'Retrieval-Augmented Generation (RAG) coupled with vector database caching guarantees reliable enterprise accuracy.',
      'High-performing companies use AI to augment human capacity, reducing cycle times from days to minutes.',
    ],
    content: [
      'The era of conversational novelty is behind us. Enterprise leaders no longer care about AI that can compose generic poetry; they demand AI agents that can read an invoice, verify its PO against SAP, cross-reference inventory in MongoDB, and trigger an automated payment workflow via Stripe.',
      'By designing multi-agent architectures where specialized models evaluate each other’s outputs through adversarial verification loops, hallucination rates drop below 0.1%, unlocking true autonomous capability in mission-critical environments.',
    ],
    tags: ['AI Agents', 'Automation', 'LangChain', 'Enterprise AI'],
  },
  {
    id: 'liquidity-and-exchange-strategy-guide',
    slug: 'crypto-liquidity-and-exchange-listing-guide',
    title: 'The Reality of Exchange Listings: What Listing Committees Look For',
    excerpt:
      'An insider guide to debunking broker myths, structuring legal opinions, and preparing your protocol for institutional Tier-1 and Tier-2 exchange reviews.',
    category: 'Fundraising',
    readTime: '7 min read',
    author: {
      name: 'Elena Morales',
      role: 'Head of Strategic Partnerships',
      avatar: 'Elena',
    },
    publishDate: 'July 19, 2026',
    keyTakeaways: [
      'No third-party agency can guarantee exchange approval—beware of predatory listing brokers.',
      'Exchanges prioritize active on-chain metrics, genuine retail transaction volume, and clear legal opinions over vanity follower counts.',
      'Coordinating with professional algorithmic market makers is mandatory to maintain healthy bid-ask spreads post-listing.',
    ],
    content: [
      'Every week, ambitious crypto founders lose substantial capital to fraudulent intermediaries promising guaranteed listings on premier exchanges. The reality of Tier-1 and Tier-2 listing committees is deeply institutional.',
      'Exchanges evaluate regulatory exposure, smart contract audit reports, liquidity provider commitments, and on-chain user retention. In this guide, we walk step-by-step through the documentation requirements and due diligence checklists required to pass rigorous exchange reviews.',
    ],
    tags: ['Exchange Listing', 'Market Making', 'Crypto Compliance', 'Tokenomics'],
  },
  {
    id: 'high-conversion-web-engineering',
    slug: 'high-conversion-modern-web-engineering',
    title: 'Sub-Second Latency & Editorial Typography: Building SaaS Products That Convert',
    excerpt:
      'How front-end performance, typographic hierarchy, and intuitive micro-interactions directly drive enterprise SaaS valuation and customer acquisition.',
    category: 'Web2',
    readTime: '5 min read',
    author: {
      name: 'Sarah Zhang',
      role: 'Chief Technology Officer',
      avatar: 'Sarah',
    },
    publishDate: 'August 11, 2026',
    keyTakeaways: [
      'Every 100ms delay in page load time drops enterprise demo requests by up to 7%.',
      'Editorial typography and deliberate negative space convey enterprise maturity and premium brand pricing power.',
      'Server-side rendering and edge distribution ensure instant global responsiveness across all devices.',
    ],
    content: [
      'Your website is the single most scrutinized asset in your company’s sales pipeline. Enterprise buyers judge technological competence within seconds of landing on your page.',
      'When your interface loads instantaneously, features high-contrast typography, and avoids generic stock tropes, prospective clients subconsciously recognize that your backend engineering matches the polish of your presentation.',
    ],
    tags: ['Frontend Engineering', 'Next.js', 'Design Systems', 'Conversion Optimization'],
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    quote:
      'ORVEXIQ is the rare agency that executes with the technical precision of a Silicon Valley engineering firm and the speed of a Web3 venture studio. They built our entire DApp and helped us scale to $120M in TVL.',
    author: 'Dr. Elena Rostova',
    role: 'Head of Research',
    company: 'Aether Protocol Foundation',
    projectType: 'Web3 & DeFi Development',
    rating: 5,
  },
  {
    id: 'test-2',
    quote:
      'They redesigned our core SaaS product and modernized our entire lead generation funnel. Our demo conversion rate increased by 68% in the first 45 days after launch.',
    author: 'Julian Vance',
    role: 'Co-Founder & CEO',
    company: 'NexusFlow Technologies',
    projectType: 'Enterprise SaaS & AI Automation',
    rating: 5,
  },
  {
    id: 'test-3',
    quote:
      'In the crypto space, finding honest, high-caliber partners who actually understand liquidity and exchange listing committees is nearly impossible. ORVEXIQ delivered on every single milestone without vanity hype.',
    author: 'Tariq Mansour',
    role: 'Head of Growth',
    company: 'Krypton Labs',
    projectType: 'Crypto Marketing & Exchange Advisory',
    rating: 5,
  },
  {
    id: 'test-4',
    quote:
      'Their team guided our traditional retail enterprise through modern headless web development and a seamless digital collectibles loyalty program. Absolute world-class execution.',
    author: 'Marcus Sterling',
    role: 'Chief Digital Officer',
    company: 'Omni Retail Group',
    projectType: 'Web Development & Digital Growth',
    rating: 5,
  },
];

export const CAREERS_DATA: CareerPosition[] = [
  {
    id: 'senior-fullstack-engineer',
    title: 'Senior Full-Stack Engineer (Next.js & TypeScript)',
    department: 'Engineering',
    location: 'Remote (Global)',
    type: 'Full-time',
    description:
      'We are looking for a senior engineer who crafts responsive, high-performance web applications using React, Next.js, TypeScript, Tailwind, and Node.js.',
    requirements: [
      '5+ years of production experience in TypeScript and modern React',
      'Deep mastery of SSR, edge caching, and Next.js App Router',
      'Strong eye for design, typography, micro-interactions, and accessibility',
      'Experience integrating complex third-party APIs and relational databases',
    ],
  },
  {
    id: 'smart-contract-engineer',
    title: 'Senior Smart Contract Engineer (Solidity / Rust)',
    department: 'Web3 Engineering',
    location: 'Remote (US/EU/Asia)',
    type: 'Full-time',
    description:
      'Lead the architecture, testing, and formal verification of multi-chain smart contracts, DeFi vaults, and token utility standards for top-tier Web3 clients.',
    requirements: [
      '3+ years deploying audited Solidity and/or Rust smart contracts on mainnet',
      'Proficiency with Foundry, Hardhat, fuzzing, and invariant security testing',
      'Deep understanding of EVM internals, gas optimization, and proxy patterns',
      'Demonstrated track record with leading security audit remediations',
    ],
  },
  {
    id: 'crypto-growth-lead',
    title: 'Web3 Growth & Marketing Director',
    department: 'Growth & Strategy',
    location: 'Remote (Global)',
    type: 'Full-time',
    description:
      'Lead strategic narrative campaigns, KOL syndication, and community growth initiatives for emerging decentralized protocols and token generation events.',
    requirements: [
      'Proven track record scaling Web3 communities across X, Telegram, and Discord',
      'Direct, verifiable relationships with top crypto KOLs, researchers, and media',
      'Strong grasp of tokenomics, market sentiment, and community psychology',
      'Exceptional analytical skills tracking on-chain conversions and campaign ROI',
    ],
  },
  {
    id: 'ai-solutions-architect',
    title: 'AI Automation & Agents Architect',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description:
      'Design enterprise autonomous agent pipelines, custom vector search architectures, and automated business integrations for global clients.',
    requirements: [
      'Experience building production RAG systems and multi-agent workflows',
      'Proficiency with Python, FastAPI, LangChain/LlamaIndex, and vector databases',
      'Understanding of model evaluation, guardrails, and enterprise security',
    ],
  },
];

export const GENERAL_FAQS = [
  {
    question: 'How does ORVEXIQ differ from traditional marketing or development agencies?',
    answer:
      'ORVEXIQ is a hybrid technology consultancy and venture studio. We don’t just build mockups or run ads; we write production code, audit smart contracts, build autonomous AI pipelines, connect with venture capital, and advise on institutional exchange listings.',
  },
  {
    question: 'Can ORVEXIQ assist with both Web2 and Web3 simultaneously?',
    answer:
      'Yes. Our foundational philosophy is that the most successful companies build across both worlds. We help Web2 businesses safely embrace digital assets and AI, while helping Web3 protocols achieve consumer-grade UX and institutional stability.',
  },
  {
    question: 'Where are your teams and offices located?',
    answer:
      'ORVEXIQ operates globally with key strategic hubs in San Francisco, London, Singapore, and Dubai. Our distributed engineering team collaborates across all primary time zones.',
  },
  {
    question: 'What is the typical engagement structure and timeline?',
    answer:
      'We engage either through focused milestone-based project deliveries (typically 4 to 12 weeks) or ongoing monthly strategic retainer partnerships with dedicated engineering, growth, and advisory teams.',
  },
  {
    question: 'How do we get started?',
    answer:
      'Click "Start a Project" or contact us via our interactive form, Telegram, or email. We will schedule a confidential discovery call within 24 hours to review your architecture and growth goals.',
  },
];
