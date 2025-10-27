export const env = {
  EMAILJS_SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined,
  EMAILJS_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined,
  EMAILJS_PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined,
  CONTACT_ENDPOINT_URL: import.meta.env.VITE_CONTACT_ENDPOINT_URL as string | undefined,
};

export function isEmailConfigured() {
  return !!(env.EMAILJS_SERVICE_ID && env.EMAILJS_TEMPLATE_ID && env.EMAILJS_PUBLIC_KEY);
}

export function isContactEndpointConfigured() {
  return !!env.CONTACT_ENDPOINT_URL;
}
