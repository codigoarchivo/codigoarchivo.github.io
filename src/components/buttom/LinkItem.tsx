'use client';

import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

interface Props {
  link: string;
  locale: string;
  className?: string;
  title: string;
  textOrSvg?: JSX.Element | string;
  svgLeft?: JSX.Element;
  svgRight?: JSX.Element;
}

export const LinkItem: FC<Props> = (props) => {

  const [propsData, setPropsData] = useState<Props>({
    link: '',
    className: '',
    locale: 'en',
    textOrSvg: '',
    title: '',
    svgLeft: undefined,
    svgRight: undefined,
  });

  useEffect(() => {
    setPropsData({ ...props });
  }, [props]);

  return (
    <Link
      className={propsData.className}
      href={
        propsData.locale === 'en'
          ? propsData.link
          : `/${propsData.locale}${propsData.link}`
      }
      title={`${propsData.title}`}
    >
      {propsData.svgLeft} {propsData.textOrSvg} {propsData.svgRight}
    </Link>
  );
};
