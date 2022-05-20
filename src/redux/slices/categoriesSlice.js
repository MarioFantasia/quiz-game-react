import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
	categories: [],
	selectedCategory: null,
};

const categoriesSlice = createSlice({
	name: "categories",
	initialState,
	reducers: {
		getCategories: (state, { payload }) => {
			state.categories = payload;
		},

		selectCategory: (state, action) => {
			state.selectedCategory = action.payload;
		},
	},
});

export const { getCategories, selectCategory } = categoriesSlice.actions;

export const categoriesSelector = (state) => state;

export default categoriesSlice.reducer;
