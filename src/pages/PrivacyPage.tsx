import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHelmet } from '../components/common/SeoHelmet';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="pt-28 sm:pt-36 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <SeoHelmet
        title="Privacy Policy | ORVEXIQ"
        description="ORVEXIQ's commitment to data protection, client confidentiality, and information security."
      />

      <Breadcrumbs items={[{ label: 'Legal' }, { label: 'Privacy Policy' }]} />

      <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-6 mb-4">
        Privacy Policy
      </h1>
      <p className="text-xs text-gray-400 font-mono mb-10">Last Updated: January 1, 2025</p>

      <div className="prose prose-invert max-w-none space-y-8 text-gray-300 text-sm sm:text-base leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">1. Introduction</h2>
          <p>
            ORVEXIQ ("we," "our," or "us") is dedicated to safeguarding the privacy and intellectual confidentiality of our clients, website visitors, and partners. This Privacy Policy details how we collect, store, utilize, and protect personal and organizational information.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">2. Information Collection</h2>
          <p>
            We collect information provided directly by you when submitting project inquiries, requesting strategic consultations, or engaging in business communications. This may include:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-gray-300">
            <li>Contact details such as name, business email, Telegram handle, and phone number.</li>
            <li>Organizational profiles, project briefs, technical specifications, and repository URLs.</li>
            <li>Technical telemetry such as IP addresses, browser types, and session analytics collected via privacy-preserving logs.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">3. Commercial Confidentiality & Non-Disclosure</h2>
          <p>
            We adhere to strict commercial non-disclosure practices. Proprietary product designs, smart contract architectures, investor decks, and private tokens shared with ORVEXIQ are kept confidential and never sold, leased, or disclosed to third parties without prior written consent.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">4. Data Security</h2>
          <p>
            We employ modern encryption protocols (TLS 1.3 in transit, AES-256 at rest) across all communications and internal data repositories. Access to client documentation is restricted to assigned engineering squads and leadership on a strict need-to-know basis.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">5. Contact Information</h2>
          <p>
            For questions or requests regarding your personal data or NDA terms, contact our legal counsel at <span className="text-[#00D4FF]">legal@orvexiq.com</span>.
          </p>
        </section>
      </div>
    </div>
  );
};
