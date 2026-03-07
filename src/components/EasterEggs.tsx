import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp', 
  'ArrowDown', 'ArrowDown', 
  'ArrowLeft', 'ArrowRight', 
  'ArrowLeft', 'ArrowRight', 
  'b', 'a'
];

export default function EasterEggs() {
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    let konamiIndex = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === KONAMI_CODE[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === KONAMI_CODE.length) {
          triggerSecretLevel();
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const triggerSecretLevel = () => {
    setToast('🎮 SECRET LEVEL UNLOCKED: Konami Code Activated!');
    document.documentElement.style.setProperty('--background', '#1a0000');
    document.documentElement.style.setProperty('--primary', '#ff0000');
    
    setTimeout(() => {
      document.documentElement.style.setProperty('--background', '#0D0D0D');
      document.documentElement.style.setProperty('--primary', '#8B0000');
    }, 3000);
  };

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3500);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] px-6 py-3 bg-primary/90 text-white font-bold rounded-full shadow-lg shadow-primary/30 backdrop-blur-md border border-white/10 text-sm"
        >
          {toast}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
