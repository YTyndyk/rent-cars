import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../../shared/api/adverts";

export const fetchCars = createAsyncThunk("cars/fetch", async (_, thunkAPI) => {
	try {
		const data = await api.getCars();
		return data;
	} catch ({ response }) {
		return thunkAPI.rejectWithValue(response);
	}
});

// export const deleteCar = createAsyncThunk(
// 	"recipes/delete",
// 	async (_id, { rejectWithValue }) => {
// 		try {
// 			await api.deleteCar(_id);
// 			return _id;
// 		} catch ({ response }) {
// 			return rejectWithValue(response);
// 		}
// 	},
// );
