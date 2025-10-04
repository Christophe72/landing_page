import { useState } from 'react';
import Navigation from './Navigation';
import Projects from './Projects';
import About from './About';

function App() {
  const [currentPage, setCurrentPage] = useState<'projects' | 'about'>('about');

  return (
    <div>
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      {currentPage === 'projects' ? <Projects /> : <About />}
    </div>
  );
}

export default App;
