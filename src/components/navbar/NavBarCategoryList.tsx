import { motion } from 'framer-motion';

const NavBarCategoryList = ({ title, categories }: { title: string; categories: string[] }) => {
	return (
		<div className='nav-bar-category-list'>
			<motion.h1
				initial={{
					opacity: 0
				}}
				animate={{
					opacity: 1
				}}
			>
				{title}
			</motion.h1>
			<div>
				{categories.map((category, index) => (
					<motion.label
						initial={{
							opacity: 0
						}}
						animate={{
							opacity: 1
						}}
						transition={{
							delay: index * 0.04
						}}
						key={index}
						exit={{
							opacity: 0,
							transition: {
								duration: 0.2
							}
						}}
					>
						{category}
					</motion.label>
				))}
			</div>
		</div>
	);
};

export default NavBarCategoryList;
