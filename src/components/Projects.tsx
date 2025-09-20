import { Home, BookOpen, Building2, Brain, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: <Home className="h-8 w-8" />,
      title: "🏠 Domotique connectée",
      description:
        "Monitoring temps réel avec ESP32 + MQTT + dashboard web responsive",
      color: "from-green-500 to-emerald-600",
      tags: ["ESP32", "MQTT", "React", "IoT"],
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "📘 Assistant RGIE",
      description:
        "Application Next.js pour aider les électriciens à respecter la législation belge",
      color: "from-blue-500 to-blue-600",
      tags: ["Next.js", "TypeScript", "Réglementation"],
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "🧾 ERP pour PME d'électricité",
      description:
        "Gestion de projets, clients et factures avec Next.js + Prisma",
      color: "from-purple-500 to-purple-600",
      tags: ["Next.js", "Prisma", "PostgreSQL"],
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "🔍 Outil de diagnostic IA",
      description:
        "Aide au diagnostic électrique basé sur l'intelligence artificielle",
      color: "from-orange-500 to-red-500",
      tags: ["IA", "Python", "Diagnostic"],
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            📂 Projets phares
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center text-white mb-6`}
              >
                {project.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors">
                <span>Voir le projet</span>
                <ExternalLink className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              📊 Stats GitHub
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Suivez mon évolution et mes contributions sur GitHub pour
              découvrir mes derniers projets
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Commits cette année
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                <div className="text-2xl font-bold text-indigo-600">12</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Projets publics
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                <div className="text-2xl font-bold text-purple-600">5</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Langages maîtrisés
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
