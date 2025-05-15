interface ProjectCardProps {
    image: string;
    title: string;
    description: string;
    tech: string[];
    link: string;
  }
  
  export default function ProjectCard({ image, title, description, tech, link }: ProjectCardProps) {
    return (
      <div className="project-card">
        <img src={image} alt={title} className="project-image" />
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <ul className="project-tech">
          {tech.map((t, index) => (
            <li key={index}>{t}</li>
          ))}
        </ul>
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
          View Project
        </a>
      </div>
    );
  }