import './App.css';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

import { useEffect } from 'react';

function App() {
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

  return (
    <div className="App">
      <div id="reveal-layer" />
      <Sidebar />
      <div className="page-wrapper">
        <main>
          <section id="home"><Home /></section>
          <section id="about"><About /></section>
          <section id="projects"><Projects /></section>
          <section id="skills"><Skills /></section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;