import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  Layout,
  Coins,
  Cpu,
  Megaphone,
  Building2,
  TrendingUp,
  BarChart3,
  Bot,
  Zap,
  Rocket,
  Globe2,
  Layers,
  ShieldCheck,
  Building,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { OrvexiqLogo } from './OrvexiqLogo';

const serviceLinks = [
  { name: 'Web Development', path: '/services/web-development', icon: Layout, desc: 'Next.js, modern web platforms & SaaS' },
  { name: 'Web3 Development', path: '/services/web3-development', icon: Coins, desc: 'DApps, DeFi, account abstraction & wallets' },
  { name: 'Blockchain Solutions', path: '/services/blockchain-development', icon: Cpu, desc: 'Audited smart contracts & multi-chain tokens' },
  { name: 'Crypto Marketing', path: '/services/crypto-marketing', icon: Megaphone, desc: 'KOL syndication, viral PR & community growth' },
  { name: 'Exchange Listings', path: '/services/exchange-listing', icon: Building2, desc: 'Tier-1, 2, 3 exchange listing advisory & BD' },
  { name: 'Fundraising', path: '/services/fundraising', icon: TrendingUp, desc: 'Pitch decks, VC introductions & investor syndicates' },
  { name: 'Market Making', path: '/services/market-making', icon: BarChart3, desc: 'DEX/CEX liquidity strategy & spread optimization' },
  { name: 'AI Automation', path: '/services/ai-automation', icon: Bot, desc: 'Autonomous agents, RAG & operational pipelines' },
  { name: 'Digital Growth', path: '/services/digital-growth', icon: Zap, desc: 'SEO, programmatic acquisition & funnel CRO' },
];

