import React from 'react';
import { Trophy, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Countdown } from '../components/Countdown';

const prizes = [
  { place: 1, amount: 160, color: 'from-yellow-500 to-yellow-600' },
  { place: 2, amount: 75, color: 'from-gray-400 to-gray-500' },
  { place: 3, amount: 50, color: 'from-amber-700 to-amber-800' },
  { place: 4, amount: 30, color: 'from-gray-600 to-gray-700' },
  { place: 5, amount: 25, color: 'from-gray-600 to-gray-700' },
  { place: 6, amount: 10, color: 'from-gray-600 to-gray-700' },
];

// Updated leaderboard data with real user scores
const leaderboardData = [
  { id: 1, username: "ֆeeⲕ\\ :･ﾟ✧", points: 2445.35 },
  { id: 2, username: "Hidden", points: 1588.36 },
  { id: 3, username: "SiddeBror", points: 988.72 },
  { id: 4, username: "Pigeon国王->trading", points: 223.84 },
  { id: 5, username: "MonkeyRage", points: 139.33 },
  { id: 6, username: "K1ller", points: 114.85 },
];

export const Leaderboard = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#1a0f0f] to-[#2d1810]">
      {/* Animated campfire background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Back button */}
        <Link to="/" className="inline-flex items-center text-orange-500 hover:text-orange-400 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-orange-500 flex items-center justify-center mb-4">
            <Trophy className="w-10 h-10 mr-3" />
            Bi-Weekly $350 Leaderboard
          </h1>
          <Countdown />
        </div>

        {/* Prize Pool Section */}
        <div className="max-w-md mx-auto mb-12">
          <h2 className="text-2xl font-bold text-yellow-500 mb-6">Prize Pool</h2>
          <div className="space-y-3">
            {prizes.map((prize) => (
              <div
                key={prize.place}
                className={`bg-gradient-to-r ${prize.color} p-4 rounded-lg shadow-lg flex justify-between items-center`}
              >
                <span className="text-white font-bold">#{prize.place}</span>
                <span className="text-white font-bold">${prize.amount}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Leaderboard Section */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-orange-500 mb-6">Current Rankings</h2>
          <div className="bg-black/30 rounded-lg backdrop-blur-sm border border-orange-500/20 overflow-hidden animate-fade-in transition-smooth hover:scale">
            {leaderboardData.map((player, index) => (
              <div
                key={player.id}
                className={`flex items-center justify-between p-4 ${
                  index !== leaderboardData.length - 1 ? 'border-b border-orange-500/20' : ''
                }`}
              >
                <div className="flex items-center">
                  <span className={`w-8 text-center font-bold ${
                    index === 0 ? 'text-yellow-500' :
                    index === 1 ? 'text-gray-400' :
                    index === 2 ? 'text-amber-700' :
                    'text-gray-500'
                  }`}>
                    #{index + 1}
                  </span>
                  <span className="text-orange-200 ml-4">{player.username}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-orange-400 font-bold">{player.points.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} </span>
                  <span className="text-orange-300 ml-1">coins</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};