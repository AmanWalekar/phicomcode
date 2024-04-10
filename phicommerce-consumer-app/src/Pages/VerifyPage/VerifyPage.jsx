import { Input, Select, message} from 'antd';
import { InputOTP } from 'antd-input-otp';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Elements } from '../../Components/Elements';
import styles from './VerifyPage.module.css';

export const VerifyPage = ({setIsAuthenticated}) => {
	const systemTexts = useSelector(state => state.systemTexts);
	const navigate = useNavigate();
	const [verificationForm, setVerificationForm] = useState({
		numberCode: "+91",
		phoneNumber: ""
	});
	const [isOtp, setIsOtp] = useState(false);
	const [Otp, setOtp] = useState([]);
	const phoneCodes = [
		{
			value: '+91',
			label: '+91'
		},
		{
			value: '+1',
			label: '+1'
		}
	];
	const handleChange = (value) => {
		setVerificationForm(prev => ({...prev, numberCode: value}));
	};
	const submitForm = (e) => {
		e.preventDefault();
		console.info(verificationForm);
		if (verificationForm.phoneNumber.length == 10) {
			setIsOtp(true);
		}
	};
	const customButtonStyle = {
		margin: '24px 0'
	};
	const customFeildStyle = {
		margin: '0 24px'
	};
	const handleFinish = (otp) => {
		const payload = otp || Otp;
		console.info(payload);
		setIsAuthenticated(true);
		navigate("/1daf9f17-4fbb-433d-83dc-6b9a3d1cbb28/450"); //using tempororary static BankId and productId
	};

	const handlePhoneNumberChange = (e) => {
		const allowedChars = /^\d|[+]$/;
		const newValue = e.target.value.replace(/[^0-9+]/g, '');
		if (newValue !== verificationForm.phoneNumber) {
			setVerificationForm(prev => ({ ...prev, phoneNumber: newValue }));
		}
		if (!allowedChars.test(newValue)) {
			message.error('Phone number can only contain digits and the "+" symbol for international codes.');
		}
	};
	return (
		<div className={styles.container}>
			{isOtp ?
				<form onSubmit={submitForm} className={styles.form}>
					<h1 className={styles.heading}>{systemTexts.lblEnterOtp}</h1>
					<p className={styles.formTexts}>{systemTexts.lblOtpText}</p>
					<InputOTP onChange={setOtp} value={Otp} autoSubmit={handleFinish} />
					<Elements.Button onClick={() => handleFinish()} style={customButtonStyle}>{systemTexts.lblBtnVerify}</Elements.Button>
				</form>
				:
				<form onSubmit={submitForm} className={styles.form}>
					<h1 className={styles.heading}>{systemTexts.lblVerify}</h1>
					<p className={styles.formTexts}>{systemTexts.lblVerifyText}</p>
					<div className={styles.feildContainer}>
						<Select defaultValue="+91" onChange={handleChange} options={phoneCodes} />
						<Input style={customFeildStyle} placeholder="Enter Phone Number" value={verificationForm.phoneNumber} onChange={handlePhoneNumberChange} inputMode="numeric"/>
					</div>
					<Elements.Button onClick={(e) => submitForm(e)} style={customButtonStyle}>{systemTexts.lblOtp}</Elements.Button>
				</form>
			}
		</div>
	);
};
