const permitido = [
  "Promoción de servicios Byklai",
  "Publicaciones orgánicas en redes sociales",
  "Referencias comerciales directas",
  "Colaboración dentro del programa Byklai",
];

const restricciones = [
  "Modificar logos oficiales",
  "Alterar promociones vigentes",
  "Ofrecer servicios no autorizados",
  "Representar legalmente a Byklai",
  "Utilizar branding de forma engañosa",
];

export default function LineamientosSection() {
  return (
    <section className="px-6 py-16 max-w-4xl mx-auto border-t border-line">
      <p className="font-mono text-xs tracking-widest text-ink3 uppercase mb-10">
        Lineamientos de Uso
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <p className="font-serif text-xl text-ink mb-6">Uso permitido</p>
          <ul className="space-y-3">
            {permitido.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm text-ink2">
                <span className="text-ink3 shrink-0 mt-0.5">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-serif text-xl text-ink mb-6">Restricciones</p>
          <ul className="space-y-3">
            {restricciones.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm text-ink3">
                <span className="shrink-0 mt-0.5">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
