import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

// Set end time to be 3 days and 17 hours from now
const END_TIME = (() => {
  const now = new Date();
  now.setDate(now.getDate() + 3);
  now.setHours(now.getHours() + 6);
  return now.getTime();
})();

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const now = Date.now();
    const diff = Math.max(0, END_TIME - now);
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    return { days, hours, minutes, seconds };
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      const diff = Math.max(0, END_TIME - now);
      
      if (diff === 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center gap-4 bg-black/30 p-4 rounded-lg backdrop-blur-sm">
      <Clock className="w-6 h-6 text-orange-400" />
      <div className="flex gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-orange-400">{timeLeft.days}</div>
          <div className="text-xs text-orange-200">DAYS</div>
        </div>
        <div className="text-2xl font-bold text-orange-400">:</div>
        <div className="text-center">
          <div className="text-2xl font-bold text-orange-400">{timeLeft.hours.toString().padStart(2, '0')}</div>
          <div className="text-xs text-orange-200">HOURS</div>
        </div>
        <div className="text-2xl font-bold text-orange-400">:</div>
        <div className="text-center">
          <div className="text-2xl font-bold text-orange-400">{timeLeft.minutes.toString().padStart(2, '0')}</div>
          <div className="text-xs text-orange-200">MINS</div>
        </div>
        <div className="text-2xl font-bold text-orange-400">:</div>
        <div className="text-center">
          <div className="text-2xl font-bold text-orange-400">{timeLeft.seconds.toString().padStart(2, '0')}</div>
          <div className="text-xs text-orange-200">SECS</div>
        </div>
      </div>
    </div>
  );
};