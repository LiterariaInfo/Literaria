import { motion } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';
import { categories } from '../../../../public/text/navBarContent';
import Link from 'next/link';

const NavBarCategories = ({
	setExpanded
}: {
	setExpanded: Dispatch<SetStateAction<boolean>>;
}) => {
	const onHoverStart = () => {
		setExpanded(true);
	};

	return (
		<motion.div layout className='flex gap-8'>
			{categories.map((category, index) => (
				<motion.label
					className='font-bold text-[1.05rem] cursor-pointer hover:underline'
					onHoverStart={onHoverStart}
					key={index}
				>
					<Link href={`/category/${category.id}`}>{category.name}</Link>
				</motion.label>
			))}
		</motion.div>
	);
};

export default NavBarCategories;
