import { FormEvent, useState } from "react";

import { ConsentAreaDiv, SignupButton, StyledForm } from "./SignupForm.style";
import ConsentCheckWithDetails from "../ConsentCheckWithDetails/ConsentCheckWithDetails";
import Input from "../Input/Input";

const SignupForm = () => {
	const [isConsented, setIsConsented] = useState<boolean[]>([false, false]);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		//signup
		e.preventDefault();
	};

	const handleConsent = (index: number) => {
		setIsConsented((prev) =>
			prev.map((item, idx) => (index === idx ? !item : item)),
		);
	};

	return (
		<StyledForm onSubmit={handleSubmit}>
			<Input inputProps={{ placeholder: "이메일" }} />
			<Input inputProps={{ placeholder: "비밀번호", type: "password" }} />
			<Input inputProps={{ placeholder: "비밀번호 확인", type: "password" }} />
			<Input inputProps={{ placeholder: "소속" }} />
			<Input inputProps={{ placeholder: "아이 이름" }} />
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
			<SignupButton>회원가입</SignupButton>
		</StyledForm>
	);
};

export default SignupForm;
