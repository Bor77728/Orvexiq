import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { CaseStudy } from '../../types';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  featured?: boolean;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  caseStudy,
  featured = false,
}) => {
  const getThemeClasses = (theme: string) => {
    switch (theme) {
      case 'purple':
        return {
          glow: 'group-hover:shadow-[#7C3AED]/20',
          badge: 'bg-[#7C3AED]/15 text-[#A78BFA] border-[#7C3AED]/30',
          metric: 'text-[#A78BFA]',
          gradient: 'from-[#7C3AED]/20 to-transparent',
        };
      case 'emerald':
        return {
          glow: 'group-hover:shadow-emerald-500/20',
          badge: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
          metric: 'text-emerald-400',
          gradient: 'from-emerald-500/20 to-transparent',
        };
      case 'amber':
        return {
          glow: 'group-hover:shadow-amber-500/20',
          badge: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
          metric: 'text-amber-400',
          gradient: 'from-amber-500/20 to-transparent',
        };
      case 'cyan':
      default:
        return {
          glow: 'group-hover:shadow-[#00D4FF]/20',
          badge: 'bg-[#00D4FF]/15 text-[#38BDF8] border-[#00D4FF]/30',
          metric: 'text-[#38BDF8]',
          gradient: 'from-[#00D4FF]/20 to-transparent',
        };
    }
  };

  const theme = getThemeClasses(caseStudy.imageTheme);

  return (
    <Link
      to={`/work/${caseStudy.slug}`}
      className={`group relative flex flex-col justify-between rounded-3xl bg-[#10151C] border border-white/10 hover:border-white/20 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl ${theme.glow} overflow-hidden ${
        featured ? 'lg:col-span-2' : ''
      }`}
    >
      {/* Background radial gradient */}
      <div
        className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl ${theme.gradient} rounded-bl-full opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none`}
      />

      <div>
        {/* Header tags */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
          <div className="flex items-center gap-2">
            <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${theme.badge}`}>
              {caseStudy.category}
            </span>
            <span className="text-xs font-medium text-gray-400">
              {caseStudy.industry}
            </span>
          </div>
          <span className="text-xs font-mono text-gray-500">{caseStudy.year}</span>
        </div>

        {/* Client & Title */}
        <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
          {caseStudy.client}
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug group-hover:text-white/90">
          {caseStudy.title}
        </h3>

        <p className="mt-3 text-gray-300 text-sm sm:text-base leading-relaxed line-clamp-2">
          {caseStudy.summary}
        </p>

        {/* Results Metrics Banner */}
        <div className="mt-6 pt-6 border-t border-white/5 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {caseStudy.results.slice(0, featured ? 4 : 2).map((res, i) => (
            <div key={i} className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
              <div className={`text-xl sm:text-2xl font-black ${theme.metric}`}>
                {res.metric}
              </div>
              <div className="text-xs text-gray-400 mt-0.5 line-clamp-1">
                {res.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
        <div className="flex flex-wrap items-center gap-2 text-xs text-gray-400">
          {caseStudy.services.slice(0, 3).map((srv, i) => (
            <span key={i} className="px-2 py-0.5 rounded bg-white/5 border border-white/5">
              {srv}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-1 text-sm font-bold text-white group-hover:text-[#00D4FF] transition-colors shrink-0">
          <span>View Case Study</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};
