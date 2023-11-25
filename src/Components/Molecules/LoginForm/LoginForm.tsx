import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useRecoilValue } from "recoil";

import Loading from "@/components/Atoms/Loading";
import { useAxios } from "@/hooks/useAxios";
import { userState } from "@/recoil/atoms/user";

import { LoginButton, StyledForm } from "./LoginForm.style";
import Input from "../Input/Input";
interface LoginFormType {
	email: string;
	password: string;
}

const LoginForm = () => {
	const navigate = useNavigate();

	const userInfo = useRecoilValue(userState);

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
		if (email === userInfo.email && password === userInfo.password) {
			navigate("/");
		} else {
			toast.error("이메일 또는 비밀번호가 잘못되었습니다.");
		}
		// refetch();
		// if (!response) return;
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
