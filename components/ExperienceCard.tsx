'use client';

import { Experience } from '@/types';
import { useState } from 'react';

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white/5 rounded-2xl p-5 hover:bg-white/[0.07] hover:-translate-y-0.5 hover:shadow-[4px_4px_16px_rgba(0,0,0,0.4)] transition-all duration-200 border border-white/5">
      <div className="flex items-start gap-4">
        {/* Logo */}
        <div className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 ${
          experience.logo === 'B' ? 'bg-orange-500/20 text-orange-400' :
          experience.logo === 'C' ? 'bg-zinc-700 text-white' :
          experience.logo === 'V' ? 'bg-purple-500/20 text-purple-400' :
          experience.logo === 'S' ? 'bg-blue-500/20 text-blue-400' :
          'bg-pink-500/20 text-pink-400'
        }`}>
          {experience.logo}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 mb-1">
            <div className="flex-1 min-w-0">
              <p className="text-[11px] text-zinc-500 uppercase tracking-wider mb-1">
                {experience.company}
              </p>
              <h3 className="text-white font-semibold text-lg leading-tight mb-2">
                {experience.role}
              </h3>
              <div className="flex items-center gap-2 flex-wrap">
                <a
                  href={experience.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 text-sm hover:text-zinc-100 transition-colors"
                >
                  {experience.company}
                </a>
                {experience.badge && (
                  <span className={`inline-block px-2 py-0.5 rounded-md text-xs font-medium ${
                    experience.badgeColor === 'orange' ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20' :
                    experience.badgeColor === 'yellow' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' :
                    'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                  }`}>
                    {experience.badge}
                  </span>
                )}
              </div>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <span className="text-zinc-500 text-sm whitespace-nowrap">{experience.period}</span>
              {experience.description && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-zinc-400 hover:text-zinc-100 transition-colors flex items-center gap-1 text-sm"
                  aria-label={isExpanded ? 'Collapse' : 'Expand'}
                >
                  <span className="text-xs">Expand</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-45' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </button>
              )}
            </div>
          </div>
          
          {isExpanded && experience.description && (
            <div className="mt-4 pt-4 border-t border-white/5">
              <p className="text-zinc-400 text-sm leading-relaxed">{experience.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
