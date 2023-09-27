import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import Loading from "@/components/atoms/Loading";
import { useAxios } from "@/hooks/useAxios";
import { UserType } from "@/types/user";

import {
	ConsentAreaDiv,
	ErrorSpan,
	InputWrapDiv,
	SignupButton,
	StyledForm,
} from "./SignupForm.style";
import ConsentCheckWithDetails from "../ConsentCheckWithDetails/ConsentCheckWithDetails";
import Input from "../Input/Input";

interface SignupFormType extends UserType {
	passwordCheck: string;
}

const SignupForm = () => {
	const { response: responseForDuplication, refetch: refetchDuplication } =
		useAxios({
			url: "중복체크",
			method: "POST",
		});
	const {
		response: responseForSignup,
		refetch: refetchSignup,
		isLoading,
	} = useAxios({
		url: "회원가입",
		method: "POST",
	});

	const [formValue, setFormvalue] = useState<SignupFormType>({
		email: "",
		password: "",
		passwordCheck: "",
		kindergarden: "",
		kidsName: "",
	});
	const [emailErrorMsg, setEmailErrorMsg] = useState("");
	const [pwErrorMsg, setPwErrorMsg] = useState("");
	const [pwCheckErrorMsg, setPwCheckErrorMsg] = useState("");
	const [isConsented, setIsConsented] = useState<boolean[]>([false, false]);

	const { email, password, passwordCheck, kindergarden, kidsName } = formValue;

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		//signup
		e.preventDefault();
		// refetchSignup();
	};

	const handleChangeInput = (e: ChangeEvent<HTMLFormElement>) => {
		const changed = {
			...formValue,
			[e.target.name]: e.target.value,
		};
		setFormvalue(changed);
	};

	const handleConsent = (index: number) => {
		setIsConsented((prev) =>
			prev.map((item, idx) => (index === idx ? !item : item)),
		);
	};

	const validateEmail = () => {
		if (email === "") {
			setEmailErrorMsg("");
			return;
		}

		const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
		if (!emailRegex.test(email) && email !== "") {
			setEmailErrorMsg("올바른 이메일 형식이 아닙니다.");
			return;
		}

		//중복체크
		// refetchDuplication();
	};

	const checkPasswordEnable = () => {
		const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;
		return passwordRegex.test(password);
	};

	const validatePassword = () => {
		if (password === "") {
			setPwErrorMsg("");
			return;
		}

		if (checkPasswordEnable()) {
			setPwErrorMsg("사용 가능한 비밀번호입니다.");
		} else {
			setPwErrorMsg("8자 이상 20자 이하의 영문 및 숫자로 입력해주세요.");
		}
	};

	const validatePasswordCheck = () => {
		if (passwordCheck === "") {
			setPwCheckErrorMsg("");
			return;
		}

		if (password !== passwordCheck) {
			setPwCheckErrorMsg("비밀번호가 일치하지 않습니다.");
		} else {
			setPwCheckErrorMsg("비밀번호가 일치합니다.");
		}
	};

	//이메일 사용가능 조건 추가
	const checkSubmitEnable = () =>
		checkPasswordEnable() &&
		password === passwordCheck &&
		kindergarden.trim() &&
		kidsName.trim() &&
		isConsented[0] &&
		isConsented[1];

	useEffect(() => {
		validateEmail();
	}, [email]);

	useEffect(() => {
		validatePassword();
	}, [password]);

	useEffect(() => {
		validatePasswordCheck();
	}, [password, passwordCheck]);

	return (
		<StyledForm onChange={handleChangeInput} onSubmit={handleSubmit}>
			<InputWrapDiv>
				<Input inputProps={{ name: "email", placeholder: "이메일" }} />
				<ErrorSpan>{emailErrorMsg}</ErrorSpan>
			</InputWrapDiv>
			<InputWrapDiv>
				<Input
					inputProps={{
						name: "password",
						placeholder: "비밀번호",
						type: "password",
					}}
				/>
				{<ErrorSpan $isEnable={checkPasswordEnable()}>{pwErrorMsg}</ErrorSpan>}
			</InputWrapDiv>
			<InputWrapDiv>
				<Input
					inputProps={{
						name: "passwordCheck",
						placeholder: "비밀번호 확인",
						type: "password",
					}}
				/>
				{
					<ErrorSpan $isEnable={password === passwordCheck}>
						{pwCheckErrorMsg}
					</ErrorSpan>
				}
			</InputWrapDiv>
			<Input inputProps={{ name: "kindergarden", placeholder: "소속" }} />
			<Input inputProps={{ name: "kidsName", placeholder: "아이 이름" }} />
			<ConsentAreaDiv>
				<ConsentCheckWithDetails
					title="키즈가든 서비스 이용약관 동의"
					handleConsent={() => handleConsent(0)}
					isChecked={isConsented[0]}
				/>
				<ConsentCheckWithDetails
					title="개인정보 수집 이용 동의"
					handleConsent={() => handleConsent(1)}
					isChecked={isConsented[1]}
				/>
			</ConsentAreaDiv>
			<SignupButton disabled={!checkSubmitEnable() || isLoading}>
				{isLoading ? <Loading /> : "회원가입"}
			</SignupButton>
		</StyledForm>
	);
};

export default SignupForm;
