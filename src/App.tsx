import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";

import {
	AlbumPage,
	AttendancePage,
	InquiryCreatePage,
	InquiryDetailPage,
	InquiryPage,
	LoginPage,
	MainPage,
	MealMenuPage,
	NotificationPage,
	ProfilePage,
	Root,
	SchedulePage,
	SignupPage,
} from "./pages";
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
							<Route path="notification" element={<NotificationPage />} />
							<Route path="attendance" element={<AttendancePage />} />
							<Route path="inquiry" element={<InquiryPage />} />
							<Route path="inquiry/:id" element={<InquiryDetailPage />} />
							<Route path="create-inquiry" element={<InquiryCreatePage />} />
							<Route path="menu-board" element={<MealMenuPage />} />
							<Route path="schedule" element={<SchedulePage />} />
							<Route path="album" element={<AlbumPage />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</ThemeProvider>
		</RecoilRoot>
	);
};

export default App;
