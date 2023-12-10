import { createSlice } from '@reduxjs/toolkit';
import { Article, ArticleStateModel } from '../models.ts';
import { fetchArticle, fetchLatest, fetchRecommended } from '../thunks/articleThunk.ts';

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
			.addCase(fetchRecommended.pending, (state) => {
				state.recommended.status = 'loading';
			})
			.addCase(fetchRecommended.rejected, (state) => {
				state.recommended.status = 'failed';
			})
			.addCase(fetchRecommended.fulfilled, (state, action) => {
				state.recommended = action.payload.map((art: { article: Article }) => art.article);

				state.recommended.status = 'succeeded';
			})
			.addCase(fetchLatest.pending, (state) => {
				state.latest.status = 'loading';
			})
			.addCase(fetchLatest.rejected, (state) => {
				state.latest.status = 'failed';
			})
			.addCase(fetchLatest.fulfilled, (state, action) => {
				state.latest = action.payload;

				state.latest.status = 'succeeded';
			})
			.addCase(fetchArticle.pending, (state, action) => {
				state.articles[action.meta.arg] = { status: 'loading' };
			})
			.addCase(fetchArticle.rejected, (state, action) => {
				state.articles[action.meta.arg].status = 'failed';
			})
			.addCase(fetchArticle.fulfilled, (state, action) => {
				state.articles[action.payload.id].data = { ...action.payload };
				state.articles[action.payload.id].data!.content = action.payload.articleContent.content;
				state.articles[action.payload.id].status = 'succeeded';
			})
});

export default articleSlice.reducer;