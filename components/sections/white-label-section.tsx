"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ContactScrollLink } from "@/components/contact-scroll-link";
import { CustomizeIcon, LogoIcon, PaletteIcon } from "./section-icons";
import { fadeInUp, transitionWithDelay, viewport } from "./motion-settings";

const whiteLabelItems = [
  {
    title: "item1_titulo",
    text: "item1_texto",
    Icon: PaletteIcon,
  },
  {
    title: "item2_titulo",
    text: "item2_texto",
    Icon: LogoIcon,
  },
  {
    title: "item3_titulo",
    text: "item3_texto",
    Icon: CustomizeIcon,
  },
] as const;

export function WhiteLabelSection() {
  const t = useTranslations("whiteLabel");

  return (
    <section
      className="bg-backgroundCleanWhite scroll-mt-28 px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
      id="white-label"
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
          <h2 className="font-heading text-36 text-headingDark sm:text-48 leading-tight font-bold">
            {t("titulo")}
          </h2>
          <p className="text-18 text-bodyDark mx-auto mt-5 max-w-3xl leading-8">
            {t("subtitulo")}
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-10 max-w-5xl sm:mt-12"
          initial="hidden"
          transition={transitionWithDelay(0.12)}
          variants={fadeInUp}
          viewport={viewport}
          whileInView="visible"
        >
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg">
            <Image
              alt={t("titulo")}
              className="object-contain"
              fill
              sizes="(min-width: 1024px) 80vw, 92vw"
              src="/images/mockups/app-settings-goklinik.png"
            />
          </div>
        </motion.div>

        <div className="mt-8 grid gap-5 sm:mt-10 lg:grid-cols-3">
          {whiteLabelItems.map(({ Icon, text, title }, index) => (
            <motion.article
              className="border-primaryTeal/10 bg-backgroundCleanWhite shadow-cardLeve rounded-lg border p-6"
              initial="hidden"
              key={title}
              transition={transitionWithDelay(0.14 + index * 0.06)}
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

        <motion.div
          className="mt-10 flex justify-center"
          initial="hidden"
          transition={transitionWithDelay(0.32)}
          variants={fadeInUp}
          viewport={viewport}
          whileHover={{
            y: -4,
          }}
          whileInView="visible"
        >
          <ContactScrollLink className="bg-primaryTeal text-headingLight shadow-destaqueTeal hover:bg-goldAccent rounded-pill text-16 inline-flex min-h-14 items-center justify-center px-8 text-center font-semibold transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]">
            {t("cta")}
          </ContactScrollLink>
        </motion.div>
      </div>
    </section>
  );
}
