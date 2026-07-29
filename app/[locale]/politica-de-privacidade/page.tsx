import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { isLocale } from "@/i18n/routing";

type PrivacyPageProps = {
  params: Promise<{ locale: string }>;
};

const privacySections = [
  "responsavel",
  "dados",
  "finalidades",
  "baseLegal",
  "conservacao",
  "direitos",
  "cookies",
  "partilha",
  "contacto",
] as const;

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const t = await getTranslations("privacidade");

  return (
    <section className="bg-backgroundCleanWhite px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-3xl">
        <p className="text-12 text-primaryTeal font-semibold tracking-normal uppercase">
          {t("label")}
        </p>
        <h1 className="font-heading text-36 text-headingDark sm:text-48 mt-4 leading-tight font-bold">
          {t("title")}
        </h1>
        <p className="text-16 text-bodyDark mt-5 leading-8">{t("intro")}</p>
        <p className="text-14 text-mutedDark mt-4 leading-6">{t("updated")}</p>

        <div className="mt-12 space-y-10">
          {privacySections.map((section) => (
            <section className="border-primaryTeal/10 border-t pt-8" key={section}>
              <h2 className="font-heading text-24 text-headingDark leading-tight font-bold">
                {t(`sections.${section}.title`)}
              </h2>
              <p className="text-16 text-bodyDark mt-4 leading-8 whitespace-pre-line">
                {t(`sections.${section}.body`)}
              </p>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
