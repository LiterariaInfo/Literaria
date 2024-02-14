import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../ui/globals.scss';
import { ReactNode } from 'react';
import NavBar from '@/components/navbar/NavBar';
import { getCategories } from '@/lib/api/article';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Literaria',
	description: 'Un site despre literatură'
};

export default async ({ children }: { children: ReactNode }) => {
	const categories = await getCategories();

	return (
		<html lang='ro'>
			<body className={inter.className}>
				<NavBar categories={categories} />
				<main
					id={'main'}
					className='h-[100svh] overflow-y-auto overflow-x-hidden'
				>
					{children}
				</main>
			</body>
		</html>
	);
};
