import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import profilePic from '../assets/profile.png';

export default function Hero() {
  const { t } = useTranslation();
  
  const titles = [
    t('hero.title1'),
    t('hero.title2'),
    t('hero.title3'),
    t('hero.title4')
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [titles.length]);

  const handleAvatarLongPress = () => {
    // Basic Easter egg #3 implementation
    alert("You found a secret! (Long Press GO)");
  };

  const handleDotClick = () => {
    // Basic Easter egg #2 implementation
    alert("Wait, how did you find that dot? (Dot Click)");
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] mix-blend-screen" 
             style={{ animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-3/5 text-center lg:text-left"
          >
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-slate-700 dark:text-gray-300">
              Gibran Oliva
            </h2>
            
            <div className="h-[50px] md:h-[80px] mb-6 flex items-center justify-center lg:justify-start">
              <AnimatePresence mode="wait">
                <motion.h3
                  key={currentTitleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl md:text-5xl font-bold gradient-text pb-2 px-1"
                >
                  {titles[currentTitleIndex]}
                </motion.h3>
              </AnimatePresence>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8 tracking-tight">
              {t('hero.headline').replace('.', '')}
              <span 
                className="text-primary cursor-default" 
                onClick={handleDotClick}
              >.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0">
              {t('hero.subheadline')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="#contact"
                className="group relative px-8 py-4 bg-primary text-slate-900 dark:text-white font-bold rounded-full overflow-hidden w-full sm:w-auto text-center border-glow-primary transition-transform hover:scale-105"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                <span className="relative flex items-center justify-center gap-2">
                  {t('hero.ctaPrimary')}
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              
              <a 
                href="#projects"
                className="px-8 py-4 bg-transparent text-slate-900 dark:text-white font-bold rounded-full border border-gray-600 hover:border-white hover:bg-slate-200 dark:bg-white/5 transition-all w-full sm:w-auto text-center"
              >
                {t('hero.ctaSecondary')}
              </a>
            </div>
          </motion.div>

          {/* Avatar / Visual Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full lg:w-2/5 flex justify-center"
          >
            <div className="relative group cursor-pointer"
                 onContextMenu={(e) => { e.preventDefault(); handleAvatarLongPress(); }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 bg-background border-2 border-slate-300 dark:border-white/10 rounded-full flex items-center justify-center overflow-hidden z-10 transition-transform duration-500 group-hover:scale-105 group-hover:border-primary/50">
                <img 
                  src={profilePic} 
                  alt="Gibran Oliva" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback to GO initials if image fails to load
                    (e.target as HTMLElement).style.display = 'none';
                    (e.target as HTMLElement).parentElement!.innerHTML += '<span class="text-7xl font-black text-slate-300 dark:text-white/20 group-hover:text-primary/80 transition-colors duration-500 tracking-tighter">GO</span>';
                  }}
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
