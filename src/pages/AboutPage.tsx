import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Shield,
  Lightbulb,
  Target,
  Users2,
  Hourglass,
  Linkedin,
  Twitter,
  Globe,
  CheckCircle2,
} from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { CTABanner } from '../components/common/CTABanner';
import { SeoHelmet } from '../components/common/SeoHelmet';
import { OrvexiqLogo } from '../components/common/OrvexiqLogo';
import { COMPANY_INFO, TEAM_DATA } from '../data/siteData';

export const AboutPage: React.FC = () => {
  const values = [
    {
      title: 'Innovation',
      desc: 'We operate on the frontier of artificial intelligence, high-concurrency cloud computing, and decentralized ledgers, pioneering solutions before they become industry consensus.',
      icon: Lightbulb,
    },
    {
      title: 'Transparency',
      desc: 'No vague retainers or hidden broker arrangements. We communicate direct technical realities, security trade-offs, and realistic exchange review conditions.',
      icon: Shield,
    },
    {
      title: 'Execution',
      desc: 'Ideas are cheap; rigorous implementation is rare. We hold ourselves to Silicon Valley engineering discipline, rigorous testing, and flawless launch milestones.',
      icon: Target,
    },
    {
      title: 'Partnership',
      desc: 'We do not view ourselves as an external vendor. We embed directly into your executive leadership and sprint cadence as technical co-architects.',
      icon: Users2,
    },
    {
      title: 'Long-Term Thinking',
      desc: 'We refuse short-lived hype cycles and predatory tokenomics. We build resilient corporate foundations and protocol ecosystems engineered to endure.',
      icon: Hourglass,
    },
  ];

  return (
    <div>
      <SeoHelmet
        title="About ORVEXIQ | Web2 + Web3 Technology & Growth Agency"
        description="ORVEXIQ helps ambitious businesses and technology projects turn ideas into scalable digital products and global opportunities."
      />

      <PageHero
        breadcrumbs={[{ label: 'About' }]}
        badge="ABOUT ORVEXIQ"
        headline="WE BUILD DIGITAL BUSINESSES FOR WHAT'S NEXT."
        description="ORVEXIQ was founded on a singular conviction: the most influential enterprises of the next decade will effortlessly bridge the best of Web2 product design with the sovereignty and liquidity of Web3."
        primaryCtaText="Explore Team"
        primaryCtaLink="#team"
        secondaryCtaText="Contact Us"
        secondaryCtaLink="/contact"
        highlights={[
          'Founded in 2021',
          'Global Hubs in SF, London, Singapore & Dubai',
          '100+ Strategic Network Nodes',
          '$25M+ Funding Experience',
        ]}
      />

      {/* MISSION & ORIGIN STORY */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00D4FF]">
              Our Mission & Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              To help ambitious businesses and technology projects turn ideas into scalable digital products and global opportunities.
            </h2>
            <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed">
              <p>
                In 2021, technology consulting stood divided. Traditional agencies built legacy software while dismissing blockchain. Meanwhile, crypto shops spun up speculative tokens without robust engineering, UX standards, or commercial substance.
              </p>
              <p>
                ORVEXIQ was established to eliminate this false dichotomy. We combined seasoned full-stack engineers, smart contract security researchers, viral growth hackers, and institutional venture partners into an agile, unified strike team.
              </p>
            </div>
            <div className="pt-2 flex items-center gap-6">
              <div>
                <div className="text-3xl font-black text-white">4</div>
                <div className="text-xs text-gray-400">Global Tech Hubs</div>
              </div>
              <div className="h-8 w-[1px] bg-white/10" />
              <div>
                <div className="text-3xl font-black text-white">50+</div>
                <div className="text-xs text-gray-400">Strategic Relationships</div>
              </div>
              <div className="h-8 w-[1px] bg-white/10" />
              <div>
                <div className="text-3xl font-black text-white">100%</div>
                <div className="text-xs text-gray-400">Commitment to Quality</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            {/* Official Brand Identity Card */}
            <div className="p-8 rounded-3xl bg-[#10151C] border border-white/10 flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#7C3AED]/15 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#00D4FF]/15 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative z-10 py-3 w-full flex justify-center">
                <OrvexiqLogo variant="vertical" showSubtitle={true} size="lg" />
              </div>
              <div className="mt-4 pt-4 border-t border-white/5 w-full flex items-center justify-between text-[11px] font-mono text-gray-400">
                <span>IDENTITY SYSTEM</span>
                <span className="text-[#00D4FF]">OFFICIAL BRANDMARK</span>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#10151C] border border-white/10 space-y-6">
              <div className="flex items-center gap-3">
                <Globe className="w-6 h-6 text-[#00D4FF]" />
                <h3 className="text-xl font-bold text-white">Global Presence</h3>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                Operating seamlessly across North American, European, and Asian business hours to support our international client roster 24/7.
              </p>
              <div className="space-y-3 pt-2">
                {COMPANY_INFO.locations.map((loc, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-gray-200">
                    <span className="font-semibold">{loc}</span>
                    <span className="text-[#7C3AED] font-mono">Hub 0{idx + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 bg-[#0B0F14]/70 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#7C3AED]">
              The ORVEXIQ Standard
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
              Core Principles Guiding Every Engagement
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#10151C] border border-white/10 space-y-3 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00D4FF] mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{val.title}</h3>
                    <p className="mt-2 text-xs text-gray-400 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TEAM PREVIEW SECTION */}
      <section id="team" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#00D4FF]">
              Executive Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
              The Minds Behind ORVEXIQ
            </h2>
          </div>
          <Link to="/team" className="text-sm font-bold text-[#00D4FF] hover:underline flex items-center gap-1">
            <span>View Complete Team Directory</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_DATA.slice(0, 3).map((member) => (
            <div
              key={member.id}
              className="p-8 rounded-3xl bg-[#10151C] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#7C3AED] to-[#00D4FF] p-[2px] mb-6">
                  <div className="w-full h-full bg-[#05070A] rounded-[14px] flex items-center justify-center text-xl font-bold text-white">
                    {member.name.charAt(0)}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#00D4FF] transition-colors">
                  {member.name}
                </h3>
                <div className="text-xs font-semibold text-[#7C3AED] mt-0.5 mb-3">
                  {member.position}
                </div>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {member.bio}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {member.expertise.slice(0, 2).map((exp, i) => (
                    <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-gray-400">
                      {exp}
                    </span>
                  ))}
                </div>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        headline="PARTNER WITH AN ELITE TECHNOLOGY SQUAD"
        subheadline="Schedule an introductory call with Alexander and our practice heads."
        primaryButtonText="Start a Project"
        primaryButtonLink="/contact"
      />
    </div>
  );
};
