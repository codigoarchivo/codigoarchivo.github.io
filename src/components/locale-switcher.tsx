import Link from "next/link";
import { useRouter } from "next/router";
import { i18n, Locale } from "../../i18n-config";

export default function LocaleSwitcher() {
  const router = useRouter();
  const { locales } = i18n;
  const { locale: activeLocale } = router.query;

  const otherLocales = (locales || []).filter(
    (locale) => locale !== activeLocale
  );

  const select = (lo: Locale) => {
    router.push(`/${lo}`, `/${lo}`, { locale: lo });
  };

  return (
    <div>
      <ul>
        {otherLocales.map((locale) => {
          return (
            <li key={locale}>
              <div className="cursor-pointer" onClick={() => select(locale)}>{locale}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
