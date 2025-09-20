import { Code2, Wrench, Database, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Développement",
      color: "from-blue-600 to-blue-800",
      skills: ["Java", "Python", "TypeScript", "C"],
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Frameworks & Outils",
      color: "from-indigo-600 to-indigo-800",
      skills: ["Next.js", "Spring Boot", "Node.js", "Docker"],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Bases de données",
      color: "from-purple-600 to-purple-800",
      skills: ["PostgreSQL", "SQLite", "Prisma"],
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Intelligence Artificielle",
      color: "from-emerald-600 to-emerald-800",
      skills: ["ChatGPT", "GitHub Copilot", "Claude", "Gemini"],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 transition-colors bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            🧰 Compétences principales
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-600 to-indigo-600"></div>
        </div>

        <div className="flex justify-center">
          <div className="grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="flex flex-col items-center w-full max-w-sm p-8 transition-all duration-300 bg-white shadow-lg dark:bg-gray-800 rounded-2xl hover:shadow-xl hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-white mb-6`}
                >
                  {category.icon}
                </div>

                <h3 className="mb-6 text-xl font-bold text-center text-gray-900 dark:text-white">
                  {category.title}
                </h3>

                <div className="flex flex-wrap justify-center w-full gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="px-3 py-2 text-center rounded-lg bg-gray-50 dark:bg-gray-700"
                    >
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
