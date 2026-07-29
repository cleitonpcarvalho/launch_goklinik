"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { LeadForm } from "./lead-form";
import { CheckIcon } from "./section-icons";
import { fadeInUp, transitionWithDelay, viewport } from "./motion-settings";

const benefits = ["beneficio1", "beneficio2", "beneficio3"] as const;

export function ContatoSection() {
  const t = useTranslations("formulario");

  return (
    <section
      className="bg-backgroundWarmLight scroll-mt-28 px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
      id="contato"
    >
      <div className="mx-auto grid w-full max-w-7xl items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial="hidden"
          transition={transitionWithDelay()}
          variants={fadeInUp}
          viewport={viewport}
          whileInView="visible"
        >
          <h2 className="font-heading text-36 text-headingDark sm:text-48 leading-tight font-bold">
            {t("titulo")}
          </h2>
          <ul className="mt-8 space-y-4">
            {benefits.map((benefit, index) => (
              <motion.li
                className="text-16 text-bodyDark flex items-start gap-3 leading-7"
                initial="hidden"
                key={benefit}
                transition={transitionWithDelay(0.1 + index * 0.06)}
                variants={fadeInUp}
                viewport={viewport}
                whileInView="visible"
              >
                <span className="bg-goldAccentLight text-goldAccent rounded-circle mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <span>{t(benefit)}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial="hidden"
          transition={transitionWithDelay(0.16)}
          variants={fadeInUp}
          viewport={viewport}
          whileInView="visible"
        >
          <LeadForm />
        </motion.div>
      </div>
    </section>
  );
}
