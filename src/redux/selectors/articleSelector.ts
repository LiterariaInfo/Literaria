import { RootState } from '../store.ts';
import { createSelector } from '@reduxjs/toolkit';

const selectArticles = (state: RootState) => state.article;

export const selectRecommended = createSelector([selectArticles], (articleState) => {
	return articleState.recommended.articles;
});

export const selectRecommendedState = (state: RootState) => state.article.recommended.status;

export const selectLatest = createSelector([selectArticles], (articleState) => {
	return articleState.latest.articles;
});

export const selectLatestState = (state: RootState) => state.article.latest.status;

export const selectArticle = (id: number) => (state: RootState) => state.article.articles[id].data;

export const selectArticleStatus = (id: number) => (state: RootState) =>
	state.article.articles[id].status;
