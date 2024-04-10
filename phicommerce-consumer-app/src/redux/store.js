import { configureStore } from '@reduxjs/toolkit';
import bankThemeConfigReducer from './slices/bankThemeConfigSlice';
import systemTextsReducer from './slices/systemTextsSlice';

export const store = configureStore({
	reducer: {
		bankTheme: bankThemeConfigReducer,
		systemTexts: systemTextsReducer
	}
});