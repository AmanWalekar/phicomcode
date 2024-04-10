import React, {useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import { Navbar } from "./Components/Navbar/Navbar";
import { HomePage } from "./Pages/HomePage";
import { VerifyPage } from "./Pages/VerifyPage/VerifyPage";
import { languages, systemMessages } from "./placeholder/system-texts";
import { updateSystemTexts } from "./redux/slices/systemTextsSlice";

function App() {

	const dispatch = useDispatch();
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		{
			const englishLangId = languages.find(l => l.lang == 'en')?.id || 1;
			const thisLangSystemMsg = systemMessages.filter(sm => sm.languageId == englishLangId);
			const systemMsgObj = {};
			for (let i = 0; i < thisLangSystemMsg.length; i++) {
				systemMsgObj[thisLangSystemMsg[i].fieldLabelReference] = thisLangSystemMsg[i].labelValue;
			}
			dispatch(updateSystemTexts(systemMsgObj));
		}
	}, []);
	return (
		<BrowserRouter>
			<Navbar/>
			<div>
				<Routes>
					<Route path="/verify" element={<VerifyPage setIsAuthenticated={setIsAuthenticated}/>}></Route>
					<Route path="/" element={isAuthenticated ? <HomePage /> : <Navigate to="/verify" replace /> }>
						<Route path="/:bankId/:productId" element={<HomePage/>}></Route>
					</Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
