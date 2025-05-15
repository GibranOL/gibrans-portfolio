import './App.css';
import Sidebar from './components/Sidebar';
import { useEffect, useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';


function App() {
  const [activeSection, setActiveSection] = useState('home');

  // 🔵 Cursor effect logic
  useEffect(() => {
    const layer = document.getElementById('reveal-layer');
    let lastX = 0;
    let lastY = 0;
    let lastTime = performance.now();
  
    const updatePosition = (e: MouseEvent) => {
      const now = performance.now();
      const deltaTime = now - lastTime || 16;
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const speed = distance / deltaTime;
  
      // Limita el tamaño del halo entre 0.8 y 2.0
      const scale = Math.min(Math.max(speed, 0.8), 2.0).toFixed(2);
  
      const x = e.clientX - 200;
      const y = e.clientY - 200;
  
      if (layer) {
        layer.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
      }
  
      lastX = e.clientX;
      lastY = e.clientY;
      lastTime = now;
    };
  
    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'about': 
        return <About />;
      // case 'projects': return <Projects />;
      default:
        return <Home />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
    }
  };

  return (
    <div className="App">
      <div id="reveal-layer" />
      <Sidebar setActiveSection={setActiveSection} />
      <div className="layout">
        <main>{renderSection()}</main>
      </div>
    </div>
  );
}

export default App;