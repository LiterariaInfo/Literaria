import prisma from '@/lib/api/prisma';

const getArticleId = (id: number) => {
	return prisma.article.findUnique({
		where: {
			id
		}
	});
};

const createArticle = () => {
	return 1;
};

export default {
	getArticleId,
	createArticle
};
