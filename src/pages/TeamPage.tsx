import React from 'react';
import { Linkedin, Twitter, Sparkles, Mail } from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { CTABanner } from '../components/common/CTABanner';
import { SeoHelmet } from '../components/common/SeoHelmet';
import { TEAM_DATA } from '../data/siteData';

export const TeamPage: React.FC = () => {
  return (
    <div>
      <SeoHelmet
        title="Leadership & Core Team | ORVEXIQ"
        description="Meet the senior engineers, blockchain researchers, marketing strategists, and venture partners leading ORVEXIQ."
      />

      <PageHero
        breadcrumbs={[
          { label: 'About', path: '/about' },
          { label: 'Team' },
        ]}
        badge="THE ORVEXIQ TEAM"
        headline="THE MINDS DRIVING DIGITAL EVOLUTION."
        description="Our multi-disciplinary team brings together decades of combined experience from tier-1 technology consultancies, venture-backed crypto startups, and quantitative market makers."
        primaryCtaText="Join Our Team"
        primaryCtaLink="/careers"
        secondaryCtaText="Contact Us"
        secondaryCtaLink="/contact"
        highlights={[
          'Ex-Silicon Valley Engineers',
          'Audited Smart Contract Researchers',
          'Tier-1 Exchange BD Veterans',
          'Global Quantitative Analysts',
        ]}
      />

      {/* Directory Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_DATA.map((member) => (
            <div
              key={member.id}
              className="flex flex-col justify-between p-8 rounded-3xl bg-[#10151C] border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#7C3AED] to-[#00D4FF] p-[2px]">
                    <div className="w-full h-full bg-[#05070A] rounded-[14px] flex items-center justify-center text-xl font-black text-white group-hover:text-[#00D4FF] transition-colors">
                      {member.name.charAt(0)}
                    </div>
                  </div>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                    aria-label={`${member.name} LinkedIn Profile`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>

                <h3 className="text-2xl font-black text-white tracking-tight group-hover:text-[#00D4FF] transition-colors">
                  {member.name}
                </h3>
                <div className="text-xs font-bold text-[#7C3AED] uppercase tracking-wider mt-1 mb-4">
                  {member.position}
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>
              </div>

              <div className="pt-6 border-t border-white/5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block mb-2">
                  Specialized Focus
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {member.expertise.map((exp, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/5 text-xs text-gray-300"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        headline="WANT TO COLLABORATE DIRECTLY WITH OUR TEAM?"
        subheadline="We align dedicated squads directly with your executive leadership."
        primaryButtonText="Schedule Team Introduction"
        primaryButtonLink="/contact"
      />
    </div>
  );
};
