import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { ContatoSection } from "@/components/sections/contato-section";
import { CrescimentoSection } from "@/components/sections/crescimento-section";
import { CtaFinalSection } from "@/components/sections/cta-final-section";
import { DashboardSection } from "@/components/sections/dashboard-section";
import { ExperienciaPacienteSection } from "@/components/sections/experiencia-paciente-section";
import { GestaoEquipeSection } from "@/components/sections/gestao-equipe-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PrecosSection } from "@/components/sections/precos-section";
import { ProblemaSection } from "@/components/sections/problema-section";
import { ResultadosSection } from "@/components/sections/resultados-section";
import { SolucaoSection } from "@/components/sections/solucao-section";
import { WhiteLabelSection } from "@/components/sections/white-label-section";
import { SectionTransition } from "@/components/section-transition";
import { isLocale } from "@/i18n/routing";

type LandingPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function LandingPage({ params }: LandingPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <div>
      <HeroSection />
      <SectionTransition from="dark" to="warm" />
      <ProblemaSection />
      <SectionTransition from="warm" to="white" />
      <SolucaoSection />
      <SectionTransition from="white" to="dark" />
      <DashboardSection />
      <SectionTransition from="dark" to="warm" />
      <ExperienciaPacienteSection />
      <SectionTransition from="warm" to="subtle" />
      <CrescimentoSection />
      <SectionTransition from="subtle" to="white" />
      <WhiteLabelSection />
      <SectionTransition from="white" to="subtle" />
      <GestaoEquipeSection />
      <SectionTransition from="subtle" to="dark" />
      <ResultadosSection />
      <SectionTransition from="dark" to="subtle" />
      <PrecosSection />
      <SectionTransition from="subtle" to="dark" />
      <CtaFinalSection />
      <SectionTransition from="dark" to="warm" />
      <ContatoSection />
    </div>
  );
}
