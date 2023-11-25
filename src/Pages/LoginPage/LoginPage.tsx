import AuthHeader from "@/components/Molecules/AuthHeader/AuthHeader";
import LoginForm from "@/components/Molecules/LoginForm/LoginForm";

import { ContainerDiv } from "./LoginPage.style";

const LoginPage = () => {
	return (
		<ContainerDiv>
			<AuthHeader />
			<LoginForm />
		</ContainerDiv>
	);
};

export default LoginPage;
