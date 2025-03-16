import React from 'react';
import { Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const LeaderboardButton = () => {
  const navigate = useNavigate();

  return (
    <button 
      className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-orange-600 to-red-600 rounded-full overflow-hidden transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
      onClick={() => navigate('/leaderboard')}
    >
      <Trophy className="w-6 h-6 mr-2" />
      <span>View Leaderboard</span>
      <div className="absolute inset-0 -translate-x-full hover:translate-x-0 bg-gradient-to-r from-orange-500 to-red-500 transition-transform duration-300 ease-out group-hover:translate-x-0" />
    </button>
  );
};