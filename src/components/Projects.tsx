import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const { t } = useTranslation();

  const completedProjects = [
    {
      title: "TROUD",
      desc: t('projects.troudDesc'),
      tags: [t('projects.tags.mobile'), t('projects.tags.maps'), t('projects.tags.ux')],
      github: "https://github.com/shunsaku-sugita/trout",
      demo: "https://trout-ashen.vercel.app"
    },
    {
      title: "LearnEZ",
      desc: t('projects.learnezDesc'),
      tags: [t('projects.tags.edtech'), t('projects.tags.accessibility'), t('projects.tags.social')],
      github: "https://github.com/Soud-Haroon/learnEZ",
      demo: "https://learnze.vercel.app"
    },
    {
      title: "FacePoints",
      desc: t('projects.facepointsDesc'),
      tags: [t('projects.tags.android'), t('projects.tags.qr'), t('projects.tags.localbiz')]
    }
  ];

  const wipProjects = [
    {
      title: "TrueNorth Pathways",
      desc: t('projects.truenorthDesc'),
      tags: [t('projects.tags.react'), t('projects.tags.ts'), t('projects.tags.wip')]
    },
    {
      title: "Tarot & Magic App",
      desc: t('projects.tarotDesc'),
      tags: [t('projects.tags.ai'), t('projects.tags.gemini'), t('projects.tags.wip')]
    },
    {
      title: "Educational Agency App",
      desc: t('projects.eduAppDesc'),
      tags: [t('projects.tags.edtech'), t('projects.tags.business'), t('projects.tags.react'), t('projects.tags.wip')]
    }
  ];

  const ProjectCard = ({ project, index, isWip }: { project: { title: string; desc: string; tags: string[]; github?: string, demo?: string }, index: number, isWip: boolean }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`p-6 rounded-2xl border ${isWip ? 'bg-slate-100 dark:bg-[#0a0a0a] border-dashed border-slate-400 dark:border-gray-700' : 'bg-white/[0.02] border-slate-300 dark:border-white/10 hover:border-primary/40 hover:bg-slate-200 dark:hover:bg-white/[0.04]'} transition-all group flex flex-col h-full relative overflow-hidden`}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className={`text-xl font-bold ${isWip ? 'text-slate-700 dark:text-gray-300' : 'text-slate-900 dark:text-white group-hover:text-primary transition-colors'}`}>
          {project.title}
        </h3>
        {!isWip && (
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:text-white p-1" aria-label="View Source">
                <Github size={18} />
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:text-white p-1" aria-label="Live Demo">
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        )}
      </div>
      
      <p className="text-slate-700 dark:text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
        {project.desc}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag: string, tIdx: number) => {
          // Colorful palette for tags
          const colors = [
            'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
            'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
            'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
            'bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20',
            'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
            'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20'
          ];
          const colorClass = tag.includes('WIP') || tag.includes('En Desarrollo')
            ? 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 border-yellow-500/20'
            : colors[tIdx % colors.length];

          return (
            <span 
              key={tIdx}
              className={`text-xs px-2.5 py-1 rounded-full font-medium border ${colorClass}`}
            >
              {tag}
            </span>
          );
        })}
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-24 bg-background relative border-t border-slate-200 dark:border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            {t('projects.title')}
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-primary to-secondary" />
        </div>

        {/* Completed Projects */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-8 text-slate-700 dark:text-gray-300 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-primary/50" />
            {t('projects.completed')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedProjects.map((project, idx) => (
              <ProjectCard key={idx} project={project} index={idx} isWip={false} />
            ))}
          </div>
        </div>

        {/* WIP Projects */}
        <div>
          <h3 className="text-xl font-semibold mb-8 text-slate-600 dark:text-gray-400 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-gray-600" />
            {t('projects.wip')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wipProjects.map((project, idx) => (
              <ProjectCard key={`wip-${idx}`} project={project} index={idx} isWip={true} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
