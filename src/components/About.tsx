import { Cpu, Globe, Settings, BarChart3, BookOpen } from "lucide-react";

const About = () => {
  const interests = [
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Systèmes embarqués",
      description: "ESP32, Arduino, Raspberry Pi",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Développement web moderne",
      description: "Next.js, React, TypeScript",
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Domotique et IoT",
      description: "Solutions connectées intelligentes",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Monitoring temps réel",
      description: "Applications de suivi et données",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Apprentissage continu",
      description: "Normes RGIE & projets numériques",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            🌟 À propos de moi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              Après plusieurs années dans le domaine de l'électricité, j'ai
              choisi de me reconvertir vers l'informatique afin de{" "}
              <span className="font-semibold text-blue-600">
                combiner mes connaissances techniques avec les nouvelles
                technologies
              </span>
              .
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Cette transition me permet de créer des ponts entre le monde
              physique de l'électricité et l'univers numérique, ouvrant de
              nouvelles perspectives passionnantes.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
              <p className="text-blue-800 dark:text-blue-300 font-medium">
                🎓 Formation : Baccalauréat en informatique industrielle
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Mes domaines d'intérêt
            </h3>
            <div className="space-y-4">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  <div className="text-blue-600 mt-1">{interest.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {interest.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {interest.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
