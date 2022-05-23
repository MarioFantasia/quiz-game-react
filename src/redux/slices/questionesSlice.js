import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
	questiones: [],
};

const questionesSlice = createSlice({
	name: "questiones",
	initialState,
	reducers: {
		generateQuestiones: (state, { payload }) => {
			state.questiones = payload;
		},
		resetQuestiones: (state) => {
			state.questiones = [];
		},
	},
});

export const { generateQuestiones, resetQuestiones } = questionesSlice.actions;

export const questionesSelector = (state) => state;

export default questionesSlice.reducer;
