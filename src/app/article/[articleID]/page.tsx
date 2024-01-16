import Landing from '@/app/article/[articleID]/_sections/Landing';
import Description from '@/app/article/[articleID]/_sections/Description';
import Directories from '@/app/article/[articleID]/_sections/Directories';
import Articles from '@/app/article/[articleID]/_sections/Articles';

export default ({ params }: { params: { article: string } }) => {
	const isArticle = false;

	if (isArticle) {
		return <></>;
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
