import { RootState } from '../store.ts';

export const selectDirectory = (id: number) => (state: RootState) => state.directory[id].data;

export const selectDirectoryStatus = (id: number) => (state: RootState) =>
	state.directory[id].status;