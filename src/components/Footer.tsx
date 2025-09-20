import { Github, Linkedin, Mail, MapPin, Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="py-16 text-white transition-colors bg-gray-900 dark:bg-black"
    >
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <div className="flex items-center mb-6 space-x-2">
              <Zap className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold">Christophe Seyler</span>
            </div>
            <p className="mb-8 text-lg leading-relaxed text-gray-300 dark:text-gray-400">
              👉 Ce profil est une vitrine de mon parcours et de mes projets. Je
              construis pas à pas une passerelle entre le monde de l'électricité
              et celui de l'informatique.
            </p>
            <div className="flex items-center space-x-2 text-gray-300 dark:text-gray-400">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span>Belgique</span>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="mb-6 text-xl font-bold">Connectons-nous</h3>
            <div className="space-y-4">
              <a
                href="https://github.com/Christophe72"
                className="flex items-center p-3 space-x-4 transition-colors bg-gray-800 rounded-lg dark:bg-gray-900 hover:bg-gray-700 dark:hover:bg-gray-800"
              >
                <Github className="w-6 h-6 text-blue-400" />
                <div>
                  <div className="font-medium">GitHub</div>
                  <div className="text-sm text-gray-400 dark:text-gray-500">
                    Découvrez mes projets
                  </div>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/seyler-christophe-a2205035/"
                className="flex items-center p-3 space-x-4 transition-colors bg-gray-800 rounded-lg dark:bg-gray-900 hover:bg-gray-700 dark:hover:bg-gray-800"
              >
                <Linkedin className="w-6 h-6 text-blue-400" />
                <div>
                  <div className="font-medium">LinkedIn</div>
                  <div className="text-sm text-gray-400 dark:text-gray-500">
                    Réseau professionnel
                  </div>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/seyler-christophe-a2205035/"
                className="flex items-center p-3 space-x-4 transition-colors bg-gray-800 rounded-lg dark:bg-gray-900 hover:bg-gray-700 dark:hover:bg-gray-800"
              >
                <Mail className="w-6 h-6 text-blue-400" />
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-sm text-gray-400 dark:text-gray-500">
                    Contactez-moi directement
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-12 text-center border-t border-gray-800 dark:border-gray-700">
          <p className="text-gray-400 dark:text-gray-500">
            © 2024 Christophe Seyler. De l'électricité au code, une reconversion
            passionnante.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
