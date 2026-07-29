import type { Locale } from "@/i18n/routing";

const fallbackSiteUrl = "https://launchgoklinik-production.up.railway.app/";

export const siteBaseUrl = process.env.NEXT_PUBLIC_SITE_URL || fallbackSiteUrl;

export const socialShareImage = {
  height: 1802,
  path: "/images/og/goklinik-launch-social-share.png",
  type: "image/png",
  width: 3284,
};

export const metadataDescriptions: Record<Locale, string> = {
  en: "GoKlinik is the ecosystem for aesthetic surgery clinics in Turkey serving international patients.",
  pt: "GoKlinik é o ecossistema para clínicas de cirurgia estética na Turquia que atendem pacientes internacionais.",
  tr: "GoKlinik, Türkiye'de uluslararası hastalara hizmet veren estetik cerrahi klinikleri için geliştirilmiş ekosistemdir.",
};

export const socialShareImageAlt: Record<Locale, string> = {
  en: "GoKlinik social sharing preview image",
  pt: "Imagem destacada do GoKlinik para compartilhamento",
  tr: "GoKlinik sosyal paylaşım önizleme görseli",
};

export const openGraphLocales: Record<Locale, string> = {
  en: "en_GB",
  pt: "pt_PT",
  tr: "tr_TR",
};

export function getSiteUrl(path = "/") {
  const baseUrl = siteBaseUrl.endsWith("/") ? siteBaseUrl : `${siteBaseUrl}/`;
  const normalizedPath = path.startsWith("/") ? path.slice(1) : path;

  return new URL(normalizedPath, baseUrl);
}
