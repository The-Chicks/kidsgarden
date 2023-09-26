import { ContainerDiv } from "./SignupPage.style";
import AuthHeader from "../../Components/Molecules/AuthHeader/AuthHeader";
import SignupForm from "../../Components/Molecules/SignupForm/SignupForm";

const SignupPage = () => {
	return (
		<ContainerDiv>
			<AuthHeader />
			<SignupForm />
		</ContainerDiv>
	);
};

export default SignupPage;
