import { configureStore } from '@reduxjs/toolkit';
import accountSlice from './slices/accountSlice.ts';
import articleSlice from './slices/articleSlice.ts';

const store = configureStore({
	reducer: {
		account: accountSlice,
		article: articleSlice
	}
});

export type RootState = ReturnType<typeof store.getState>;
export default store;