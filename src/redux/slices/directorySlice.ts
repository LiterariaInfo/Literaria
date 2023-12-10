import { Article, DirectoryStateModel } from '../models.ts';
import { createSlice } from '@reduxjs/toolkit';
import { fetchDirectory } from '../thunks/directoryThunk.ts';

const initialState: DirectoryStateModel = {
	directories: []
};

const directorySlice = createSlice({
	name: 'directory',
	initialState,
	reducers: {},
	extraReducers: (builder) =>
		builder
			.addCase(fetchDirectory.pending, (state, action) => {
				state.directories[action.meta.arg] = { status: 'loading' };
			})
			.addCase(fetchDirectory.rejected, (state, action) => {
				state.directories[action.meta.arg].status = 'failed';
			})
			.addCase(fetchDirectory.fulfilled, (state, action) => {
				state.directories[action.payload.id].data = {
					directories: action.payload.directories,
					articles: action.payload.articleDirectory.map((art: { article: Article }) => art.article),
					...action.payload
				};

				state.directories[action.payload.id].status = 'succeeded';
			})
});

export default directorySlice.reducer;
