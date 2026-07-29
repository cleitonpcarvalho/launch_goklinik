"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ContactScrollLink } from "@/components/contact-scroll-link";
import { CheckIcon } from "./section-icons";
import { fadeInUp, transitionWithDelay, viewport } from "./motion-settings";

const finalItems = ["item1", "item2", "item3"] as const;
const finalSeals = ["selo1", "selo2", "selo3"] as const;

export function CtaFinalSection() {
  const t = useTranslations("ctaFinal");

  return (
    <section
      className="bg-backgroundDark text-headingLight relative isolate overflow-hidden px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
      id="cta-final"
    >
      <Image
        alt={t("alt_istanbul")}
        className="pointer-events-none object-cover opacity-[0.45]"
        fill
        sizes="100vw"
        src="/images/fotos/istanbul-skyline-bosphorus.jpg"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(14,23,38,0.9),rgba(14,23,38,0.76),rgba(26,107,124,0.62))]" />

      <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
        <motion.div
          initial="hidden"
          transition={transitionWithDelay()}
          variants={fadeInUp}
          viewport={viewport}
          whileInView="visible"
        >
          <h2 className="font-heading text-36 text-headingLight sm:text-48 leading-tight font-extrabold">
            {t("titulo")}
          </h2>
          <p className="text-18 text-bodyLight mx-auto mt-5 max-w-3xl leading-8">
            {t("subtitulo")}
          </p>
        </motion.div>

        <ul className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-3">
          {finalItems.map((item, index) => (
            <motion.li
              className="bg-backgroundDarkElevated/80 border-primaryTeal/20 text-bodyLight rounded-lg border p-5 text-left"
              initial="hidden"
              key={item}
              transition={transitionWithDelay(0.1 + index * 0.06)}
              variants={fadeInUp}
              viewport={viewport}
              whileHover={{
                scale: 1.02,
                y: -5,
              }}
              whileInView="visible"
            >
              <span className="bg-goldAccentLight text-goldAccent rounded-circle flex h-8 w-8 items-center justify-center">
                <CheckIcon className="h-4 w-4" />
              </span>
              <p className="text-16 mt-4 leading-6 font-semibold">{t(item)}</p>
            </motion.li>
          ))}
        </ul>

        <motion.div
          className="mt-10"
          initial="hidden"
          transition={transitionWithDelay(0.26)}
          variants={fadeInUp}
          viewport={viewport}
          whileHover={{
            y: -4,
          }}
          whileInView="visible"
        >
          <ContactScrollLink className="bg-goldAccent text-headingDark shadow-glowDourado hover:bg-primaryTeal hover:text-headingLight rounded-pill text-16 inline-flex min-h-14 w-full items-center justify-center px-8 text-center font-bold transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] sm:w-auto">
            {t("cta")}
          </ContactScrollLink>
        </motion.div>

        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
          {finalSeals.map((seal, index) => (
            <motion.span
              className="text-mutedLight rounded-pill text-12 inline-flex items-center justify-center border border-white/10 bg-white/5 px-4 py-2 text-center font-medium"
              initial="hidden"
              key={seal}
              transition={transitionWithDelay(0.3 + index * 0.05)}
              variants={fadeInUp}
              viewport={viewport}
              whileInView="visible"
            >
              {t(seal)}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
