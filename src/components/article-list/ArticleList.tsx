import './ArticleList.scss';
import NextItemButton from '../buttons/NextItemButton.tsx';
import { FC, ReactNode, useRef } from 'react';

const ArticleList: FC<{ children: ReactNode }> = ({ children }) => {
	const scrollRef = useRef<HTMLDivElement>(null);

	const handleNextClick = () => {
		scrollRef.current!.scrollBy({
			left: 10,
			behavior: 'smooth'
		});
	};

	const handlePreviousClick = () => {
		scrollRef.current!.scrollBy({
			left: -10,
			behavior: 'smooth'
		});
	};

	return (
		<div className='outer-article-list'>
			<div ref={scrollRef} className='article-list'>
				{children}
			</div>
			<div className='next-article'>
				<NextItemButton onClick={handleNextClick} />
			</div>
			<div className='previous-article'>
				<NextItemButton onClick={handlePreviousClick} />
			</div>
		</div>
	);
};

export default ArticleList;
