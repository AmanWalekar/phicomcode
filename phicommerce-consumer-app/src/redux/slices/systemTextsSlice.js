import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const systemTextsSlice = createSlice({
	name: 'systemTexts',
	initialState,
	reducers: {
		updateSystemTexts: (state, action) => {
			return { ...state, ...action.payload };
		}
	}
});

export const { updateSystemTexts } = systemTextsSlice.actions;

export default systemTextsSlice.reducer;