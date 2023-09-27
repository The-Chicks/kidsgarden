import { ChangeEvent, FormEvent, useState } from "react";

import Loading from "@/components/atoms/Loading";
import { useAxios } from "@/hooks/useAxios";

import { LoginButton, StyledForm } from "./LoginForm.style";
import Input from "../Input/Input";

interface LoginFormType {
	email: string;
	password: string;
}

const LoginForm = () => {
	const { response, isLoading, refetch } = useAxios({
		url: "/posts",
		method: "get",
	});

	const [formValue, setFormvalue] = useState<LoginFormType>({
		email: "",
		password: "",
	});

	const { email, password } = formValue;

	const isFilled = !!email.trim() && !!password.trim();

	const handleChangeInput = (e: ChangeEvent<HTMLFormElement>) => {
		const changed = {
			...formValue,
			[e.target.name]: e.target.value,
		};
		setFormvalue(changed);
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		refetch();
		if (!response) return;
		//login
	};

	return (
		<StyledForm onChange={handleChangeInput} onSubmit={handleSubmit}>
			<Input inputProps={{ name: "email", placeholder: "이메일" }} />
			<Input
				inputProps={{
					name: "password",
					placeholder: "비밀번호",
					type: "password",
				}}
			/>
			<LoginButton disabled={isLoading || !isFilled}>
				{isLoading ? <Loading /> : "로그인"}
			</LoginButton>
		</StyledForm>
	);
};

export default LoginForm;
