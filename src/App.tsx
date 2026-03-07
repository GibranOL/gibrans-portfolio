import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import QAPhilosophy from './components/QAPhilosophy';
import Passions from './components/Passions';
import DoomGame from './components/DoomGame';
import Contact from './components/Contact';
import EasterEggs from './components/EasterEggs';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
      <EasterEggs />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <QAPhilosophy />
        <Passions />
        <DoomGame />
      </main>

      <Contact />
    </div>
  );
}
