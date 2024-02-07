import prisma from '@/lib/api/prisma';

const getArticleId = (id: number) => {
	return prisma.article.findUnique({
		where: {
			id
		},
		include: {
			children: {
				select: {
					children: true,
					image: true,
					title: true,
					parentID: true,
					author: true,
					createdAt: true,
					id: true
				}
			},
			content: true
		}
	});
};

const getLatest = () => {
	return prisma.article.findMany({
		take: 10,
		orderBy: {
			createdAt: 'desc'
		}
	});
};

const getRecommended = () => {
	return prisma.recommendedArticle.findMany({
		include: {
			article: true
		}
	});
};

const getCategories = () => {
	return prisma.article.findMany({
		where: {
			parentID: null
		},
		select: {
			title: true,
			id: true,
			children: {
				select: {
					title: true,
					id: true,
					children: {
						select: {
							title: true,
							id: true
						}
					}
				}
			}
		}
	});
};

export { getArticleId, getRecommended, getLatest, getCategories };
