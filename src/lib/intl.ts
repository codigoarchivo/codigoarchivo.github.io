import { Locale } from "../../i18n-config";

export async function getIntl(locale: Locale) {
  return {
    locale: locale,
    messages: (await import(`@/lang/${locale}.json`)).default,
  };
}

