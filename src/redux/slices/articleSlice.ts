import { createSlice } from '@reduxjs/toolkit';
import { Article, ArticleStateModel } from '../models.ts';
import { getArticle, getLatest, getRecommended } from '../thunks/articleThunk.ts';

const initialState: ArticleStateModel = {
	articles: [],
	recommended: {
		articles: [],
		status: 'idle'
	},
	latest: {
		articles: [],
		status: 'idle'
	}
};

const articleSlice = createSlice({
	name: 'article',
	initialState,
	reducers: {},
	extraReducers: (builder) =>
		builder
			.addCase(getRecommended.pending, (state) => {
				state.recommended.status = 'loading';
			})
			.addCase(getRecommended.rejected, (state) => {
				state.recommended.status = 'failed';
			})
			.addCase(getRecommended.fulfilled, (state, action) => {
				state.recommended = action.payload.map((art: { article: Article }) => art.article);

				state.recommended.status = 'succeeded';
			})
			.addCase(getLatest.pending, (state) => {
				state.latest.status = 'loading';
			})
			.addCase(getLatest.rejected, (state) => {
				state.latest.status = 'failed';
			})
			.addCase(getLatest.fulfilled, (state, action) => {
				state.latest = action.payload;

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
});

export default articleSlice.reducer;