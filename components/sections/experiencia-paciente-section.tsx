"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ContactScrollLink } from "@/components/contact-scroll-link";
import {
  AiIcon,
  CalendarIcon,
  CameraIcon,
  ChatIcon,
  MedicineIcon,
  PatientIcon,
} from "./section-icons";
import { fadeInUp, transitionWithDelay, viewport } from "./motion-settings";

const experienceItems = [
  {
    title: "item1_titulo",
    text: "item1_texto",
    Icon: PatientIcon,
  },
  {
    title: "item2_titulo",
    text: "item2_texto",
    Icon: MedicineIcon,
  },
  {
    title: "item3_titulo",
    text: "item3_texto",
    Icon: CalendarIcon,
  },
  {
    title: "item4_titulo",
    text: "item4_texto",
    Icon: ChatIcon,
  },
  {
    title: "item5_titulo",
    text: "item5_texto",
    Icon: AiIcon,
  },
  {
    title: "item6_titulo",
    text: "item6_texto",
    Icon: CameraIcon,
  },
] as const;

export function ExperienciaPacienteSection() {
  const t = useTranslations("experienciaPaciente");

  return (
    <section
      className="bg-backgroundWarmLight scroll-mt-28 px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
      id="experiencia-paciente"
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

        <div className="mt-10 grid items-center gap-8 sm:mt-12 sm:gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            className="mx-auto w-full max-w-sm"
            initial="hidden"
            transition={transitionWithDelay(0.1)}
            variants={fadeInUp}
            viewport={viewport}
            whileInView="visible"
          >
            <motion.div
              animate={{
                y: -10,
              }}
              className="relative aspect-[778/1417] w-full"
              initial={{
                y: 8,
              }}
              transition={{
                duration: 5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
              }}
            >
              <Image
                alt={t("alt_app")}
                className="object-contain drop-shadow-[0_26px_48px_rgba(14,23,38,0.16)]"
                fill
                sizes="(min-width: 1024px) 28vw, 80vw"
                src="/images/mockups/experience-iphone-app-patient.png"
              />
            </motion.div>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2">
            {experienceItems.map(({ Icon, text, title }, index) => (
              <motion.article
                className="bg-backgroundCleanWhite border-primaryTeal/10 shadow-cardLeve rounded-lg border p-6"
                initial="hidden"
                key={title}
                transition={transitionWithDelay(0.12 + index * 0.06)}
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
                <h3 className="text-16 text-headingDark mt-5 leading-6 font-semibold">
                  {t(title)}
                </h3>
                <p className="text-14 text-bodyDark mt-3 leading-6">{t(text)}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          className="bg-backgroundCleanWhite border-goldAccent/25 shadow-cardLeve mx-auto mt-10 max-w-5xl rounded-lg border p-6 text-center sm:mt-12 sm:p-8"
          initial="hidden"
          transition={transitionWithDelay(0.24)}
          variants={fadeInUp}
          viewport={viewport}
          whileInView="visible"
        >
          <p className="font-heading text-24 text-headingDark sm:text-30 leading-tight font-bold">
            {t("frase_impacto")}
          </p>
        </motion.div>

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
          <ContactScrollLink className="bg-primaryTeal text-headingLight shadow-destaqueTeal hover:bg-goldAccent rounded-pill text-16 inline-flex min-h-14 w-full items-center justify-center px-8 text-center font-semibold transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] sm:w-auto">
            {t("cta")}
          </ContactScrollLink>
        </motion.div>
      </div>
    </section>
  );
}
