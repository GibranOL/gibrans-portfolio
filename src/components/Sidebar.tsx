interface SidebarProps {
    setActiveSection: (section: string) => void;
  }
  
  export default function Sidebar({ setActiveSection }: SidebarProps) {
    return (
      <aside className="w-60 bg-white shadow-md p-6 flex flex-col items-center sticky top-0 h-screen">
        <img
          src="/profile.jpg"
          alt="Gibran Oliva"
          className="w-24 h-24 rounded-full mb-4"
        />
        <h2 className="text-xl font-semibold mb-6 text-center">Gibran Oliva</h2>
        <nav className="space-y-4 text-center">
          <button onClick={() => setActiveSection('home')}>Home</button>
          <button onClick={() => setActiveSection('about')}>Sobre mí</button>
          <button onClick={() => setActiveSection('projects')}>Proyectos</button>
          <button onClick={() => setActiveSection('skills')}>Habilidades</button>
          <button onClick={() => setActiveSection('contact')}>Contacto</button>
        </nav>
      </aside>
    );
  }