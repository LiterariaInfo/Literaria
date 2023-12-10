import { createAsyncThunk } from '@reduxjs/toolkit';
import articleController from '../controllers/articleController.ts';

export const fetchRecommended = createAsyncThunk('article/fetchRecommended', async () => {
  const response = await articleController.getRecommendedArticles();
  return response.data;
});

export const fetchLatest = createAsyncThunk('article/fetchLatest', async () => {
  const response = await articleController.getLatestArticles();
  return response.data;
});

export const fetchArticle = createAsyncThunk('article/fetchArticle', async (articleID: number) => {
  const response = await articleController.getArticleContent(articleID);
  return response.data;
});