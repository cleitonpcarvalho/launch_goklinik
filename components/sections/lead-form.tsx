"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FormEvent, useEffect, useId, useState } from "react";
import { AlertIcon, CheckIcon } from "./section-icons";
import {
  buildLeadPayload,
  getRefCodeFromSearch,
  hasLeadFormErrors,
  leadEndpoint,
  LeadFormErrors,
  LeadFormValues,
  validateLeadForm,
} from "./lead-form-utils";

const initialValues: LeadFormValues = {
  name: "",
  email: "",
  phone: "",
  clinicName: "",
};

const fieldBaseClass =
  "border-primaryTeal/15 bg-backgroundCleanWhite text-16 text-headingDark focus:border-primaryTeal focus:ring-primaryTeal/20 mt-2 h-14 w-full rounded-md border px-4 outline-none transition-all duration-300 focus:ring-4";

type FieldName = keyof LeadFormValues;

type FormStatus = "idle" | "success" | "error";

type FormFieldProps = {
  error?: string;
  id: string;
  label: string;
  name: FieldName;
  onChange: (name: FieldName, value: string) => void;
  placeholder: string;
  type?: "email" | "tel" | "text";
  value: string;
};

function FormField({
  error,
  id,
  label,
  name,
  onChange,
  placeholder,
  type = "text",
  value,
}: FormFieldProps) {
  const errorId = `${id}-error`;

  return (
    <div>
      <label className="text-14 text-headingDark font-semibold" htmlFor={id}>
        {label}
      </label>
      <input
        aria-describedby={error ? errorId : undefined}
        aria-invalid={Boolean(error)}
        autoComplete={
          name === "email"
            ? "email"
            : name === "phone"
              ? "tel"
              : name === "clinicName"
                ? "organization"
                : "name"
        }
        className={`${fieldBaseClass} ${error ? "border-goldAccent ring-goldAccent/20 ring-4" : ""}`}
        id={id}
        name={name}
        onChange={(event) => onChange(name, event.target.value)}
        placeholder={placeholder}
        type={type}
        value={value}
      />
      <AnimatePresence>
        {error ? (
          <motion.p
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="text-12 text-goldAccent mt-2 font-semibold"
            exit={{
              opacity: 0,
              y: -4,
            }}
            id={errorId}
            initial={{
              opacity: 0,
              y: -4,
            }}
            role="alert"
          >
            {error}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function LeadForm() {
  const t = useTranslations("formulario");
  const formId = useId();
  const [values, setValues] = useState<LeadFormValues>(initialValues);
  const [errors, setErrors] = useState<LeadFormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [refCode, setRefCode] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setRefCode(getRefCodeFromSearch(window.location.search));
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  function handleChange(name: FieldName, value: string) {
    setValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));
    setErrors((currentErrors) => {
      if (!currentErrors[name as keyof LeadFormErrors]) {
        return currentErrors;
      }

      const nextErrors = {
        ...currentErrors,
      };
      delete nextErrors[name as keyof LeadFormErrors];
      return nextErrors;
    });
    setStatus("idle");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validateLeadForm(values, {
      nameRequired: t("erro_nome_obrigatorio"),
      emailInvalid: t("erro_email_invalido"),
      phoneRequired: t("erro_telefone_obrigatorio"),
    });

    setErrors(nextErrors);

    if (hasLeadFormErrors(nextErrors)) {
      setStatus("idle");
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch(leadEndpoint, {
        body: JSON.stringify(buildLeadPayload(values, refCode)),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Lead request failed");
      }

      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="border-primaryTeal/10 bg-backgroundCleanWhite shadow-destaqueTeal rounded-lg border p-6 sm:p-8">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            animate={{
              opacity: 1,
              scale: 1,
            }}
            className="bg-medicGreenLight border-medicGreen/25 rounded-lg border p-7 text-center"
            exit={{
              opacity: 0,
              scale: 0.98,
            }}
            initial={{
              opacity: 0,
              scale: 0.98,
            }}
            key="success"
            role="status"
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="bg-medicGreen text-headingLight rounded-circle mx-auto flex h-12 w-12 items-center justify-center">
              <CheckIcon />
            </span>
            <p className="text-16 text-headingDark mt-5 leading-7 font-semibold">
              {t("mensagem_sucesso")}
            </p>
          </motion.div>
        ) : (
          <motion.form
            animate={{
              opacity: 1,
              scale: 1,
            }}
            className="space-y-5"
            exit={{
              opacity: 0,
              scale: 0.98,
            }}
            initial={{
              opacity: 0,
              scale: 0.98,
            }}
            key="form"
            noValidate
            onSubmit={handleSubmit}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <input name="ref_code" readOnly type="hidden" value={refCode ?? ""} />

            <AnimatePresence>
              {status === "error" ? (
                <motion.div
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  className="bg-goldAccentLight border-goldAccent/30 text-headingDark flex items-start gap-3 rounded-lg border p-4"
                  exit={{
                    opacity: 0,
                    scale: 0.98,
                  }}
                  initial={{
                    opacity: 0,
                    scale: 0.98,
                  }}
                  role="alert"
                  transition={{
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <span className="text-goldAccent mt-0.5 shrink-0">
                    <AlertIcon />
                  </span>
                  <p className="text-14 leading-6 font-semibold">{t("mensagem_erro")}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>

            <FormField
              error={errors.name}
              id={`${formId}-name`}
              label={t("campo_nome_label")}
              name="name"
              onChange={handleChange}
              placeholder={t("campo_nome_placeholder")}
              value={values.name}
            />
            <FormField
              error={errors.email}
              id={`${formId}-email`}
              label={t("campo_email_label")}
              name="email"
              onChange={handleChange}
              placeholder={t("campo_email_placeholder")}
              type="email"
              value={values.email}
            />
            <FormField
              error={errors.phone}
              id={`${formId}-phone`}
              label={t("campo_telefone_label")}
              name="phone"
              onChange={handleChange}
              placeholder={t("campo_telefone_placeholder")}
              type="tel"
              value={values.phone}
            />
            <FormField
              id={`${formId}-clinic`}
              label={t("campo_clinica_label")}
              name="clinicName"
              onChange={handleChange}
              placeholder={t("campo_clinica_placeholder")}
              value={values.clinicName}
            />

            <button
              className="bg-primaryTeal text-headingLight shadow-destaqueTeal hover:bg-goldAccent disabled:bg-mutedDark rounded-pill text-16 inline-flex min-h-14 w-full items-center justify-center px-6 text-center font-semibold transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] disabled:cursor-not-allowed disabled:opacity-70"
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? t("botao_enviando") : t("botao_enviar")}
            </button>

            <p className="text-12 text-mutedDark text-center leading-5">
              {t("aviso_privacidade")}
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
