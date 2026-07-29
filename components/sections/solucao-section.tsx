"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ContactScrollLink } from "@/components/contact-scroll-link";
import {
  ChartIcon,
  ChatIcon,
  PatientIcon,
  ProtocolIcon,
  PulseIcon,
} from "./section-icons";
import { fadeInUp, transitionWithDelay, viewport } from "./motion-settings";

const features = [
  {
    title: "feature1_titulo",
    text: "feature1_texto",
    Icon: PatientIcon,
  },
  {
    title: "feature2_titulo",
    text: "feature2_texto",
    Icon: ChatIcon,
  },
  {
    title: "feature3_titulo",
    text: "feature3_texto",
    Icon: ProtocolIcon,
  },
  {
    title: "feature4_titulo",
    text: "feature4_texto",
    Icon: PulseIcon,
  },
  {
    title: "feature5_titulo",
    text: "feature5_texto",
    Icon: ChartIcon,
  },
] as const;

const appVisualBlocks = [
  {
    label: "card_app_paciente",
    src: "/images/mockups/solution-appointment-app-patient.png",
    alt: "alt_app_paciente",
  },
  {
    label: "card_app_medico",
    src: "/images/mockups/solution-appointment-app-medic.png",
    alt: "alt_app_medico",
  },
] as const;

const dashboardVisualBlock = {
  label: "card_dashboard",
  src: "/images/mockups/solution-clinic-dashboard-goklinik.png",
  alt: "alt_dashboard",
} as const;

export function SolucaoSection() {
  const t = useTranslations("solucao");

  return (
    <section
      className="bg-backgroundCleanWhite scroll-mt-28 px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
      id="solucao"
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

        <div className="scroll-mt-28" id="funcionalidades" />
        <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-2 xl:grid-cols-5">
          {features.map(({ Icon, text, title }, index) => (
            <motion.article
              className="border-primaryTeal/10 bg-backgroundCleanWhite shadow-cardLeve hover:shadow-destaqueTeal rounded-lg border p-6 transition-shadow duration-300"
              initial="hidden"
              key={title}
              transition={transitionWithDelay(0.1 + index * 0.06)}
              variants={fadeInUp}
              viewport={viewport}
              whileHover={{
                scale: 1.02,
                y: -6,
              }}
              whileInView="visible"
            >
              <span className="bg-primaryTealLight text-primaryTeal flex h-12 w-12 items-center justify-center rounded-md">
                <Icon />
              </span>
              <h3 className="text-16 text-headingDark mt-5 leading-6 font-semibold">
                {t(title)}
              </h3>
              <p className="text-14 text-bodyDark mt-3 leading-6">{t(text)}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 grid items-end gap-6 sm:mt-14 md:grid-cols-2 lg:grid-cols-[0.62fr_0.62fr_1.76fr]">
          {appVisualBlocks.map((block, index) => (
            <motion.div
              className="relative mx-auto h-[31rem] w-full max-w-64 overflow-visible sm:h-[35rem] md:h-[38rem] lg:h-[26rem] lg:max-w-none xl:h-[30rem]"
              initial="hidden"
              key={block.label}
              transition={transitionWithDelay(0.16 + index * 0.08)}
              variants={fadeInUp}
              viewport={viewport}
              whileInView="visible"
            >
              <motion.div
                animate={{
                  y: -9,
                }}
                className="relative h-full w-full"
                initial={{
                  y: 7,
                }}
                transition={{
                  delay: index * 0.35,
                  duration: 5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              >
                <Image
                  alt={t(block.alt)}
                  className="object-contain drop-shadow-[0_24px_42px_rgba(14,23,38,0.18)]"
                  fill
                  sizes="(min-width: 1280px) 16vw, (min-width: 1024px) 17vw, (min-width: 768px) 36vw, 70vw"
                  src={block.src}
                />
              </motion.div>
            </motion.div>
          ))}
          <motion.div
            className="relative h-[20rem] overflow-visible md:col-span-2 md:h-[30rem] lg:col-span-1 lg:h-[26rem] xl:h-[30rem]"
            initial="hidden"
            transition={transitionWithDelay(0.32)}
            variants={fadeInUp}
            viewport={viewport}
            whileInView="visible"
          >
            <motion.div
              animate={{
                y: -10,
              }}
              className="relative h-full w-full"
              initial={{
                y: 8,
              }}
              transition={{
                delay: 0.7,
                duration: 5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
              }}
            >
              <Image
                alt={t(dashboardVisualBlock.alt)}
                className="object-contain object-center drop-shadow-[0_28px_55px_rgba(14,23,38,0.2)]"
                fill
                sizes="(min-width: 1024px) 48vw, 92vw"
                src={dashboardVisualBlock.src}
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="mt-10 flex justify-center sm:mt-12"
          initial="hidden"
          transition={transitionWithDelay(0.26)}
          variants={fadeInUp}
          viewport={viewport}
          whileInView="visible"
          whileHover={{
            y: -4,
          }}
        >
          <ContactScrollLink className="bg-primaryTeal text-headingLight shadow-destaqueTeal hover:bg-goldAccent rounded-pill text-16 inline-flex min-h-14 w-full items-center justify-center px-8 text-center font-semibold transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] sm:w-auto">
            {t("cta")}
          </ContactScrollLink>
        </motion.div>
      </div>
    </section>
  );
}
