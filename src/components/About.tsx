import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Gamepad2, Music, Cog, Search } from 'lucide-react';

export default function About() {
  const { t } = useTranslation();

  const interests = [
    { icon: <Gamepad2 size={24} />, label: "Game Immersion" },
    { icon: <Music size={24} />, label: "Music" },
    { icon: <Cog size={24} />, label: "Automation" },
    { icon: <Search size={24} />, label: "Detail Hunting" }
  ];

  return (
    <section id="about" className="py-24 bg-background relative border-t border-slate-200 dark:border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              {t('about.title')}
            </h2>
            <div className="h-[2px] flex-grow bg-gradient-to-r from-primary/50 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Bio */}
            <div>
              <p className="text-lg text-slate-700 dark:text-gray-300 leading-relaxed mb-8">
                {t('about.bio')}
              </p>
              
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-2 bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 px-4 py-2 rounded-lg hover:border-secondary/50 hover:bg-secondary/10 transition-colors"
                  >
                    <span className="text-primary">{interest.icon}</span>
                    <span className="text-sm font-medium text-slate-800 dark:text-gray-200">{interest.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Philosophy Callout */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-2xl blur-lg opacity-50" />
              <div className="relative bg-slate-100 dark:bg-[#111111] border border-slate-300 dark:border-white/10 p-8 rounded-2xl h-full flex flex-col justify-center">
                <blockquote className="text-xl md:text-2xl font-serif italic text-slate-800 dark:text-white/90 leading-snug">
                  "{t('about.philosophy')}"
                </blockquote>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
