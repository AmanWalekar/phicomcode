import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	largeLogo: "https://res.cloudinary.com/dgqtffxpf/image/upload/v1711545928/payphi_unx6bz.svg",
	bankAddress: "",
	bankTnc: "",
	detailsAvailable: false,
	bankName: "Bank name",
	primaryColor: "#00bae1",
	secondaryColor: "#3AE79B",
	headerTextColor: "#000000",
	normalTextColor: "#000000",
	successColor: "#17BD77",
	errorColor: "#FF2626",
	infoColor: "#1295E5",
	normalTextFontSize: 'medium',
	screenHeaderTextFontSize: 'large',
	sectionHeaderTextFontSize: 'large',
	themeAvailable: false
};

export const bankThemeConfigSlice = createSlice({
	name: 'bankTheme',
	initialState,
	reducers: {
		updateBankTheme: (state, action) => {
			return { ...state, ...action.payload };
		}
	}
});

export const {updateBankTheme} = bankThemeConfigSlice.actions;

export default bankThemeConfigSlice.reducer;