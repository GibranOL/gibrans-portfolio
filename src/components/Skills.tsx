import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ShieldCheck, Workflow, Bot, Webhook } from 'lucide-react';

export default function Skills() {
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: t('skills.qa'),
      icon: <ShieldCheck size={32} className="text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors duration-300 animate-pulse" />,
      skills: ['Lifecycle Management', 'High-Signal Reports', 'Playwright', 'Test Coverage', 'Accessibility']
    },
    {
      title: t('skills.ai'),
      icon: <Workflow size={32} className="text-slate-900 dark:text-white mb-4 group-hover:text-secondary transition-colors duration-300" />,
      skills: ['n8n', 'Gemini API', 'Claude API', 'Autonomous Agents', 'Orchestration']
    },
    {
      title: t('skills.frontend'),
      icon: <Bot size={32} className="text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors duration-300" />,
      skills: ['AI Architectures', 'Prompt Engineering', 'Frontier Models', 'Framework Design']
    },
    {
      title: t('skills.tools'),
      icon: <Webhook size={32} className="text-slate-900 dark:text-white mb-4 group-hover:text-secondary transition-colors duration-300" />,
      skills: ['Postman', 'REST / GraphQL', 'MongoDB', 'Backend Validation', 'CI/CD']
    }
  ];

  return (
    <section className="py-20 bg-background border-t border-slate-200 dark:border-white/5 relative overflow-hidden">
      
      {/* Decorative bg element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-glow-secondary">
            {t('skills.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 p-6 rounded-2xl relative group hover:bg-white/[0.07] transition-colors"
            >
              {category.icon}
              <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white border-b border-slate-300 dark:border-white/10 pb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-3 py-1.5 bg-background border border-slate-200 dark:border-white/5 rounded-md text-sm text-slate-700 dark:text-gray-300 group-hover:border-secondary/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currently Learning badge */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-secondary/10 border border-secondary/30 rounded-full relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-slate-700 dark:text-gray-300">
              <span className="text-slate-900 dark:text-white font-bold">{t('skills.learning')}: </span> 
              {t('skills.learningTopic')}
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
