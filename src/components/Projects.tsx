import ProjectCard from '../components/cards/ProjectCard';
import '../styles/Projects.css';

export default function Projects() {
  const projectList = [
    {
      image: '/images/proj1.jpg', // usa imagen real o placeholder
      title: 'FacePoints',
      description: 'Loyalty app with face recognition using React Native and Firebase.',
      tech: ['React Native', 'Firebase', 'Expo'],
      link: 'https://github.com/GibranOL/facepoints',
    },
    {
      image: '/images/proj2.jpg',
      title: 'LearnEZ',
      description: 'Online learning platform for neurodivergent children built with MERN stack.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js'],
      link: 'https://github.com/GibranOL/learnez',
    },
    // Agrega más proyectos aquí
  ];

  return (
    <section className="section-wrapper projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
}