import { motion } from 'framer-motion';
import Link from 'next/link';
import { CategoryModel } from '@/components/navbar/NavBar';

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

const NavBarCategoryList = ({ category }: { category: CategoryModel }) => {
	return (
		<div className='flex flex-col'>
			<motion.h1 className='title-label' initial={opacity0} animate={opacity1}>
				<Link href={`/article/${category.id}`}>{category.title}</Link>
			</motion.h1>
			<div className='flex flex-col'>
				{category.children?.map((directory, index) => (
					<motion.label
						className='small-title'
						initial={opacity0}
						animate={opacity1}
						transition={{
							delay: index * 0.04
						}}
						key={index}
						exit={exit}
					>
						<Link href={`/category/${directory.id}`}>{directory.title}</Link>
					</motion.label>
				))}
			</div>
		</div>
	);
};

export default NavBarCategoryList;
