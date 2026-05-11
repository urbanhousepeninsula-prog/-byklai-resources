const ecosistema = [
  {
    titulo: "Byklai",
    descripcion: "Portafolio principal y servicios.",
    url: "https://byklai.com",
    label: "byklai.com",
  },
  {
    titulo: "Pekmex Is Life",
    descripcion: "Caso de estudio y ecosistema editorial.",
    url: "https://pekmexlife.com",
    label: "pekmexlife.com",
  },
  {
    titulo: "Colaboradores",
    descripcion: "Programa de colaboración y red de talento.",
    url: "https://colaboradores.byklai.com",
    label: "colaboradores.byklai.com",
  },
  {
    titulo: "Afiliados",
    descripcion: "Programa de referidos con comisiones.",
    url: "https://afiliados.byklai.com",
    label: "afiliados.byklai.com",
  },
  {
    titulo: "Discovery",
    descripcion: "Solicitud de cotizaciones y diagnóstico.",
    url: "https://discovery.byklai.com",
    label: "discovery.byklai.com",
  },
];

export default function EcosistemaSection() {
  return (
    <section className="px-6 py-16 max-w-4xl mx-auto border-t border-line">
      <p className="font-mono text-xs tracking-widest text-ink3 uppercase mb-10">Ecosistema</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {ecosistema.map((item) => (
          <a
            key={item.url}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 bg-surface2 border border-line rounded-lg hover:border-ink3 transition-colors"
          >
            <p className="font-serif text-lg text-ink mb-1">{item.titulo}</p>
            <p className="text-sm text-ink3 mb-4 leading-snug">{item.descripcion}</p>
            <p className="font-mono text-xs text-ink3 group-hover:text-ink transition-colors">
              → {item.label}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
