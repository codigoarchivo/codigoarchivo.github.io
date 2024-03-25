import Link from "next/link";
import LocaleSwitcher from "@/components/locale-switcher";
import { lang } from "@/interface/lang";

interface IJacksonQuintero {
  locale: lang;
  intl: string[];
}
export const JacksonQuintero = (props: IJacksonQuintero) => {
  return (
    <div className="lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 bg-white dark:bg-secondary shadow-custom1 dark:shadow-thick rounded-3xl p-8">
      <div className="relative grid items-center gap-x-4">
        <div className="text-sm leading-6">
          <div className="flex justify-between font-semibold text-primary dark:text-white mb-2">
            <Link
              title={"Jackson Quintero"}
              href={"https://www.codigoarchivo.com/"}
              locale={props.locale}
              target="_blank"
            >
              Jackson Quintero
            </Link>
            <LocaleSwitcher />
          </div>
          <p className="text-gray-500 text-xs dark:text-zinc-400">
            {props.intl[0]}
          </p>
        </div>
      </div>
      <p className="text-3xl mt-6 font-medium lg:text-4xl tracking-tight text-primary dark:text-white">
        {props.intl[1]}
      </p>
      <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 font-light lg:text-xl">
        {props.intl[2]}
      </p>
    </div>
  );
};
