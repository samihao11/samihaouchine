'use client';

import { Experience } from '@/types';
import { useState } from 'react';
import Image from 'next/image';

interface ExperienceCardProps {
  experience: Experience;
}

const getBadgeColor = (color: string) => {
  switch (color) {
    case 'orange':
      return 'bg-orange-500/10 text-orange-400 border border-orange-500/20';
    case 'yellow':
      return 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20';
    case 'blue':
      return 'bg-blue-500/10 text-blue-400 border border-blue-500/20';
    case 'green':
      return 'bg-green-500/10 text-green-400 border border-green-500/20';
    case 'purple':
      return 'bg-purple-500/10 text-purple-400 border border-purple-500/20';
    default:
      return 'bg-blue-500/10 text-blue-400 border border-blue-500/20';
  }
};

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white/5 rounded-2xl p-6 hover:bg-white/[0.07] hover:-translate-y-0.5 hover:shadow-[4px_4px_16px_rgba(0,0,0,0.4)] transition-all duration-200 border border-white/5">
      {/* Vertical Layout */}
  
      <div className="flex flex-col">
        <div className="h-1"></div>
        {/* Horizontal: Logo, Company Name (clickable), Team, and Expand/Collapse Button */}
        <div className="flex items-center justify-between gap-3 mb-2">
          <div className="flex items-center gap-2">
            <div className="w-px"></div>
            <a
              href={experience.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <div className="w-6 h-6 flex-shrink-0 rounded-full overflow-hidden bg-white/5 flex items-center justify-center">
                <Image 
                  src={experience.logo} 
                  alt={`${experience.company} logo`}
                  width={28}
                  height={28}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-white font-normal text-sm">
                {experience.company}
              </span>
            </a>
            <span className="text-zinc-500 text-sm font-normal">{experience.team}</span>
          </div>

          {/* Expand/Collapse Button - Top Right */}
          <div className="flex items-center gap-2">
            {experience.description && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-zinc-500 hover:text-zinc-300 transition-colors text-xs flex items-center gap-1"
              >
                {isExpanded ? (
                  <div key="collapse" className="flex items-center gap-1 animate-fade-in">
                    <span>Collapse</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7L7 17M7 17H17M7 17V7" />
                    </svg>
                  </div>
                ) : (
                  <div key="expand" className="flex items-center gap-1 animate-fade-in">
                    <span>Expand</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                )}
              </button>
            )}
            <div className="w-px"></div>
          </div>
        </div>

        {/* Role - Bigger font below name */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-px"></div>
          <h3 className="text-white font-bold text-2xl">{experience.role}</h3>
        </div>

        {/* Description - Expandable/Collapsible */}
        {experience.description && isExpanded && (
          <div className="flex gap-3 mb-4">
            <div className="w-px"></div>
            <div className="flex-1">
              <p className="text-zinc-400 text-sm leading-relaxed">{experience.description}</p>
            </div>
            <div className="w-px"></div>
          </div>
        )}
      </div>

      <div className="h-1"></div>

      {/* Bottom Section: Period (left) and Badges (right) */}
      <div className="flex items-center justify-between mt-2">
        {/* Period - Bottom Left */}
        <div className="flex items-center gap-3">
          <div className="w-px"></div>
          <span className="text-zinc-500 text-xs">{experience.period}</span>
        </div>

        {/* Badges - Bottom Right */}
        <div className="flex items-center gap-2">
          {experience.badges?.map((badge, index) => {
            const badgeContent = (
              <span 
                className={`inline-block px-2 py-0.5 rounded-md text-sm font-medium ${getBadgeColor(badge.color)} ${badge.link ? 'cursor-pointer hover:opacity-80 transition-opacity' : ''}`}
              >
                {'\u00A0'}{badge.text}{'\u00A0'}
              </span>
            );

            return badge.link ? (
              <a
                key={index}
                href={badge.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {badgeContent}
              </a>
            ) : (
              <span key={index}>{badgeContent}</span>
            );
          })}
          <div className="w-px"></div>
        </div>
      </div>
      
      {/* Small spacing below */}
      <div className="flex justify-end mt-1">
        <div className="h-2"></div>
      </div>
    </div>
  );
}
