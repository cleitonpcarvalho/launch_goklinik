import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
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
import { isLocale, locales } from "@/i18n/routing";
import {
  getSiteUrl,
  metadataDescriptions,
  openGraphLocales,
  socialShareImage,
  socialShareImageAlt,
} from "@/lib/site-metadata";

type LandingPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: LandingPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const t = await getTranslations({
    locale,
    namespace: "hero",
  });
  const title = `${t("titulo_parte1")} ${t("titulo_destaque")}`;
  const description = metadataDescriptions[locale];
  const pageUrl = getSiteUrl(`/${locale}`);
  const imageUrl = getSiteUrl(socialShareImage.path);
  const alternateLocales = locales.filter((item) => item !== locale);

  return {
    alternates: {
      canonical: pageUrl,
      languages: {
        en: getSiteUrl("/en"),
        pt: getSiteUrl("/pt"),
        tr: getSiteUrl("/tr"),
        "x-default": getSiteUrl("/tr"),
      },
    },
    description,
    metadataBase: getSiteUrl(),
    openGraph: {
      alternateLocale: alternateLocales.map((item) => openGraphLocales[item]),
      description,
      images: [
        {
          alt: socialShareImageAlt[locale],
          height: socialShareImage.height,
          type: socialShareImage.type,
          url: imageUrl,
          width: socialShareImage.width,
        },
      ],
      locale: openGraphLocales[locale],
      siteName: "GoKlinik Patient",
      title,
      type: "website",
      url: pageUrl,
    },
    title,
    twitter: {
      card: "summary_large_image",
      description,
      images: [
        {
          alt: socialShareImageAlt[locale],
          url: imageUrl,
        },
      ],
      title,
    },
  };
}

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
