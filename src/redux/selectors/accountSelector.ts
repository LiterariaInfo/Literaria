import { RootState } from '../store.ts';

export const selectAccount = (state: RootState) => state.account.account;

export const selectAccountStatus = (state: RootState) => state.account.status;