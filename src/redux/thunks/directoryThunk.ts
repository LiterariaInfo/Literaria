import { createAsyncThunk } from '@reduxjs/toolkit';
import directoryController from '../controllers/directoryController.ts';

export const getDirectory = createAsyncThunk(
	'article/getDirectory',
	async (directoryID: number) => {
		const response = await directoryController.getDirectory(directoryID);
		return response.data;
	}
);

export const createDirectory = createAsyncThunk(
	'article/createDirectory',
	async (payload: { name: string; parentID: number; description: string }) => {
		const response = await directoryController.createDirectory(payload);
		return response.data;
	}
);

export const updateDirectory = createAsyncThunk(
	'article/createDirectory',
	async (payload: {
		directoryID: number;
		directory: {
			name: string;
			parentID: number;
			description: string;
		};
	}) => {
		const response = await directoryController.updateDirectory(
			payload.directoryID,
			payload.directory
		);
		return response.data;
	}
);