import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, MessageSquareQuote } from 'lucide-react';

export default function QAPhilosophy() {
  const { t } = useTranslation();

  const principles = [
    {
      icon: <ShieldCheck size={32} className="text-secondary" />,
      text: t('philosophy.card1'),
      color: 'from-secondary/20 to-transparent'
    },
    {
      icon: <Zap size={32} className="text-primary" />,
      text: t('philosophy.card2'),
      color: 'from-primary/20 to-transparent'
    },
    {
      icon: <MessageSquareQuote size={32} className="text-slate-900 dark:text-white" />,
      text: t('philosophy.card3'),
      color: 'from-white/10 to-transparent'
    }
  ];

  return (
    <section className="py-24 bg-slate-100 dark:bg-[#0a0a0a] border-t border-slate-200 dark:border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            {t('philosophy.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {principles.map((principle, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl ${principle.color}" />
              <div className="relative bg-background p-8 rounded-[15px] h-full flex flex-col items-center text-center z-10">
                <div className="mb-6 p-4 bg-slate-200 dark:bg-white/5 rounded-full inline-block">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-semibold leading-tight text-slate-800 dark:text-white/90">
                  "{principle.text}"
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border border-slate-300 dark:border-white/10 p-6 md:p-8 rounded-2xl text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50 group-hover:opacity-100 transition-opacity" />
            <p className="relative z-10 text-lg md:text-xl font-medium text-slate-800 dark:text-gray-200">
              ⚡ {t('philosophy.callout')}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
