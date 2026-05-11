export default function CtaFinal() {
  return (
    <section className="px-6 py-24 max-w-4xl mx-auto border-t border-line">
      <div className="text-center">
        <p className="font-mono text-xs tracking-widest text-ink3 uppercase mb-6">
          ¿Tienes un cliente potencial?
        </p>
        <p className="font-serif text-3xl md:text-4xl text-ink mb-4">
          Dirígelos al sistema oficial
        </p>
        <p className="text-ink3 mb-10 max-w-md mx-auto leading-relaxed">
          Comparte el enlace de discovery para que el prospecto inicie el proceso de cotización
          directamente.
        </p>
        <a
          href="https://discovery.byklai.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-ink text-ink font-outfit text-sm px-8 py-3 hover:bg-ink hover:text-surface transition-colors"
        >
          → discovery.byklai.com
        </a>
      </div>
    </section>
  );
}
