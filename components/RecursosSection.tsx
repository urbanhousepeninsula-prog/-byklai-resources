import Image from "next/image";
import { urlFor } from "@/sanity/imageUrl";

type Recurso = {
  titulo: string;
  descripcion: string;
  imagen?: object;
  categoria: string;
  orden: number;
};

const categoriaLabel: Record<string, string> = {
  promo: "Promoción",
  programa: "Programa",
  branding: "Branding",
};

export default function RecursosSection({ recursos }: { recursos: Recurso[] }) {
  return (
    <section className="px-6 py-16 max-w-4xl mx-auto border-t border-line">
      <p className="font-mono text-xs tracking-widest text-ink3 uppercase mb-2">
        Material Promocional
      </p>
      <p className="text-ink3 mb-10">
        Descarga materiales oficiales Byklai para compartir promociones activas y servicios.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {recursos.map((recurso, i) => (
          <div key={i} className="border border-line rounded-lg overflow-hidden">
            {recurso.imagen && (
              <div className="relative aspect-video bg-surface2">
                <Image
                  src={urlFor(recurso.imagen).width(700).height(394).url()}
                  alt={recurso.titulo}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="p-5">
              <p className="font-mono text-xs text-ink3 uppercase tracking-widest mb-1">
                {categoriaLabel[recurso.categoria] || recurso.categoria}
              </p>
              <p className="font-serif text-lg text-ink mb-1">{recurso.titulo}</p>
              <p className="text-sm text-ink3 mb-4 leading-snug">{recurso.descripcion}</p>
              {recurso.imagen && (
                <a
                  href={urlFor(recurso.imagen).width(1200).url()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-ink hover:text-ink3 transition-colors"
                >
                  → Descargar PNG
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
