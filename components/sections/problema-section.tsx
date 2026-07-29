"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ContactScrollLink } from "@/components/contact-scroll-link";
import { AlertIcon } from "./section-icons";
import { fadeInUp, transitionWithDelay, viewport } from "./motion-settings";

const problemItems = ["item1", "item2", "item3", "item4"] as const;

export function ProblemaSection() {
  const t = useTranslations("problema");

  return (
    <section
      className="bg-backgroundWarmLight scroll-mt-28 px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
      id="problema"
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          className="grid items-center gap-10 lg:grid-cols-[0.82fr_0.58fr]"
          initial="hidden"
          transition={transitionWithDelay()}
          variants={fadeInUp}
          viewport={viewport}
          whileInView="visible"
        >
          <div className="max-w-3xl">
            <h2 className="font-heading text-36 text-headingDark sm:text-48 leading-tight font-bold">
              {t("titulo")}
            </h2>
            <p className="text-18 text-bodyDark mt-5 leading-8">{t("intro")}</p>
          </div>

          <div className="relative mx-auto aspect-[1086/1448] w-full max-w-xs sm:max-w-sm lg:max-w-md">
            <Image
              alt={t("alt_clinic")}
              className="object-contain"
              fill
              sizes="(min-width: 1024px) 30vw, 82vw"
              src="/images/fotos/paciente-goklinik.png"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 0%, black 72%, transparent 100%)",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "100% 100%",
                maskImage:
                  "linear-gradient(to bottom, black 0%, black 72%, transparent 100%)",
                maskRepeat: "no-repeat",
                maskSize: "100% 100%",
              }}
            />
          </div>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {problemItems.map((key, index) => (
            <motion.article
              className="border-primaryTeal/10 bg-backgroundCleanWhite shadow-cardLeve rounded-lg border p-6"
              initial="hidden"
              key={key}
              transition={transitionWithDelay(0.1 + index * 0.06)}
              variants={fadeInUp}
              viewport={viewport}
              whileInView="visible"
            >
              <span className="bg-goldAccentLight text-goldAccent flex h-11 w-11 items-center justify-center rounded-md">
                <AlertIcon />
              </span>
              <p className="text-16 text-headingDark mt-5 leading-7 font-semibold">
                {t(key)}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="bg-backgroundCleanWhite border-goldAccent/30 shadow-cardLeve mt-10 rounded-lg border p-7"
          initial="hidden"
          transition={transitionWithDelay(0.24)}
          variants={fadeInUp}
          viewport={viewport}
          whileInView="visible"
        >
          <h3 className="font-heading text-30 text-headingDark font-bold">
            {t("resultado_titulo")}
          </h3>
          <p className="text-16 text-bodyDark mt-3 max-w-4xl leading-7">
            {t("resultado_texto")}
          </p>
        </motion.div>

        <motion.div
          className="mt-8 flex justify-center sm:block"
          initial="hidden"
          transition={transitionWithDelay(0.3)}
          variants={fadeInUp}
          viewport={viewport}
          whileInView="visible"
        >
          <ContactScrollLink className="border-primaryTeal text-primaryTeal hover:bg-primaryTeal hover:text-headingLight rounded-pill text-14 inline-flex min-h-12 w-full max-w-xs items-center justify-center border px-7 text-center font-semibold transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] sm:w-auto sm:max-w-none">
            {t("cta")}
          </ContactScrollLink>
        </motion.div>
      </div>
    </section>
  );
}
