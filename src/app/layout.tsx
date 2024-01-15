import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../ui/globals.scss';
import { ReactNode } from 'react';
import NavBar from '@/components/navbar/NavBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Literaria',
	description: 'Un site despre literatură'
};

export default ({ children }: { children: ReactNode }) => {
	return (
		<html lang='ro'>
			<body className={inter.className}>
				<NavBar />
				<main
					id={'main'}
					className='h-screen overflow-y-auto overflow-x-hidden'
				>
					{children}
				</main>
			</body>
		</html>
	);
};
