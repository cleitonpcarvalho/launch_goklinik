"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { locales, type Locale } from "@/i18n/routing";

const localeLabels: Record<Locale, string> = {
  tr: "TR",
  pt: "PT",
  en: "EN",
};

const localeFlags: Record<Locale, string> = {
  tr: "/images/flags/tr.svg",
  pt: "/images/flags/pt.svg",
  en: "/images/flags/en.svg",
};

export function LanguageSwitcher() {
  const activeLocale = useLocale() as Locale;
  const pathname = usePathname();
  const t = useTranslations("header");
  const [hash, setHash] = useState("");

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);

    updateHash();
    window.addEventListener("hashchange", updateHash);

    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  return (
    <div
      aria-label={t("languageLabel")}
      className="rounded-pill border-primaryTeal/10 bg-backgroundCleanWhite/70 text-12 text-mutedDark shadow-cardLeve flex items-center border p-1 font-semibold"
      role="navigation"
    >
      {locales.map((locale) => {
        const isActive = locale === activeLocale;
        const className = [
          "flex h-8 min-w-11 items-center justify-center gap-1.5 rounded-pill px-2.5 transition-colors",
          isActive
            ? "bg-primaryTeal text-headingLight"
            : "text-mutedDark hover:bg-primaryTealLight hover:text-primaryTealDark",
        ].join(" ");

        return (
          <Link
            key={locale}
            aria-current={isActive ? "page" : undefined}
            className={className}
            href={`${pathname || "/"}${hash}`}
            locale={locale}
          >
            <Image
              alt=""
              aria-hidden="true"
              className="h-3.5 w-5 rounded-[2px] object-cover"
              height={24}
              src={localeFlags[locale]}
              width={32}
            />
            <span>{localeLabels[locale]}</span>
          </Link>
        );
      })}
    </div>
  );
}
