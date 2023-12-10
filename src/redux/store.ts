import { configureStore } from '@reduxjs/toolkit';
import accountSlice from './slices/accountSlice.ts';
import articleSlice from './slices/articleSlice.ts';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import directorySlice from './slices/directorySlice.ts';

const store = configureStore({
	reducer: {
		account: accountSlice,
		article: articleSlice,
		directory: directorySlice
	}
});

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type RootState = ReturnType<typeof store.getState>;
export default store;
