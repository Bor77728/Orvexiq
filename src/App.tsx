/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicesOverviewPage } from './pages/ServicesOverviewPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { SolutionsOverviewPage } from './pages/SolutionsOverviewPage';
import { SolutionDetailPage } from './pages/SolutionDetailPage';
import { WorkPage } from './pages/WorkPage';
import { CaseStudyDetailPage } from './pages/CaseStudyDetailPage';
import { AboutPage } from './pages/AboutPage';
import { TeamPage } from './pages/TeamPage';
import { CareersPage } from './pages/CareersPage';
import { InsightsPage } from './pages/InsightsPage';
import { InsightDetailPage } from './pages/InsightDetailPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { DisclaimerPage } from './pages/DisclaimerPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#05070A] text-white selection:bg-[#7C3AED]/40 selection:text-[#00D4FF] antialiased">
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* Home */}
            <Route path="/" element={<HomePage />} />

            {/* Services */}
            <Route path="/services" element={<ServicesOverviewPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/services/web-development" element={<ServiceDetailPage customSlug="web-development" />} />
            <Route path="/services/web3-development" element={<ServiceDetailPage customSlug="web3-development" />} />
            <Route path="/services/blockchain-development" element={<ServiceDetailPage customSlug="blockchain-development" />} />
            <Route path="/services/crypto-marketing" element={<ServiceDetailPage customSlug="crypto-marketing" />} />
            <Route path="/services/exchange-listing" element={<ServiceDetailPage customSlug="exchange-listing" />} />
            <Route path="/services/fundraising" element={<ServiceDetailPage customSlug="fundraising" />} />
            <Route path="/services/market-making" element={<ServiceDetailPage customSlug="market-making" />} />
            <Route path="/services/ai-automation" element={<ServiceDetailPage customSlug="ai-automation" />} />
            <Route path="/services/digital-growth" element={<ServiceDetailPage customSlug="digital-growth" />} />

            {/* Solutions */}
            <Route path="/solutions" element={<SolutionsOverviewPage />} />
            <Route path="/solutions/:slug" element={<SolutionDetailPage />} />
            <Route path="/solutions/startups" element={<SolutionDetailPage customSlug="startups" />} />
            <Route path="/solutions/web2-business" element={<SolutionDetailPage customSlug="web2-business" />} />
            <Route path="/solutions/web3-projects" element={<SolutionDetailPage customSlug="web3-projects" />} />
            <Route path="/solutions/crypto-companies" element={<SolutionDetailPage customSlug="crypto-companies" />} />
            <Route path="/solutions/enterprise" element={<SolutionDetailPage customSlug="enterprise" />} />

            {/* Work / Case Studies */}
            <Route path="/work" element={<WorkPage />} />
            <Route path="/work/:slug" element={<CaseStudyDetailPage />} />

            {/* Company */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/careers" element={<CareersPage />} />

            {/* Insights */}
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/insights/:slug" element={<InsightDetailPage />} />

            {/* Contact */}
            <Route path="/contact" element={<ContactPage />} />

            {/* Legal */}
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />

            {/* 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

