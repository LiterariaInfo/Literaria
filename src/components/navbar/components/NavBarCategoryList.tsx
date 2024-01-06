import { motion } from 'framer-motion';
import Link from 'next/link';

const opacity0 = {
	opacity: 0
};

const opacity1 = {
	opacity: 1
};

const exit = {
	opacity: 0,
	transition: {
		duration: 0.2
	}
};

const NavBarCategoryList = ({
	category
}: {
	category: { name: string; id: number; directories: { name: string; id: number }[] };
}) => {
	return (
		<div className='nav-bar-category-list'>
			<motion.h1 initial={opacity0} animate={opacity1}>
				<Link href={`/category/${category.id}`}>{category.name}</Link>
			</motion.h1>
			<div>
				{category.directories.map((directory, index) => (
					<motion.label
						initial={opacity0}
						animate={opacity1}
						transition={{
							delay: index * 0.04
						}}
						key={index}
						exit={exit}
					>
						<Link href={`/category/${directory.id}`}>{directory.name}</Link>
					</motion.label>
				))}
			</div>
		</div>
	);
};

export default NavBarCategoryList;
