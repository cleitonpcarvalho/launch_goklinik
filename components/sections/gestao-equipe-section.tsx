"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ContactScrollLink } from "@/components/contact-scroll-link";
import { AccessIcon, HistoryIcon, TeamIcon, WorkflowIcon } from "./section-icons";
import { fadeInUp, transitionWithDelay, viewport } from "./motion-settings";

const teamItems = [
  {
    title: "item1_titulo",
    text: "item1_texto",
    Icon: AccessIcon,
  },
  {
    title: "item2_titulo",
    text: "item2_texto",
    Icon: TeamIcon,
  },
  {
    title: "item3_titulo",
    text: "item3_texto",
    Icon: HistoryIcon,
  },
  {
    title: "item4_titulo",
    text: "item4_texto",
    Icon: WorkflowIcon,
  },
] as const;

export function GestaoEquipeSection() {
  const t = useTranslations("gestaoEquipe");

  return (
    <section
      className="bg-backgroundSubtleGray scroll-mt-28 px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
      id="gestao-equipe"
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

        <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-2">
          {teamItems.map(({ Icon, text, title }, index) => (
            <motion.article
              className="border-primaryTeal/10 bg-backgroundCleanWhite shadow-cardLeve rounded-lg border p-6"
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
              <span className="bg-medicGreenLight text-medicGreen flex h-11 w-11 items-center justify-center rounded-md">
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
          className="mt-12"
          initial="hidden"
          transition={transitionWithDelay(0.18)}
          variants={fadeInUp}
          viewport={viewport}
          whileInView="visible"
        >
          <div className="border-primaryTeal/12 bg-backgroundCleanWhite shadow-cardLeve rounded-lg border p-3">
            <div className="relative aspect-[3/2] overflow-hidden rounded-md">
              <Image
                alt={t("alt_team_dashboard")}
                className="object-contain"
                fill
                sizes="(min-width: 1280px) 80rem, 92vw"
                src="/images/mockups/team-goklinik.png"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="border-primaryTeal/15 from-primaryTealLight to-medicGreenLight shadow-cardLeve mx-auto mt-12 max-w-4xl rounded-lg border bg-gradient-to-r p-8 text-center"
          initial="hidden"
          transition={transitionWithDelay(0.22)}
          variants={fadeInUp}
          viewport={viewport}
          whileInView="visible"
        >
          <p className="font-heading text-30 text-headingDark sm:text-36 leading-tight font-extrabold">
            {t("frase_impacto")}
          </p>
        </motion.div>

        <motion.div
          className="mt-10 flex justify-center"
          initial="hidden"
          transition={transitionWithDelay(0.3)}
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
