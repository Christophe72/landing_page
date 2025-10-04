import { useState, useEffect } from 'react';
import { Github, ExternalLink, Star, GitFork, Code2 } from 'lucide-react';

interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

function Projects() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    fetch('https://api.github.com/users/Christophe72/repos?sort=updated&per_page=100')
      .then(res => res.json())
      .then(data => {
        setRepos(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching repos:', err);
        setLoading(false);
      });
  }, []);

  const languages = ['all', ...new Set(repos.map(r => r.language).filter(Boolean))];
  const filteredRepos = filter === 'all'
    ? repos
    : repos.filter(r => r.language === filter);

  const getLanguageColor = (language: string | null) => {
    const colors: Record<string, string> = {
      TypeScript: 'bg-blue-500',
      JavaScript: 'bg-yellow-500',
      Java: 'bg-red-500',
      Python: 'bg-green-500',
      CSS: 'bg-pink-500',
      HTML: 'bg-orange-500',
    };
    return colors[language || ''] || 'bg-gray-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Github className="w-16 h-16 text-slate-800" />
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            Mes Projets
          </h1>
          <p className="text-xl text-slate-600 mb-6">
            Découvrez mes projets de développement
          </p>
          <a
            href="https://github.com/Christophe72"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <Github className="w-5 h-5" />
            Visiter mon GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </header>

        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {languages.map(lang => (
              <button
                key={lang}
                onClick={() => setFilter(lang)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  filter === lang
                    ? 'bg-slate-900 text-white shadow-lg'
                    : 'bg-white text-slate-700 hover:bg-slate-100 shadow'
                }`}
              >
                {lang === 'all' ? 'Tous' : lang}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRepos.map(repo => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 border border-slate-200 hover:border-slate-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-slate-700" />
                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
                      {repo.name}
                    </h3>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-700 transition-colors" />
                </div>

                <p className="text-slate-600 mb-4 line-clamp-2 min-h-[3rem]">
                  {repo.description || 'Aucune description disponible'}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-4">
                    {repo.language && (
                      <div className="flex items-center gap-2">
                        <span className={`w-3 h-3 rounded-full ${getLanguageColor(repo.language)}`}></span>
                        <span className="text-sm text-slate-600">{repo.language}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    {repo.stargazers_count > 0 && (
                      <div className="flex items-center gap-1 text-slate-500">
                        <Star className="w-4 h-4" />
                        <span className="text-sm">{repo.stargazers_count}</span>
                      </div>
                    )}
                    {repo.forks_count > 0 && (
                      <div className="flex items-center gap-1 text-slate-500">
                        <GitFork className="w-4 h-4" />
                        <span className="text-sm">{repo.forks_count}</span>
                      </div>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        {!loading && filteredRepos.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-600 text-lg">Aucun projet trouvé avec ce filtre</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
