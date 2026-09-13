import React, { useState } from 'react';
import { StatItem } from '../../types';
import { INITIAL_STATS } from '../../data/siteData';
import { Edit2, Check, RotateCcw } from 'lucide-react';

interface StatsSectionProps {
  className?: string;
  allowEdit?: boolean;
}

export const StatsSection: React.FC<StatsSectionProps> = ({
  className = '',
  allowEdit = true,
}) => {
  const [stats, setStats] = useState<StatItem[]>(() => {
    const saved = localStorage.getItem('orvexiq_stats');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return INITIAL_STATS;
  });

  const [isEditing, setIsEditing] = useState(false);
  const [tempStats, setTempStats] = useState<StatItem[]>(stats);

  const handleSave = () => {
    setStats(tempStats);
    localStorage.setItem('orvexiq_stats', JSON.stringify(tempStats));
    setIsEditing(false);
  };

  const handleReset = () => {
    setStats(INITIAL_STATS);
    setTempStats(INITIAL_STATS);
    localStorage.removeItem('orvexiq_stats');
    setIsEditing(false);
  };

  const handleStatChange = (id: string, field: 'value' | 'label', val: string) => {
    setTempStats((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: val } : item))
    );
  };

  return (
    <section className={`relative py-12 sm:py-16 border-y border-white/5 bg-[#0B0F14]/60 backdrop-blur-sm ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
              Verified Track Record & Global Ecosystem Reach
            </span>
          </div>
          {allowEdit && (
            <div className="flex items-center gap-2">
              {isEditing ? (
                <>
                  <button
                    onClick={handleReset}
                    className="px-2.5 py-1 text-xs text-gray-400 hover:text-white flex items-center gap-1 bg-white/5 rounded-md border border-white/10"
                    title="Reset to defaults"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                  <button
                    onClick={handleSave}
                    className="px-3 py-1 text-xs font-semibold text-white bg-[#7C3AED] hover:bg-[#6D28D9] flex items-center gap-1 rounded-md"
                  >
                    <Check className="w-3 h-3" />
                    <span>Save Stats</span>
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    setTempStats(stats);
                    setIsEditing(true);
                  }}
                  className="px-2.5 py-1 text-xs text-gray-400 hover:text-white flex items-center gap-1 bg-white/5 hover:bg-white/10 rounded-md border border-white/10 transition-colors"
                  title="Edit statistics"
                >
                  <Edit2 className="w-3 h-3 text-[#00D4FF]" />
                  <span>Customize Stats</span>
                </button>
              )}
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {(isEditing ? tempStats : stats).map((stat) => (
            <div
              key={stat.id}
              className="relative p-6 rounded-2xl bg-[#10151C]/60 border border-white/5 hover:border-white/15 transition-all duration-300 group"
            >
              <div className="absolute top-0 left-0 w-8 h-[2px] bg-gradient-to-r from-[#7C3AED] to-[#00D4FF] opacity-80 group-hover:w-16 transition-all duration-300" />
              {isEditing ? (
                <div className="space-y-2 mt-1">
                  <input
                    type="text"
                    value={stat.value}
                    onChange={(e) => handleStatChange(stat.id, 'value', e.target.value)}
                    className="w-full bg-black/40 border border-white/20 rounded px-2 py-1 text-2xl font-black text-white"
                  />
                  <input
                    type="text"
                    value={stat.label}
                    onChange={(e) => handleStatChange(stat.id, 'label', e.target.value)}
                    className="w-full bg-black/40 border border-white/20 rounded px-2 py-1 text-xs text-gray-300"
                  />
                </div>
              ) : (
                <>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-white group-hover:to-[#00D4FF] transition-all">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm sm:text-base font-semibold text-gray-200">
                    {stat.label}
                  </div>
                  {stat.subtext && (
                    <div className="mt-1 text-xs text-gray-400 line-clamp-2">
                      {stat.subtext}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
