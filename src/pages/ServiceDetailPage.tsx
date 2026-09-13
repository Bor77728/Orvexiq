import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Layers,
  Cpu,
  Zap,
  TrendingUp,
  BarChart,
  Code2,
  Database,
  Network,
  Users,
  Send,
  HelpCircle,
} from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { CTABanner } from '../components/common/CTABanner';
import { SeoHelmet } from '../components/common/SeoHelmet';
import { SERVICES_DATA, CASE_STUDIES_DATA } from '../data/siteData';

interface ServiceDetailPageProps {
  customSlug?: string;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ customSlug }) => {
  const { slug } = useParams<{ slug: string }>();
  const activeSlug = customSlug || slug;

  const service = SERVICES_DATA.find((s) => s.slug === activeSlug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const relatedCaseStudies = CASE_STUDIES_DATA.filter((cs) =>
    cs.services.some((srv) => srv.toLowerCase().includes(service.title.toLowerCase()) || service.title.toLowerCase().includes(srv.toLowerCase()))
  ).slice(0, 2);

  return (
    <div className="relative">
      <SeoHelmet
        title={`${service.title} | ORVEXIQ`}
        description={service.shortDescription}
      />

      {/* Hero */}
      <PageHero
        breadcrumbs={[
          { label: 'Services', path: '/services' },
          { label: service.title },
        ]}
        badge={`SERVICE ${service.number} • ${service.category.toUpperCase()}`}
        headline={service.tagline.toUpperCase()}
        description={service.longDescription}
        primaryCtaText={service.ctaText}
        primaryCtaLink={`/contact?service=${service.slug}`}
        secondaryCtaText="Explore Case Studies"
        secondaryCtaLink="/work"
        highlights={service.deliverables.slice(0, 4)}
        metaNote={
          service.slug === 'exchange-listing'
            ? 'Strategic support and introductions subject to exchange review and compliance approval.'
            : service.slug === 'fundraising'
            ? 'Advisory services provided strictly under non-guaranteed market standards.'
            : undefined
        }
      />

      {/* CORE DELIVERABLES & FEATURES GRID */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#00D4FF] mb-2">
            Scope & Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            What We Deliver For Your Organization
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {service.features.map((feat, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-[#10151C] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-xs font-mono font-bold text-[#7C3AED]">
                    0{i + 1}
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#00D4FF] transition-colors">
                    {feat.title}
                  </h3>
                </div>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Deliverables Checklist Pill Box */}
        <div className="mt-12 p-8 rounded-2xl bg-[#0B0F14] border border-white/5">
          <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-6">
            Complete Deliverables Checklist
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.deliverables.map((del, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-[#00D4FF] shrink-0 mt-0.5" />
                <span>{del}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALIZED DIAGRAMS & WORKFLOWS */}

      {/* 1. If Web Development: Problem -> Solution -> Tech Stack */}
      {service.slug === 'web-development' && (
        <section className="py-20 bg-[#0B0F14]/70 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#7C3AED]">
                  The Architecture Gap
                </span>
                <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  Problem → Solution Blueprint
                </h3>
                <div className="space-y-4">
                  <div className="p-5 rounded-xl bg-red-500/10 border border-red-500/20">
                    <div className="text-sm font-bold text-red-400 mb-1">Common Pitfall:</div>
                    <p className="text-xs text-gray-300">
                      Slow page rendering, bloated WordPress plugins, fragmented APIs, and zero SEO retention causing customer drop-off.
                    </p>
                  </div>
                  <div className="p-5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <div className="text-sm font-bold text-emerald-400 mb-1">ORVEXIQ Solution:</div>
                    <p className="text-xs text-gray-300">
                      Sub-second Next.js server components, edge CDN routing, secure backend microservices, and 99.99% uptime guarantees.
                    </p>
                  </div>
                </div>
              </div>

              {/* Technologies Grid */}
              <div className="p-8 rounded-3xl bg-[#10151C] border border-white/10">
                <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-[#00D4FF]" />
                  <span>Production Technology Stack</span>
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    'Next.js 15',
                    'React 19',
                    'TypeScript',
                    'Node.js',
                    'Python FastAPI',
                    'PostgreSQL',
                    'MongoDB',
                    'Tailwind CSS',
                    'Redis Caching',
                    'AWS & Cloudflare Edge',
                  ].map((tech, i) => (
                    <span
                      key={i}
                      className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 2. If Web3 Development: Architecture, Security, Testing, Deployment */}
      {service.slug === 'web3-development' && (
        <section className="py-20 bg-[#0B0F14]/70 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-[#00D4FF]">
                Engineering Rigor
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
                The 6 Pillars of Web3 Product Security
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { title: 'Architecture', desc: 'Gas-efficient state structures & clean EVM boundaries.' },
                { title: 'Development', desc: 'Component interfaces built on Viem and Wagmi.' },
                { title: 'Security', desc: 'Strict checks against reentrancy and oracle manipulation.' },
                { title: 'Testing', desc: 'Comprehensive Foundry fuzzing & simulated forks.' },
                { title: 'Deployment', desc: 'Deterministic CREATE2 deployment scripts.' },
                { title: 'Maintenance', desc: '24/7 mempool telemetry and RPC failovers.' },
              ].map((p, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#10151C] border border-white/10 text-center space-y-2">
                  <div className="text-xs font-mono font-bold text-[#7C3AED]">0{idx + 1}</div>
                  <div className="text-base font-bold text-white">{p.title}</div>
                  <p className="text-xs text-gray-400">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. If Blockchain Development: Visual Architecture Diagram & Multi-Chain */}
      {service.slug === 'blockchain-development' && (
        <section className="py-20 bg-[#0B0F14]/70 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-[#7C3AED]">
                On-Chain Architecture
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
                Smart Contract & Multi-Chain Topology
              </h3>
            </div>

            {/* Architecture Diagram */}
            <div className="p-8 sm:p-12 rounded-3xl bg-[#10151C] border border-white/10 max-w-4xl mx-auto space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-xs text-gray-400 uppercase font-mono">Layer 1</span>
                  <div className="text-base font-bold text-white mt-1">Execution Layer</div>
                  <div className="text-xs text-[#00D4FF] mt-1">Solidity / Rust / EVM</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-xs text-gray-400 uppercase font-mono">Layer 2</span>
                  <div className="text-base font-bold text-white mt-1">Interoperability</div>
                  <div className="text-xs text-[#7C3AED] mt-1">LayerZero / Chainlink CCIP</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-xs text-gray-400 uppercase font-mono">Layer 3</span>
                  <div className="text-base font-bold text-white mt-1">Data Indexing</div>
                  <div className="text-xs text-emerald-400 mt-1">The Graph / Custom Subgraphs</div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 text-center">
                <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold block mb-4">
                  Supported Blockchains & Networks
                </span>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {['Ethereum', 'BNB Chain', 'Polygon', 'Solana', 'Arbitrum', 'Base', 'Optimism', 'Avalanche'].map((chain, i) => (
                    <span key={i} className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-bold text-gray-200">
                      {chain}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. If Crypto Marketing: Campaign Packages & Workflow */}
      {service.slug === 'crypto-marketing' && service.packages && (
        <section className="py-20 bg-[#0B0F14]/70 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-[#00D4FF]">
                Campaign Execution
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
                Campaign Workflow & Packages
              </h3>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-gray-400">
                <span>Strategy</span> → <span>Distribution</span> → <span>Community</span> → <span>Conversion</span> → <span>Growth</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.packages.map((pkg, idx) => (
                <div
                  key={idx}
                  className={`p-8 rounded-3xl border flex flex-col justify-between ${
                    pkg.badge === 'Most Popular'
                      ? 'bg-[#10151C] border-[#7C3AED] shadow-2xl shadow-[#7C3AED]/20'
                      : 'bg-[#10151C]/60 border-white/10'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-white/5 text-[#00D4FF]">
                        {pkg.badge}
                      </span>
                    </div>
                    <h4 className="text-2xl font-black text-white">{pkg.name}</h4>
                    <p className="mt-2 text-xs text-gray-400">{pkg.priceDescription}</p>

                    <div className="mt-6 pt-6 border-t border-white/5 space-y-3">
                      {pkg.features.map((f, fi) => (
                        <div key={fi} className="flex items-start gap-2 text-xs text-gray-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#7C3AED] shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/5">
                    <Link
                      to={`/contact?package=${pkg.name}`}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-semibold transition-colors"
                    >
                      <span>Inquire About Package</span>
                      <ArrowRight className="w-4 h-4 text-[#00D4FF]" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. If Exchange Listing: Tier 1, 2, 3 Comparison Cards */}
      {service.slug === 'exchange-listing' && service.tiers && (
        <section className="py-20 bg-[#0B0F14]/70 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-[#00D4FF]">
                Listing Governance
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
                Tier 1, Tier 2, & Tier 3 Strategy
              </h3>
              <p className="mt-4 text-xs text-amber-400/90 font-medium">
                Important: Strategic support and introductions subject to exchange review and approval. No guaranteed approvals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.tiers.map((tier, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-[#10151C] border border-white/10 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#00D4FF] uppercase">{tier.badge}</span>
                    <h4 className="text-2xl font-black text-white mt-1 mb-3">{tier.name}</h4>
                    <p className="text-xs text-gray-300 mb-6">{tier.description}</p>

                    <div className="space-y-2.5 pt-4 border-t border-white/5">
                      {tier.highlights.map((h, hi) => (
                        <div key={hi} className="flex items-start gap-2 text-xs text-gray-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00D4FF] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/5">
                    <div className="text-[11px] text-gray-400 italic">
                      Best for: {tier.suitableFor}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. If Fundraising: Investor Ecosystem Categories */}
      {service.slug === 'fundraising' && (
        <section className="py-20 bg-[#0B0F14]/70 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-[#00D4FF]">
                Capital Network
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
                The Investor Ecosystem Network
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {['Venture Capital Funds', 'Angel Syndicates', 'Web3 Ecosystem Funds', 'Family Offices', 'Strategic Investors'].map((cat, i) => (
                <div key={i} className="p-6 rounded-2xl bg-[#10151C] border border-white/10 text-center space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 mx-auto flex items-center justify-center text-[#00D4FF]">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div className="text-sm font-bold text-white">{cat}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. If Market Making: Liquidity Ecosystem Diagram */}
      {service.slug === 'market-making' && (
        <section className="py-20 bg-[#0B0F14]/70 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-[#7C3AED]">
                Quantitative Liquidity
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
                Secondary Market Liquidity Ecosystem
              </h3>
              <p className="mt-3 text-xs text-gray-400">
                Ethical algorithmic liquidity provision. Zero wash trading or price manipulation.
              </p>
            </div>

            <div className="p-8 sm:p-12 rounded-3xl bg-[#10151C] border border-white/10 max-w-4xl mx-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-base font-bold text-white">CEX Order Books</div>
                  <div className="text-xs text-gray-400 mt-1">Bid-Ask spread compression & depth</div>
                </div>
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-base font-bold text-white">Algorithmic Router</div>
                  <div className="text-xs text-[#00D4FF] mt-1">Multi-venue price synchronization</div>
                </div>
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-base font-bold text-white">DEX Liquidity Pools</div>
                  <div className="text-xs text-gray-400 mt-1">Uniswap v3 / Raydium ranges</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 8. If AI Automation: Visual Input -> AI -> Automation -> Business Outcome */}
      {service.slug === 'ai-automation' && (
        <section className="py-20 bg-[#0B0F14]/70 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-[#00D4FF]">
                Workflow Pipeline
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
                Input → AI → Automation → Business Outcome
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { stage: '1. Input', title: 'Data Ingestion', desc: 'Customer chats, ERP invoices, web forms, emails.' },
                { stage: '2. AI Engine', title: 'Contextual Parsing', desc: 'LLM agents + vector DB RAG with custom guardrails.' },
                { stage: '3. Automation', title: 'System Triggering', desc: 'Auto CRM updates, invoice settlement, Slack alerts.' },
                { stage: '4. Outcome', title: 'Measurable Value', desc: '94% time saved, 24/7 responsiveness, zero latency.' },
              ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#10151C] border border-white/10 space-y-2">
                  <span className="text-xs font-mono font-bold text-[#00D4FF]">{item.stage}</span>
                  <div className="text-lg font-bold text-white">{item.title}</div>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 9. If Digital Growth: Growth Funnel Visualization */}
      {service.slug === 'digital-growth' && (
        <section className="py-20 bg-[#0B0F14]/70 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-[#7C3AED]">
                Engineered Acquisition
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
                The Compounding Growth Funnel
              </h3>
            </div>

            <div className="max-w-4xl mx-auto space-y-3">
              {[
                { step: 'Traffic', metric: 'Omnichannel & SEO', desc: 'Targeted search intent, programmatic landing pages, and paid ads.' },
                { step: 'Engagement', metric: 'Interactive Experience', desc: 'Sub-second speeds, frictionless copy, and social proof.' },
                { step: 'Leads', metric: 'High-Intent Capture', desc: 'Value-first lead magnets, automated qualification bots, and forms.' },
                { step: 'Conversion', metric: 'Sales & Checkout', desc: 'Optimized checkouts, trial onboarding, and frictionless payments.' },
                { step: 'Retention', metric: 'Expansion Loops', desc: 'Automated lifecycle emails, product nudges, and referral engines.' },
              ].map((fnl, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#10151C] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-xs font-mono font-bold text-[#00D4FF]">
                      0{idx + 1}
                    </span>
                    <div>
                      <div className="text-base font-bold text-white">{fnl.step}</div>
                      <div className="text-xs text-gray-400">{fnl.desc}</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded bg-[#7C3AED]/20 text-[#A78BFA] border border-[#7C3AED]/30 shrink-0">
                    {fnl.metric}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RELATED CASE STUDIES */}
      {relatedCaseStudies.length > 0 && (
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/5">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Featured Case Studies in {service.title}
            </h3>
            <Link to="/work" className="text-sm font-semibold text-[#00D4FF] hover:underline">
              All Case Studies →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedCaseStudies.map((cs) => (
              <div key={cs.id} className="p-6 rounded-2xl bg-[#10151C] border border-white/10 space-y-4">
                <span className="text-xs font-mono text-gray-500">{cs.client}</span>
                <h4 className="text-xl font-bold text-white">{cs.title}</h4>
                <p className="text-xs text-gray-400 line-clamp-2">{cs.summary}</p>
                <div className="pt-2">
                  <Link to={`/work/${cs.slug}`} className="text-xs font-bold text-[#00D4FF] hover:underline">
                    View Full Results →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FREQUENTLY ASKED QUESTIONS */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/5">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Frequently Asked Questions
            </h3>
          </div>
          <FAQAccordion faqs={service.faqs} />
        </section>
      )}

      {/* CTA */}
      <CTABanner
        headline={`DISCUSS YOUR ${service.title.toUpperCase()}`}
        subheadline="Connect directly with our practice leads to review technical specifications, timelines, and commercial models."
        primaryButtonText={service.ctaText}
        primaryButtonLink={`/contact?service=${service.slug}`}
      />
    </div>
  );
};
