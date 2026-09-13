import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Quote,
  Layers,
  Code2,
  Sparkles,
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { CTABanner } from '../components/common/CTABanner';
import { SeoHelmet } from '../components/common/SeoHelmet';
import { CASE_STUDIES_DATA } from '../data/siteData';

export const CaseStudyDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const caseStudy = CASE_STUDIES_DATA.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    return <Navigate to="/work" replace />;
  }

  return (
    <div className="pt-28 sm:pt-36">
      <SeoHelmet
        title={`${caseStudy.client} Case Study | ORVEXIQ`}
        description={caseStudy.summary}
      />

      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <Breadcrumbs
          items={[
            { label: 'Work', path: '/work' },
            { label: caseStudy.client },
          ]}
        />

        <div className="mt-8 max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#7C3AED]/20 text-[#A78BFA] border border-[#7C3AED]/30">
              {caseStudy.category}
            </span>
            <span className="text-xs font-semibold text-gray-400">
              {caseStudy.industry}
            </span>
            <span className="text-xs text-gray-500">•</span>
            <span className="text-xs font-mono text-gray-400">Completed in {caseStudy.year}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
            {caseStudy.title}
          </h1>

          <p className="mt-6 text-gray-300 text-lg sm:text-xl leading-relaxed">
            {caseStudy.summary}
          </p>
        </div>

        {/* High-Impact Result Numbers Strip */}
        <div className="mt-12 p-8 rounded-3xl bg-[#10151C] border border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {caseStudy.results.map((res, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00D4FF]">
                {res.metric}
              </div>
              <div className="text-xs sm:text-sm text-gray-400 font-medium">
                {res.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Deep Dive Sections */}
      <section className="py-20 border-t border-white/5 bg-[#0B0F14]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Narrative Column */}
            <div className="lg:col-span-8 space-y-16">
              {/* Challenge */}
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider">
                  01 / The Challenge
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  High Stakes & Technical Obstacles
                </h2>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  {caseStudy.challenge}
                </p>
              </div>

              {/* Strategy */}
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold text-[#00D4FF] uppercase tracking-wider">
                  02 / The Strategic Vector
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  System Architecture & Market Strategy
                </h2>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  {caseStudy.strategy}
                </p>
              </div>

              {/* Solution */}
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                  03 / The Deployed Solution
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Implementation, Execution & Milestones
                </h2>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  {caseStudy.solution}
                </p>
              </div>

              {/* Visual System / Architecture Representation */}
              <div className="p-8 rounded-3xl bg-[#10151C] border border-white/10 space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    System Blueprint & Workflow
                  </span>
                  <Sparkles className="w-4 h-4 text-[#00D4FF]" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-xs text-[#7C3AED] font-mono mb-1">Frontend Layer</div>
                    <div className="text-sm font-bold text-white">Sub-second Next.js / Viem</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-xs text-[#00D4FF] font-mono mb-1">Logic & Engine</div>
                    <div className="text-sm font-bold text-white">Audited Microservices</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-xs text-emerald-400 font-mono mb-1">Scale & Liquidity</div>
                    <div className="text-sm font-bold text-white">Institutional Execution</div>
                  </div>
                </div>
              </div>

              {/* Client Testimonial */}
              {caseStudy.testimonial && (
                <div className="p-8 rounded-3xl bg-gradient-to-br from-[#10151C] to-[#0B0F14] border border-[#7C3AED]/30 relative overflow-hidden">
                  <Quote className="w-10 h-10 text-[#7C3AED]/40 mb-4" />
                  <blockquote className="text-lg sm:text-xl font-medium text-white leading-relaxed italic">
                    "{caseStudy.testimonial.quote}"
                  </blockquote>
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <div className="text-base font-bold text-white">
                      {caseStudy.testimonial.author}
                    </div>
                    <div className="text-xs text-gray-400">
                      {caseStudy.testimonial.role}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sticky Sidebar Meta */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                <div className="p-6 rounded-2xl bg-[#10151C] border border-white/10 space-y-6">
                  <div>
                    <span className="text-xs uppercase font-bold text-gray-400 tracking-wider block mb-1">
                      Client
                    </span>
                    <span className="text-lg font-bold text-white">{caseStudy.client}</span>
                  </div>

                  <div className="pt-4 border-t border-white/5">
                    <span className="text-xs uppercase font-bold text-gray-400 tracking-wider block mb-2">
                      Services Provided
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {caseStudy.services.map((srv, i) => (
                        <span key={i} className="px-2.5 py-1 rounded bg-white/5 border border-white/5 text-xs text-gray-300">
                          {srv}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/5">
                    <span className="text-xs uppercase font-bold text-gray-400 tracking-wider block mb-2">
                      Technology Stack
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {caseStudy.technologies.map((tech, i) => (
                        <span key={i} className="px-2.5 py-1 rounded bg-[#00D4FF]/10 border border-[#00D4FF]/20 text-xs text-[#38BDF8] font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/5">
                    <Link
                      to="/contact"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#00D4FF] text-white text-sm font-bold shadow-lg shadow-[#7C3AED]/20 hover:opacity-95 transition-all"
                    >
                      <span>Inquire for Similar Project</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs text-gray-400">
                  <Link to="/work" className="hover:text-white flex items-center gap-1">
                    <ArrowLeft className="w-3.5 h-3.5" /> Back to Selected Work
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        headline="ACHIEVE MEASURABLE RESULTS FOR YOUR VENTURE"
        subheadline="Connect with our leads to review how our full-stack methodology can be applied to your product roadmap."
        primaryButtonText="Start Your Project"
        primaryButtonLink="/contact"
      />
    </div>
  );
};
