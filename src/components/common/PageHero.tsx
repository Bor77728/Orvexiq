import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Breadcrumbs, BreadcrumbItem } from './Breadcrumbs';
import { OrvexiqEmblem } from './OrvexiqLogo';

interface PageHeroProps {
  breadcrumbs?: BreadcrumbItem[];
  badge?: string;
  headline: string;
  description: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  highlights?: string[];
  metaNote?: string;
  className?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  breadcrumbs,
  badge,
  headline,
  description,
  primaryCtaText = 'Start a Project',
  primaryCtaLink = '/contact',
  secondaryCtaText,
  secondaryCtaLink,
  highlights,
  metaNote,
  className = '',
}) => {
  return (
    <section className={`relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden border-b border-white/5 ${className}`}>
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#7C3AED]/15 via-[#00D4FF]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}

        <div className="max-w-4xl">
          {badge && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs sm:text-sm font-semibold text-[#00D4FF] mb-6 shadow-sm">
              <OrvexiqEmblem className="w-3.5 h-3.5" />
              <span className="tracking-wide uppercase">{badge}</span>
            </div>
          )}

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] text-balance">
            {headline}
          </h1>

          <p className="mt-6 text-gray-300 text-lg sm:text-xl leading-relaxed max-w-3xl font-normal">
            {description}
          </p>

          {(primaryCtaText || secondaryCtaText) && (
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              {primaryCtaText && (
                <Link
                  to={primaryCtaLink}
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-[#7C3AED] to-[#00D4FF] hover:opacity-95 shadow-lg shadow-[#7C3AED]/25 transition-all"
                >
                  <span>{primaryCtaText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
              {secondaryCtaText && secondaryCtaLink && (
                <Link
                  to={secondaryCtaLink}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-medium text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                >
                  <span>{secondaryCtaText}</span>
                </Link>
              )}
            </div>
          )}

          {metaNote && (
            <p className="mt-4 text-xs text-gray-500 italic">
              {metaNote}
            </p>
          )}

          {highlights && highlights.length > 0 && (
            <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
