import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
	type: "",
	time: "",
	difficult: "",
};

const optionsSlice = createSlice({
	name: "options",
	initialState,
	reducers: {
		setType: (state, action) => {
			state.type = action.payload;
		},
		setTime: (state, action) => {
			state.time = action.payload;
		},
		setDifficult: (state, action) => {
			state.difficult = action.payload;
		},
		resetOptions: (state) => {
			state.type = "";
			state.time = "";
			state.difficult = "";
		},
	},
});

export const { setType, setTime, setDifficult, resetOptions } =
	optionsSlice.actions;

export const optionsSelector = (state) => state;

export default optionsSlice.reducer;
