import '../styles/Sidebar.css';

interface SidebarProps {
  setActiveSection: (section: string) => void;
}

export default function Sidebar({ setActiveSection }: SidebarProps) {
  return (
    <div className="sidebar-navbar">
          <button onClick={() => setActiveSection('home')}>Home</button>
          <button onClick={() => setActiveSection('about')}>Sobre mí</button>
          <button onClick={() => setActiveSection('projects')}>Proyectos</button>
          <button onClick={() => setActiveSection('skills')}>Habilidades</button>
          <button onClick={() => setActiveSection('contact')}>Contacto</button>
    </div>
  );
}