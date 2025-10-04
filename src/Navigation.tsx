import { Github, User, Moon, Sun } from 'lucide-react';

interface NavigationProps {
  currentPage: 'projects' | 'about';
  onNavigate: (page: 'projects' | 'about') => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

function Navigation({ currentPage, onNavigate, darkMode, toggleDarkMode }: NavigationProps) {
  return (
    <nav className={`shadow-md sticky top-0 z-50 transition-colors duration-300 ${
      darkMode ? 'bg-slate-900 border-b border-slate-700' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <span className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Christophe72</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('about')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                currentPage === 'about'
                  ? darkMode
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-slate-900 text-white shadow-lg'
                  : darkMode
                    ? 'text-slate-300 hover:bg-slate-800'
                    : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <User className="w-5 h-5" />
              À propos
            </button>
            <button
              onClick={() => onNavigate('projects')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                currentPage === 'projects'
                  ? darkMode
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-slate-900 text-white shadow-lg'
                  : darkMode
                    ? 'text-slate-300 hover:bg-slate-800'
                    : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Github className="w-5 h-5" />
              Projets
            </button>
            <button
              onClick={toggleDarkMode}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                darkMode
                  ? 'text-slate-300 hover:bg-slate-800'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
