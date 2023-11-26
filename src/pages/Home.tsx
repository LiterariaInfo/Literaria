import SmallArticleCard from '../components/cards/SmallArticleCard';

const articles = [
	{
		label: 'Test',
		title: 'Test'
	},
    {
		label: 'Test',
		title: 'Test'
	},
    {
		label: 'Test',
		title: 'Test'
	}
];

const Home = () => {
	return (
		<>
			<h1 className="title center">Articole recomandate</h1>
			<div className='scrollable-vertical-list'>
				{articles.map((article, index) => (
					<SmallArticleCard
						key={index}
						label={article.label}
						title={article.title}
					/>
				))}
			</div>
            <h1 className="title center">Ultimele articole</h1>
			<div className='scrollable-vertical-list'>
				{articles.map((article, index) => (
					<SmallArticleCard
						key={index}
						label={article.label}
						title={article.title}
					/>
				))}
			</div>
		</>
	);
};

export default Home;
