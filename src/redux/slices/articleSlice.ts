import { createSlice } from '@reduxjs/toolkit';
import { Article, ArticleStateModel } from '../models.ts';
import { getArticle, getCategories, getLatest, getRecommended } from '../thunks/articleThunk.ts';

const initialState: ArticleStateModel = {
	articles: [],
	recommended: {
		articles: [],
		status: 'idle'
	},
	latest: {
		articles: [],
		status: 'idle'
	},
	categories: {
		categories: [],
		activeCategory: -1,
		status: 'idle'
	}
};

const articleSlice = createSlice({
	name: 'article',
	initialState,
	reducers: {
		setActiveCategory(state, action) {
			state.categories.activeCategory = action.payload;
		}
	},
	extraReducers: (builder) =>
		builder
			.addCase(getRecommended.pending, (state) => {
				state.recommended.status = 'loading';
			})
			.addCase(getRecommended.rejected, (state) => {
				state.recommended.status = 'failed';
			})
			.addCase(getRecommended.fulfilled, (state, action) => {
				state.recommended.articles = action.payload.map((art: { article: Article }) => art.article);

				state.recommended.status = 'succeeded';
			})
			.addCase(getLatest.pending, (state) => {
				state.latest.status = 'loading';
			})
			.addCase(getLatest.rejected, (state) => {
				state.latest.status = 'failed';
			})
			.addCase(getLatest.fulfilled, (state, action) => {
				state.latest.articles = action.payload;

				state.latest.status = 'succeeded';
			})
			.addCase(getArticle.pending, (state, action) => {
				state.articles[action.meta.arg] = { status: 'loading' };
			})
			.addCase(getArticle.rejected, (state, action) => {
				state.articles[action.meta.arg].status = 'failed';
			})
			.addCase(getArticle.fulfilled, (state, action) => {
				state.articles[action.payload.id].data = { ...action.payload };
				state.articles[action.payload.id].data!.content = action.payload.articleContent.content;
				state.articles[action.payload.id].status = 'succeeded';
			})
			.addCase(getCategories.pending, (state) => {
				state.categories.status = 'loading';
			})
			.addCase(getCategories.rejected, (state) => {
				state.categories.status = 'failed';
			})
			.addCase(getCategories.fulfilled, (state, action) => {
				state.categories.status = 'succeeded';

				state.categories.categories = action.payload;
			})
});

export const { setActiveCategory } = articleSlice.actions;

export default articleSlice.reducer;
