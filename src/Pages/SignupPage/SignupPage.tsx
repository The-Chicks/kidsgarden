import AuthHeader from "@/components/molecules/AuthHeader/AuthHeader";
import SignupForm from "@/components/molecules/SignupForm/SignupForm";

import { ContainerDiv } from "./SignupPage.style";

const SignupPage = () => {
	return (
		<ContainerDiv>
			<AuthHeader />
			<SignupForm />
		</ContainerDiv>
	);
};

export default SignupPage;
