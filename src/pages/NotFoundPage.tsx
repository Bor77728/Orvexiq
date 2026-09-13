import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { SeoHelmet } from '../components/common/SeoHelmet';
import { OrvexiqLogo } from '../components/common/OrvexiqLogo';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-28 pb-20 px-4">
      <SeoHelmet
        title="Page Not Found (404) | ORVEXIQ"
        description="The requested page could not be located in the ORVEXIQ network."
      />

      <div className="max-w-md w-full text-center p-8 rounded-3xl bg-[#10151C] border border-white/10 shadow-2xl space-y-6">
        <div className="flex justify-center">
          <OrvexiqLogo variant="mark" size="xl" />
        </div>
        <div>
          <span className="text-xs font-mono font-bold text-[#00D4FF] uppercase tracking-widest">
            SYSTEM NOTICE • 404
          </span>
          <h1 className="text-4xl font-black text-white tracking-tight mt-2 mb-3">
            Vector Not Found
          </h1>
          <p className="text-sm text-gray-400 leading-relaxed">
            The node or route you attempted to access does not exist or has been migrated. Return to our main portal to continue.
          </p>
        </div>
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#00D4FF] text-white text-sm font-bold shadow-lg shadow-[#7C3AED]/20 hover:opacity-95 transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
};
