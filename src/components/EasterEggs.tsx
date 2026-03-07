import { useEffect } from 'react';

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp', 
  'ArrowDown', 'ArrowDown', 
  'ArrowLeft', 'ArrowRight', 
  'ArrowLeft', 'ArrowRight', 
  'b', 'a'
];

export default function EasterEggs() {
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
    // Basic implementation for now - can be expanded into full screen later
    alert('SECRET LEVEL UNLOCKED: Konami Code Activated!');
    document.documentElement.style.setProperty('--background', '#1a0000');
    document.documentElement.style.setProperty('--primary', '#ff0000');
    
    setTimeout(() => {
      document.documentElement.style.setProperty('--background', '#0D0D0D');
      document.documentElement.style.setProperty('--primary', '#8B0000');
    }, 3000);
  };

  return null; // Global invisible listener component
}
