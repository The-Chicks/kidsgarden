import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ThemeProvider } from "styled-components";

import LoginPage from "./pages/LoginPage/LoginPage";
import MainPage from "./pages/MainPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import GlobalStyles from "./styles/globalStyles";
import { theme } from "./styles/theme";
const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<ToastContainer
				position="top-center"
				autoClose={800}
				hideProgressBar={true}
			/>
			<GlobalStyles />
			<BrowserRouter>
				<Routes>
					<Route path="/login" element={<LoginPage />} />
					<Route path="/signup" element={<SignupPage />} />
					<Route path="/profile" element={<ProfilePage />} />
					<Route path="/" element={<MainPage />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
