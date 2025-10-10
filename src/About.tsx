import {
  User,
  Briefcase,
  GraduationCap,
  Code,
  Zap,
  BookOpen,
  Calendar,
} from "lucide-react";
// import TFESection from "./TFESection";
// import ExperienceSection from "./ExperienceSection";

interface AboutProps {
  darkMode: boolean;
}

interface Experience {
  title: string;
  period: string;
  company?: string;
}

interface Education {
  year: string;
  title: string;
}

// const latestExperiences: Experience[] = [
//   {
//     title: "Câblages électriques",
//     period: "08/10/2024 au 11/10/2024",
//   },
//   {
//     title: "Divers travaux électriques",
//     period: "15/07/2024 au 19/07/2024",
//   },
// ];

const experiences: Experience[] = [
  // ...latestExperiences,
  {
    title: "Maintenance électrique",
    company: "Uliége",
    period: "09/2018 à 06/2023",
  },
  {
    title: "Aménagement tertiaire d’un hall",
    company: "IBA",
    period: "02/2016 à 04/2016",
  },
  {
    title: "Renfort sur chantier",
    period: "14/12/2016 au 18/12/2016",
  },
  {
    title: "MD Technology",
    period: "08/2015 à 12/2015",
  },
  {
    title: "Électricien",
    company: "Balteau i.e. S.A.",
    period: "28/02/2007 au 21/02/2012",
  },
  {
    title: "Électricien",
    company: "Jacobs S.A.",
    period: "01/10/2006 au 30/01/2007",
  },
];

const education: Education[] = [
  { year: "2009-2013", title: "CESS + Bâchelier en informatique industrielle" },
  { year: "2011-2012", title: "Développeur Java" },

  { year: "2012", title: "Formation électronique et électricité" },
  { year: "2006", title: "Formation électricité générale + stages" },
  {
    year: "1996-1998",
    title: "Formation CTSS utilisation de logiciels standards",
  },

  { year: "1989", title: "Qualification d'électricité générale" },
];

const skills = {
  electrical: [
    "Câblage électrique",
    "Maintenance électrique",
    "Installations industrielles",
    "Électricité générale",
    "Électronique",
  ],
  it: [
    "Java",
    "TypeScript",
    "JavaScript",
    "React",
    "Développement web",
    "Informatique industrielle",
  ],
  other: [
    "VCA de base (valable 9 ans)",
    "Permis B",
    "MOOC informatique",
    "Développement d'applications",
  ],
};

function SectionCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl shadow-lg p-6 border transition-colors duration-300 ${className}`}
    >
      {children}
    </div>
  );
}

function LatestExperience({ darkMode }: { darkMode: boolean }) {
  return (
    <SectionCard
      className={
        darkMode
          ? "bg-slate-900 border-slate-700 text-slate-200"
          : "bg-white border-slate-200 text-slate-700"
      }
    >
      {/* <h2 className="flex items-center gap-2 mb-4 text-lg font-bold">
        <Briefcase className="w-5 h-5" />
        Dernières expériences professionnelles
      </h2> */}
      <ul className="space-y-2">
        {/* {latestExperiences.map((exp, idx) => (
          <li key={idx} className="flex flex-col">
            <span className="font-semibold">{exp.title}</span>
            <span className="text-sm text-slate-500 dark:text-slate-400">
              {exp.period}
            </span>
          </li>
        ))} */}
      </ul>
    </SectionCard>
  );
}

function SkillsSection({ darkMode }: { darkMode: boolean }) {
  return (
    <div className="grid grid-cols-1 gap-8 mb-12 lg:grid-cols-3">
      <SectionCard
        className={
          darkMode
            ? "bg-slate-800 border-slate-700"
            : "bg-white border-slate-200"
        }
      >
        <div className="flex items-center gap-3 mb-4">
          <Zap className="w-6 h-6 text-blue-600" />
          <h3
            className={`text-xl font-bold ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Électricité
          </h3>
        </div>
        <ul className="space-y-2">
          {skills.electrical.map((skill, index) => (
            <li
              key={index}
              className={`flex items-center gap-2 ${
                darkMode ? "text-slate-300" : "text-slate-700"
              }`}
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              {skill}
            </li>
          ))}
        </ul>
      </SectionCard>
      <SectionCard
        className={
          darkMode
            ? "bg-slate-800 border-slate-700"
            : "bg-white border-slate-200"
        }
      >
        <div className="flex items-center gap-3 mb-4">
          <Code className="w-6 h-6 text-green-600" />
          <h3
            className={`text-xl font-bold ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Informatique
          </h3>
        </div>
        <ul className="space-y-2">
          {skills.it.map((skill, index) => (
            <li
              key={index}
              className={`flex items-center gap-2 ${
                darkMode ? "text-slate-300" : "text-slate-700"
              }`}
            >
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              {skill}
            </li>
          ))}
        </ul>
      </SectionCard>
      <SectionCard
        className={
          darkMode
            ? "bg-slate-800 border-slate-700"
            : "bg-white border-slate-200"
        }
      >
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-6 h-6 text-orange-600" />
          <h3
            className={`text-xl font-bold ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Autres
          </h3>
        </div>
        <ul className="space-y-2">
          {skills.other.map((skill, index) => (
            <li
              key={index}
              className={`flex items-center gap-2 ${
                darkMode ? "text-slate-300" : "text-slate-700"
              }`}
            >
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              {skill}
            </li>
          ))}
        </ul>
      </SectionCard>
    </div>
  );
}

