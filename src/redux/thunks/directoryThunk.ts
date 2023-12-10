import { createAsyncThunk } from '@reduxjs/toolkit';
import articleController from '../controllers/articleController.ts';

export const fetchDirectory = createAsyncThunk(
  'article/fetchDirectory',
  async (directoryID: number) => {
    const response = await articleController.getDirectory(directoryID);
    return response.data;
  }
);