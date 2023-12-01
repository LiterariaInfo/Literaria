import api from '../../api.ts';

const getArticleContent = (articleID: number): Promise<any> => {
	return api.get(`/article/${articleID}`);
};

const getLatestArticles = (): Promise<any> => {
	return api.get('/article/latest');
};

const getRecommendedArticles = (): Promise<any> => {
	return api.get('/article/recommended');
};

export default {
	getArticleContent,
	getRecommendedArticles,
	getLatestArticles
};