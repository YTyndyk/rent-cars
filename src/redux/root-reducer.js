import { combineReducers } from "@reduxjs/toolkit";

import { carsReducer } from "./cars/cars-slice";

const rootReducer = combineReducers({
	cars: carsReducer,
});
export default rootReducer;
