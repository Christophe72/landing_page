import { useState, useEffect } from "react";
import {
  ExternalLink,
  Star,
  GitFork,
  // Code2,
  Lock,
  Globe,
} from "lucide-react";

interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  private: boolean;
}

interface ProjectsProps {
  darkMode: boolean;
}

function Projects({ darkMode }: ProjectsProps) {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    fetch(
      "https://api.github.com/users/Christophe72/repos?sort=updated&per_page=100"
    )
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching repos:", err);
        setLoading(false);
      });
  }, []);

  const languages = [
    "all",
    ...new Set(repos.map((r) => r.language).filter(Boolean)),
  ];
  const filteredRepos =
    filter === "all" ? repos : repos.filter((r) => r.language === filter);

  const getLanguageColor = (language: string | null) => {
    const colors: Record<string, string> = {
      TypeScript: "bg-blue-500",
      JavaScript: "bg-yellow-500",
      Java: "bg-red-500",
      Python: "bg-green-500",
      CSS: "bg-pink-500",
      HTML: "bg-orange-500",
    };
    return colors[language || ""] || "bg-gray-500";
  };

  const getDefaultDescription = (name: string) => {
    const descriptions: Record<string, string> = {
      "app-choix-protections":
        "Application de sélection de protections électriques",
      "arduino-cours": "Cours et tutoriels Arduino",
      "back-rgie-der": "API backend pour aide au dépannage électrique",
      "back-rgie-springboot": "Backend Spring Boot pour application RGIE",
    };
    return descriptions[name] || `Projet de développement - ${name}`;
  };

  // Remplacement de l'icône Github par un SVG personnalisé
  const GithubIcon = ({ className }: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className || "w-16 h-16"}
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.02c-3.34.72-4.04-1.6-4.04-1.6-.54-1.38-1.32-1.75-1.32-1.75-1.08-.74.08-.72.08-.72 1.2.08 1.83 1.24 1.83 1.24 1.06 1.82 2.8 1.3 3.48.98.1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.98 0-1.32.47-2.4 1.24-3.24-.12-.3-.54-1.5.12-3.14 0 0 1-.32 3.3 1.24a11.5 11.5 0 0 1 6 0c2.3-1.56 3.3-1.24 3.3-1.24.66 1.64.24 2.84.12 3.14.78.84 1.24 1.92 1.24 3.24 0 4.66-2.8 5.68-5.48 5.98.42.36.8 1.1.8 2.22v3.28c0 .32.22.7.82.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900"
          : "bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100"
      }`}
    >
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <header className="mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <GithubIcon
              className={`w-16 h-16 ${
                darkMode ? "text-blue-400" : "text-slate-800"
              }`}
            />
          </div>
          <h1
            className={`text-5xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Mes Projets
          </h1>
          <p
            className={`text-xl mb-6 ${
              darkMode ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Découvrez mes projets de développement
          </p>
          <a
            href="https://github.com/Christophe72"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl ${
              darkMode
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-slate-900 hover:bg-slate-800 text-white"
            }`}
          >
            Visiter mon GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </header>

        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setFilter(lang || "")}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  filter === lang
                    ? darkMode
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-slate-900 text-white shadow-lg"
                    : darkMode
                    ? "bg-slate-700 text-slate-200 hover:bg-slate-600 shadow"
                    : "bg-white text-slate-700 hover:bg-slate-100 shadow"
                }`}
              >
                {lang === "all" ? "Tous" : lang}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div
              className={`animate-spin rounded-full h-12 w-12 border-b-2 ${
                darkMode ? "border-blue-400" : "border-slate-900"
              }`}
            ></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredRepos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 border hover:-translate-y-1 ${
                  darkMode
                    ? "bg-slate-800 border-slate-700 hover:border-slate-600"
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center flex-1 gap-2">
                    {/* <Code2
                      className={`w-5 h-5 ${
                        darkMode ? "text-slate-300" : "text-slate-700"
                      }`}
                    /> */}
                    <h3
                      className={`font-bold text-lg transition-colors ${
                        darkMode
                          ? "text-white group-hover:text-blue-400"
                          : "text-slate-900 group-hover:text-blue-600"
                      }`}
                    >
                      {repo.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    {repo.private ? (
                      <Lock
                        className={`w-4 h-4 ${
                          darkMode ? "text-red-400" : "text-red-500"
                        }`}
                      />
                    ) : (
                      <Globe
                        className={`w-4 h-4 ${
                          darkMode ? "text-green-400" : "text-green-600"
                        }`}
                      />
                    )}
                    <ExternalLink
                      className={`w-4 h-4 transition-colors ${
                        darkMode
                          ? "text-slate-500 group-hover:text-slate-300"
                          : "text-slate-400 group-hover:text-slate-700"
                      }`}
                    />
                  </div>
                </div>

                <p
                  className={`mb-4 line-clamp-3 min-h-[4rem] ${
                    darkMode ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {repo.description || getDefaultDescription(repo.name)}
                </p>

                <div
                  className={`flex items-center justify-between pt-4 border-t ${
                    darkMode ? "border-slate-700" : "border-slate-100"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {repo.language && (
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-3 h-3 rounded-full ${getLanguageColor(
                            repo.language
                          )}`}
                        ></span>
                        <span
                          className={`text-sm ${
                            darkMode ? "text-slate-300" : "text-slate-600"
                          }`}
                        >
                          {repo.language}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    {repo.stargazers_count > 0 && (
                      <div
                        className={`flex items-center gap-1 ${
                          darkMode ? "text-slate-400" : "text-slate-500"
                        }`}
                      >
                        <Star className="w-4 h-4" />
                        <span className="text-sm">{repo.stargazers_count}</span>
                      </div>
                    )}
                    {repo.forks_count > 0 && (
                      <div
                        className={`flex items-center gap-1 ${
                          darkMode ? "text-slate-400" : "text-slate-500"
                        }`}
                      >
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
          <div className="py-20 text-center">
            <p
              className={`text-lg ${
                darkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Aucun projet trouvé avec ce filtre
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
