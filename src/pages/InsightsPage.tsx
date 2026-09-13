import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Calendar, Sparkles } from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { CTABanner } from '../components/common/CTABanner';
import { SeoHelmet } from '../components/common/SeoHelmet';
import { INSIGHTS_DATA, COMPANY_INFO } from '../data/siteData';

const categories = ['All', 'Web3', 'Architecture', 'AI', 'Growth', 'Exchange'] as const;

export const InsightsPage: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState<string>('All');

  const filteredArticles =
    selectedCat === 'All'
      ? INSIGHTS_DATA
      : INSIGHTS_DATA.filter((item) => item.category === selectedCat);

  return (
    <div>
      <SeoHelmet
        title="Insights, Research & Architecture | ORVEXIQ"
        description="Deep dives into smart contract security, Next.js scaling, AI workflow automation, tokenomics, and global crypto marketing."
      />

      <PageHero
        breadcrumbs={[{ label: 'Insights' }]}
        badge="EDITORIAL RESEARCH"
        headline="PERSPECTIVES ON WHAT'S NEXT."
        description="Technical breakdowns, economic models, and growth playbooks written directly by ORVEXIQ practice leads and security researchers."
        primaryCtaText="Explore Latest Research"
        primaryCtaLink="#articles"
        secondaryCtaText="Join Telegram Channel"
        secondaryCtaLink={COMPANY_INFO.telegram}
        highlights={[
          'Smart Contract Architecture',
          'Tokenomics & Liquidity',
          'AI Agent Workflows',
          'Enterprise Web Engineering',
        ]}
      />

      {/* Category Filter Bar */}
      <section id="articles" className="py-8 border-b border-white/5 bg-[#0B0F14]/40 sticky top-[72px] z-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  selectedCat === cat
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

      {/* Articles Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <Link
              key={article.id}
              to={`/insights/${article.slug}`}
              className="flex flex-col justify-between p-8 rounded-3xl bg-[#10151C] border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1.5 shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#7C3AED]/20 text-[#A78BFA] border border-[#7C3AED]/30">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight leading-snug group-hover:text-[#00D4FF] transition-colors mb-3">
                  {article.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white">{article.author.name}</div>
                  <div className="text-[11px] text-gray-500">{article.publishDate}</div>
                </div>

                <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-[#00D4FF]/20 flex items-center justify-center text-gray-400 group-hover:text-white transition-colors">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTABanner
        headline="WANT US TO WRITE A CUSTOM TECHNICAL ARCHITECTURE PAPER?"
        subheadline="We conduct private security reviews and tokenomic feasibility simulations for qualifying ventures."
        primaryButtonText="Request Research Session"
        primaryButtonLink="/contact"
      />
    </div>
  );
};
