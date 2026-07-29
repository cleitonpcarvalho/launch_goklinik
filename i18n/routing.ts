import { defineRouting } from "next-intl/routing";

export const locales = ["tr", "pt", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "tr";

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "always",
  localeDetection: true,
});

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}
