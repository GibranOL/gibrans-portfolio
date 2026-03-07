import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 bg-background relative border-t border-slate-200 dark:border-white/5 overflow-hidden">
      
      {/* Decorative bg elements */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            {t('contact.title')}
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto font-medium">
            {t('contact.subtitle')}
          </p>

          <div className="flex flex-col items-center gap-8">
            <a 
              href="mailto:gibraninca@gmail.com" 
              className="group relative px-10 py-5 bg-white text-black font-black text-xl md:text-2xl rounded-full overflow-hidden transition-transform hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] flex items-center gap-3"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              <Mail className="group-hover:rotate-12 transition-transform" />
              <span className="relative z-10">gibraninca@gmail.com</span>
            </a>

            <div className="flex gap-6 mt-8">
              <a 
                href="https://www.linkedin.com/in/gibran-oliva/"
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:text-white hover:border-secondary hover:bg-secondary/20 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={28} />
              </a>
              <a 
                href="https://github.com/GibranOL"
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:text-white hover:border-primary hover:bg-primary/20 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={28} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-32 pt-8 border-t border-slate-300 dark:border-white/10 text-center text-slate-600 dark:text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Gibran Oliva. Built with React + Tailwind.</p>
        <p className="mt-2 flex justify-center items-center gap-2">
          {t('easter.hint')}
        </p>
      </div>
    </section>
  );
}
