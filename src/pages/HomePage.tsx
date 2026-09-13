import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  Layers,
  Cpu,
  Shield,
  Zap,
  Globe,
  Clock,
  Compass,
  Rocket,
  CheckCircle2,
  Users,
} from 'lucide-react';
import { motion } from 'motion/react';
import { InteractiveEcosystem } from '../components/common/InteractiveEcosystem';
import { StatsSection } from '../components/common/StatsSection';
import { ServiceCard } from '../components/common/ServiceCard';
import { CaseStudyCard } from '../components/common/CaseStudyCard';
import { TestimonialSlider } from '../components/common/TestimonialSlider';
import { CTABanner } from '../components/common/CTABanner';
import { SectionHeader } from '../components/common/SectionHeader';
import { SeoHelmet } from '../components/common/SeoHelmet';
import { OrvexiqEmblem } from '../components/common/OrvexiqLogo';
import { SERVICES_DATA, CASE_STUDIES_DATA } from '../data/siteData';

export const HomePage: React.FC = () => {
  const whyReasons = [
    {
      title: 'Strategy First',
      desc: 'We prioritize commercial positioning, market viability, and tokenomics mechanics before writing a single line of code.',
      icon: Compass,
    },
    {
      title: 'Full-Stack Capability',
      desc: 'From cloud databases and responsive Next.js frontends to audited smart contracts and algorithmic liquidity.',
      icon: Layers,
    },
    {
      title: 'Global Network',
      desc: 'Direct institutional access to 100+ venture capital funds, 50+ exchange BD desks, and tier-1 media outlets.',
      icon: Globe,
    },
    {
      title: 'Startup Friendly',
      desc: 'Lean, agile sprint cadence designed for rapid prototyping, early traction loops, and capital conservation.',
      icon: Rocket,
    },
    {
      title: 'Speed to Market',
      desc: 'Battle-tested component frameworks and audited smart contract templates that cut launch cycles by up to 50%.',
      icon: Clock,
    },
    {
      title: 'Long-Term Partnership',
      desc: 'We operate as an extension of your founding team through TGEs, liquidity maintenance, and institutional scaling.',
      icon: Users,
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discover',
      desc: 'Deconstruct your goals, product architecture, competitor moat, and target audience.',
    },
    {
      number: '02',
      title: 'Strategize',
      desc: 'Design the full technical blueprint, tokenomics, GTM acquisition funnel, and milestone timeline.',
    },
    {
      number: '03',
      title: 'Build',
      desc: 'Rapid engineering sprints with staging previews, automated testing, and comprehensive audits.',
    },
    {
      number: '04',
      title: 'Launch',
      desc: 'Coordinated deployment, PR blitz, KOL narrative syndication, and community onboarding.',
    },
    {
      number: '05',
      title: 'Scale',
      desc: 'Exchange listings, liquidity stabilization, programmatic growth loops, and ongoing feature expansion.',
    },
  ];

  return (
    <div className="relative">
      <SeoHelmet
        title="ORVEXIQ — Web2 + Web3 Technology, Growth & Digital Solutions"
        description="ORVEXIQ helps startups, businesses and Web3 projects build powerful digital products, launch new ventures, reach global audiences and scale through technology, marketing and strategic growth."
      />

      {/* HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 overflow-hidden border-b border-white/5">
        {/* Abstract Digital Ecosystem Canvas in Background */}
        <div className="absolute inset-0 z-0">
          <InteractiveEcosystem variant="hero" />
        </div>

        {/* Ambient Top Glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-r from-[#7C3AED]/20 via-[#00D4FF]/15 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Small Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs sm:text-sm font-semibold tracking-wider text-[#00D4FF] mb-8 backdrop-blur-md shadow-lg shadow-black/40"
          >
            <OrvexiqEmblem className="w-4 h-4" />
            <span>WEB2 + WEB3 DIGITAL SOLUTIONS</span>
          </motion.div>

          {/* Editorial Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] text-balance"
          >
            BUILD THE FUTURE.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#00D4FF]">
              SCALE WITHOUT LIMITS.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-gray-300 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto font-normal"
          >
            Technology, growth and strategic solutions for businesses building what's next.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#7C3AED] to-[#00D4FF] hover:opacity-95 shadow-xl shadow-[#7C3AED]/30 transition-all group"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-colors"
            >
              <span>Explore Services</span>
            </Link>
          </motion.div>

          {/* Sub-text micro-trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-gray-400"
          >
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00D4FF]" />
              Enterprise-Ready Architecture
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#7C3AED]" />
              Audited Web3 Standards
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Direct Capital & Exchange Access
            </span>
          </motion.div>
        </div>
      </section>

      {/* TRUST STATS SECTION */}
      <StatsSection />

      {/* INTRODUCTION SECTION */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#00D4FF]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
                The Unified Partner
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                ONE PARTNER.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-[#00D4FF]">
                  MULTIPLE WAYS TO SCALE.
                </span>
              </h2>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Most agencies either only build basic websites, or push speculative crypto tokens without technical substance. ORVEXIQ unifies deep full-stack engineering, audited blockchain protocols, algorithmic marketing, institutional fundraising, and strategic exchange listings under a single roof.
              </p>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-base font-bold text-[#00D4FF] hover:text-white transition-colors group"
                >
                  <span>Discover ORVEXIQ</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-[#10151C] border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/20 border border-[#7C3AED]/30 flex items-center justify-center text-[#A78BFA]">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Full-Stack Tech</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Next.js, Python microservices, and distributed cloud computing with 99.99% uptime.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#10151C] border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#00D4FF]/20 border border-[#00D4FF]/30 flex items-center justify-center text-[#00D4FF]">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Audited Web3</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Smart contracts, gasless onboarding, multi-chain bridges, and audited tokenomics.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#10151C] border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">KOL & PR Growth</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Global crypto influencer blitzes, viral social strategies, and Tier-1 press syndication.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#10151C] border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Capital & Listings</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Institutional VC introductions, compliance advisory, and direct exchange listing desks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW GRID */}
      <section className="py-24 border-t border-white/5 bg-[#0B0F14]/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <SectionHeader
              badge="SERVICES & CAPABILITIES"
              title="Specialized Practices Built for Real Impact"
              subtitle="Explore our dedicated practices across technology, blockchain, strategic growth, and capital coordination."
              className="mb-0"
            />
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#00D4FF] hover:underline shrink-0"
            >
              <span>View All 9 Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_DATA.slice(0, 8).map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <span>Explore Complete Services Catalog & Deliverables →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* WEB2 + WEB3 SPLIT-SCREEN SECTION */}
      <section className="py-24 sm:py-32 relative overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#00D4FF] mb-4">
              <span>UNIFIED ARCHITECTURAL PARADIGM</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              BUILD ACROSS BOTH WORLDS.
            </h2>
            <p className="mt-4 text-gray-400 text-base sm:text-lg">
              The next generation of industry leaders don’t choose between Web2 and Web3. They master both to maximize audience reach and capital efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
            {/* Left: WEB2 */}
            <div className="rounded-3xl bg-[#10151C] border border-white/10 p-8 sm:p-10 relative overflow-hidden group hover:border-[#7C3AED]/40 transition-colors">
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                <div>
                  <span className="text-xs font-mono font-bold tracking-widest text-[#7C3AED] uppercase">
                    Foundation
                  </span>
                  <h3 className="text-3xl font-black text-white tracking-tight">WEB2</h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/20 border border-[#7C3AED]/40 flex items-center justify-center text-[#A78BFA]">
                  <Globe className="w-5 h-5" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  'Websites',
                  'SaaS Platforms',
                  'E-commerce Systems',
                  'Enterprise Software',
                  'AI Automation',
                  'Digital Marketing',
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
                    <span className="text-sm font-semibold text-gray-200">{item}</span>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-xs text-gray-400 leading-relaxed">
                Reliable, sub-second latency, accessible consumer ergonomics, and frictionless payment funnels.
              </p>
            </div>

            {/* Right: WEB3 */}
            <div className="rounded-3xl bg-[#10151C] border border-white/10 p-8 sm:p-10 relative overflow-hidden group hover:border-[#00D4FF]/40 transition-colors">
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                <div>
                  <span className="text-xs font-mono font-bold tracking-widest text-[#00D4FF] uppercase">
                    Frontier
                  </span>
                  <h3 className="text-3xl font-black text-white tracking-tight">WEB3</h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#00D4FF]/20 border border-[#00D4FF]/40 flex items-center justify-center text-[#00D4FF]">
                  <Layers className="w-5 h-5" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  'Blockchain Networks',
                  'Smart Contracts',
                  'Decentralized Apps (DApps)',
                  'DeFi & Staking',
                  'Tokenization & RWAs',
                  'Exchange Listings',
                  'Fundraising Syndicates',
                  'Market Making',
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
                    <span className="text-sm font-semibold text-gray-200 truncate">{item}</span>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-xs text-gray-400 leading-relaxed">
                Trustless ownership, global programmatic liquidity, verifiable transparency, and decentralized incentive loops.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED WORK SECTION */}
      <section className="py-24 border-t border-white/5 bg-[#0B0F14]/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <SectionHeader
              badge="PROVEN OUTCOMES"
              title="Selected Case Studies"
              subtitle="A showcase of real platforms engineered, launched, and scaled across Web2, Web3, and AI."
              className="mb-0"
            />
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#00D4FF] hover:underline shrink-0"
            >
              <span>Explore All Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {CASE_STUDIES_DATA.slice(0, 4).map((caseStudy) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY ORVEXIQ SECTION */}
      <section className="py-24 sm:py-32 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            align="center"
            badge="OUR VALUE PROPOSITION"
            title="Why Leading Founders & Enterprises Choose ORVEXIQ"
            subtitle="Engineered for institutional credibility, relentless execution speed, and measurable commercial results."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {whyReasons.map((reason, idx) => {
              const Icon = reason.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-[#10151C] border border-white/5 hover:border-white/15 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00D4FF] group-hover:bg-[#00D4FF]/10 group-hover:border-[#00D4FF]/30 transition-colors mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#00D4FF] transition-colors">
                    {reason.title}
                  </h3>
                  <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-24 border-t border-white/5 bg-[#0B0F14]/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            align="center"
            badge="EXECUTION FRAMEWORK"
            title="The 5-Stage Delivery Process"
            subtitle="A structured methodology designed to minimize engineering waste, accelerate velocity, and scale sustainably."
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-[#10151C] border border-white/5 hover:border-white/15 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-[#7C3AED]">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-black text-white tracking-tight mt-2 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-500">
                  <span>Phase {step.number}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 border-t border-white/5 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            align="center"
            badge="CLIENT ENDORSEMENTS"
            title="Trusted by Visionary Builders & Executives"
            subtitle="Hear directly from founders and directors who have accelerated their products with ORVEXIQ."
          />
          <TestimonialSlider />
        </div>
      </section>

      {/* GLOBAL CTA SECTION */}
      <CTABanner
        headline="HAVE AN IDEA? LET'S BUILD IT."
        subheadline="Schedule a confidential discovery session with our senior architects and growth specialists."
        primaryButtonText="Start a Project"
        primaryButtonLink="/contact"
        secondaryButtonText="Book a Consultation"
        secondaryButtonLink="/contact?type=consultation"
      />
    </div>
  );
};