function ExperienceList({ darkMode }: { darkMode: boolean }) {
  return (
    <SectionCard
      className={
        darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
      }
    >
      <div className="flex items-center gap-3 mb-6">
        <Briefcase
          className={`w-7 h-7 ${darkMode ? "text-blue-400" : "text-slate-800"}`}
        />
        <h2
          className={`text-2xl font-bold ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          Expériences Professionnelles
        </h2>
      </div>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index}>
            <h3
              className={`text-lg font-bold ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              {exp.title}
            </h3>
            {exp.company && (
              <p className={darkMode ? "text-slate-300" : "text-slate-600"}>
                {exp.company}
              </p>
            )}
            <div className="flex items-center gap-2 mt-1">
              <Calendar className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-slate-500 dark:text-slate-400">
                {exp.period}
              </span>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

function EducationSection({ darkMode }: { darkMode: boolean }) {
  return (
    <SectionCard
      className={
        darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
      }
    >
      <div className="flex items-center gap-3 mb-6">
        <GraduationCap
          className={`w-7 h-7 ${darkMode ? "text-blue-400" : "text-slate-800"}`}
        />
        <h2
          className={`text-2xl font-bold ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          Formation
        </h2>
      </div>
      <div className="space-y-4">
        {education.map((edu, index) => (
          <div key={index} className="py-2 pl-4 border-l-4 border-green-500">
            <p className="text-sm font-semibold text-green-600">{edu.year}</p>
            <p className={darkMode ? "text-slate-300" : "text-slate-700"}>
              {edu.title}
            </p>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

function InterestsSection({ darkMode }: { darkMode: boolean }) {
  return (
    <SectionCard
      className={
        darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
      }
    >
      <div className="flex items-center gap-3 mb-4">
        <BookOpen
          className={`w-7 h-7 ${darkMode ? "text-blue-400" : "text-slate-800"}`}
        />
        <h2
          className={`text-2xl font-bold ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          Centres d'intérêt
        </h2>
      </div>
      <p
        className={`text-lg leading-relaxed ${
          darkMode ? "text-slate-300" : "text-slate-700"
        }`}
      >
        Passionné par la technologie et l'apprentissage continu, je suis des
        MOOC en informatique et développe régulièrement des applications.
        J'apprécie également la lecture, les balades et je m'intéresse
        particulièrement à l'histoire.
      </p>
    </SectionCard>
  );
}

function About({ darkMode }: AboutProps) {
  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900"
          : "bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100"
      }`}
    >
      <div className="max-w-6xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <header className="mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <User
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
            Christophe Seyler
          </h1>
          <p
            className={`text-2xl mb-2 ${
              darkMode ? "text-slate-200" : "text-slate-700"
            }`}
          >
            Électricien Générale & Développeur
          </p>
          <p
            className={`text-lg ${
              darkMode ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Double compétence en électricité et informatique
          </p>
        </header>
        <LatestExperience darkMode={darkMode} />
        <SkillsSection darkMode={darkMode} />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <ExperienceList darkMode={darkMode} />
          <EducationSection darkMode={darkMode} />
        </div>
        <InterestsSection darkMode={darkMode} />
        {/* <div className="mt-8">
          <TFESection darkMode={darkMode} />
          <ExperienceSection darkMode={darkMode} />
        </div> */}
      </div>
    </div>
  );
}

export default About;
