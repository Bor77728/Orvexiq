import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Send,
  CheckCircle2,
  Mail,
  Send as TelegramIcon,
  MapPin,
  Clock,
  Sparkles,
  Shield,
  Linkedin,
} from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { SeoHelmet } from '../components/common/SeoHelmet';
import { COMPANY_INFO, SERVICES_DATA } from '../data/siteData';

const STAGES = ['Idea / Conceptual', 'MVP / Prototype Ready', 'Live Product', 'Growth / Scaling'];

const BUDGET_RANGES = [
  '$10k – $25k',
  '$25k – $50k',
  '$50k – $100k',
  '$100k – $250k+',
  'Custom / Enterprise',
];

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get('service') || '';
  const initialPackage = searchParams.get('package') || '';
  const isConsultation = searchParams.get('type') === 'consultation';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    telegram: '',
    selectedServices: initialService ? [initialService] : [],
    stage: 'MVP / Prototype Ready',
    budget: '$25k – $50k',
    message: initialPackage ? `Interested in package: ${initialPackage}` : '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialService && !formData.selectedServices.includes(initialService)) {
      setFormData((prev) => ({
        ...prev,
        selectedServices: [...prev.selectedServices, initialService],
      }));
    }
  }, [initialService]);

  const toggleService = (slug: string) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(slug);
      return {
        ...prev,
        selectedServices: exists
          ? prev.selectedServices.filter((s) => s !== slug)
          : [...prev.selectedServices, slug],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate async submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div>
      <SeoHelmet
        title="Contact Us & Start a Project | ORVEXIQ"
        description="Submit your project details to ORVEXIQ. Connect with our technology architects and growth strategists within 24 hours."
      />

      <PageHero
        breadcrumbs={[{ label: 'Contact' }]}
        badge="GET IN TOUCH"
        headline={isConsultation ? 'BOOK A CONSULTATION.' : 'START YOUR PROJECT.'}
        description="Tell us about your venture, technical challenges, or growth goals. Our partners will analyze your requirements and respond with a concrete roadmap within 24 hours."
        primaryCtaText="Skip to Form"
        primaryCtaLink="#contact-form"
        secondaryCtaText="Direct Telegram"
        secondaryCtaLink={COMPANY_INFO.telegram}
        highlights={[
          'Response within 24 Hours',
          'Strict Mutual NDA',
          'Senior Partners Only',
          'Zero Obligation Feasibility Review',
        ]}
      />

      <section id="contact-form" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Form Column */}
          <div className="lg:col-span-8">
            <div className="rounded-3xl bg-[#10151C] border border-white/10 p-8 sm:p-12 shadow-2xl">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-black text-white">Project Inquiry Received</h3>
                  <p className="text-gray-300 text-base max-w-lg mx-auto leading-relaxed">
                    Thank you for sharing your project details, <span className="text-white font-semibold">{formData.name}</span>. An ORVEXIQ senior partner will review your specifications and contact you at <span className="text-[#00D4FF] font-mono">{formData.email}</span> within 24 hours.
                  </p>
                  <div className="pt-6">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-black text-white tracking-tight mb-2">
                      Tell Us About Your Vision
                    </h3>
                    <p className="text-xs text-gray-400">
                      All submissions are strictly protected under mutual commercial confidentiality.
                    </p>
                  </div>

                  {/* Basic Credentials */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-300 block mb-2">
                        Your Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Alex Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:border-[#00D4FF] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-300 block mb-2">
                        Work Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:border-[#00D4FF] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-300 block mb-2">
                        Company or Project Name
                      </label>
                      <input
                        type="text"
                        placeholder="Project / Venture Name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:border-[#00D4FF] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-[#00D4FF] block mb-2 flex items-center justify-between">
                        <span>Telegram Handle</span>
                        <span className="text-[10px] text-gray-500 font-normal">Fastest response for Web3</span>
                      </label>
                      <input
                        type="text"
                        placeholder="@yourtelegram"
                        value={formData.telegram}
                        onChange={(e) => setFormData({ ...formData, telegram: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-[#00D4FF]/30 text-white text-sm focus:border-[#00D4FF] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Multi-Select Services */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-300 block mb-3">
                      Services Needed (Select all that apply)
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {SERVICES_DATA.map((srv) => {
                        const isSelected = formData.selectedServices.includes(srv.slug);
                        return (
                          <button
                            type="button"
                            key={srv.slug}
                            onClick={() => toggleService(srv.slug)}
                            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                              isSelected
                                ? 'bg-gradient-to-r from-[#7C3AED] to-[#00D4FF] text-white shadow-md shadow-[#7C3AED]/20'
                                : 'bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10'
                            }`}
                          >
                            {srv.title}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Project Stage */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-300 block mb-3">
                      Current Project Stage
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {STAGES.map((stg) => (
                        <button
                          type="button"
                          key={stg}
                          onClick={() => setFormData({ ...formData, stage: stg })}
                          className={`p-3 rounded-xl text-xs font-semibold text-center border transition-all ${
                            formData.stage === stg
                              ? 'bg-[#7C3AED]/20 border-[#7C3AED] text-white'
                              : 'bg-white/[0.02] border-white/10 text-gray-400 hover:text-white'
                          }`}
                        >
                          {stg}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Estimated Budget Range */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-300 block mb-3">
                      Anticipated Budget Range
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
                      {BUDGET_RANGES.map((bgt) => (
                        <button
                          type="button"
                          key={bgt}
                          onClick={() => setFormData({ ...formData, budget: bgt })}
                          className={`p-2.5 rounded-xl text-xs font-semibold text-center border transition-all ${
                            formData.budget === bgt
                              ? 'bg-[#00D4FF]/20 border-[#00D4FF] text-white'
                              : 'bg-white/[0.02] border-white/10 text-gray-400 hover:text-white'
                          }`}
                        >
                          {bgt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-300 block mb-2">
                      Project Overview & Target Milestones *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Briefly describe your product goals, technical stack preferences, desired timeline, or any specific challenges..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:border-[#00D4FF] focus:outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#7C3AED] to-[#00D4FF] hover:opacity-95 shadow-xl shadow-[#7C3AED]/30 transition-all flex items-center justify-center gap-2"
                  >
                    <span>{isSubmitting ? 'Transmitting Details...' : 'Submit Project Details →'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar Direct Contacts */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-8 rounded-3xl bg-[#10151C] border border-white/10 space-y-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00D4FF]">
                <Shield className="w-4 h-4" />
                <span>Direct Access Channels</span>
              </div>

              <div className="space-y-4">
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/15 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#7C3AED] group-hover:text-white group-hover:bg-[#7C3AED] transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Institutional Inquiries</div>
                    <div className="text-sm font-bold text-white">{COMPANY_INFO.email}</div>
                  </div>
                </a>

                <a
                  href={COMPANY_INFO.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[#00D4FF]/5 border border-[#00D4FF]/20 hover:border-[#00D4FF]/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#00D4FF]/20 flex items-center justify-center text-[#00D4FF] group-hover:bg-[#00D4FF] group-hover:text-black transition-colors">
                    <TelegramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#00D4FF] font-semibold">Direct Desk Telegram</div>
                    <div className="text-sm font-bold text-white">{COMPANY_INFO.telegramHandle}</div>
                  </div>
                </a>

                <a
                  href={COMPANY_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[#0077B5]/10 border border-[#0077B5]/25 hover:border-[#0077B5]/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0077B5]/20 flex items-center justify-center text-[#00A0DC] group-hover:bg-[#0077B5] group-hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#00A0DC] font-semibold">Corporate LinkedIn</div>
                    <div className="text-sm font-bold text-white">ORVEXIQ</div>
                  </div>
                </a>
              </div>

              <div className="pt-4 border-t border-white/5 space-y-3">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>Avg. response time: &lt; 4 hours</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <MapPin className="w-4 h-4 text-[#7C3AED]" />
                  <span>Hubs: San Francisco • London • Singapore • Dubai</span>
                </div>
              </div>
            </div>

            {/* Quick Consultation Callout */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#10151C] to-[#0B0F14] border border-white/10 space-y-4">
              <span className="text-xs font-mono font-bold text-[#7C3AED] uppercase">
                Prefer a Live Call?
              </span>
              <h4 className="text-xl font-bold text-white">
                Schedule a 30-Minute Architecture Review
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Connect directly on Google Meet or Zoom with our Chief Technology Officer and Growth Director.
              </p>
              <a
                href={COMPANY_INFO.telegram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#00D4FF] hover:underline"
              >
                <span>Request calendar invite on Telegram →</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
