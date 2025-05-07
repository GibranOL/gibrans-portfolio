import './App.css';
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import Home from './components/Home';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      // case 'about': return <About />;
      // case 'projects': return <Projects />;
      // etc...
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar setActiveSection={setActiveSection} />
      <main className="flex-1 p-8 bg-gray-100">{renderSection()}</main>
    </div>
  );
}

export default App;