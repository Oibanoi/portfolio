import Header from '@/components/Header';
import Provider from '@/providers';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import { Inter } from 'next/font/google';
import React from 'react';
import '@/styles/main.css';
import { NabSocial } from '@/components/home/NabSocial';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio',
  icons: '/assets/favicon.png',
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body className={clsx(inter.className)}>
        <Provider>
          <Header />
          <div className={clsx('flex')}>
            <NabSocial />
            <main>{children}</main>
          </div>

          {/*<Footer />*/}
        </Provider>
      </body>
    </html>
  );
}
