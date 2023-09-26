import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ThemeProvider } from "styled-components";

import LoginPage from "./Pages/LoginPage/LoginPage";
import SignupPage from "./Pages/SignupPage/SignupPage";
import GlobalStyles from "./Styles/globalStyles";
import { theme } from "./Styles/theme";

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<BrowserRouter>
				<Routes>
					<Route path="/login" element={<LoginPage />} />
					<Route path="/signup" element={<SignupPage />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
