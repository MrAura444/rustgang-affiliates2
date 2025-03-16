
import React from 'react';
import { ArrowLeft, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ParticlesBackground } from '../components/Particles';

interface BonusCardProps {
  siteName: string;
  bonusDescription: string;
  code: string;
  link: string;
  bgGradient?: string;
}

const BonusCard = ({ siteName, bonusDescription, code, link, bgGradient = "from-orange-900/50 to-red-900/50" }: BonusCardProps) => (
  <div className={`bg-gradient-to-br ${bgGradient} rounded-2xl p-6 hover:scale-105 transition-transform duration-300 border border-orange-500/20`}>
    <h3 className="text-2xl font-bold mb-2 text-orange-400">{siteName}</h3>
    <p className="text-gray-300 mb-4">{bonusDescription}</p>
    <div className="bg-black/30 p-3 rounded-lg mb-4">
      <p className="text-orange-500 font-mono">CODE: {code}</p>
    </div>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block w-full text-center px-4 py-3 bg-orange-500 hover:bg-orange-600 transition-colors rounded-lg text-white font-bold"
    >
      Claim Bonus
    </a>
  </div>
);

export const Bonuses = () => {
  const bonuses = [
    {
      siteName: "CSGOROLL",
      bonusDescription: "3 FREE CASES + 5% DEPOSIT BONUS",
      code: "RUSTGANG",
      link: "https://csgoroll.com/r/RUSTGANG",
      bgGradient: "from-purple-900/50 to-blue-900/50"
    },
    {
      siteName: "RAIN.GG",
      bonusDescription: "3 FREE CASES + 5% DEPOSIT BONUS",
      code: "RUSTGANG",
      link: "https://rain.gg/r/RUSTGANG",
      bgGradient: "from-blue-900/50 to-cyan-900/50"
    },
    {
      siteName: "CSGOEMPIRE",
      bonusDescription: "3 FREE CASES + 5% DEPOSIT BONUS",
      code: "RUSTGANG",
      link: "https://csgoempire.com/r/rustgang",
      bgGradient: "from-red-900/50 to-orange-900/50"
    },
    {
      siteName: "BANDIT.CAMP",
      bonusDescription: "0.15 SCRAP + 5% DEPOSIT BONUS",
      code: "YEEE",
      link: "https://bandit.camp/r/yeee",
      bgGradient: "from-green-900/50 to-emerald-900/50"
    },
    {
      siteName: "RUSTYPOT",
      bonusDescription: "5% DEPOSIT BONUS",
      code: "RUSTGANG",
      link: "https://rustypot.com/RUSTGANG",
      bgGradient: "from-yellow-900/50 to-amber-900/50"
    },
    {
      siteName: "SKINRAVE.GG",
      bonusDescription: "5% DEPOSIT BONUS",
      code: "RUSTGANG",
      link: "https://skinrave.gg/r/RUSTGANG",
      bgGradient: "from-pink-900/50 to-rose-900/50"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#1a0f0f] to-[#2d1810]">
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        <Link 
          to="/"
          className="inline-flex items-center text-orange-500 hover:text-orange-400 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-orange-500 flex items-center justify-center gap-3 mb-4">
            <Gift className="w-10 h-10" />
            Exclusive Bonuses
          </h1>
          <p className="text-orange-200 text-xl">Claim your special rewards with these codes</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {bonuses.map((bonus) => (
            <BonusCard key={bonus.siteName} {...bonus} />
          ))}
        </div>
      </div>
    </div>
  );
};
