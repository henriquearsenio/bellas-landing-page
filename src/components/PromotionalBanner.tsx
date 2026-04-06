import React, { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';

const PromotionalBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const startDate = new Date('2026-04-06T00:00:00').getTime();
    const endDate = new Date('2026-04-15T23:59:59').getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = endDate - now;

      if (now >= startDate && difference > 0) {
        setIsVisible(true);
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setIsVisible(false);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#FF4D4D] text-white py-3 px-4 relative overflow-hidden shadow-lg border-b border-white/20">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute -left-10 -top-10 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-4 text-center relative z-10">
        <div className="flex items-center gap-2">
          <div className="bg-white/20 p-1.5 rounded-full animate-bounce">
            <Timer className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-sm md:text-base uppercase tracking-wider">
            🔥 Oferta Exclusiva: <span className="text-yellow-300">Planos a partir de R$ 9,90!</span>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <div className="flex flex-col items-center">
              <span className="bg-black/30 backdrop-blur-md rounded-lg px-2.5 py-1 text-xl font-bold font-mono min-w-[36px]">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="text-[10px] uppercase font-medium opacity-80 mt-0.5">Dias</span>
            </div>
            <span className="text-xl font-bold mt-1">:</span>
            <div className="flex flex-col items-center">
              <span className="bg-black/30 backdrop-blur-md rounded-lg px-2.5 py-1 text-xl font-bold font-mono min-w-[36px]">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[10px] uppercase font-medium opacity-80 mt-0.5">Horas</span>
            </div>
            <span className="text-xl font-bold mt-1">:</span>
            <div className="flex flex-col items-center">
              <span className="bg-black/30 backdrop-blur-md rounded-lg px-2.5 py-1 text-xl font-bold font-mono min-w-[36px]">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-[10px] uppercase font-medium opacity-80 mt-0.5">Min</span>
            </div>
            <span className="text-xl font-bold mt-1">:</span>
            <div className="flex flex-col items-center">
              <span className="bg-black/30 backdrop-blur-md rounded-lg px-2.5 py-1 text-xl font-bold font-mono min-w-[36px]">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-[10px] uppercase font-medium opacity-80 mt-0.5">Seg</span>
            </div>
          </div>
          <a
            href="#pricing"
            className="hidden md:block bg-white text-primary-glow font-bold px-4 py-1.5 rounded-full text-xs hover:bg-yellow-400 hover:text-black transition-all transform hover:scale-105 shadow-md ml-4"
          >
            APROVEITAR AGORA
          </a>
        </div>
      </div>
    </div>
  );
};

export default PromotionalBanner;
