import { client } from "@/sanity/client";
import { promocionActivaQuery, recursosQuery } from "@/sanity/queries";
import HeroSection from "@/components/HeroSection";
import EcosistemaSection from "@/components/EcosistemaSection";
import PromocionSection from "@/components/PromocionSection";
import RecursosSection from "@/components/RecursosSection";
import LineamientosSection from "@/components/LineamientosSection";
import CtaFinal from "@/components/CtaFinal";

export const revalidate = 3600;

export default async function Home() {
  const [promocion, recursos] = await Promise.all([
    client.fetch(promocionActivaQuery),
    client.fetch(recursosQuery),
  ]);

  return (
    <main>
      <HeroSection />
      <EcosistemaSection />
      {promocion && <PromocionSection promocion={promocion} />}
      {recursos?.length > 0 && <RecursosSection recursos={recursos} />}
      <LineamientosSection />
      <CtaFinal />
      <footer className="px-6 py-8 max-w-4xl mx-auto border-t border-line">
        <p className="font-mono text-xs text-ink3">
          © {new Date().getFullYear()} Byklai · resources.byklai.com
        </p>
      </footer>
    </main>
  );
}
