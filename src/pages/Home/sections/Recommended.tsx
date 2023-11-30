import { useSelector } from 'react-redux';
import { selectRecommended } from '../../../redux/slices/articleSlice.ts';
import SmallArticleCard from '../../../components/cards/SmallArticleCard.tsx';
import LargeArticleCard from '../../../components/cards/LargeArticleCard.tsx';
import { useRef } from 'react';

const Recommended = () => {
	const recommendedArticles = useSelector(selectRecommended);

	const scrollRef = useRef<HTMLDivElement>(null);

	return (
		<div className="recommended">
			<h1 className="main-title">Articole recomandate</h1>
			<div
				style={{
					position: 'relative'
				}}
			>
				<div ref={scrollRef} className="article-list">
					{recommendedArticles.map((article, index) =>
						index % 2 ? (
							<LargeArticleCard
								label={article.author}
								title={article.name}
								url={'https://example.com'}
								image={article.image}
								key={index}
							/>
						) : (
							<SmallArticleCard
								label={article.author}
								title={article.name}
								url={'https://example.com'}
								image={article.image}
								key={index}
							/>
						)
					)}
				</div>
				<div className="next-article">
					aef
				</div>
			</div>
		</div>
	);
};

export default Recommended;
