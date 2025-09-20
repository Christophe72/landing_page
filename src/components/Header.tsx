import React from "react";
import { Menu, X, Zap, Sun, Moon } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 z-50 w-full transition-colors border-b border-gray-200 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md dark:border-gray-700">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <Zap className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Christophe Seyler
            </span>
          </div>

          <nav className="items-center hidden space-x-8 md:flex">
            <a
              href="#about"
              className="text-gray-700 transition-colors dark:text-gray-300 hover:text-blue-600"
            >
              À propos
            </a>
            <a
              href="#skills"
              className="text-gray-700 transition-colors dark:text-gray-300 hover:text-blue-600"
            >
              Compétences
            </a>
            <a
              href="#projects"
              className="text-gray-700 transition-colors dark:text-gray-300 hover:text-blue-600"
            >
              Projets
            </a>
            <a
              href="#contact"
              className="text-gray-700 transition-colors dark:text-gray-300 hover:text-blue-600"
            >
              Contact
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-700 transition-colors rounded-lg dark:text-gray-300 hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>
          </nav>

          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-700 rounded-lg dark:text-gray-300 hover:text-blue-600"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>
            <button
              className="p-2 text-gray-700 rounded-md dark:text-gray-300 hover:text-blue-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="py-4 border-t border-gray-200 md:hidden dark:border-gray-700">
            <nav className="flex flex-col space-y-4">
              <a
                href="#about"
                className="text-gray-700 transition-colors dark:text-gray-300 hover:text-blue-600"
              >
                À propos
              </a>
              <a
                href="#skills"
                className="text-gray-700 transition-colors dark:text-gray-300 hover:text-blue-600"
              >
                Compétences
              </a>
              <a
                href="#projects"
                className="text-gray-700 transition-colors dark:text-gray-300 hover:text-blue-600"
              >
                Projets
              </a>
              <a
                href="#contact"
                className="text-gray-700 transition-colors dark:text-gray-300 hover:text-blue-600"
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
