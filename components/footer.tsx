import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { mainNavItems } from "./nav-items";

export async function Footer() {
  const t = await getTranslations("footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-backgroundDark text-bodyLight">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <div className="inline-flex">
            <Image
              alt="GoKlinik Patient"
              className="h-12 w-auto"
              height={759}
              src="/images/logos/logo-goklinik-patient-fundoescuro-sem-fundo.png"
              width={2072}
            />
          </div>
          <p className="text-14 text-bodyLight mt-4 max-w-sm leading-6">{t("tagline")}</p>
        </div>

        <nav aria-label={t("navigationLabel")} className="flex flex-col gap-3">
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              className="text-14 text-bodyLight hover:text-goldAccent font-medium transition-colors"
              href={item.href}
            >
              {t(item.translationKey)}
            </Link>
          ))}
        </nav>

        <address className="not-italic">
          <p className="font-heading text-18 text-headingLight font-semibold">
            {t("addressTitle")}
          </p>
          <div className="text-14 text-bodyLight mt-4 space-y-3 leading-6">
            <p className="whitespace-pre-line">{t("companyAddress")}</p>
            <p>
              <span className="text-headingLight font-semibold">{t("emailLabel")}:</span>{" "}
              {t("email")}
            </p>
          </div>
        </address>
      </div>

      <div className="border-t border-white/10">
        <div className="text-12 text-mutedLight mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            &copy; {currentYear} GoKlinik Patient. {t("rights")}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link className="hover:text-goldAccent" href="/politica-de-privacidade">
              {t("privacy")}
            </Link>
            <Link className="hover:text-goldAccent" href="/termos-de-uso">
              {t("terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
