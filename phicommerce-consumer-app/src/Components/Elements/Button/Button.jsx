import { Button, ConfigProvider } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import styles from './Button.module.css';


const CustomButton = ({ children, onClick = () => {}, disabled = false, style = {}, type, modaltarget, databsdismiss, active = true }) => {
	const bankTheme = useSelector(state => state.bankTheme);

	const customActiveButtonStyle = {
		backgroundColor: bankTheme.primaryColor,
		fontSize: bankTheme.normalTextFontSize,
		color: 'white',
		border: `1px solid ${bankTheme.primaryColor}`,
		...style
	};

	const customButtonStyle = {
		backgroundColor: 'white',
		fontSize: bankTheme.normalTextFontSize,
		color: bankTheme.primaryColor,
		border: `1px solid ${bankTheme.primaryColor}`,
		...style
	};

	return (
		<ConfigProvider
			theme={{
				components: {
					Button: {
						defaultHoverBorderColor: "none",
						// contentFontSize:"16px",
						defaultActiveBorderColor: "none"

					}
				}
			}}
		>
			<Button onClick={onClick} disabled={disabled} className={styles.btn} style={active ? customActiveButtonStyle : customButtonStyle} type={type} data-bs-target={modaltarget ? modaltarget : ""} data-bs-toggle={modaltarget ? "modal" : "none"} data-bs-dismiss={databsdismiss ? databsdismiss : "none"}>
				{children}
			</Button>
		</ConfigProvider>
	);
};

export default CustomButton;