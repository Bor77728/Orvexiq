import React, { useState } from 'react';
import {
  ArrowRight,
  Briefcase,
  MapPin,
  Clock,
  CheckCircle2,
  DollarSign,
  Heart,
  Laptop,
  Sparkles,
  Send,
} from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { SeoHelmet } from '../components/common/SeoHelmet';
import { COMPANY_INFO } from '../data/siteData';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
}

const OPEN_POSITIONS: JobPosition[] = [
  {
    id: 'sr-solidity-engineer',
    title: 'Senior Smart Contract & Protocol Engineer',
    department: 'Web3 & Blockchain',
    location: 'Remote (Global) / London',
    type: 'Full-time',
    experience: '4+ Years in EVM / Foundry',
    description:
      'Architect, audit, and deploy high-security DeFi protocols, token vesting contracts, and multi-chain liquidity adapters.',
    requirements: [
      'Mastery of Solidity, Foundry, Hardhat, and EVM internals',
      'Track record of passing external security audits (OpenZeppelin, Trail of Bits, CertiK)',
      'Experience with LayerZero, Chainlink CCIP, and ERC-4337 account abstraction',
    ],
  },
  {
    id: 'sr-fullstack-dev',
    title: 'Lead Full-Stack Web & SaaS Architect',
    department: 'Technology',
    location: 'Remote (Global) / San Francisco',
    type: 'Full-time',
    experience: '5+ Years in Next.js / TypeScript',
    description:
      'Lead frontend & backend squads delivering high-concurrency SaaS applications, customer portals, and real-time trading dashboards.',
    requirements: [
      'Expert proficiency in Next.js 15 App Router, React 19, and Tailwind CSS',
      'Solid experience with Node.js, Python FastAPI, PostgreSQL, and Redis caching',
      'Knowledge of Web3 client libraries (Viem, Wagmi) is a strong plus',
    ],
  },
  {
    id: 'crypto-growth-lead',
    title: 'Crypto Growth & KOL Campaign Director',
    department: 'Growth & Marketing',
    location: 'Remote (Global) / Dubai',
    type: 'Full-time',
    experience: '3+ Years in Web3 Marketing',
    description:
      'Design, orchestrate, and execute viral community, Telegram, Twitter/X, and KOL campaigns for tier-1 token launches and TGEs.',
    requirements: [
      'Direct, established relationships with top crypto KOLs, YouTubers, and alpha groups',
      'Data-driven understanding of token launch funnels and on-chain conversion metrics',
      'Exceptional copywriting and community mobilization leadership',
    ],
  },
  {
    id: 'ai-automation-engineer',
    title: 'AI Automation & Agents Specialist',
    department: 'AI & Automation',
    location: 'Remote (Global) / Singapore',
    type: 'Full-time',
    experience: '2+ Years in LLM Ops & RAG',
    description:
      'Build enterprise AI agent workflows, vector RAG retrieval pipelines, and CRM automated integrations for global corporate clients.',
    requirements: [
      'Deep hands-on experience with LangChain, LlamaIndex, OpenAI, and Gemini APIs',
      'Proficiency in Python, FastAPI, and Vector databases (Pinecone, pgvector)',
      'Experience with webhooks, Zapier/Make enterprise connectors, and CRM APIs',
    ],
  },
];

