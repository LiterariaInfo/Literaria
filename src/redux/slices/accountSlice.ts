import { createSlice } from '@reduxjs/toolkit';
import { AccountStateModel } from '../models.ts';

const initialState: AccountStateModel = {
	logged: false
};

const accountSlice = createSlice({
	name: 'account',
	initialState,
	reducers: {},
	extraReducers: () => {}
});

export default accountSlice.reducer;