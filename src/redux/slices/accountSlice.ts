import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store.ts';

interface AccountStateModel {
  logged: boolean
}

const initialState: AccountStateModel = {
  logged: false
}

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {},
  extraReducers: () => {

  }
});

export const {} = accountSlice.actions;

export default accountSlice.reducer;

export const selectAuth = (state: RootState) => state.account.logged;