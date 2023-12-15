import { createSlice } from '@reduxjs/toolkit';
import { AccountStateModel } from '../models.ts';
import { getAccount } from '../thunks/accountThunk.ts';

const initialState: AccountStateModel = {
	account: {
		user: '',
		id: -1
	},
	status: 'idle'
};

const accountSlice = createSlice({
	name: 'account',
	initialState,
	reducers: {},
	extraReducers: (builder) =>
		builder
			.addCase(getAccount.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(getAccount.rejected, (state) => {
				state.status = 'failed';
			})
			.addCase(getAccount.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.account = action.payload;
			})
});

export default accountSlice.reducer;
