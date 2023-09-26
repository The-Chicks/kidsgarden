import { FormEvent } from "react";

import { LoginButton, StyledForm } from "./LoginForm.style";
import Input from "../Input/Input";

const LoginForm = () => {
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		//login
		e.preventDefault();
	};

	return (
		<StyledForm onSubmit={handleSubmit}>
			<Input inputProps={{ placeholder: "이메일" }} />
			<Input inputProps={{ placeholder: "비밀번호", type: "password" }} />
			<LoginButton>로그인</LoginButton>
		</StyledForm>
	);
};

export default LoginForm;
