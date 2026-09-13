import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHelmet } from '../components/common/SeoHelmet';

export const TermsPage: React.FC = () => {
  return (
    <div className="pt-28 sm:pt-36 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <SeoHelmet
        title="Terms of Service | ORVEXIQ"
        description="Terms and conditions governing consulting engagements, intellectual property, and platform services provided by ORVEXIQ."
      />

      <Breadcrumbs items={[{ label: 'Legal' }, { label: 'Terms of Service' }]} />

      <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-6 mb-4">
        Terms of Service
      </h1>
      <p className="text-xs text-gray-400 font-mono mb-10">Last Updated: January 1, 2025</p>

      <div className="prose prose-invert max-w-none space-y-8 text-gray-300 text-sm sm:text-base leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">1. Agreement to Terms</h2>
          <p>
            By accessing or utilizing the ORVEXIQ website, materials, or consulting services, you agree to be bound by these Terms of Service. If you do not agree with any provision herein, you must refrain from using this website or engaging our services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">2. Scope of Services</h2>
          <p>
            ORVEXIQ provides technology development, smart contract development, strategic growth advisory, and marketing services. Formal engineering and advisory work is governed by individual Master Services Agreements (MSAs) and Statements of Work (SOWs) executed between ORVEXIQ and the client.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">3. Intellectual Property Rights</h2>
          <p>
            Unless explicitly transferred under an executed SOW upon full settlement of contract fees, all methodologies, proprietary algorithms, frameworks, and website assets remain the exclusive intellectual property of ORVEXIQ. Client deliverables and codebases are transferred to the client in accordance with specific SOW provisions.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">4. Disclaimers and Limitations</h2>
          <p>
            Information presented on this website is for informational purposes only. Technology products, smart contracts, and marketing strategies are subject to inherent market, technological, and regulatory variances. ORVEXIQ provides advisory and execution services with professional diligence, but without warranties of specific commercial market values or token prices.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">5. Governing Law</h2>
          <p>
            These terms are governed by and construed under applicable corporate law without regard to conflict of law principles.
          </p>
        </section>
      </div>
    </div>
  );
};
