import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IEntry } from "src/interfaces/Items";

interface IAppState {
	loading: boolean;
	series: IEntry[];
	movies: IEntry[];
}

const initialState: IAppState = {
	loading: false,
	series: [],
	movies: []
};

const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload;
		},
		setSeries: (state, action: PayloadAction<IEntry[]>) => {
			state.series = action.payload
		},
		setMovies: (state, action: PayloadAction<IEntry[]>) => {
			state.movies = action.payload
		}
	},
});

export const { setLoading, setSeries, setMovies } = appSlice.actions;

export default appSlice.reducer;
