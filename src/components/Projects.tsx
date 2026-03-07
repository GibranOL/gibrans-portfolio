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
      link: "#"
    },
    {
      title: "LearnEZ",
      desc: t('projects.learnezDesc'),
      tags: [t('projects.tags.edtech'), t('projects.tags.accessibility'), t('projects.tags.social')],
      link: "#"
    },
    {
      title: "FacePoints",
      desc: t('projects.facepointsDesc'),
      tags: [t('projects.tags.android'), t('projects.tags.qr'), t('projects.tags.localbiz')],
      link: "#"
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

  const ProjectCard = ({ project, index, isWip }: { project: any, index: number, isWip: boolean }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`p-6 rounded-2xl border ${isWip ? 'bg-[#0a0a0a] border-dashed border-gray-700' : 'bg-white/[0.02] border-white/10 hover:border-primary/40 hover:bg-white/[0.04]'} transition-all group flex flex-col h-full relative overflow-hidden`}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className={`text-xl font-bold ${isWip ? 'text-gray-300' : 'text-white group-hover:text-primary transition-colors'}`}>
          {project.title}
        </h3>
        {!isWip && (
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <a href={project.link} className="text-gray-300 hover:text-white p-1" aria-label="View Source">
              <Github size={18} />
            </a>
            <a href={project.link} className="text-gray-300 hover:text-white p-1" aria-label="Live Demo">
              <ExternalLink size={18} />
            </a>
          </div>
        )}
      </div>
      
      <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
        {project.desc}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag: string, tIdx: number) => (
          <span 
            key={tIdx}
            className={`text-xs px-2.5 py-1 rounded-full font-medium ${
              tag.includes('WIP') || tag.includes('En Desarrollo') 
                ? 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20'
                : 'bg-primary/10 text-primary/80 border border-primary/20'
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-24 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            {t('projects.title')}
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-primary to-secondary" />
        </div>

        {/* Completed Projects */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-8 text-gray-300 flex items-center gap-3">
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
          <h3 className="text-xl font-semibold mb-8 text-gray-400 flex items-center gap-3">
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
