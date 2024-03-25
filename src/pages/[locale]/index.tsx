import Image from "next/image";
import { Inter } from "next/font/google";
import { GetStaticProps } from "next";
import { lang } from "@/interface/lang";
import { getIntl } from "@/lib/intl";
import { JacksonQuintero } from "@/components/ui/JacksonQuintero";
import { FindMeOn } from "@/components/ui/FindMeOn";
import { Download } from "@/components/ui/Download";
import { MyWeb } from "@/components/ui/MyWeb";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ intl }: any) {
  return (
    <main>
      <div className="p-4">
        <div className="grid grid-cols-1 gap-4 list-none lg:grid-cols-3 lg:grid-rows-3 xl:grid-cols-4 xl:grid-rows-4">
          <JacksonQuintero
            locale={intl.locale}
            intl={[
              intl.messages["page.home.title1"],
              intl.messages["page.home.title2"],
              intl.messages["page.home.text1"],
            ]}
          />
          <div>
            <FindMeOn intl={[intl.messages["page.home.title3"]]} />
          </div>
          <a
            href="https://monomod.studio/"
            className="ring-1 lg:row-span-2 flex flex-col justify-between group hover:ring-primary/10 dark:hover:ring-white/20 duration-300 h-full dark:ring-white/10 ring-primary/5 lg:row-start-2 md:grid-cols-2 md:grid lg:gap-0 md:items-center md:gap-12 lg:grid-cols-none lg:col-start-2 lg:col-span-2 rounded-3xl p-8 bg-white dark:bg-secondary shadow-custom1 dark:shadow-thick"
          >
            <div>
              <p className="ext-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl">
                Monomod
              </p>
              <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
                Design development subscriptions for startups.
                <br />
                <br />
                Monomod streamlines the design process with a fixed monthly rate
                and limitless design requests. Say goodbye to phone calls and
                extensive contracts; reach out to Monomod directly at any time.
                Embrace flexibility, pause or terminate your subscription
                whenever you need.
              </p>
            </div>
            <div className="mt-8">
              <Image
                src="/images/jackson.png"
                className="rounded-2xl group-hover:ring-white/20 duration-300 invert dark:invert-0 aspect-[4/4] bg-primary/5 dark:bg-primary ring-1 ring-white/10  object-cover"
                alt={"user name"}
                title={"Jackson Quintero"}
                width="0"
                height="0"
                sizes="100vw"
              />
            </div>
          </a>
          <Download
            locale={intl.locale}
            intl={[
              intl.messages["page.home.title4"],
              intl.messages["page.home.text10"],
              intl.messages["page.home.title5"],
            ]}
          />
          <a
            href="https://www.figma.com/@mikeandreuzza"
            className="ring-1 lg:row-start-3 items-center h-full flex p-8 flex-col justify-center hover:ring-primary/5 dark:hover:ring-white/20 dark:ring-white/10 ring-primary/5 relative rounded-3xl overflow-hidden bg-white dark:bg-secondary shadow-custom1 dark:shadow-thick"
          >
            <svg
              className="w-24 h-24 lg:w-48 xl:h-64 xl:w-64 lg:h-48"
              viewBox="0 0 90 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_136)">
                <path
                  d="M45 45.5C45 42.9804 46.0009 40.5641 47.7825 38.7825C49.5641 37.0009 51.9804 36 54.5 36C57.0196 36 59.4359 37.0009 61.2175 38.7825C62.9991 40.5641 64 42.9804 64 45.5C64 48.0196 62.9991 50.4359 61.2175 52.2175C59.4359 53.9991 57.0196 55 54.5 55C51.9804 55 49.5641 53.9991 47.7825 52.2175C46.0009 50.4359 45 48.0196 45 45.5Z"
                  fill="#1ABCFE"
                ></path>
                <path
                  d="M26 64.5C26 61.9804 27.0009 59.5641 28.7825 57.7825C30.5641 56.0009 32.9804 55 35.5 55H45V64.5C45 67.0196 43.9991 69.4359 42.2175 71.2175C40.4359 72.9991 38.0196 74 35.5 74C32.9804 74 30.5641 72.9991 28.7825 71.2175C27.0009 69.4359 26 67.0196 26 64.5V64.5Z"
                  fill="#0ACF83"
                ></path>
                <path
                  d="M45 17V36H54.5C57.0196 36 59.4359 34.9991 61.2175 33.2175C62.9991 31.4359 64 29.0196 64 26.5C64 23.9804 62.9991 21.5641 61.2175 19.7825C59.4359 18.0009 57.0196 17 54.5 17H45Z"
                  fill="#FF7262"
                ></path>
                <path
                  d="M26 26.5C26 29.0196 27.0009 31.4359 28.7825 33.2175C30.5641 34.9991 32.9804 36 35.5 36H45V17H35.5C32.9804 17 30.5641 18.0009 28.7825 19.7825C27.0009 21.5641 26 23.9804 26 26.5V26.5Z"
                  fill="#F24E1E"
                ></path>
                <path
                  d="M26 45.5C26 48.0196 27.0009 50.4359 28.7825 52.2175C30.5641 53.9991 32.9804 55 35.5 55H45V36H35.5C32.9804 36 30.5641 37.0009 28.7825 38.7825C27.0009 40.5641 26 42.9804 26 45.5V45.5Z"
                  fill="#A259FF"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_1_136">
                  <rect
                    width="38"
                    height="57"
                    fill="white"
                    transform="translate(26 17)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
            <p className="text-xl  text-primary dark:text-white lg:text-2xl mt-6">
              Figma Community
            </p>
          </a>
          <MyWeb
            locale={intl.locale}
            intl={[
              intl.messages["page.home.text2"],
              intl.messages["page.home.text3"],
              intl.messages["page.home.text4"],
              intl.messages["page.home.text5"],
              intl.messages["page.home.text6"],
              intl.messages["page.home.text7"],
              intl.messages["page.home.text8"],
            ]}
          />
          <div className="ring-1 dark:ring-white/10 ring-primary/5 flex flex-col p-8 h-full justify-center items-center rounded-3xl overflow-hidden relative lg:col-span-2 lg:row-start-4 bg-white dark:bg-secondary shadow-custom1 dark:shadow-thick">
            <div className="relative p-8 text-center w-full">
              <p className="text-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl">
                Subscribe <span className="lg:block">to my newsletter</span>
              </p>
              <form className="mt-6 sm:flex w-full lg:max-w-sm mx-auto">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  className="block w-full h-12 px-4 py-2 text-sm text-zinc-500 bg-zinc-100 dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter your email"
                />
                <div className="mt-4 sm:ml-2 sm:mt-0 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="text-sm py-2 w-full px-4 h-12 font-semibold focus:ring-2 rounded-lg bg-primary dark:bg-white dark:text-primary dark:hover:text-white hover:text-primary dark:hover:bg-white/5 hover:bg-primary/10 text-white flex duration-200 focus:ring-offset-2 focus:ring-inline-flex items-center justify-between"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="ring-1 dark:ring-white/10 ring-primary/5 shadow-custom1 dark:shadow-thick rounded-3xl p-8 lg:row-start-4 h-full flex flex-col justify-between bg-white dark:bg-secondary">
            <p className="text-xl tracking-tight font-medium text-primary dark:text-white md:text-5xl">
              Testimonials
            </p>
            <div className="md:grid md:grid-cols-2 gap-6 lg:grid-cols-1">
              <div className="mt-4">
                <p className="text-sm text-pink-500 dark:text-pink-400">
                  Big fan of your themes. Theyre well-organized, look clean, and
                  are fast.
                </p>
                <p className="text-xs mt-2 text-zinc-500">
                  <span className="block text-xs">Kevin Focke</span>
                  <span className="block text-xs"> Developer</span>
                </p>
              </div>
              <div className="mt-4">
                <p className="text-sm text-orange-500 dark:text-orange-300">
                  Amazing resource using @astrodotbuild and @tailwindcss! I got
                  it a week ago and have found the contents really useful. 5/5
                </p>
                <p className="text-xs mt-2 text-zinc-500">
                  <span className="block text-xs">Alonso</span>
                  <span className="block text-xs"> Entrepreneur</span>
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 xl:col-span-1 h-full flex flex-col justify-between lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 bg-white dark:bg-secondary shadow-custom1 dark:shadow-thick rounded-3xl p-8">
            <p className="text-xl tracking-tight font-medium text-primary dark:text-white md:text-3xl">
              As a digital designer, my expertise lies in crafting distinctive
              visual identities for digital products.
              <br />
              <br />I hold the belief that an engaging design begins with shared
              values, transparent communication, and a genuine respect for the
              audience.
            </p>
            <p className="text-primary dark:text-white mt-4">
              Michael Andreuzza
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

const getI18nPaths = () => [
  { params: { locale: "en" } },
  { params: { locale: "es" } },
];

export const getStaticPaths = () => ({
  fallback: false,
  paths: getI18nPaths(),
});

export const getStaticProps: GetStaticProps = async (ctx) => {
  let locale = (ctx.params as { locale: lang }).locale;
  const intl = await getIntl(locale);
  return {
    props: {
      intl: JSON.parse(JSON.stringify(intl)),
    },
  };
};
