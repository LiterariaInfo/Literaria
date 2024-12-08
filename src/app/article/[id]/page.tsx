import { Article as ArticleModel } from '@/lib/models';
import Article from '@/app/article/[id]/_sections/Article';
import Landing from '@/app/article/[id]/_sections/Landing';
import Description from '@/app/article/[id]/_sections/Description';
import Directories from '@/app/article/[id]/_sections/Directories';
import Articles from '@/app/article/[id]/_sections/Articles';
import { getArticle } from '@/lib/api/article';

export default async ({ params }: { params: { id: string } }) => {
  const article = (await getArticle(+params.id)) as any as ArticleModel;

  if (article.children.length === 0) {
    return <Article article={article} />;
  }

  return (
    <>
      <Landing article={article} />
      <Description article={article} />
      <Directories article={article} />
      <Articles article={article} />
    </>
  );
};
