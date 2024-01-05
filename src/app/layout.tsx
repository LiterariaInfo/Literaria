import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../ui/globals.scss';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Literaria',
	description: 'Un site despre literatură'
};

export default ({ children }: { children: ReactNode }) => {
	return (
		<html lang="ro">
			<body className={inter.className}>{children}</body>
		</html>
	);
};
