import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Layers,
  Rocket,
  Shield,
  TrendingUp,
} from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { CTABanner } from '../components/common/CTABanner';
import { SeoHelmet } from '../components/common/SeoHelmet';
import { SOLUTIONS_DATA, CASE_STUDIES_DATA } from '../data/siteData';

interface SolutionDetailPageProps {
  customSlug?: string;
}

export const SolutionDetailPage: React.FC<SolutionDetailPageProps> = ({ customSlug }) => {
  const { slug } = useParams<{ slug: string }>();
  const activeSlug = customSlug || slug;

  const solution = SOLUTIONS_DATA.find((s) => s.slug === activeSlug);

  if (!solution) {
    return <Navigate to="/solutions" replace />;
  }

  const caseStudy = CASE_STUDIES_DATA.find((cs) => cs.id === solution.caseStudyRef);

  return (
    <div>
      <SeoHelmet
        title={`${solution.title} Solution Framework | ORVEXIQ`}
        description={solution.description}
      />

      <PageHero
        breadcrumbs={[
          { label: 'Solutions', path: '/solutions' },
          { label: solution.title },
        ]}
        badge={`SOLUTIONS • ${solution.title.toUpperCase()}`}
        headline={solution.heroHeadline}
        description={solution.description}
        primaryCtaText={solution.ctaButtonText}
        primaryCtaLink={`/contact?solution=${solution.slug}`}
        secondaryCtaText="Book a Strategy Call"
        secondaryCtaLink="/contact?type=consultation"
        highlights={solution.recommendedServices}
      />

      {/* TARGET AUDIENCE & COMMON PAIN POINTS */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00D4FF]">
              Target Profile
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Engineered Specifically For:
            </h3>
            <p className="text-gray-300 text-base leading-relaxed">
              {solution.audience}
            </p>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-gray-400">
              Direct involvement of senior partners with proven track records scaling products in your exact sector.
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">
              Critical Challenges We Eliminate:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {solution.challenges.map((ch, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#10151C] border border-white/5 flex items-start gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-gray-300 leading-snug">
                    {ch}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC JOURNEY STEPS */}
      <section className="py-24 bg-[#0B0F14]/70 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#7C3AED]">
              The Execution Roadmap
            </span>
            <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
              Your Journey: From Inception to Global Market Leadership
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {solution.journeySteps.map((step, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-[#10151C] border border-white/10 flex flex-col justify-between group hover:border-[#00D4FF]/40 transition-colors"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-[#00D4FF]">
                    {step.step}
                  </span>
                  <h4 className="text-lg font-bold text-white mt-2 mb-3 group-hover:text-[#00D4FF] transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-gray-500 flex items-center justify-between">
                  <span>Milestone {idx + 1}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#7C3AED]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECOMMENDED SERVICES CAROUSEL / GRID */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#00D4FF]">
              Core Building Blocks
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1">
              Recommended Services for {solution.title}
            </h3>
          </div>
          <Link to="/services" className="text-xs font-bold text-[#00D4FF] hover:underline">
            View All Services Catalog →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solution.recommendedServices.map((srvTitle, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#10151C] border border-white/10 flex items-center justify-between hover:border-white/20 transition-all group"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-xs font-mono font-bold text-[#7C3AED]">
                  0{idx + 1}
                </span>
                <span className="text-base font-bold text-white group-hover:text-[#00D4FF] transition-colors">
                  {srvTitle}
                </span>
              </div>
              <Link
                to="/services"
                className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-[#00D4FF]/20 flex items-center justify-center text-gray-400 group-hover:text-white transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED CASE STUDY REFERENCE */}
      {caseStudy && (
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/5">
          <div className="rounded-3xl bg-[#10151C] border border-white/10 p-8 sm:p-12 relative overflow-hidden">
            <div className="max-w-3xl">
              <span className="text-xs font-mono font-bold text-[#7C3AED] uppercase">
                Relevant Case Study
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-2 mb-4">
                {caseStudy.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                {caseStudy.summary}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {caseStudy.results.map((res, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white/[0.04] border border-white/5">
                    <div className="text-xl font-bold text-[#00D4FF]">{res.metric}</div>
                    <div className="text-xs text-gray-400">{res.label}</div>
                  </div>
                ))}
              </div>
              <Link
                to={`/work/${caseStudy.slug}`}
                className="inline-flex items-center gap-2 text-sm font-bold text-white bg-[#7C3AED] hover:bg-[#6D28D9] px-6 py-3 rounded-xl transition-colors"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA BANNER */}
      <CTABanner
        headline={solution.ctaHeadline}
        subheadline={`Speak directly with an ORVEXIQ lead specialized in the ${solution.title} framework.`}
        primaryButtonText={solution.ctaButtonText}
        primaryButtonLink={`/contact?solution=${solution.slug}`}
      />
    </div>
  );
};
