"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ContactScrollLink } from "@/components/contact-scroll-link";
import { CountUpValue } from "./count-up-value";
import { AlertIcon, ChartIcon, PatientIcon, TeamIcon } from "./section-icons";
import { fadeInUp, transitionWithDelay, viewport } from "./motion-settings";

const dashboardItems = [
  {
    title: "item1_titulo",
    text: "item1_texto",
    Icon: ChartIcon,
  },
  {
    title: "item2_titulo",
    text: "item2_texto",
    Icon: TeamIcon,
  },
  {
    title: "item3_titulo",
    text: "item3_texto",
    Icon: PatientIcon,
  },
  {
    title: "item4_titulo",
    text: "item4_texto",
    Icon: AlertIcon,
  },
] as const;

const metrics = [
  {
    value: "metrica1_valor",
    text: "metrica1_texto",
  },
  {
    value: "metrica2_valor",
    text: "metrica2_texto",
  },
  {
    value: "metrica3_valor",
    text: "metrica3_texto",
  },
] as const;

export function DashboardSection() {
  const t = useTranslations("dashboard");

  return (
    <section
      className="bg-backgroundDark text-headingLight scroll-mt-28 px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
      id="dashboard"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <motion.div
              initial="hidden"
              transition={transitionWithDelay()}
              variants={fadeInUp}
              viewport={viewport}
              whileInView="visible"
            >
              <h2 className="font-heading text-36 text-headingLight sm:text-48 leading-tight font-bold">
                {t("titulo")}
              </h2>
              <p className="text-18 text-bodyLight mt-5 max-w-2xl leading-8">
                {t("subtitulo")}
              </p>
            </motion.div>

            <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2">
              {dashboardItems.map(({ Icon, text, title }, index) => (
                <motion.article
                  className="bg-backgroundDarkElevated border-primaryTeal/20 shadow-destaqueProfundo rounded-lg border p-5"
                  initial="hidden"
                  key={title}
                  transition={transitionWithDelay(0.1 + index * 0.06)}
                  variants={fadeInUp}
                  viewport={viewport}
                  whileHover={{
                    scale: 1.02,
                    y: -5,
                  }}
                  whileInView="visible"
                >
                  <span className="bg-primaryTealLight text-goldAccent flex h-11 w-11 items-center justify-center rounded-md">
                    <Icon />
                  </span>
                  <h3 className="text-16 text-headingLight mt-5 leading-6 font-semibold">
                    {t(title)}
                  </h3>
                  <p className="text-14 text-bodyLight mt-3 leading-6">{t(text)}</p>
                </motion.article>
              ))}
            </div>
          </div>

          <motion.div
            className="relative"
            initial="hidden"
            transition={transitionWithDelay(0.16)}
            variants={fadeInUp}
            viewport={viewport}
            whileInView="visible"
          >
            <div className="relative aspect-[16/10] w-full">
              <Image
                alt={t("alt_dashboard")}
                className="object-contain"
                fill
                sizes="(min-width: 1024px) 50vw, 90vw"
                src="/images/mockups/mokup-2-dashclinica.png"
              />
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {metrics.map((metric, index) => (
                <motion.div
                  className="bg-backgroundDarkElevated border-goldAccent/25 shadow-cardLeve rounded-lg border p-5 text-center"
                  initial="hidden"
                  key={metric.value}
                  transition={transitionWithDelay(0.24 + index * 0.08)}
                  variants={fadeInUp}
                  viewport={viewport}
                  whileInView="visible"
                >
                  <p className="font-heading text-36 text-goldAccent leading-none font-extrabold">
                    <CountUpValue value={t(metric.value)} />
                  </p>
                  <p className="text-12 text-bodyLight mt-3 leading-5 font-medium">
                    {t(metric.text)}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8 flex justify-center lg:justify-start"
              initial="hidden"
              transition={transitionWithDelay(0.36)}
              variants={fadeInUp}
              viewport={viewport}
              whileHover={{
                y: -4,
              }}
              whileInView="visible"
            >
              <ContactScrollLink className="bg-primaryTeal text-headingLight shadow-destaqueTeal hover:bg-goldAccent rounded-pill text-16 inline-flex min-h-14 w-full items-center justify-center px-8 text-center font-semibold transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] sm:w-auto">
                {t("cta")}
              </ContactScrollLink>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
