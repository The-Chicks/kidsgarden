import { FormEvent } from "react";

import { LoginButton, StyledForm } from "./LoginForm.style";
import Input from "../../Atoms/Input/Input";

const LoginForm = () => {
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		//login
		e.preventDefault();
	};

	return (
		<StyledForm onSubmit={handleSubmit}>
			<Input placeholder="아이디" />
			<Input placeholder="비밀번호" type="password" />
			<LoginButton>로그인</LoginButton>
		</StyledForm>
	);
};

export default LoginForm;
