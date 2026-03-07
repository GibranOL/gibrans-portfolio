import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Search, Settings, Bot, Repeat, ArrowRight } from 'lucide-react';

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Search className="text-primary w-10 h-10 mb-4" />,
      title: t('services.card1Title'),
      desc: t('services.card1Desc')
    },
    {
      icon: <Settings className="text-primary w-10 h-10 mb-4" />,
      title: t('services.card2Title'),
      desc: t('services.card2Desc')
    },
    {
      icon: <Bot className="text-primary w-10 h-10 mb-4" />,
      title: t('services.card3Title'),
      desc: t('services.card3Desc')
    },
    {
      icon: <Repeat className="text-primary w-10 h-10 mb-4" />,
      title: t('services.card4Title'),
      desc: t('services.card4Desc')
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-100 dark:bg-[#0a0a0a] relative border-t border-slate-200 dark:border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 flex items-center gap-3">
              <span className="text-primary">⭐</span>
              {t('services.title')}
            </h2>
            <div className="h-[2px] w-24 bg-gradient-to-r from-primary to-transparent" />
          </div>
          
          <div className="max-w-xl text-slate-700 dark:text-gray-300 font-medium border-l-2 border-primary/30 pl-4 py-1">
            {t('services.footer')}
          </div>
        </div>

        {/* CSS-based horizontal scroll for mobile, grid for desktop */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-2 gap-6 pb-8 md:pb-0 snap-x snap-mandatory hide-scroll-mobile">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="min-w-[85vw] md:min-w-0 snap-center bg-background border border-slate-300 dark:border-white/10 p-8 rounded-2xl group hover:border-primary/50 transition-colors relative overflow-hidden"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                {service.icon}
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-slate-700 dark:text-gray-300 leading-relaxed flex-grow">
                  {service.desc}
                </p>
                
                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/5 flex justify-end">
                  <a href="#contact" className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors">
                    {t('services.cta')}
                    <ArrowRight size={16} className="text-primary group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <style>{`
        .hide-scroll-mobile::-webkit-scrollbar {
          display: none;
        }
        .hide-scroll-mobile {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @media (min-width: 768px) {
          .hide-scroll-mobile::-webkit-scrollbar {
            display: block;
          }
          .hide-scroll-mobile {
            -ms-overflow-style: auto;
            scrollbar-width: auto;
          }
        }
      `}</style>
    </section>
  );
}
