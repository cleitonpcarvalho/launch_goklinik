export const leadEndpoint = "https://api.goklinik.com/leads";

export type LeadFormValues = {
  name: string;
  email: string;
  phone: string;
  clinicName: string;
};

export type LeadPayload = {
  name: string;
  email: string;
  phone: string;
  clinic_name: string | null;
  ref_code: string | null;
};

export type LeadFormErrors = Partial<
  Record<keyof Omit<LeadFormValues, "clinicName">, string>
>;

export type LeadFormErrorMessages = {
  nameRequired: string;
  emailInvalid: string;
  phoneRequired: string;
};

export function getRefCodeFromSearch(search: string) {
  const params = new URLSearchParams(search);
  const ref = params.get("ref")?.trim();

  return ref ? ref : null;
}

export function validateLeadForm(
  values: LeadFormValues,
  messages: LeadFormErrorMessages,
) {
  const errors: LeadFormErrors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!values.name.trim()) {
    errors.name = messages.nameRequired;
  }

  if (!emailPattern.test(values.email.trim())) {
    errors.email = messages.emailInvalid;
  }

  if (!values.phone.trim()) {
    errors.phone = messages.phoneRequired;
  }

  return errors;
}

export function hasLeadFormErrors(errors: LeadFormErrors) {
  return Object.keys(errors).length > 0;
}

export function buildLeadPayload(
  values: LeadFormValues,
  refCode: string | null,
): LeadPayload {
  const clinicName = values.clinicName.trim();

  return {
    name: values.name.trim(),
    email: values.email.trim(),
    phone: values.phone.trim(),
    clinic_name: clinicName ? clinicName : null,
    ref_code: refCode,
  };
}
