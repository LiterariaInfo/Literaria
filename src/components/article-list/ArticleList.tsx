import './ArticleList.scss';
import NextItemButton from '../buttons/NextItemButton.tsx';
import { FC, ReactNode, useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

const ArticleList: FC<{ children: ReactNode }> = ({ children }) => {
	const scrollRef = useRef<HTMLDivElement>(null);

	const [scroll, setScroll] = useState<number>(0);

	const { scrollXProgress } = useScroll({
		container: scrollRef
	});

	useMotionValueEvent(scrollXProgress, 'change', (value) => {
		setScroll(value);
	});

	const handleNextClick = () => {
		console.log(scrollXProgress.get());
	};

	const handlePreviousClick = () => {
		console.log(scrollXProgress.get());
	};

	return (
		<div className='outer-article-list'>
			<div ref={scrollRef} className='article-list'>
				{children}
			</div>
			<motion.div
				style={{
					opacity: 0
				}}
				animate={{
					opacity: +(scroll !== 1)
				}}
				className='next-article'
			>
				<NextItemButton onClick={handleNextClick} />
			</motion.div>
			<motion.div
				style={{
					opacity: 0
				}}
				animate={{
					opacity: +(scroll !== 0)
				}}
				className='previous-article'
			>
				<NextItemButton onClick={handlePreviousClick} />
			</motion.div>
		</div>
	);
};

export default ArticleList;
