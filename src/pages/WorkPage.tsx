import React, { useState } from 'react';
import { PageHero } from '../components/common/PageHero';
import { CaseStudyCard } from '../components/common/CaseStudyCard';
import { CTABanner } from '../components/common/CTABanner';
import { SeoHelmet } from '../components/common/SeoHelmet';
import { CASE_STUDIES_DATA } from '../data/siteData';

const categories = ['All', 'Web2', 'Web3', 'Blockchain', 'Marketing', 'AI', 'Growth'] as const;

export const WorkPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredCaseStudies =
    selectedCategory === 'All'
      ? CASE_STUDIES_DATA
      : CASE_STUDIES_DATA.filter((cs) => cs.category === selectedCategory);

  return (
    <div>
      <SeoHelmet
        title="Selected Work & Case Studies | ORVEXIQ"
        description="Explore our portfolio of high-impact Web2 platforms, Web3 protocols, AI automation pipelines, and capital campaigns."
      />

      <PageHero
        breadcrumbs={[{ label: 'Work' }]}
        badge="PROVEN IMPACT"
        headline="SELECTED WORK."
        description="We partner with ambitious startups, established brands, and decentralized protocols to engineer software and growth engines that lead their industries."
        primaryCtaText="Start a Project"
        primaryCtaLink="/contact"
        secondaryCtaText="Contact Our Team"
        secondaryCtaLink="/contact"
        highlights={[
          '$120M+ TVL Generated',
          '68% Conversion Surges',
          'Sub-Second Next.js Latency',
          'Tier-1 Exchange Clearances',
        ]}
      />

      {/* Filterable Categories Bar */}
      <section className="py-8 border-b border-white/5 bg-[#0B0F14]/40 sticky top-[72px] z-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-[#7C3AED] to-[#00D4FF] text-white shadow-md shadow-[#7C3AED]/20'
                    : 'bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCaseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>

        {filteredCaseStudies.length === 0 && (
          <div className="py-20 text-center text-gray-400">
            No projects found in this category currently.
          </div>
        )}
      </section>

      <CTABanner
        headline="HAVE A SIMILAR VISION?"
        subheadline="Let’s review how our engineering and marketing strategies can be deployed for your specific business."
        primaryButtonText="Discuss Your Project"
        primaryButtonLink="/contact"
      />
    </div>
  );
};
