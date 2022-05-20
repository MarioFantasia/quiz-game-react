import { combineReducers } from "@reduxjs/toolkit";
import optionsReducer from "./slices/optionsSlice";
import categoriesReducer from "./slices/categoriesSlice";
import questionesReducer from "./slices/questionesSlice";

const rootReducer = combineReducers({
	options: optionsReducer,
	categories: categoriesReducer,
	questiones: questionesReducer,
});

export default rootReducer;
