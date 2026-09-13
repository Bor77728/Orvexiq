import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { CTABanner } from '../components/common/CTABanner';
import { SeoHelmet } from '../components/common/SeoHelmet';
import { SERVICES_DATA } from '../data/siteData';

export const ServicesOverviewPage: React.FC = () => {
  return (
    <div>
      <SeoHelmet
        title="Services & Capabilities | Web2 + Web3 Engineering & Growth"
        description="From digital products to Web3 ecosystems, ORVEXIQ provides the technology, growth and strategic capabilities needed to launch and scale."
      />

      <PageHero
        breadcrumbs={[{ label: 'Services' }]}
        badge="END-TO-END CAPABILITIES"
        headline="SERVICES THAT MOVE BUSINESSES FORWARD."
        description="From digital products to Web3 ecosystems, ORVEXIQ provides the technology, growth and strategic capabilities needed to launch and scale."
        primaryCtaText="Discuss a Service"
        primaryCtaLink="/contact"
        secondaryCtaText="Explore Case Studies"
        secondaryCtaLink="/work"
        highlights={[
          '9 Specialized Practices',
          'Web2 & Web3 Dual Stacks',
          'Dedicated Technical Squads',
          'Global Venture Network',
        ]}
      />

      {/* Full Catalog Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-between p-8 rounded-3xl bg-[#10151C] border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1.5 shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold text-[#7C3AED] px-2.5 py-1 rounded bg-[#7C3AED]/10 border border-[#7C3AED]/20">
                    SERVICE {service.number}
                  </span>
                  <span className="text-xs uppercase font-semibold text-gray-500 tracking-wider">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white tracking-tight group-hover:text-[#00D4FF] transition-colors">
                  {service.title}
                </h3>

                <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Deliverables List */}
                <div className="mt-6 pt-6 border-t border-white/5 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-2">
                    Key Deliverables:
                  </span>
                  {service.deliverables.slice(0, 4).map((del, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00D4FF] shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5">
                <Link
                  to={`/services/${service.slug}`}
                  className="w-full inline-flex items-center justify-between px-5 py-3 rounded-xl bg-white/5 group-hover:bg-gradient-to-r group-hover:from-[#7C3AED] group-hover:to-[#00D4FF] text-white text-sm font-semibold transition-all duration-200"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        headline="NEED A CUSTOM COMBINATION OF SERVICES?"
        subheadline="We frequently build customized cross-functional packages combining web engineering, smart contract auditing, and viral crypto marketing."
        primaryButtonText="Request Custom Proposal"
        primaryButtonLink="/contact"
      />
    </div>
  );
};