const solutionLinks = [
  { name: 'Startups & Founders', path: '/solutions/startups', icon: Rocket, desc: 'Build MVPs and close early capital rounds' },
  { name: 'Web2 Businesses', path: '/solutions/web2-business', icon: Globe2, desc: 'Modernize infrastructure & unlock digital revenue' },
  { name: 'Web3 Projects', path: '/solutions/web3-projects', icon: Layers, desc: 'Scale protocols, tokenomics & global communities' },
  { name: 'Crypto Companies', path: '/solutions/crypto-companies', icon: ShieldCheck, desc: 'Enterprise reliability, OTC desks & compliance' },
  { name: 'Enterprise', path: '/solutions/enterprise', icon: Building, desc: 'High-throughput cloud software & private ledgers' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const solutionsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setServicesOpen(false);
    setSolutionsOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setServicesOpen(true);
    setSolutionsOpen(false);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

  const handleSolutionsMouseEnter = () => {
    if (solutionsTimeoutRef.current) clearTimeout(solutionsTimeoutRef.current);
    setSolutionsOpen(true);
    setServicesOpen(false);
  };

  const handleSolutionsMouseLeave = () => {
    solutionsTimeoutRef.current = setTimeout(() => {
      setSolutionsOpen(false);
    }, 150);
  };

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#05070A]/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-3.5'
          : 'bg-transparent py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          id="header-brand-logo"
          className="group flex items-center transition-transform duration-200 hover:scale-[1.02]"
          aria-label="ORVEXIQ Homepage"
        >
          <OrvexiqLogo variant="horizontal" size="md" />
        </Link>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-1 xl:gap-2">
          <Link
            to="/"
            id="nav-home"
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
              isActive('/')
                ? 'text-white font-semibold'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleServicesMouseEnter}
            onMouseLeave={handleServicesMouseLeave}
          >
            <Link
              to="/services"
              id="nav-services-dropdown"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                isActive('/services')
                  ? 'text-white font-semibold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  servicesOpen ? 'rotate-180 text-[#00D4FF]' : ''
                }`}
              />
            </Link>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  id="services-menu-panel"
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[620px]"
                >
                  <div className="bg-[#10151C] border border-white/10 rounded-2xl p-4 shadow-2xl shadow-black/80 backdrop-blur-xl">
                    <div className="flex items-center justify-between px-2 pb-2 mb-2 border-b border-white/5">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                        Capabilities & Engineering
                      </span>
                      <Link
                        to="/services"
                        className="text-xs text-[#00D4FF] hover:underline flex items-center gap-1"
                      >
                        All Services <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5">
                      {serviceLinks.map((service) => {
                        const Icon = service.icon;
                        return (
                          <Link
                            key={service.path}
                            to={service.path}
                            className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.04] transition-colors"
                          >
                            <div className="mt-0.5 w-8 h-8 rounded-lg bg-white/5 group-hover:bg-[#7C3AED]/20 border border-white/5 group-hover:border-[#7C3AED]/40 flex items-center justify-center transition-colors text-gray-300 group-hover:text-[#00D4FF] shrink-0">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-white group-hover:text-[#00D4FF] transition-colors">
                                {service.name}
                              </div>
                              <div className="text-xs text-gray-400 line-clamp-1">
                                {service.desc}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Solutions Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleSolutionsMouseEnter}
            onMouseLeave={handleSolutionsMouseLeave}
          >
            <Link
              to="/solutions"
              id="nav-solutions-dropdown"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                isActive('/solutions')
                  ? 'text-white font-semibold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <span>Solutions</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  solutionsOpen ? 'rotate-180 text-[#00D4FF]' : ''
                }`}
              />
            </Link>

            <AnimatePresence>
              {solutionsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  id="solutions-menu-panel"
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[460px]"
                >
                  <div className="bg-[#10151C] border border-white/10 rounded-2xl p-4 shadow-2xl shadow-black/80 backdrop-blur-xl">
                    <div className="flex items-center justify-between px-2 pb-2 mb-2 border-b border-white/5">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                        Tailored Strategic Models
                      </span>
                      <Link
                        to="/solutions"
                        className="text-xs text-[#00D4FF] hover:underline flex items-center gap-1"
                      >
                        All Solutions <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                    <div className="space-y-1">
                      {solutionLinks.map((sol) => {
                        const Icon = sol.icon;
                        return (
                          <Link
                            key={sol.path}
                            to={sol.path}
                            className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.04] transition-colors"
                          >
                            <div className="mt-0.5 w-8 h-8 rounded-lg bg-white/5 group-hover:bg-[#00D4FF]/20 border border-white/5 group-hover:border-[#00D4FF]/40 flex items-center justify-center transition-colors text-gray-300 group-hover:text-[#00D4FF] shrink-0">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-white group-hover:text-[#00D4FF] transition-colors">
                                {sol.name}
                              </div>
                              <div className="text-xs text-gray-400">
                                {sol.desc}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/work"
            id="nav-work"
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
              isActive('/work')
                ? 'text-white font-semibold'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Work
          </Link>

          <Link
            to="/about"
            id="nav-about"
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
              isActive('/about')
                ? 'text-white font-semibold'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            About
          </Link>

          <Link
            to="/insights"
            id="nav-insights"
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
              isActive('/insights')
                ? 'text-white font-semibold'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Insights
          </Link>

          <Link
            to="/contact"
            id="nav-contact"
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
              isActive('/contact')
                ? 'text-white font-semibold'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Right CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            id="header-cta-start-project"
            className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#7C3AED] to-[#00D4FF] p-[1px] hover:shadow-lg hover:shadow-[#7C3AED]/25 transition-all duration-200"
          >
            <span className="flex items-center gap-2 px-4 py-2 w-full h-full bg-[#05070A] rounded-[11px] group-hover:bg-opacity-80 transition-colors">
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 text-[#00D4FF] group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <Link
            to="/contact"
            className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#7C3AED] to-[#00D4FF] text-white"
          >
            Inquire
          </Link>
          <button
            id="mobile-menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            id="mobile-nav-drawer"
            className="lg:hidden bg-[#0B0F14] border-b border-white/10 px-4 py-6 overflow-y-auto max-h-[85vh]"
          >
            <div className="space-y-4">
              <Link
                to="/"
                className="block text-base font-semibold text-white hover:text-[#00D4FF]"
              >
                Home
              </Link>

              <div className="border-t border-white/5 pt-3">
                <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                  Services
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-2">
                  {serviceLinks.map((srv) => (
                    <Link
                      key={srv.path}
                      to={srv.path}
                      className="text-sm text-gray-300 hover:text-white flex items-center gap-2 py-1"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
                      {srv.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/5 pt-3">
                <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                  Solutions
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-2">
                  {solutionLinks.map((sol) => (
                    <Link
                      key={sol.path}
                      to={sol.path}
                      className="text-sm text-gray-300 hover:text-white flex items-center gap-2 py-1"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
                      {sol.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/5 pt-3 space-y-2">
                <Link to="/work" className="block text-sm font-medium text-gray-200 hover:text-white">
                  Selected Work & Case Studies
                </Link>
                <Link to="/about" className="block text-sm font-medium text-gray-200 hover:text-white">
                  About ORVEXIQ
                </Link>
                <Link to="/team" className="block text-sm font-medium text-gray-200 hover:text-white">
                  Leadership & Team
                </Link>
                <Link to="/careers" className="block text-sm font-medium text-gray-200 hover:text-white">
                  Careers (We are hiring)
                </Link>
                <Link to="/insights" className="block text-sm font-medium text-gray-200 hover:text-white">
                  Insights & Research
                </Link>
                <Link to="/contact" className="block text-sm font-medium text-gray-200 hover:text-white">
                  Contact & Inquiries
                </Link>
              </div>

              <div className="pt-4">
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#7C3AED] to-[#00D4FF]"
                >
                  <span>Start a Project →</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
