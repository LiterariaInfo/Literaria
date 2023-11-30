import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import articleController from '../controllers/articleController.ts';
import { RootState } from '../store.ts';

interface Directory {
	id: number;
	parentID: number | null;
	name: string;
	imageUrl: string;
}

interface Article {
	id: number;
	image: string;
	parentID: number;
	name: string;
	author: string;
	createdAt: Date;
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

export const fetchRecommended = createAsyncThunk('article/fetchRecommended', async () => {
	const response = await articleController.getRecommendedArticles();
	return response.data;
});

export const fetchLatest = createAsyncThunk('article/fetchRecommended', async () => {
	const response = await articleController.getLatestArticles();
	return response.data;
});

const articleSlice = createSlice({
	name: 'account',
	initialState,
	reducers: {},
	extraReducers: (builder) =>
		builder.addCase(fetchRecommended.fulfilled, (state, action) => {
			state.recommended = action.payload.map((article: any) => article.id);

			for (const article of action.payload) {
				const index = state.articles.findIndex((art) => art.id === article.id);

				if (index != -1) {
					state.articles[index] = article;
				} else {
					state.articles.push(article);
				}
			}
		})
});

export const {} = articleSlice.actions;

export default articleSlice.reducer;

const selectArticles = (state: RootState) => state.article;

export const selectRecommended = createSelector([selectArticles], (article) => {
	return article.articles.filter((art) => article.recommended.includes(art.id));
});
