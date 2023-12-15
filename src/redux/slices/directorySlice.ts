import { Article, DirectoryStateModel } from '../models.d.ts';
import { createSlice } from '@reduxjs/toolkit';
import { getDirectory } from '../thunks/directoryThunk.ts';

const initialState: DirectoryStateModel = {};

const directorySlice = createSlice({
	name: 'directory',
	initialState,
	reducers: {},
	extraReducers: (builder) =>
		builder
			.addCase(getDirectory.pending, (state, action) => {
				state[action.meta.arg] = { status: 'loading' };
			})
			.addCase(getDirectory.rejected, (state, action) => {
				state[action.meta.arg].status = 'failed';
			})
			.addCase(getDirectory.fulfilled, (state, action) => {
				state[action.payload.id].data = {
					directories: action.payload.directories,
					articles: action.payload.articleDirectory.map((art: { article: Article }) => art.article),
					...action.payload
				};

				state[action.payload.id].status = 'succeeded';
			})
});

export default directorySlice.reducer;
