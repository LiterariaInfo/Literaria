import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import articleController from '../controllers/articleController.ts';

interface Directory {
	id: number;
	parentID: number | null;
	name: string;
	imageUrl: string;
}

interface Article {
	id: number;
	parentID: number;
	name: string;
	author?: string;
	date?: Date;
	body?: string;
}

interface ArticleStateModel {
	directories: Directory[];
	articles: Article[];
	recommended: number[];
	latest: number[];
}

const initialState: ArticleStateModel = {
	directories: [],
	articles: [],
	recommended: [],
	latest: []
};

export const getRecommended = createAsyncThunk('article/fetchRecommended', async () => {
	const response = await articleController.getRecommendedArticles();
	return response.data;
});

export const getLatest = createAsyncThunk('article/fetchRecommended', async () => {
	const response = await articleController.getLatestArticles();
	return response.data;
});

const articleSlice = createSlice({
	name: 'account',
	initialState,
	reducers: {},
	extraReducers: {}
});

export const {} = articleSlice.actions;

export default articleSlice.reducer;
