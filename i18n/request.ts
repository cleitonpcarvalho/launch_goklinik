import { getRequestConfig } from "next-intl/server";
import { defaultLocale, isLocale } from "./routing";

const messagesByLocale = {
  tr: () => import("../messages/tr.json").then((module) => module.default),
  pt: () => import("../messages/pt.json").then((module) => module.default),
  en: () => import("../messages/en.json").then((module) => module.default),
};

export default getRequestConfig(async ({ requestLocale }) => {
  const requestedLocale = await requestLocale;
  const locale = isLocale(requestedLocale) ? requestedLocale : defaultLocale;

  return {
    locale,
    messages: await messagesByLocale[locale](),
  };
});
