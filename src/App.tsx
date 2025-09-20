import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-gray-900 transition-colors">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
