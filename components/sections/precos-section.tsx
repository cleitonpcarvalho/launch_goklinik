"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ContactScrollLink } from "@/components/contact-scroll-link";
import { BellIcon, BenefitIcon, CalendarIcon, CheckIcon } from "./section-icons";
import { fadeInUp, transitionWithDelay, viewport } from "./motion-settings";

const normalItems = [
  "plano_normal_item1",
  "plano_normal_item2",
  "plano_normal_item3",
  "plano_normal_item4",
  "plano_normal_item5",
  "plano_normal_item6",
] as const;

const founderItems = [
  "plano_fundador_item1",
  "plano_fundador_item2",
  "plano_fundador_item3",
  "plano_fundador_item4",
  "plano_fundador_item5",
  "plano_fundador_item6",
] as const;

const trustSeals = ["selo1", "selo2", "selo3"] as const;

const highlights = [
  {
    title: "destaque1_titulo",
    text: "destaque1_texto",
    Icon: BellIcon,
  },
  {
    title: "destaque2_titulo",
    text: "destaque2_texto",
    Icon: CalendarIcon,
  },
  {
    title: "destaque3_titulo",
    text: "destaque3_texto",
    Icon: BenefitIcon,
  },
] as const;

export function PrecosSection() {
  const t = useTranslations("precos");

  return (
    <section
      className="bg-backgroundSubtleGray scroll-mt-28 px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
      id="precos"
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
          <span className="bg-goldAccentLight text-goldAccent rounded-pill text-12 inline-flex items-center justify-center px-4 py-2 text-center font-bold tracking-normal uppercase">
            {t("badge")}
          </span>
          <p className="text-18 text-bodyDark mx-auto mt-5 max-w-2xl leading-8 font-medium">
            {t("aviso")}
          </p>
        </motion.div>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-2">
          <motion.article
            className="border-primaryTeal/10 bg-backgroundCleanWhite shadow-cardLeve rounded-lg border p-6 opacity-90 sm:p-8"
            initial="hidden"
            transition={transitionWithDelay(0.1)}
            variants={fadeInUp}
            viewport={viewport}
            whileHover={{
              scale: 1.01,
              y: -4,
            }}
            whileInView="visible"
          >
            <div className="border-primaryTeal/10 border-b pb-6">
              <h3 className="font-heading text-30 text-headingDark font-bold">
                {t("plano_normal_nome")}
              </h3>
              <p className="font-heading text-36 text-headingDark mt-5 leading-tight font-extrabold">
                {t("plano_normal_valor_eur")}
              </p>
              <p className="text-14 text-mutedDark mt-2 leading-6">
                {t("plano_normal_valor_try")}
              </p>
            </div>

            <ul className="mt-6 space-y-4">
              {normalItems.map((item, index) => (
                <motion.li
                  className="text-14 text-bodyDark flex items-start gap-3 leading-6"
                  initial="hidden"
                  key={item}
                  transition={transitionWithDelay(0.14 + index * 0.04)}
                  variants={fadeInUp}
                  viewport={viewport}
                  whileInView="visible"
                >
                  <span className="bg-primaryTealLight text-primaryTeal rounded-circle mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <span>{t(item)}</span>
                </motion.li>
              ))}
            </ul>

            <div className="bg-backgroundSubtleGray text-mutedDark rounded-pill text-14 mt-8 inline-flex min-h-11 items-center justify-center px-5 text-center font-semibold">
              {t("plano_normal_indisponivel")}
            </div>
          </motion.article>

          <motion.article
            animate={{
              boxShadow: [
                "0px 20px 35px -10px rgba(26, 107, 124, 0.15)",
                "0px 0px 25px rgba(216, 155, 40, 0.3)",
                "0px 20px 35px -10px rgba(26, 107, 124, 0.15)",
              ],
            }}
            className="from-primaryTeal via-goldAccent to-primaryTeal rounded-lg bg-gradient-to-br p-px lg:scale-[1.03]"
            initial="hidden"
            transition={{
              boxShadow: {
                duration: 0.6,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 1.4,
              },
              ...transitionWithDelay(0.16),
            }}
            variants={fadeInUp}
            viewport={viewport}
            whileHover={{
              scale: 1.04,
              y: -5,
            }}
            whileInView="visible"
          >
            <div className="bg-backgroundCleanWhite rounded-[19px] p-6 sm:p-8">
              <span className="bg-primaryTeal text-headingLight rounded-pill text-12 inline-flex w-full items-center justify-center px-4 py-2 text-center font-bold tracking-normal uppercase sm:w-auto">
                {t("plano_fundador_badge")}
              </span>

              <div className="border-goldAccent/20 mt-6 border-b pb-6">
                <h3 className="font-heading text-30 text-headingDark font-bold">
                  {t("plano_fundador_nome")}
                </h3>
                <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-end">
                  <p className="font-heading text-48 text-headingDark leading-none font-extrabold">
                    {t("plano_fundador_valor_atual")}
                  </p>
                  <p className="text-16 text-mutedDark pb-1 font-semibold line-through">
                    {t("plano_fundador_valor_original")}
                  </p>
                </div>
                <p className="text-14 text-mutedDark mt-2 leading-6">
                  {t("plano_fundador_valor_try")}
                </p>
                <p className="text-14 text-goldAccent mt-4 leading-6 font-bold">
                  {t("plano_fundador_economia")}
                </p>
              </div>

              <ul className="mt-6 space-y-4">
                {founderItems.map((item, index) => (
                  <motion.li
                    className="text-14 text-bodyDark flex items-start gap-3 leading-6"
                    initial="hidden"
                    key={item}
                    transition={transitionWithDelay(0.18 + index * 0.04)}
                    variants={fadeInUp}
                    viewport={viewport}
                    whileInView="visible"
                  >
                    <span className="bg-goldAccentLight text-goldAccent rounded-circle mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    <span>{t(item)}</span>
                  </motion.li>
                ))}
              </ul>

              <ContactScrollLink className="bg-goldAccent text-headingDark shadow-glowDourado hover:bg-primaryTeal hover:text-headingLight rounded-pill text-16 mt-8 inline-flex min-h-14 w-full items-center justify-center px-6 text-center font-bold transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]">
                {t("plano_fundador_cta")}
              </ContactScrollLink>
            </div>
          </motion.article>
        </div>

        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap"
          initial="hidden"
          transition={transitionWithDelay(0.22)}
          variants={fadeInUp}
          viewport={viewport}
          whileInView="visible"
        >
          {trustSeals.map((seal) => (
            <span
              className="bg-backgroundCleanWhite text-mutedDark rounded-pill text-12 inline-flex items-center justify-center border border-white px-4 py-2 text-center font-semibold"
              key={seal}
            >
              {t(seal)}
            </span>
          ))}
        </motion.div>

        <motion.p
          className="text-14 text-headingDark mx-auto mt-6 max-w-3xl text-center leading-6 font-semibold"
          initial="hidden"
          transition={transitionWithDelay(0.28)}
          variants={fadeInUp}
          viewport={viewport}
          whileInView="visible"
        >
          {t("aviso_final")}
        </motion.p>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {highlights.map(({ Icon, text, title }, index) => (
            <motion.article
              className="bg-backgroundCleanWhite border-primaryTeal/10 shadow-cardLeve rounded-lg border p-6"
              initial="hidden"
              key={title}
              transition={transitionWithDelay(0.3 + index * 0.06)}
              variants={fadeInUp}
              viewport={viewport}
              whileHover={{
                scale: 1.02,
                y: -5,
              }}
              whileInView="visible"
            >
              <span className="bg-primaryTealLight text-primaryTeal flex h-11 w-11 items-center justify-center rounded-md">
                <Icon />
              </span>
              <h3 className="text-18 text-headingDark mt-5 leading-6 font-semibold">
                {t(title)}
              </h3>
              <p className="text-14 text-bodyDark mt-3 leading-6">{t(text)}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
