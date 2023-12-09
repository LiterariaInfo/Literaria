import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import articleController from '../controllers/articleController.ts';
import { RootState } from '../store.ts';

type status = 'idle' | 'loading' | 'failed' | 'succeeded';

interface Directory {
	id: number;
	name: string;
	image: string;
	description: string;
	articles?: Article[];
	directories?: Directory[];
	status: status;
}

export interface Article {
	id: number;
	image: string;
	name: string;
	author: string;
	createdAt: Date;
	content?: string;
	status: status;
}

interface ArticleStateModel {
	directories: {
		[key: number]: {
			data?: Directory;
			status: status;
		};
	};
	articles: {
		[key: number]: {
			data?: Article;
			status: status;
		};
	};
	recommended: Article[];
	latest: Article[];
	recommendedStatus: status;
	latestStatus: status;
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
				state.recommended = action.payload.map((art: { article: Article }) => art.article);

				state.recommendedStatus = 'succeeded';
			})
			.addCase(fetchLatest.pending, (state) => {
				state.latestStatus = 'loading';
			})
			.addCase(fetchLatest.rejected, (state) => {
				state.recommendedStatus = 'failed';
			})
			.addCase(fetchLatest.fulfilled, (state, action) => {
				state.latest = action.payload;

				state.recommendedStatus = 'succeeded';
			})
			.addCase(fetchDirectory.pending, (state, action) => {
				state.directories[action.meta.arg] = { status: 'loading' };
			})
			.addCase(fetchDirectory.rejected, (state, action) => {
				state.directories[action.meta.arg].status = 'failed';
			})
			.addCase(fetchDirectory.fulfilled, (state, action) => {
				state.directories[action.payload.id].data = {
					directories: action.payload.directories,
					articles: action.payload.articleDirectory.map((art: { article: Article }) => art.article),
					...action.payload
				};

				state.directories[action.payload.id].status = 'succeeded';
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

export const {} = articleSlice.actions;

export default articleSlice.reducer;

const selectArticles = (state: RootState) => state.article;

export const selectRecommended = createSelector([selectArticles], (articleState) => {
	return articleState.recommended;
});

export const selectRecommendedState = (state: RootState) => state.article.recommendedStatus;

export const selectLatest = createSelector([selectArticles], (articleState) => {
	return articleState.latest;
});

export const selectLatestState = (state: RootState) => state.article.latestStatus;

export const selectDirectory = (id: number) => (state: RootState) => {
	console.log(state.article.directories[id])
	return state.article.directories[id]?.data ?? { name: '', articles: [] };
};

export const selectDirectoryArticles = (id: number) => (state: RootState) => {
	return state.article.directories[id]?.data?.articles ?? [];
};

export const selectDirectoryState = (id: number) => (state: RootState) => {
	//console.log(state.article.directories[id]?.status, 111)
	return state.article.directories[id]?.status ?? 'idle';
}