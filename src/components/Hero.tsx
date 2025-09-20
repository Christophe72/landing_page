import { MapPin, Code, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 transition-colors bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900/20">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            {/* <div className="flex items-center justify-center w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600">
              <span className="text-4xl font-bold text-white">CS</span>
            </div> */}
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-6xl dark:text-white">
              👋 Bonjour, je suis{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Christophe Seyler
              </span>
            </h1>
          </div>

          <div className="grid max-w-4xl gap-6 mx-auto mb-12 md:grid-cols-3">
            <div className="p-6 transition-all bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl">
              <Zap className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                🔌 Électricien
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                En reconversion informatique
              </p>
              <p className="mt-2 text-sm text-blue-600 dark:text-blue-400">
                Baccalauréat en informatique industrielle
              </p>
            </div>
            <div className="p-6 transition-all bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl">
              <Code className="w-12 h-12 mx-auto mb-4 text-indigo-600" />
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                💻 Passionné
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Développement, IoT & Automatisation
              </p>
            </div>
            <div className="p-6 transition-all bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                📍 Basé
              </h3>
              <p className="text-gray-600 dark:text-gray-300">En Belgique</p>
            </div>
          </div>

          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600 dark:text-gray-300">
            Combinant expertise électrique et nouvelles technologies pour créer
            des solutions innovantes
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
