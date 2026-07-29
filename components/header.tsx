import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ContactScrollLink } from "./contact-scroll-link";
import { LanguageSwitcher } from "./language-switcher";
import { mainNavItems } from "./nav-items";

export async function Header() {
  const t = await getTranslations("header");

  return (
    <header className="border-primaryTeal/10 bg-backgroundCleanWhite/75 shadow-cardLeve fixed inset-x-0 top-0 z-50 border-b backdrop-blur-[16px]">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link
          aria-label="GoKlinik Patient"
          className="flex shrink-0 items-center gap-3"
          href="/"
        >
          <Image
            alt="GoKlinik Patient"
            className="h-10 w-auto"
            height={544}
            src="/images/logos/goklinik-patient-logo-melhorada.png"
            width={1554}
          />
        </Link>

        <nav
          aria-label={t("navigationLabel")}
          className="hidden items-center justify-center gap-8 lg:flex"
        >
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              className="text-14 text-bodyDark hover:text-primaryTeal font-medium transition-colors"
              href={item.href}
            >
              {t(item.translationKey)}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <LanguageSwitcher />
          <ContactScrollLink className="rounded-pill bg-primaryTeal text-14 text-headingLight shadow-destaqueTeal hover:bg-goldAccent hidden h-11 items-center justify-center px-5 font-semibold transition-colors sm:inline-flex">
            {t("cta")}
          </ContactScrollLink>
        </div>
      </div>
    </header>
  );
}
