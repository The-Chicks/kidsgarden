import AuthHeader from "@/components/molecules/AuthHeader/AuthHeader";
import LoginForm from "@/components/molecules/LoginForm/LoginForm";

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
