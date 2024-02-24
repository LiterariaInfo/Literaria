import prisma from '@/lib/api/prisma';

const getArticleId = (id: number) => {
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
              title: true,
              id: true
            },
            where: {
              children: {
                some: {}
              }
            }
          }
        }
      }
    }
  });
};

const getArticleNames = async () => {
  const articles = await prisma.article.findMany({
    select: {
      title: true,
      id: true,
      parent: {
        select: {
          title: true
        }
      }
    }
  });

  return articles.map((article) => ({
    title: article.title,
    id: article.id,
    parentTitle: article.parent?.title
  }));
};

const getArticleCount = () => {
  return prisma.article.count();
};

const getUniqueAuthorsCount = async () => {
  const uniqueAuthors = await prisma.article.groupBy({
    by: ['author']
  });
  return uniqueAuthors.length;
};

const getMovieReviewsCount = async () => {
  const movieReviews = await prisma.article.findMany({
    where: {
      parentID: 9
    }
  });
  return movieReviews.length;
};

export {
  getArticleId,
  getRecommended,
  getLatest,
  getCategories,
  getArticleCount,
  getUniqueAuthorsCount,
  getMovieReviewsCount,
  getArticleNames
};
