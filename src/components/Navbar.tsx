import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(nextLang);
  };

  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.contact'), href: '#contact' }
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-md shadow-lg shadow-primary/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo / Brand */}
        <a href="#home" className="text-2xl font-bold tracking-tighter">
          <span className="text-slate-900 dark:text-white">Gibran</span>
          <span className="text-primary">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:text-white transition-colors text-sm uppercase tracking-wider font-semibold hover:text-glow-primary"
            >
              {link.name}
            </a>
          ))}
          
          <button 
            onClick={toggleLanguage}
            className="flex items-center space-x-2 bg-secondary/30 hover:bg-secondary/50 text-slate-900 dark:text-white px-4 py-2 rounded-full transition-all border border-secondary/50 hover:border-white/20"
          >
            <Globe size={16} />
            <span className="text-sm font-bold uppercase">{i18n.language.split('-')[0]} | {i18n.language.split('-')[0] === 'en' ? 'es' : 'en'}</span>
          </button>

          <button
            onClick={() => setIsDark(!isDark)}
            className="text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:text-white transition-colors"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={() => setIsDark(!isDark)}
            className="text-slate-700 dark:text-gray-300 hover:text-primary transition-colors"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button onClick={toggleLanguage} className="text-slate-700 dark:text-gray-300">
            <Globe size={20} />
            <span className="sr-only">Toggle Language</span>
          </button>
          
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-slate-900 dark:text-white hover:text-primary transition-colors"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-lg border-b border-primary/20 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:text-white py-2 text-lg uppercase tracking-wider font-semibold border-b border-slate-200 dark:border-white/5"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
