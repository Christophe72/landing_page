function TFESection({ darkMode }: { darkMode: boolean }) {
  return (
    <section
      className={`max-w-4xl p-6 mx-auto mt-4 shadow-lg rounded-2xl border transition-colors duration-300 ${
        darkMode
          ? "text-slate-400 border-slate-700"
          : "text-slate-500 border-slate-200"
      }`}
    >
      <h2 className="mb-2 text-xl font-semibold">
        📑 Travail de Fin d'Études (TFE)
      </h2>
      <p>
        Mon TFE a consisté à développer une interface de pilotage pour un{" "}
        <strong>moteur pas à pas</strong> en utilisant le protocole{" "}
        <strong>CANopen</strong> sur un <strong>bus CAN industriel</strong>.
        L’objectif était d’implémenter un nœud de communication permettant la
        configuration, le contrôle et le retour d’état du moteur. Ce projet m’a
        permis de renforcer mes compétences en{" "}
        <strong>électronique embarquée</strong>,{" "}
        <strong>bus et protocoles industriels (CAN, CANopen)</strong>
        et en <strong>programmation bas niveau</strong> pour systèmes
        automatisés.
      </p>
    </section>
  );
}

export default TFESection;
