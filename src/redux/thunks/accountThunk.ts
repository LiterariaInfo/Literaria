import { createAsyncThunk } from '@reduxjs/toolkit';
import accountController from '../controllers/accountController.ts';

export const login = createAsyncThunk(
	'account/login',
	async (payload: { user: string; password: string }) => {
		const response = await accountController.login(payload.user, payload.password);
		return response.data;
	}
);

export const getAccount = createAsyncThunk('account/fetchAccount', async () => {
	const response = await accountController.getAccount();
	return response.data;
});