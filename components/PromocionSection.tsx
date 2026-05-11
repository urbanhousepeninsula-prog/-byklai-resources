import Image from "next/image";
import { urlFor } from "@/sanity/imageUrl";

type Promocion = {
  titulo: string;
  precio: string;
  descripcion: string;
  incluye: string[];
  noIncluye: string[];
  imagen?: object;
  ctaUrl: string;
  mes: string;
};

export default function PromocionSection({ promocion }: { promocion: Promocion }) {
  return (
    <section className="px-6 py-16 max-w-4xl mx-auto border-t border-line">
      <div className="flex items-center gap-3 mb-10">
        <p className="font-mono text-xs tracking-widest text-ink3 uppercase">Promoción Activa</p>
        <span className="font-mono text-xs bg-ink text-surface px-2 py-0.5">{promocion.mes}</span>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="font-serif text-3xl text-ink mb-2">{promocion.titulo}</h2>
          <p className="font-mono text-base text-ink mb-5">{promocion.precio}</p>
          <p className="text-ink2 leading-relaxed mb-8">{promocion.descripcion}</p>

          <div className="grid grid-cols-2 gap-6 mb-10">
            <div>
              <p className="font-mono text-xs text-ink3 uppercase tracking-widest mb-3">Incluye</p>
              <ul className="space-y-2">
                {promocion.incluye?.map((item, i) => (
                  <li key={i} className="text-sm text-ink2 flex gap-2">
                    <span className="text-ink3 shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs text-ink3 uppercase tracking-widest mb-3">
                No incluye
              </p>
              <ul className="space-y-2">
                {promocion.noIncluye?.map((item, i) => (
                  <li key={i} className="text-sm text-ink3 flex gap-2">
                    <span className="shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <a
            href={promocion.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-ink text-surface font-outfit text-sm px-6 py-3 hover:bg-ink2 transition-colors"
          >
            Solicitar proyecto →
          </a>
        </div>

        {promocion.imagen && (
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-surface2">
            <Image
              src={urlFor(promocion.imagen).width(600).height(800).url()}
              alt={promocion.titulo}
              fill
              className="object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}
