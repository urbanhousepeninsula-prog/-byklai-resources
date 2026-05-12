export default function HeroSection() {
  return (
    <section className="px-6 pt-24 pb-20 max-w-4xl mx-auto">
      <p className="font-mono text-xs tracking-widest text-ink3 uppercase mb-8">
        Centro de Recursos · Byklai
      </p>
      <h1 className="font-serif text-5xl md:text-6xl text-ink leading-tight mb-6">
        Recursos Oficiales Byklai
      </h1>
      <p className="text-xl text-ink2 leading-relaxed max-w-2xl mb-4">
        Accede a promociones activas, materiales visuales y enlaces oficiales para compartir
        servicios y oportunidades de colaboración de Byklai.
      </p>
      <p className="text-base text-ink3 leading-relaxed max-w-2xl">
        Este espacio fue creado para colaboradores, afiliados y aliados estratégicos que desean
        compartir servicios Byklai utilizando materiales oficiales y campañas activas.
      </p>

      <a
        href="https://afiliados.byklai.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-4 mt-10 p-5 border border-line bg-surface2 rounded-lg hover:border-ink3 transition-colors max-w-md"
      >
        <div>
          <p className="font-mono text-xs text-ink3 uppercase tracking-widest mb-1">
            Programa de afiliados
          </p>
          <p className="font-serif text-lg text-ink">¿Quieres ganar comisiones?</p>
          <p className="text-sm text-ink3 mt-1">
            Refiere clientes a Byklai y gana entre 15% y 25% del proyecto.
          </p>
        </div>
        <span className="font-mono text-ink3 text-lg shrink-0">→</span>
      </a>
    </section>
  );
}
