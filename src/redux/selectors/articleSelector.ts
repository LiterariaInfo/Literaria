import { RootState } from '../store.ts';
import { createSelector } from '@reduxjs/toolkit';

const selectArticles = (state: RootState) => state.article;

export const selectRecommended = createSelector([selectArticles], (articleState) => {
	return articleState.recommended.articles;
});

export const selectRecommendedStatus = (state: RootState) => state.article.recommended.status;

export const selectLatest = createSelector([selectArticles], (articleState) => {
	return articleState.latest.articles;
});

export const selectLatestStatus = (state: RootState) => state.article.latest.status;

export const selectArticle = (id: number) => (state: RootState) => state.article.articles[id].data;

export const selectArticleStatus = (id: number) => (state: RootState) =>
	state.article.articles[id].status;

export const selectCategoriesStatus = (state: RootState) => state.article.categories.status;

export const selectActiveCategories = (state: RootState) =>
	state.article.categories.categories.find(
		(category) => category.id === state.article.categories.activeCategory
	)?.directories ?? [];
