import Image from 'next/image';
import myweb from '../../../public/images/MyWeb.png';
import favicon from '../../../public/favicon.ico';
import Link from 'next/link';

interface IMyWeb {
  locale: string;
  intl: string[];
}

export const MyWeb = (props: IMyWeb) => {
  return (
    <Link
      title={'Jackson Quintero'}
      className='lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 hover:ring-primary/5 bg-white dark:bg-secondary  dark:hover:ring-white/20 overflow-hidden duration-300 shadow-custom1 dark:shadow-thick rounded-3xl p-8'
      href={'https://www.codigoarchivo.com/'}
      locale={props.locale}
      target='_blank'
    >
      <div className='-mr-24'>
        <Image
          src={myweb}
          className='rounded-2xl object-cover ring-1 h-64 w-full lg:h-auto dark:ring-white/10 ring-primary/5 bg-tertiary shadow-custom1'
          alt={'codigoarchivo'}
          title={'codigoarchivo'}
          width='0'
          height='0'
          sizes='100vw'
        />
      </div>
      <div className='mt-8'>
        <div className='flex flex-wrap'>
          <div className='flex items-center ml-6 text-sm font-medium text-primary dark:text-white'>
            <Image
              src={favicon}
              className='flex-none w-5 h-5'
              alt={'codigoarchivo'}
              title={'codigoarchivo'}
              width='0'
              height='0'
              sizes='100vw'
            />
            <span className='ml-2.5'> Jackson Quintero</span>
          </div>
        </div>
        <p className='ext-xl tracking-tight font-medium text-primary dark:text-white md:text-4xl mt-6'>
          codigoarchivo
        </p>
        <p className='mt-4 text-sm text-zinc-500 dark:text-zinc-400 font-light'>
          <span>{props.intl[0]}</span>{' '}
          <strong className='text-primary'>
            {props.intl[1]} {props.intl[3]}
          </strong>{' '}
          <span>{props.intl[2]}</span>{' '}
        </p>
        <p className='mt-4 text-sm text-zinc-500 dark:text-zinc-400 font-light'>
          <span>{props.intl[4]}</span>{' '}
          <strong className='text-primary'>{props.intl[5]}</strong>{' '}
          <span>{props.intl[6]}</span>{' '}
        </p>
      </div>
    </Link>
  );
};