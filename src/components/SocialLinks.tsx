import React from 'react';
import { Youtube, MessageSquare, Radio } from 'lucide-react';

export const SocialLinks = () => {
  return (
    <div className="flex justify-center gap-6">
      <a
        href="https://youtube.com/Rustgang"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
      >
        <Youtube className="w-5 h-5" />
        <span>YouTube</span>
      </a>
      
      <a
        href="https://kick.com/Rustgang"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
      >
        <Radio className="w-5 h-5" />
        <span>KICK</span>
      </a>
      
      <a
        href="https://discord.gg/rustgang"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
      >
        <MessageSquare className="w-5 h-5" />
        <span>Discord</span>
      </a>
    </div>
  );
};