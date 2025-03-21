import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Youtube, Trophy, Users, Gift } from 'lucide-react';
import { LeaderboardButton } from '../components/LeaderboardButton';
import { SocialLinks } from '../components/SocialLinks';
import { ParticlesBackground } from '../components/Particles';

export const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#1a1a2e] via-[#2d1810] to-[#16213e] before:absolute before:inset-0 before:bg-[url('https://grainy-gradients.vercel.app/noise.svg')] before:opacity-20 before:mix-blend-overlay">
      {/* Animated campfire background */}
      <div className="absolute inset-0 z-10">
        <ParticlesBackground />
      </div>
      <div className="absolute inset-0 bg-[url('https://i.imgur.com/2BYcT8l.jpeg')] bg-cover bg-center opacity-10" />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="https://i.imgur.com/5semWd2.jpeg" 
              alt="Rustgang Logo" 
              className="w-48 h-48 object-contain lux-float shimmer-effect rounded-xl shadow-2xl shadow-orange-500/20"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 ml-2">RUSTGANG</h1>
          <p className="text-orange-200 text-xl mt-4">Join the elite community of supporters</p>
          <p className="text-yellow-400 text-lg mt-2">$350 Bi-Weekly Prize Pool</p>
        </header>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm border border-orange-500/20">
              <Trophy className="w-8 h-8 text-orange-400 mb-2" />
              <h3 className="text-xl font-semibold text-orange-100">Top Supporters</h3>
              <p className="text-orange-200/70">Bi-weekly recognition</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm border border-orange-500/20">
              <Users className="w-8 h-8 text-orange-400 mb-2" />
              <h3 className="text-xl font-semibold text-orange-100">Community</h3>
              <p className="text-orange-200/70">Join our growing family</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm border border-orange-500/20">
              <Youtube className="w-8 h-8 text-orange-400 mb-2" />
              <h3 className="text-xl font-semibold text-orange-100">Content</h3>
              <p className="text-orange-200/70">Daily streams & videos</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col items-center gap-4 mb-12">
            <LeaderboardButton />
            <Link
              to="/bonuses"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg hover:from-orange-700 hover:to-red-700 transition-colors"
            >
              <Gift className="w-5 h-5" />
              View Bonuses
            </Link>
          </div>

          {/* Social Links */}
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};