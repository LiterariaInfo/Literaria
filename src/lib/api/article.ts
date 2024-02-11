import prisma from '@/lib/api/prisma';

const getArticleId = (id: number) => {
	console.log(555);

	return prisma.article.findUnique({
		where: {
			id
		},
		select: {
			children: {
				select: {
					children: true,
					image: true,
					title: true,
					author: true,
					createdAt: true,
					id: true
				}
			},
			content: true,
			parent: {
				select: {
					title: true
				}
			},
			id: true,
			createdAt: true,
			title: true,
			author: true,
			image: true
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
							title: true
						}
					}
				}
			}
		}
	});
};

export { getArticleId, getRecommended, getLatest, getCategories };
