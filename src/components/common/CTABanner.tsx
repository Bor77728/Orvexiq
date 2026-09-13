import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../../data/siteData';

interface CTABannerProps {
  headline?: string;
  subheadline?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  className?: string;
}

export const CTABanner: React.FC<CTABannerProps> = ({
  headline = "HAVE AN IDEA? LET'S BUILD IT.",
  subheadline = "Partner with ORVEXIQ to transform ambitious concepts into scalable Web2 & Web3 products. Strategy, engineering, and growth from day one.",
  primaryButtonText = 'Start a Project',
  primaryButtonLink = '/contact',
  secondaryButtonText = 'Book a Consultation',
  secondaryButtonLink = '/contact?type=consultation',
  className = '',
}) => {
  return (
    <section className={`py-20 relative overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-b from-[#10151C] to-[#0B0F14] border border-white/10 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
          {/* Subtle gradient highlights */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#7C3AED]/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00D4FF]/15 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#00D4FF] mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>TRANSFORMING VISIONS INTO GLOBAL VALUE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              {headline}
            </h2>

            <p className="mt-4 sm:mt-6 text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              {subheadline}
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to={primaryButtonLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#7C3AED] to-[#00D4FF] hover:opacity-95 shadow-lg shadow-[#7C3AED]/30 transition-all group"
              >
                <span>{primaryButtonText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to={secondaryButtonLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-medium text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#00D4FF]" />
                <span>{secondaryButtonText}</span>
              </Link>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Response within 24 Hours
              </span>
              <span>•</span>
              <span>Strict NDA & IP Protection</span>
              <span>•</span>
              <span>Direct Telegram: <a href={COMPANY_INFO.telegram} target="_blank" rel="noreferrer" className="text-[#00D4FF] hover:underline">@orvexiq</a></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
