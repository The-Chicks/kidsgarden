import AuthHeader from "@/components/Molecules/AuthHeader/AuthHeader";
import SignupForm from "@/components/Molecules/SignupForm/SignupForm";

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
