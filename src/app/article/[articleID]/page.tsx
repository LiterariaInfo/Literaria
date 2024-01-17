import Landing from '@/app/article/[articleID]/_sections/Landing';
import Description from '@/app/article/[articleID]/_sections/Description';
import Directories from '@/app/article/[articleID]/_sections/Directories';
import Articles from '@/app/article/[articleID]/_sections/Articles';
import Article from '@/app/article/[articleID]/_sections/Article';

export default ({ params }: { params: { article: string } }) => {
	const isArticle = true;

	if (isArticle) {
		return <Article />;
	}

	return (
		<>
			<Landing />
			<Description />
			<Directories />
			<Articles />
		</>
	);
};
