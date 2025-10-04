import { User, Briefcase, GraduationCap, Code, Zap, BookOpen } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

function About({ darkMode }: AboutProps) {
  const experiences = [
    { period: '09/2018 - 06/2023', role: 'Maintenance électrique', company: 'Uliége' },
    { period: '02/2007 - 02/2012', role: 'Électricien', company: 'Balteau i.e. S.A.' },
    { period: '10/2006 - 01/2007', role: 'Électricien', company: 'Jacobs S.A.' },
    { period: '2024', role: 'Câblages et travaux électriques', company: 'Missions récentes' },
  ];

  const education = [
    { year: '2009-2013', title: 'CESS + Bâchelier en informatique industrielle' },
    { year: '2011-2012', title: 'Développeur Java' },
    { year: '1996-1998', title: 'CTSS - Technicien en utilisation de logiciels standards' },
    { year: '2012', title: 'Formation électronique et électricité' },
    { year: '2006', title: 'Formation électricité générale + stages' },
    { year: '1989', title: 'Qualification d\'électricité générale' },
  ];

  const skills = {
    electrical: ['Câblage électrique', 'Maintenance électrique', 'Installations industrielles', 'Électricité générale', 'Électronique'],
    it: ['Java', 'TypeScript', 'JavaScript', 'React', 'Développement web', 'Informatique industrielle'],
    other: ['VCA de base (valable 9 ans)', 'Permis B', 'MOOC informatique', 'Développement d\'applications']
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode
        ? 'bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900'
        : 'bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <User className={`w-16 h-16 ${darkMode ? 'text-blue-400' : 'text-slate-800'}`} />
          </div>
          <h1 className={`text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Christophe Seyler
          </h1>
          <p className={`text-2xl mb-2 ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>
            Électricien Générale & Développeur
          </p>
          <p className={`text-lg ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Double compétence en électricité et informatique
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className={`rounded-xl shadow-lg p-6 border ${
            darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'
          }`}>
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-blue-600" />
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Électricité</h3>
            </div>
            <ul className="space-y-2">
              {skills.electrical.map((skill, index) => (
                <li key={index} className={`flex items-center gap-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className={`rounded-xl shadow-lg p-6 border ${
            darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'
          }`}>
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-6 h-6 text-green-600" />
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Informatique</h3>
            </div>
            <ul className="space-y-2">
              {skills.it.map((skill, index) => (
                <li key={index} className={`flex items-center gap-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className={`rounded-xl shadow-lg p-6 border ${
            darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'
          }`}>
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-6 h-6 text-orange-600" />
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Autres</h3>
            </div>
            <ul className="space-y-2">
              {skills.other.map((skill, index) => (
                <li key={index} className={`flex items-center gap-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className={`rounded-xl shadow-lg p-8 border ${
            darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'
          }`}>
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className={`w-7 h-7 ${darkMode ? 'text-blue-400' : 'text-slate-800'}`} />
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Expériences Professionnelles</h2>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                  <p className="text-sm font-semibold text-blue-600">{exp.period}</p>
                  <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{exp.role}</h3>
                  <p className={darkMode ? 'text-slate-300' : 'text-slate-600'}>{exp.company}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`rounded-xl shadow-lg p-8 border ${
            darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'
          }`}>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className={`w-7 h-7 ${darkMode ? 'text-blue-400' : 'text-slate-800'}`} />
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Formation</h2>
            </div>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-green-500 pl-4 py-2">
                  <p className="text-sm font-semibold text-green-600">{edu.year}</p>
                  <p className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{edu.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`mt-12 rounded-xl shadow-lg p-8 border ${
          darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'
        }`}>
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className={`w-7 h-7 ${darkMode ? 'text-blue-400' : 'text-slate-800'}`} />
            <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Centres d'intérêt</h2>
          </div>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
            Passionné par la technologie et l'apprentissage continu, je suis des MOOC en informatique
            et développe régulièrement des applications. J'apprécie également la lecture, les balades
            et je m'intéresse particulièrement à l'histoire.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
