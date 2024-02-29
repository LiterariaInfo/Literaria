import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../ui/globals.scss';
import { ReactNode } from 'react';
import NavBar from '@/components/navbar/NavBar';
import { getArticleNames, getCategories } from '@/lib/api/article';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Literaria',
  description: 'Un site despre literatură'
};

export default async ({ children }: { children: ReactNode }) => {
  const categories = await getCategories();
  const articles = await getArticleNames();

  return (
    <html lang='ro'>
      <body className={inter.className}>
        <NavBar categories={categories} articleNames={articles as {title: string, id: number, parentTitle: string | undefined}[]} />
        <main
          id={'main'}
          className='h-[100svh] overflow-y-auto overflow-x-hidden'
        >
          {children}
        </main>
        <Script
          async
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1931536699775420'
          crossOrigin='anonymous'
        ></Script>
        <Analytics />
      </body>
    </html>
  );
};
