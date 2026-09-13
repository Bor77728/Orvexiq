import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { CTABanner } from '../components/common/CTABanner';
import { SeoHelmet } from '../components/common/SeoHelmet';
import { SOLUTIONS_DATA } from '../data/siteData';

export const SolutionsOverviewPage: React.FC = () => {
  return (
    <div>
      <SeoHelmet
        title="Tailored Solutions | Startups, Web2 Businesses, Web3 & Enterprise"
        description="Discover how ORVEXIQ structures bespoke technology and growth engagements for early-stage startups, modernizing Web2 businesses, and global Web3 protocols."
      />

      <PageHero
        breadcrumbs={[{ label: 'Solutions' }]}
        badge="STRATEGIC BUSINESS FRAMEWORKS"
        headline="SOLUTIONS BUILT AROUND YOUR BUSINESS."
        description="Every organization operates under distinct regulatory, capital, and technical conditions. ORVEXIQ aligns cross-functional engineering and growth teams specifically tailored to your company stage."
        primaryCtaText="Explore Solution Frameworks"
        primaryCtaLink="#solutions-grid"
        secondaryCtaText="Start a Project"
        secondaryCtaLink="/contact"
        highlights={[
          'Early-Stage Startups & Founders',
          'Web2 Business Modernization',
          'Web3 & Protocol Foundations',
          'Institutional Digital Asset Firms',
        ]}
      />

      {/* Solutions Cards Grid */}
      <section id="solutions-grid" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SOLUTIONS_DATA.map((sol) => (
            <div
              key={sol.id}
              className="flex flex-col justify-between p-8 rounded-3xl bg-[#10151C] border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1.5 shadow-xl group"
            >
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00D4FF]">
                  FRAMEWORK
                </span>
                <h3 className="text-2xl font-black text-white tracking-tight mt-2 mb-2 group-hover:text-[#00D4FF] transition-colors">
                  {sol.title}
                </h3>
                <p className="text-xs font-semibold text-gray-400 mb-4">
                  {sol.tagline}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {sol.description}
                </p>

                <div className="pt-4 border-t border-white/5 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-2">
                    Recommended Services:
                  </span>
                  {sol.recommendedServices.slice(0, 3).map((rec, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#7C3AED] shrink-0" />
                      <span>{rec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5">
                <Link
                  to={`/solutions/${sol.slug}`}
                  className="w-full inline-flex items-center justify-between px-5 py-3 rounded-xl bg-white/5 group-hover:bg-gradient-to-r group-hover:from-[#7C3AED] group-hover:to-[#00D4FF] text-white text-sm font-semibold transition-all duration-200"
                >
                  <span>Explore Solution Roadmap</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        headline="UNSURE WHICH FRAMEWORK FITS YOUR CURRENT STAGE?"
        subheadline="Schedule a preliminary architecture and strategy consultation with our executive partners."
        primaryButtonText="Book a Consultation"
        primaryButtonLink="/contact?type=consultation"
      />
    </div>
  );
};
