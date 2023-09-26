import { ContainerDiv } from "./LoginPage.style";
import AuthHeader from "../../Components/Molecules/AuthHeader/AuthHeader";
import LoginForm from "../../Components/Molecules/LoginForm/LoginForm";

const LoginPage = () => {
	return (
		<ContainerDiv>
			<AuthHeader />
			<LoginForm />
		</ContainerDiv>
	);
};

export default LoginPage;
