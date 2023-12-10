import api from '../../api.ts';

export const getArticleContent = (articleID: number): Promise<any> => {
	return api.get(`/article/${articleID}`);
};

export const getLatestArticles = (): Promise<any> => {
	return api.get('/article/latest');
};

export const getRecommendedArticles = (): Promise<any> => {
	return api.get('/article/recommended');
};

export const createArticle = (body: {
	author: string;
	name: string;
	content: string;
}): Promise<any> => {
	return api.post('/article', body);
};

export const addArticleToDirectory = (articleID: number, directoryID: number): Promise<any> => {
	return api.post(`/article/directory/${articleID}/${directoryID}`);
};

export const updateArticle = (
	articleID: number,
	body: {
		author: string;
		name: string;
		content: string;
	}
): Promise<any> => {
	return api.put(`/article/${articleID}`, body);
};

export const updateRecommendedList = (articleIDs: [number, number, number]): Promise<any> => {
	return api.put('/article/recommended', articleIDs);
};

export const deleteArticle = (articleID: number): Promise<any> => {
	return api.delete(`/article/${articleID}`);
};

export const removeArticleFromDirectory = (articleDirectoryID: number): Promise<any> => {
	return api.delete(`/article/directory/${articleDirectoryID}`);
};
