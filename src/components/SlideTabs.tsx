import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export const SlideTabsExample = () => {
  return (
    <div className=" bg-gray-800 dark:bg-gray-50  rounded-full">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const t = useTranslations('Header');
  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-gray-800 dark:bg-gray-50 p-1"
    >
      <Tab setPosition={setPosition}>
        <Link href="/">{t('home')}</Link>
      </Tab>
      <Tab setPosition={setPosition}>
        <Link href="/projects">{t('projects')}</Link>
      </Tab>
      <Tab setPosition={setPosition}>
        <Link href="/contact">{t('contact')}</Link>
      </Tab>
      <Tab setPosition={setPosition}>
        <Link href="/studio">{t('studio')}</Link>
      </Tab>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({
  children,
  setPosition,
}: {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const ref = useRef(null) as React.MutableRefObject<HTMLLIElement | null>;

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }: { position: any }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full dark:bg-gray-800 bg-white md:h-12"
    />
  );
};
