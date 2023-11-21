import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./cars/cars-slice";

const store = configureStore({
	reducer: {
		cars: carsReducer,
	},
});
export default store;
