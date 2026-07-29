"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ContactScrollLink } from "@/components/contact-scroll-link";
import { CheckIcon } from "./section-icons";
import { fadeInUp, transitionWithDelay, viewport } from "./motion-settings";

const bullets = ["bullet1", "bullet2", "bullet3", "bullet4"] as const;
const offerItems = ["oferta_item1", "oferta_item2", "oferta_item3"] as const;
const trustSeals = ["selo1", "selo2", "selo3"] as const;

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section
      className="bg-backgroundDark text-headingLight relative isolate overflow-hidden px-5 pt-20 pb-12 sm:px-8 sm:pt-24 sm:pb-14 lg:pt-24 lg:pb-12"
      id="hero"
    >
      <motion.div
        animate={{
          opacity: [0.2, 0.38, 0.2],
          scale: [1, 1.06, 1],
        }}
        className="bg-primaryTeal/25 rounded-circle pointer-events-none absolute top-24 left-1/2 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 blur-[120px]"
        transition={{
          duration: 7,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="min-w-0">
            <motion.p
              className="bg-primaryTeal/15 text-goldAccent border-primaryTeal/25 rounded-pill text-12 inline-flex border px-4 py-2 font-semibold tracking-normal uppercase"
              initial="hidden"
              transition={transitionWithDelay()}
              variants={fadeInUp}
              viewport={viewport}
              whileInView="visible"
            >
              {t("badge")}
            </motion.p>

            <motion.h1
              className="font-heading text-30 sm:text-36 md:text-48 lg:text-48 mt-5 max-w-3xl leading-[0.98] font-extrabold tracking-normal"
              initial="hidden"
              transition={transitionWithDelay(0.08)}
              variants={fadeInUp}
              viewport={viewport}
              whileInView="visible"
            >
              {t("titulo_parte1")}{" "}
              <span className="text-goldAccent">{t("titulo_destaque")}</span>
            </motion.h1>

            <motion.p
              className="text-bodyLight text-18 sm:text-20 mt-4 max-w-3xl leading-8"
              initial="hidden"
              transition={transitionWithDelay(0.16)}
              variants={fadeInUp}
              viewport={viewport}
              whileInView="visible"
            >
              {t("subtitulo")}
            </motion.p>

            <ul className="mt-6 grid gap-3 md:grid-cols-2">
              {bullets.map((key, index) => (
                <motion.li
                  className="text-bodyLight text-14 flex items-start gap-3 leading-6"
                  initial="hidden"
                  key={key}
                  transition={transitionWithDelay(0.22 + index * 0.06)}
                  variants={fadeInUp}
                  viewport={viewport}
                  whileInView="visible"
                >
                  <span className="bg-medicGreenLight text-goldAccent rounded-circle mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <span>{t(key)}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            className="relative mx-auto flex w-full max-w-[42rem] min-w-0 justify-center lg:self-center"
            initial="hidden"
            transition={transitionWithDelay(0.2)}
            variants={fadeInUp}
            viewport={viewport}
            whileInView="visible"
          >
            <motion.div
              animate={{
                rotate: 1.2,
                y: -14,
              }}
              className="relative h-[min(78vh,34rem)] w-[calc(100%-0.75rem)] max-w-[37.5rem] sm:h-[38rem] sm:w-full lg:h-[34rem] lg:max-h-[34rem] lg:min-h-0 lg:max-w-[42rem] xl:h-[37rem] xl:max-h-[37rem]"
              initial={{
                rotate: -1.2,
                y: 10,
              }}
              transition={{
                duration: 5.2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
              }}
            >
              <Image
                alt={t("alt_mobile")}
                className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)]"
                fill
                priority
                sizes="(min-width: 1280px) 42rem, (min-width: 1024px) 40rem, 88vw"
                src="/images/mockups/hero-apps-medic-patient.png"
              />
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-stretch">
          <motion.div
            className="from-primaryTeal/70 via-goldAccent/70 to-primaryTeal/70 shadow-destaqueProfundo rounded-lg bg-gradient-to-br p-px"
            initial="hidden"
            transition={transitionWithDelay(0.36)}
            variants={fadeInUp}
            viewport={viewport}
            whileInView="visible"
          >
            <div className="bg-backgroundDarkElevated/95 grid gap-4 rounded-[19px] p-4 sm:grid-cols-[0.8fr_1fr] sm:items-center">
              <p className="font-heading text-20 text-headingLight font-bold">
                {t("oferta_titulo")}
              </p>
              <ul className="grid gap-2">
                {offerItems.map((key) => (
                  <li className="text-14 text-bodyLight flex items-start gap-3" key={key}>
                    <span className="bg-goldAccent rounded-circle mt-2 h-2 w-2 shrink-0" />
                    <span>{t(key)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <div className="flex h-full flex-col items-center justify-center gap-4">
            <motion.div
              className="flex justify-center"
              initial="hidden"
              transition={transitionWithDelay(0.44)}
              variants={fadeInUp}
              viewport={viewport}
              whileInView="visible"
              whileHover={{
                y: -4,
              }}
            >
              <ContactScrollLink className="bg-primaryTeal shadow-destaqueTeal hover:bg-goldAccent rounded-pill text-18 text-headingLight hover:shadow-glowDourado inline-flex min-h-16 w-full items-center justify-center px-10 text-center font-semibold transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] sm:w-auto lg:min-w-[24rem]">
                {t("cta_principal")}
              </ContactScrollLink>
            </motion.div>

            <div className="grid w-full max-w-[42rem] grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-center lg:gap-3">
              {trustSeals.map((key, index) => (
                <motion.span
                  className={`text-mutedLight rounded-pill xl:text-12 inline-flex min-h-10 w-full items-center justify-center border border-white/10 bg-white/5 px-4 py-2 text-center text-[11px] leading-4 font-medium sm:w-auto lg:whitespace-nowrap ${index === 0 ? "col-span-2" : ""}`}
                  initial="hidden"
                  key={key}
                  transition={transitionWithDelay(0.5 + index * 0.05)}
                  variants={fadeInUp}
                  viewport={viewport}
                  whileInView="visible"
                >
                  {t(key)}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
