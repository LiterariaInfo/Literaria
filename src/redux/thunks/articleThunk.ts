import { createAsyncThunk } from '@reduxjs/toolkit';
import articleController from '../controllers/articleController.ts';

export const getRecommended = createAsyncThunk('article/fetchRecommended', async () => {
	const response = await articleController.getRecommendedArticles();
	return response.data;
});

export const getLatest = createAsyncThunk('article/fetchLatest', async () => {
	const response = await articleController.getLatestArticles();
	return response.data;
});

export const getArticle = createAsyncThunk('article/fetchArticle', async (articleID: number) => {
	const response = await articleController.getArticle(articleID);
	return response.data;
});

export const getCategories = createAsyncThunk('article/fetchCategories', async () => {
	const response = await articleController.getCategories();
	return response.data;
});

export const createArticle = createAsyncThunk(
	'article/createArticle',
	async (payload: { author: string; name: string; content: string }) => {
		const response = await articleController.createArticle(payload);
		return response.data;
	}
);

export const addArticleToDirectory = createAsyncThunk(
	'article/addArticleToDirectory',
	async (payload: { articleID: number; directoryID: number }) => {
		const response = await articleController.addArticleToDirectory(
			payload.articleID,
			payload.directoryID
		);
		return response.data;
	}
);

export const updateArticle = createAsyncThunk(
	'article/updateArticle',
	async (payload: {
		articleID: number;
		article: { author: string; name: string; content: string };
	}) => {
		const response = await articleController.updateArticle(payload.articleID, payload.article);
		return response.data;
	}
);

export const updateRecommendedList = createAsyncThunk(
	'article/updateRecommendedList',
	async (payload: [number, number, number]) => {
		const response = await articleController.updateRecommendedList(payload);
		return response.data;
	}
);

export const deleteArticle = createAsyncThunk(
	'article/deleteArticle',
	async (articleID: number) => {
		const response = await articleController.deleteArticle(articleID);
		return response.data;
	}
);

export const removeArticleFromDirectory = createAsyncThunk(
	'article/removeArticleFromDirectory',
	async (articleDirectoryID: number) => {
		const response = await articleController.removeArticleFromDirectory(articleDirectoryID);
		return response.data;
	}
);
