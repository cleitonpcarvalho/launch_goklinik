"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ContactScrollLink } from "@/components/contact-scroll-link";
import { CountUpValue } from "./count-up-value";
import { CheckIcon } from "./section-icons";
import { fadeInUp, transitionWithDelay, viewport } from "./motion-settings";

const resultMetrics = [
  {
    value: "metrica1_valor",
    text: "metrica1_texto",
    count: true,
  },
  {
    value: "metrica2_valor",
    text: "metrica2_texto",
    count: true,
  },
  {
    value: "metrica3_valor",
    text: "metrica3_texto",
    count: true,
  },
  {
    value: "metrica4_valor",
    text: "metrica4_texto",
    count: false,
  },
] as const;

const resultList = ["lista_item1", "lista_item2", "lista_item3", "lista_item4"] as const;

const lowerViewport = {
  once: true,
  amount: 0.01,
};

export function ResultadosSection() {
  const t = useTranslations("resultados");

  return (
    <section
      className="bg-backgroundDark text-headingLight scroll-mt-28 px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
      id="resultados"
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial="hidden"
          transition={transitionWithDelay()}
          variants={fadeInUp}
          viewport={viewport}
          whileInView="visible"
        >
          <h2 className="font-heading text-36 text-headingLight sm:text-48 leading-tight font-bold">
            {t("titulo")}
          </h2>
          <p className="text-18 text-bodyLight mx-auto mt-5 max-w-3xl leading-8">
            {t("subtitulo")}
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {resultMetrics.map((metric, index) => (
            <motion.article
              className="bg-backgroundDarkElevated border-goldAccent/25 shadow-destaqueProfundo rounded-lg border p-6 text-center"
              initial="hidden"
              key={metric.value}
              transition={transitionWithDelay(0.1 + index * 0.06)}
              variants={fadeInUp}
              viewport={viewport}
              whileHover={{
                scale: 1.02,
                y: -5,
              }}
              whileInView="visible"
            >
              <p className="font-heading text-48 text-goldAccent leading-none font-extrabold">
                {metric.count ? (
                  <CountUpValue value={t(metric.value)} />
                ) : (
                  <motion.span
                    animate={{
                      opacity: [0.85, 1, 0.85],
                      scale: [1, 1.06, 1],
                    }}
                    aria-label={t(metric.value)}
                    className="inline-block"
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatDelay: 0.5,
                    }}
                  >
                    ∞
                  </motion.span>
                )}
              </p>
              <p className="text-14 text-bodyLight mt-4 leading-6 font-medium">
                {t(metric.text)}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="border-primaryTeal/20 bg-backgroundDarkElevated shadow-destaqueProfundo mx-auto mt-10 max-w-4xl rounded-lg border p-8"
          initial="hidden"
          transition={transitionWithDelay(0.22)}
          variants={fadeInUp}
          viewport={lowerViewport}
          whileInView="visible"
        >
          <ul className="grid gap-4 md:grid-cols-2">
            {resultList.map((item, index) => (
              <motion.li
                className="text-16 text-bodyLight flex items-center gap-3 leading-7"
                initial="hidden"
                key={item}
                transition={transitionWithDelay(0.26 + index * 0.05)}
                variants={fadeInUp}
                viewport={lowerViewport}
                whileInView="visible"
              >
                <span className="bg-goldAccentLight text-goldAccent rounded-circle flex h-8 w-8 shrink-0 items-center justify-center">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <span>{t(item)}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="mt-10 flex justify-center"
          initial="hidden"
          transition={transitionWithDelay(0.34)}
          variants={fadeInUp}
          viewport={lowerViewport}
          whileHover={{
            y: -4,
          }}
          whileInView="visible"
        >
          <ContactScrollLink className="bg-primaryTeal text-headingLight shadow-destaqueTeal hover:bg-goldAccent rounded-pill text-16 inline-flex min-h-14 w-full items-center justify-center px-8 text-center font-semibold transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] sm:w-auto">
            {t("cta")}
          </ContactScrollLink>
        </motion.div>
      </div>
    </section>
  );
}
