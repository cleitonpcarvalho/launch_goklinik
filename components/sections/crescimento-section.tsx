"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ContactScrollLink } from "@/components/contact-scroll-link";
import {
  BenefitIcon,
  ChartIcon,
  LinkIcon,
  ProtocolIcon,
  ShareIcon,
} from "./section-icons";
import { fadeInUp, transitionWithDelay, viewport } from "./motion-settings";

const timelineSteps = [
  {
    title: "passo1_titulo",
    text: "passo1_texto",
    Icon: LinkIcon,
  },
  {
    title: "passo2_titulo",
    text: "passo2_texto",
    Icon: ShareIcon,
  },
  {
    title: "passo3_titulo",
    text: "passo3_texto",
    Icon: ProtocolIcon,
  },
  {
    title: "passo4_titulo",
    text: "passo4_texto",
    Icon: BenefitIcon,
  },
  {
    title: "passo5_titulo",
    text: "passo5_texto",
    Icon: ChartIcon,
  },
] as const;

export function CrescimentoSection() {
  const t = useTranslations("crescimento");

  return (
    <section
      className="bg-backgroundSubtleGray scroll-mt-28 px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
      id="crescimento"
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

        <div className="mt-10 grid auto-rows-fr items-stretch gap-6 sm:mt-14 lg:grid-cols-5 lg:gap-4">
          {timelineSteps.map(({ Icon, text, title }, index) => {
            const hasConnector = index < timelineSteps.length - 1;

            return (
              <motion.article
                className="relative grid h-full grid-cols-[3rem_minmax(0,1fr)] gap-4 lg:flex lg:flex-col lg:gap-0"
                initial="hidden"
                key={title}
                transition={transitionWithDelay(0.1 + index * 0.08)}
                variants={fadeInUp}
                viewport={viewport}
                whileInView="visible"
              >
                {hasConnector ? (
                  <>
                    <span className="bg-primaryTeal/15 absolute top-5 bottom-[-1.5rem] left-6 z-0 block w-px lg:hidden" />
                    <motion.span
                      className="bg-goldAccent/70 absolute top-5 bottom-[-1.5rem] left-6 z-0 block w-px origin-top lg:hidden"
                      initial={{
                        scaleY: 0,
                      }}
                      transition={transitionWithDelay(0.24 + index * 0.1)}
                      viewport={viewport}
                      whileInView={{
                        scaleY: 1,
                      }}
                    />
                    <span className="bg-primaryTeal/15 absolute top-5 left-1/2 z-0 hidden h-px w-[calc(100%+1rem)] lg:block" />
                    <motion.span
                      className="bg-goldAccent/70 absolute top-5 left-1/2 z-0 hidden h-px w-[calc(100%+1rem)] origin-left lg:block"
                      initial={{
                        scaleX: 0,
                      }}
                      transition={transitionWithDelay(0.24 + index * 0.1)}
                      viewport={viewport}
                      whileInView={{
                        scaleX: 1,
                      }}
                    />
                  </>
                ) : null}

                <div className="relative z-20 flex items-start justify-center lg:mb-5">
                  <span className="border-primaryTeal/25 bg-backgroundCleanWhite text-primaryTeal shadow-cardLeve ring-backgroundSubtleGray rounded-circle font-heading text-14 flex h-10 w-10 shrink-0 items-center justify-center border font-extrabold ring-4">
                    {index + 1}
                  </span>
                </div>

                <motion.div
                  className="bg-backgroundCleanWhite border-primaryTeal/10 shadow-cardLeve relative z-10 flex h-full min-h-[13rem] flex-col rounded-lg border p-6 lg:flex-1 lg:items-start lg:text-left xl:min-h-[14rem]"
                  whileHover={{
                    scale: 1.02,
                    y: -5,
                  }}
                >
                  <span className="bg-primaryTealLight text-primaryTeal flex h-11 w-11 shrink-0 items-center justify-center rounded-md">
                    <Icon />
                  </span>
                  <h3 className="text-16 text-headingDark mt-5 leading-6 font-semibold">
                    {t(title)}
                  </h3>
                  <p className="text-14 text-bodyDark mt-3 leading-6">{t(text)}</p>
                </motion.div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="mx-auto mt-12 max-w-5xl"
          initial="hidden"
          transition={transitionWithDelay(0.2)}
          variants={fadeInUp}
          viewport={viewport}
          whileInView="visible"
        >
          <div className="relative aspect-[3/2] w-full">
            <Image
              alt={t("alt_referrals")}
              className="object-contain"
              fill
              sizes="(min-width: 1024px) 80vw, 92vw"
              src="/images/mockups/referrals-goklinik-dashboard.png"
            />
          </div>
        </motion.div>

        <motion.div
          className="from-goldAccentLight to-primaryTealLight border-goldAccent/30 shadow-cardLeve mx-auto mt-10 max-w-4xl rounded-lg border bg-gradient-to-r p-6 text-center sm:mt-12 sm:p-8"
          initial="hidden"
          transition={transitionWithDelay(0.24)}
          variants={fadeInUp}
          viewport={viewport}
          whileInView="visible"
        >
          <p className="font-heading text-24 text-headingDark sm:text-30 leading-tight font-bold">
            {t("destaque")}
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
