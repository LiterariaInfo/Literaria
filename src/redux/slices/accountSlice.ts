import { createSlice } from '@reduxjs/toolkit';
import { AccountStateModel } from '../models.ts';
import { getAccount } from '../thunks/accountThunk.ts';

const initialState: AccountStateModel = {
	logged: false
};

const accountSlice = createSlice({
	name: 'account',
	initialState,
	reducers: {},
	extraReducers: (builder) => builder
});

export default accountSlice.reducer;