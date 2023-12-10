import api from '../../api.ts';

const getArticle = (articleID: number): Promise<any> => {
	return api.get(`/article/${articleID}`);
};

const getLatestArticles = (): Promise<any> => {
	return api.get('/article/latest');
};

const getRecommendedArticles = (): Promise<any> => {
	return api.get('/article/recommended');
};

const createArticle = (payload: {
	author: string;
	name: string;
	content: string;
}): Promise<any> => {
	return api.post('/article', payload);
};

const addArticleToDirectory = (articleID: number, directoryID: number): Promise<any> => {
	return api.post(`/article/directory/${articleID}/${directoryID}`);
};

const updateArticle = (
	articleID: number,
	payload: {
		author: string;
		name: string;
		content: string;
	}
): Promise<any> => {
	return api.put(`/article/${articleID}`, payload);
};

const updateRecommendedList = (articleIDs: [number, number, number]): Promise<any> => {
	return api.put('/article/recommended', articleIDs);
};

const deleteArticle = (articleID: number): Promise<any> => {
	return api.delete(`/article/${articleID}`);
};

const removeArticleFromDirectory = (articleDirectoryID: number): Promise<any> => {
	return api.delete(`/article/directory/${articleDirectoryID}`);
};

export default {
	getArticle,
	getLatestArticles,
	getRecommendedArticles,
	createArticle,
	addArticleToDirectory,
	updateArticle,
	updateRecommendedList,
	deleteArticle,
	removeArticleFromDirectory
}