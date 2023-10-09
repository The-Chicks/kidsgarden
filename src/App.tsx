import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";

import LoginPage from "./pages/LoginPage/LoginPage";
import MainPage from "./pages/MainPage";
import NotificationPage from "./pages/NotificationPage/NotificationPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import Root from "./pages/Root";
import SignupPage from "./pages/SignupPage/SignupPage";
import GlobalStyles from "./styles/globalStyles";
import { theme } from "./styles/theme";
const App = () => {
	return (
		<RecoilRoot>
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
						<Route path="/" element={<Root />}>
							<Route path="" element={<MainPage />} />
							<Route path="profile" element={<ProfilePage />} />
							<Route path="notification" element={<NotificationPage />}>
								<Route path="announcement/:id" />
							</Route>
						</Route>
					</Routes>
				</BrowserRouter>
			</ThemeProvider>
		</RecoilRoot>
	);
};

export default App;
