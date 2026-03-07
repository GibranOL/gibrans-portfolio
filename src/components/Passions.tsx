import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Gamepad2, Headphones, ActivitySquare, Terminal } from 'lucide-react';

export default function Passions() {
  const { t } = useTranslation();

  const passions = [
    {
      icon: <Gamepad2 size={48} className="mb-6 text-primary" />,
      title: t('passions.games'),
      desc: t('passions.gamesDesc')
    },
    {
      icon: <Headphones size={48} className="mb-6 text-secondary" />,
      title: t('passions.music'),
      desc: ""
    },
    {
      icon: <ActivitySquare size={48} className="mb-6 text-primary" />,
      title: t('passions.automation'),
      desc: t('passions.automationDesc')
    },
    {
      icon: <Terminal size={48} className="mb-6 text-secondary" />,
      title: t('passions.details'),
      desc: t('passions.detailsDesc')
    }
  ];

  return (
    <section className="py-24 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            {t('passions.title')}
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-primary to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {passions.map((passion, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/[0.02] border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center group hover:bg-white/[0.04] hover:border-white/20 transition-all cursor-crosshair relative overflow-hidden"
            >
              {/* Animated glow on hover */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/0 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[spin_4s_linear_infinite] blur-xl z-0" />
              
              <div className="relative z-10 flex flex-col items-center h-full">
                <div className="transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  {passion.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {passion.title}
                </h3>
                {passion.desc && (
                  <p className="text-gray-400 font-medium">
                    "{passion.desc}"
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
