import { Github, User } from 'lucide-react';

interface NavigationProps {
  currentPage: 'projects' | 'about';
  onNavigate: (page: 'projects' | 'about') => void;
}

function Navigation({ currentPage, onNavigate }: NavigationProps) {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-slate-900">Christophe72</span>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => onNavigate('about')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                currentPage === 'about'
                  ? 'bg-slate-900 text-white shadow-lg'
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
                  ? 'bg-slate-900 text-white shadow-lg'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Github className="w-5 h-5" />
              Projets
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
