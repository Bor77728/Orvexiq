import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Layout,
  Coins,
  Cpu,
  Megaphone,
  Building2,
  TrendingUp,
  BarChart3,
  Bot,
  Zap,
} from 'lucide-react';
import { ServiceItem } from '../../types';

interface ServiceCardProps {
  service: ServiceItem;
  index?: number;
}

const iconMap: Record<string, React.ElementType> = {
  Layout,
  Coins,
  Cpu,
  Megaphone,
  Building2,
  TrendingUp,
  BarChart3,
  Bot,
  Zap,
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const Icon = iconMap[service.iconName] || Layout;

  return (
    <Link
      to={`/services/${service.slug}`}
      className="group relative flex flex-col justify-between p-7 rounded-2xl bg-[#10151C] border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-[#7C3AED]/10 overflow-hidden"
    >
      {/* Top ambient hover accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#7C3AED]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:text-[#00D4FF] group-hover:bg-[#00D4FF]/10 group-hover:border-[#00D4FF]/30 transition-all duration-300">
            <Icon className="w-6 h-6" />
          </div>
          <span className="text-xs font-mono font-bold tracking-wider text-gray-500 group-hover:text-[#7C3AED] transition-colors">
            {service.number}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#00D4FF] transition-colors">
          {service.title}
        </h3>

        <p className="mt-3 text-gray-400 text-sm leading-relaxed line-clamp-3">
          {service.shortDescription}
        </p>

        {service.deliverables && service.deliverables.length > 0 && (
          <div className="mt-5 pt-4 border-t border-white/5 space-y-1.5">
            {service.deliverables.slice(0, 3).map((del, i) => (
              <div key={i} className="text-xs text-gray-400 flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[#7C3AED]" />
                <span className="truncate">{del}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-sm font-semibold text-white group-hover:text-[#00D4FF] transition-colors">
        <span>View Service</span>
        <div className="w-7 h-7 rounded-full bg-white/5 group-hover:bg-[#00D4FF]/20 flex items-center justify-center transition-all">
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </Link>
  );
};