export const CareersPage: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [applied, setApplied] = useState(false);

  const perks = [
    {
      title: 'Global Remote Freedom',
      desc: 'Work from anywhere on the planet with flexible synchronous overlap windows.',
      icon: Laptop,
    },
    {
      title: 'Competitive Compensation & Token Incentives',
      desc: 'Top-tier base salary with upside in client venture pools and token ecosystems.',
      icon: DollarSign,
    },
    {
      title: 'Health & Wellness Stipend',
      desc: 'Comprehensive medical insurance and monthly fitness / wellness allocations.',
      icon: Heart,
    },
    {
      title: 'Frontier Tech Exposure',
      desc: 'Work on cutting-edge Web3 protocols, AI agents, and Tier-1 institutional launches.',
      icon: Sparkles,
    },
  ];

  return (
    <div>
      <SeoHelmet
        title="Careers & Open Positions | ORVEXIQ"
        description="Join ORVEXIQ's global distributed engineering and growth team. View open positions in smart contracts, full-stack development, and Web3 marketing."
      />

      <PageHero
        breadcrumbs={[
          { label: 'About', path: '/about' },
          { label: 'Careers' },
        ]}
        badge="JOIN ORVEXIQ"
        headline="BUILD WHAT'S NEXT WITH US."
        description="We are constantly seeking world-class engineers, cryptographic researchers, algorithmic marketers, and product leaders who thrive at the intersection of Web2 and Web3."
        primaryCtaText="View Open Positions"
        primaryCtaLink="#positions"
        secondaryCtaText="Learn About Culture"
        secondaryCtaLink="#culture"
        highlights={[
          '100% Remote Global Team',
          'Token Upside Opportunities',
          'High-Velocity Sprints',
          'Autonomous Culture',
        ]}
      />

      {/* CULTURE & PERKS */}
      <section id="culture" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#00D4FF]">
            Life at ORVEXIQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
            Built for Autonomy, Excellence & Impact
          </h2>
          <p className="mt-4 text-gray-300 text-base">
            No micromanagement, no bureaucratic meetings. We judge people solely by the elegance of their code and the magnitude of their results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="p-8 rounded-3xl bg-[#10151C] border border-white/10 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#7C3AED]">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">{p.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* OPEN POSITIONS DIRECTORY */}
      <section id="positions" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#7C3AED]">
              Opportunities
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
              Active Job Openings ({OPEN_POSITIONS.length})
            </h2>
          </div>
          <a
            href={`mailto:${COMPANY_INFO.email}?subject=General%20Careers%20Inquiry`}
            className="text-xs sm:text-sm font-semibold text-[#00D4FF] hover:underline"
          >
            Don't see your role? Send spontaneous pitch →
          </a>
        </div>

        <div className="space-y-6">
          {OPEN_POSITIONS.map((job) => (
            <div
              key={job.id}
              className="p-8 rounded-3xl bg-[#10151C] border border-white/10 hover:border-white/20 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6"
            >
              <div className="space-y-3 max-w-3xl">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#7C3AED]/20 text-[#A78BFA] border border-[#7C3AED]/30 text-xs font-semibold">
                    {job.department}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-gray-400">
                    <MapPin className="w-3.5 h-3.5 text-[#00D4FF]" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-gray-400">
                    <Clock className="w-3.5 h-3.5" />
                    {job.type}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {job.title}
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {job.description}
                </p>

                <div className="pt-2 flex flex-wrap gap-2">
                  {job.requirements.map((req, i) => (
                    <span key={i} className="text-xs text-gray-400 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#00D4FF]" />
                      {req}
                    </span>
                  ))}
                </div>
              </div>

              <div className="shrink-0 pt-4 lg:pt-0">
                <button
                  onClick={() => {
                    setSelectedJob(job);
                    setApplied(false);
                  }}
                  className="w-full lg:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-bold transition-colors"
                >
                  <span>Apply for Role</span>
                  <ArrowRight className="w-4 h-4 text-[#00D4FF]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Simple Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg rounded-3xl bg-[#10151C] border border-white/15 p-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white text-sm font-bold"
            >
              ✕
            </button>

            <span className="text-xs font-mono font-bold text-[#00D4FF]">
              APPLYING FOR
            </span>
            <h3 className="text-2xl font-black text-white mt-1 mb-2">
              {selectedJob.title}
            </h3>
            <p className="text-xs text-gray-400 mb-6">{selectedJob.location} • {selectedJob.department}</p>

            {applied ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">Application Transmitted</h4>
                <p className="text-xs text-gray-300">
                  Thank you! Our recruitment team reviews every applicant within 48 hours.
                </p>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="px-5 py-2 rounded-xl bg-white/10 text-white text-xs font-bold"
                >
                  Close
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setApplied(true);
                }}
                className="space-y-4"
              >
                <div>
                  <label className="text-xs font-semibold text-gray-300 block mb-1.5">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Satoshi Nakamoto"
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:border-[#00D4FF] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-300 block mb-1.5">
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="satoshi@domain.com"
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:border-[#00D4FF] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-300 block mb-1.5">
                    GitHub / Portfolio / LinkedIn Link *
                  </label>
                  <input
                    required
                    type="url"
                    placeholder="https://github.com/username"
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:border-[#00D4FF] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-300 block mb-1.5">
                    Brief Introduction / Highlights
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Highlight your most complex contract, system, or marketing campaign..."
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:border-[#00D4FF] focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#00D4FF] text-white font-bold text-sm shadow-lg shadow-[#7C3AED]/25 hover:opacity-95 transition-opacity"
                >
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
