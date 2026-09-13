import React from 'react';
import { AlertTriangle, ShieldCheck } from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHelmet } from '../components/common/SeoHelmet';

export const DisclaimerPage: React.FC = () => {
  return (
    <div className="pt-28 sm:pt-36 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <SeoHelmet
        title="Regulatory & Risk Disclaimers | ORVEXIQ"
        description="Important legal, regulatory, exchange review, and market risk disclaimers regarding ORVEXIQ's services."
      />

      <Breadcrumbs items={[{ label: 'Legal' }, { label: 'Disclaimers' }]} />

      <div className="flex items-center gap-3 mt-6 mb-4">
        <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
          <AlertTriangle className="w-5 h-5" />
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Disclaimers & Disclosures
        </h1>
      </div>

      <p className="text-xs text-gray-400 font-mono mb-10">Last Updated: January 1, 2025</p>

      <div className="prose prose-invert max-w-none space-y-8 text-gray-300 text-sm sm:text-base leading-relaxed">
        {/* Exchange Review Disclaimer */}
        <section className="p-6 rounded-2xl bg-[#10151C] border border-white/10 space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
            1. Exchange Listing Support & Approvals
          </h2>
          <p className="text-sm">
            ORVEXIQ provides strategic support, documentation review, technical preparation, and introductions to centralized and decentralized exchange platforms. ORVEXIQ does NOT and CANNOT guarantee exchange listings or listing dates. All listings are strictly subject to each exchange platform's independent due diligence, compliance standards, internal listing committees, and final regulatory approval.
          </p>
        </section>

        {/* Fundraising & Investment Advisory */}
        <section className="p-6 rounded-2xl bg-[#10151C] border border-white/10 space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />
            2. Fundraising & Capital Advisory
          </h2>
          <p className="text-sm">
            ORVEXIQ is a technology, advisory, and digital strategy agency. We do not operate as a registered broker-dealer, investment adviser, or money services business. Introductions to venture capital funds, angels, and syndicates are strategic in nature. ORVEXIQ does not promise or guarantee capital allocation, funding amounts, or investment commitments. All investment decisions are negotiated directly between founders and independent investors.
          </p>
        </section>

        {/* Market Making & Liquidity Disclosures */}
        <section className="p-6 rounded-2xl bg-[#10151C] border border-white/10 space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            3. Liquidity Strategy & Market Risk
          </h2>
          <p className="text-sm">
            Liquidity coordination and algorithmic services provided or facilitated by ORVEXIQ are designed for order book depth stabilization and bid-ask spread compression across authorized trading venues. ORVEXIQ does not offer investment advice, does not engage in price manipulation, wash trading, or spoofing, and makes no representations regarding token price performance, appreciation, or investment return. Digital asset markets carry extreme volatility and risk of capital loss.
          </p>
        </section>

        {/* No Investment Advice */}
        <section className="p-6 rounded-2xl bg-[#10151C] border border-white/10 space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            4. No Financial or Legal Advice
          </h2>
          <p className="text-sm">
            The content, case studies, research articles, and statistics on this website do not constitute financial, investment, legal, or tax advice. Prospective clients and project founders must consult qualified legal counsel and financial advisors regarding regulatory compliance within their applicable jurisdictions.
          </p>
        </section>
      </div>
    </div>
  );
};
