import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Gamepad2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DoomGame() {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 bg-[#0a0000] border-y-2 border-primary/30 relative overflow-hidden">
      
      {/* Decorative scanlines overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-0" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8 text-glow-primary text-red-100 uppercase uppercase">
            {t('doom.title')}
          </h2>

          <AnimatePresence mode="wait">
            {!isPlaying ? (
              <motion.div
                key="launcher"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-black/50 border border-primary/50 p-12 rounded-2xl flex flex-col items-center justify-center min-h-[400px]"
              >
                <div className="mb-8 p-6 bg-primary/10 rounded-full border border-primary/30">
                  <Gamepad2 size={64} className="text-primary" />
                </div>
                
                <button 
                  onClick={() => setIsPlaying(true)}
                  className="px-10 py-5 bg-primary text-slate-900 dark:text-white font-black text-xl tracking-widest uppercase hover:bg-red-800 transition-colors border-2 border-red-500 hover:border-red-400 rounded-sm shadow-[0_0_20px_rgba(139,0,0,0.6)] hover:shadow-[0_0_30px_rgba(255,0,0,0.8)]"
                >
                  {t('doom.cta')}
                </button>
                
                <p className="mt-8 text-xs text-slate-600 dark:text-gray-400 uppercase tracking-widest font-mono">
                  {t('doom.disclaimer')}
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="game"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-black border-2 border-primary/50 rounded-xl overflow-hidden relative"
              >
                <div className="bg-zinc-900 border-b border-primary/30 p-2 flex justify-between items-center px-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-xs font-mono text-red-500 uppercase">SYS_ACTIVE</span>
                  </div>
                  <button 
                    onClick={() => setIsPlaying(false)}
                    className="text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:text-white transition-colors p-1"
                    title="Close"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <div className="aspect-video w-full bg-black relative flex items-center justify-center">
                  <iframe 
                    src="https://js-dos.com/games/doom.exe.html" 
                    className="w-full h-full border-0 min-h-[400px] md:min-h-[600px] bg-black"
                    title="DOOM js-dos Player"
                    allow="autoplay; keyboard;"
                  ></iframe>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
