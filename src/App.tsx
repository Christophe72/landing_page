import { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Projects from './Projects';
import About from './About';

function App() {
  const [currentPage, setCurrentPage] = useState<'projects' | 'about'>('about');
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <Navigation
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      {currentPage === 'projects' ? <Projects darkMode={darkMode} /> : <About darkMode={darkMode} />}
    </div>
  );
}

export default App;
