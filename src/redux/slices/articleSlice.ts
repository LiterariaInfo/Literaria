import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import articleController from '../controllers/articleController.ts';
import { RootState } from '../store.ts';

interface Directory {
	id: number;
	name: string;
	image: string;
	description: string;
	articles?: Article[];
	directories?: Directory[];
	status: 'idle' | 'loading' | 'failed' | 'succeeded';
}

export interface Article {
	id: number;
	image: string;
	name: string;
	author: string;
	createdAt: Date;
	content?: string;
	status: 'idle' | 'loading' | 'failed' | 'succeeded';
}

interface ArticleStateModel {
	directories: { [key: number]: Directory };
	articles: { [key: number]: Article };
	recommended: number[];
	latest: number[];
	recommendedStatus: 'idle' | 'loading' | 'failed' | 'succeeded';
	latestStatus: 'idle' | 'loading' | 'failed' | 'succeeded';
}

const initialState: ArticleStateModel = {
	directories: [],
	articles: [],
	recommended: [],
	latest: [],
	recommendedStatus: 'idle',
	latestStatus: 'idle'
};

export const fetchRecommended = createAsyncThunk('article/fetchRecommended', async () => {
	const response = await articleController.getRecommendedArticles();
	return response.data;
});

export const fetchLatest = createAsyncThunk('article/fetchLatest', async () => {
	const response = await articleController.getLatestArticles();
	return response.data;
});

export const fetchDirectory = createAsyncThunk(
	'article/fetchDirectory',
	async (directoryID: number) => {
		const response = await articleController.getDirectory(directoryID);
		return response.data;
	}
);

export const fetchArticle = createAsyncThunk('article/fetchArticle', async (articleID: number) => {
	const response = await articleController.getArticleContent(articleID);
	return response.data;
});

const articleSlice = createSlice({
	name: 'account',
	initialState,
	reducers: {},
	extraReducers: (builder) =>
		builder
			.addCase(fetchRecommended.pending, (state) => {
				state.recommendedStatus = 'loading';
			})
			.addCase(fetchRecommended.rejected, (state) => {
				state.recommendedStatus = 'failed';
			})
			.addCase(fetchRecommended.fulfilled, (state, action) => {
				state.recommended = action.payload.map((art: Article) => art.id);

				action.payload.forEach((art: Article) => {
					state.articles[art.id] = art;
				});

				state.recommendedStatus = 'succeeded';
			})
			.addCase(fetchLatest.pending, (state) => {
				state.latestStatus = 'loading';
			})
			.addCase(fetchLatest.rejected, (state) => {
				state.recommendedStatus = 'failed';
			})
			.addCase(fetchLatest.fulfilled, (state, action) => {
				state.latest = action.payload.map((art: Article) => art.id);

				action.payload.forEach((art: Article) => {
					state.articles[art.id] = art;
				});

				state.recommendedStatus = 'succeeded';
			})
			.addCase(fetchDirectory.pending, (state, action) => {
				state.directories[action.meta.arg] = {
					directories: [],
					articles: [],
					name: '',
					image: '',
					id: 0,
					description: '',
					status: 'loading'
				};
			})
			.addCase(fetchDirectory.rejected, (state, action) => {
				state.directories[action.meta.arg].status = 'failed';
			})
			.addCase(fetchDirectory.fulfilled, (state, action) => {
				state.directories[action.payload.id] = {
					directories: action.payload.directories.map((dir: Directory) => dir.id),
					articles: action.payload.articleDirectory.map(
						(art: { article: Article }) => art.article.id
					),
					...action.payload
				};

				state.directories[action.meta.arg].status = 'succeeded';
			})
			.addCase(fetchArticle.pending, (state, action) => {
				state.articles[action.meta.arg] = {
					name: '',
					id: 0,
					image: '',
					createdAt: new Date(),
					author: '',
					status: 'loading'
				};
			})
			.addCase(fetchArticle.rejected, (state, action) => {
				state.articles[action.meta.arg].status = 'failed';
			})
			.addCase(fetchArticle.fulfilled, (state, action) => {
				state.articles[action.payload.id] = { ...action.payload };
				state.articles[action.payload.id].content = action.payload.articleContent.content;
				state.articles[action.payload.id].status = 'succeeded';
			})
});

export const {} = articleSlice.actions;

export default articleSlice.reducer;

const selectArticles = (state: RootState) => state.article;

export const selectRecommended = createSelector([selectArticles], (articleState) => {
	return articleState.recommended.map((id) => articleState.articles[id]);
});

export const selectLatest = createSelector([selectArticles], (articleState) => {
	return articleState.latest.map((id) => articleState.articles[id]);
});

export const selectDirectory = (state: RootState, id: number) => {
	return state.article.directories[id];
};
