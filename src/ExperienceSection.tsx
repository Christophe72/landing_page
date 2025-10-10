import { Briefcase, Calendar } from "lucide-react";

interface Experience {
  title: string;
  company?: string;
  period: string;
  description?: string;
}

const experiences: Experience[] = [
  {
    title: "Câblages électriques",
    period: "08/10/2024 au 11/10/2024",
  },
  {
    title: "Divers travaux électriques",
    period: "15/07/2024 au 19/07/2024",
  },
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

export default function ExperienceSection({ darkMode }: { darkMode: boolean }) {
  return (
    <section
      className={`max-w-4xl mx-auto mt-8 p-6 rounded-2xl shadow-lg border transition-colors duration-300 ${
        darkMode
          ? "bg-slate-800 border-slate-700 text-slate-300"
          : "bg-white border-slate-200 text-slate-700"
      }`}
    >
      <h2 className="flex items-center gap-2 mb-6 text-xl font-semibold">
        <Briefcase className="w-6 h-6" />
        Expériences professionnelles
      </h2>
      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className={`p-4 rounded-xl shadow-sm border ${
              darkMode
                ? "bg-slate-900 border-slate-700"
                : "bg-slate-50 border-slate-200"
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="font-bold">{exp.title}</span>
              {exp.company && (
                <>
                  <span className="mx-2 text-xs text-slate-400">|</span>
                  <span className="italic">{exp.company}</span>
                </>
              )}
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{exp.period}</span>
            </div>
            {exp.description && (
              <div className="text-sm">{exp.description}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
