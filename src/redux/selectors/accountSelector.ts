import { RootState } from '../store.ts';

export const selectAuth = (state: RootState) => state.account.logged;