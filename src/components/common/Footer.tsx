import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Send,
  Linkedin,
  Twitter,
  Github,
  Mail,
  MapPin,
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/siteData';
import { OrvexiqLogo } from './OrvexiqLogo';

export const Footer: React.FC = () => {
  return (
    <footer id="global-footer" className="bg-[#0B0F14] border-t border-white/10 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#7C3AED]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#00D4FF]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Pre-Footer Newsletter / Consultation Prompt */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 border-b border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-[#00D4FF] font-medium mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
              Global Engineering & Growth Network
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Ready to engineer your Web2 or Web3 advantage?
            </h3>
            <p className="mt-2 text-gray-400 text-sm sm:text-base max-w-xl">
              Partner with ORVEXIQ for strategic product engineering, high-throughput blockchain infrastructure, and institutional market expansion.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col sm:flex-row items-stretch gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#7C3AED] to-[#00D4FF] hover:opacity-95 shadow-lg shadow-[#7C3AED]/25 transition-all"
            >
              <span>Schedule Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={COMPANY_INFO.telegram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium text-gray-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors hover:text-white"
            >
              <Send className="w-4 h-4 text-[#00D4FF]" />
              <span>Telegram: {COMPANY_INFO.telegramHandle}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main 4-Column Navigation Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10">
          {/* Brand Col */}
          <div className="col-span-2 space-y-4">
            <Link to="/" className="inline-block" aria-label="ORVEXIQ Homepage">
              <OrvexiqLogo variant="horizontal" size="lg" showSubtitle={true} />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Global Web2 + Web3 technology, marketing, growth, and strategic solutions agency helping ambitious teams build, launch, and scale globally.
            </p>
            <div className="pt-2 flex items-center gap-3 text-gray-400">
              <a
                href={COMPANY_INFO.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:text-white hover:border-white/20 transition-colors"
                aria-label="Twitter X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:text-[#00A0DC] hover:border-[#0077B5]/40 transition-colors"
                aria-label="ORVEXIQ LinkedIn"
                title="ORVEXIQ on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.telegram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:text-[#00D4FF] hover:border-[#00D4FF]/40 transition-colors"
                aria-label="ORVEXIQ Telegram (@orvexiq)"
                title="Direct Telegram @orvexiq"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:text-white hover:border-white/20 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
            <div className="pt-2 text-xs text-gray-500 space-y-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gray-400" />
                <span>San Francisco · Singapore · London · Dubai</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-gray-400" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:underline text-gray-400">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 1: Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/services/web-development" className="hover:text-white transition-colors">Web Development</Link></li>
              <li><Link to="/services/web3-development" className="hover:text-white transition-colors">Web3 Development</Link></li>
              <li><Link to="/services/blockchain-development" className="hover:text-white transition-colors">Blockchain</Link></li>
              <li><Link to="/services/crypto-marketing" className="hover:text-white transition-colors">Crypto Marketing</Link></li>
              <li><Link to="/services/exchange-listing" className="hover:text-white transition-colors">Exchange Listings</Link></li>
              <li><Link to="/services/fundraising" className="hover:text-white transition-colors">Fundraising</Link></li>
              <li><Link to="/services/market-making" className="hover:text-white transition-colors">Market Making</Link></li>
              <li><Link to="/services/ai-automation" className="hover:text-white transition-colors">AI Automation</Link></li>
              <li><Link to="/services/digital-growth" className="hover:text-white transition-colors">Growth</Link></li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Solutions</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/solutions/startups" className="hover:text-white transition-colors">Startups</Link></li>
              <li><Link to="/solutions/web2-business" className="hover:text-white transition-colors">Web2 Businesses</Link></li>
              <li><Link to="/solutions/web3-projects" className="hover:text-white transition-colors">Web3 Projects</Link></li>
              <li><Link to="/solutions/crypto-companies" className="hover:text-white transition-colors">Crypto Companies</Link></li>
              <li><Link to="/solutions/enterprise" className="hover:text-white transition-colors">Enterprise</Link></li>
              <li><Link to="/solutions" className="text-[#00D4FF] hover:underline transition-colors font-medium">All Frameworks →</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/team" className="hover:text-white transition-colors">Executive Team</Link></li>
              <li><Link to="/work" className="hover:text-white transition-colors">Selected Work</Link></li>
              <li><Link to="/insights" className="hover:text-white transition-colors">Insights & Blog</Link></li>
              <li>
                <Link to="/careers" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Careers</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#7C3AED]/30 text-[#A78BFA] border border-[#7C3AED]/40">
                    We're hiring
                  </span>
                </Link>
              </li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4: Legal & Standards */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Legal & Standards</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li>
                <div className="pt-2 flex items-center gap-1.5 text-xs text-gray-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Verified Entity Security</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
        <div>
          © {new Date().getFullYear()} ORVEXIQ Technologies Inc. All rights reserved. BUILD. GROW. SCALE. FROM WEB2 TO WEB3.
        </div>
        <div className="flex items-center gap-6 text-gray-400">
          <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
          <span>Sitemap</span>
        </div>
      </div>
    </footer>
  );
};
