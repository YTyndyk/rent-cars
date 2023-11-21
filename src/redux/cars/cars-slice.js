import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./cars-operations";

const initialState = {
	items: [],
	isLoading: false,
	error: null,
};

const carSlice = createSlice({
	name: "cars",
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchCars.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(fetchCars.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.items = payload;
			})

			.addCase(fetchCars.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
			});
	},
});
export const carsReducer = carSlice.reducer;
