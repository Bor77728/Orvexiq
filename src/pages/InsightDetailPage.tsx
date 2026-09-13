import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, Calendar, Share2, Sparkles } from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { CTABanner } from '../components/common/CTABanner';
import { SeoHelmet } from '../components/common/SeoHelmet';
import { INSIGHTS_DATA } from '../data/siteData';

export const InsightDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = INSIGHTS_DATA.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  return (
    <div className="pt-28 sm:pt-36">
      <SeoHelmet
        title={`${article.title} | ORVEXIQ Insights`}
        description={article.excerpt}
        ogType="article"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <Breadcrumbs
          items={[
            { label: 'Insights', path: '/insights' },
            { label: article.category, path: '/insights' },
          ]}
        />

        <div className="mt-8">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#7C3AED]/20 text-[#A78BFA] border border-[#7C3AED]/30">
              {article.category}
            </span>
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {article.publishDate}
            </span>
            <span className="text-xs text-gray-500">•</span>
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.15]">
            {article.title}
          </h1>

          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#7C3AED] to-[#00D4FF] p-[2px]">
                <div className="w-full h-full bg-[#10151C] rounded-full flex items-center justify-center text-xs font-bold text-white">
                  {article.author.name.charAt(0)}
                </div>
              </div>
              <div>
                <div className="text-sm font-bold text-white">{article.author.name}</div>
                <div className="text-xs text-gray-400">{article.author.role}</div>
              </div>
            </div>

            <button
              onClick={() => {
                if (navigator.clipboard) {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Article link copied to clipboard!');
                }
              }}
              className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-gray-300 hover:text-white flex items-center gap-2 transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* Article Body */}
        <article className="mt-12 pt-8 border-t border-white/10 space-y-8 text-gray-300 text-base sm:text-lg leading-relaxed">
          {article.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}

          {/* Key Takeaways */}
          {article.keyTakeaways && article.keyTakeaways.length > 0 && (
            <div className="p-8 rounded-3xl bg-[#10151C] border border-[#7C3AED]/30 my-8 space-y-4">
              <div className="flex items-center gap-2 text-[#00D4FF] text-sm font-bold">
                <Sparkles className="w-4 h-4" />
                <span>Executive Key Takeaways</span>
              </div>
              <ul className="space-y-2">
                {article.keyTakeaways.map((kt, i) => (
                  <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] shrink-0 mt-2" />
                    <span>{kt}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </article>

        {/* Related Topics / Tags */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#00D4FF] block mb-4">
            Topics & Capabilities
          </span>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag, idx) => (
              <Link
                key={idx}
                to="/services"
                className="px-4 py-2 rounded-xl bg-[#10151C] border border-white/10 hover:border-[#00D4FF]/40 text-xs font-semibold text-white flex items-center gap-1.5 transition-colors"
              >
                <span>{tag}</span>
                <ArrowRight className="w-3 h-3 text-[#00D4FF]" />
              </Link>
            ))}
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-12 pt-6 border-t border-white/5">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all insights</span>
          </Link>
        </div>
      </div>

      <CTABanner
        headline="APPLY THESE ARCHITECTURAL INSIGHTS TO YOUR PRODUCT"
        subheadline="Discuss tailored implementations with our research and engineering squad."
        primaryButtonText="Start a Project"
        primaryButtonLink="/contact"
      />
    </div>
  );
};
