'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { IoPaperPlaneOutline, IoArrowBack, IoArrowForward } from 'react-icons/io5';
import { MdVerified } from 'react-icons/md';

interface VideoPlayerProps {
  videoSrc: string;
  thumbnailSrc?: string;
  username: string;
  description: string;
  verified?: boolean;
  profileImage?: string;
  totalEpisodes?: number;
  startEpisode?: number;
}

export default function VideoPlayer({ 
  videoSrc, 
  thumbnailSrc, 
  username, 
  description,
  verified = true,
  profileImage,
  totalEpisodes = 4,
  startEpisode = 4
}: VideoPlayerProps) {
  const [currentEpisode, setCurrentEpisode] = useState(startEpisode);

  const canGoToNewerEpisode = currentEpisode < totalEpisodes;
  const canGoToOlderEpisode = currentEpisode > 1;

  const handlePreviousEpisode = () => {
    if (canGoToNewerEpisode) {
      setCurrentEpisode(prev => prev + 1);
    }
  };

  const handleNextEpisode = () => {
    if (canGoToOlderEpisode) {
      setCurrentEpisode(prev => prev - 1);
    }
  };

  const currentVideoSrc = `/media/mph-${currentEpisode}.mov`;
  return (
    <div className="w-full max-w-sm mx-auto bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl overflow-hidden shadow-lg">
      {/* Header */}
      <div className="flex items-center gap-4 px-6 py-8 h-14 bg-white/80 backdrop-blur-sm">
        <div className="w-px"></div>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center text-white font-bold text-sm overflow-hidden">
          {profileImage ? (
            <Image 
              src={profileImage} 
              alt={username}
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          ) : (
            username.charAt(0).toUpperCase()
          )}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-zinc-900 text-base">{username}</span>
            {verified && (
              <MdVerified className="w-5 h-5 text-[#3897f0]" />
            )}
          </div>
          <p className="text-sm text-zinc-600 mt-1">{description} {currentEpisode}</p>
        </div>
      </div>

      {/* Video Area */}
      <div className="relative aspect-[9/16] bg-gradient-to-br from-emerald-100 to-green-100 flex items-center justify-center overflow-hidden">
        <video 
          key={currentVideoSrc}
          className="w-full h-full object-cover"
          controls
          playsInline
        >
          <source src={currentVideoSrc} type="video/mp4" />
          <source src={currentVideoSrc} type="video/quicktime" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4 px-6 py-8 h-14 bg-white/80 backdrop-blur-sm">
        <div className="w-px"></div>
        {/* Heart Icon */}
        <button className="hover:scale-110 transition-transform">
          <AiOutlineHeart className="w-9 h-9 text-zinc-800" strokeWidth={1} />
        </button>

        {/* Comment Icon */}
        <button className="hover:scale-110 transition-transform">
          <FaRegComment className="w-8 h-8 text-zinc-800" />
        </button>

        {/* Share Icon */}
        <button className="hover:scale-110 transition-transform">
          <IoPaperPlaneOutline className="w-8 h-8 text-zinc-800" />
        </button>

        {/* Spacer to push arrows to the right */}
        <div className="flex-1"></div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-2">
          {/* Left Arrow - Go to Newer Episode */}
          {canGoToNewerEpisode && (
            <button 
              onClick={handlePreviousEpisode}
              className="hover:scale-110 transition-transform animate-pulse"
              aria-label="Previous episode"
            >
              <IoArrowBack className="w-7 h-7 text-emerald-600" />
            </button>
          )}

          {/* Right Arrow - Go to Older Episode */}
          {canGoToOlderEpisode && (
            <button 
              onClick={handleNextEpisode}
              className="hover:scale-110 transition-transform animate-pulse"
              aria-label="Next episode"
            >
              <IoArrowForward className="w-7 h-7 text-emerald-600" />
            </button>
          )}
           <div className="w-px"></div>
        </div>
      </div>
    </div>
  );
}

