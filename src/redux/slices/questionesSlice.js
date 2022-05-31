import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
	questiones: [],
	question: 0,
};

const questionesSlice = createSlice({
	name: "questiones",
	initialState,
	reducers: {
		generateQuestiones: (state, { payload }) => {
			state.questiones = payload;
		},
		numberQuestion: (state, action) => {
			state.question = action.payload;
		},

		resetQuestiones: (state) => {
			state.questiones = [];
			state.question = 0;
		},
	},
});

export const { generateQuestiones, numberQuestion, resetQuestiones } =
	questionesSlice.actions;

export const questionesSelector = (state) => state;

export default questionesSlice.reducer;
