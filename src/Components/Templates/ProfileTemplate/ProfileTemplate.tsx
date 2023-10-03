import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";

import { useRecoilState } from "recoil";

import Input from "@/components/molecules/Input/Input";
import { userState } from "@/recoil/atoms/user";

import {
	ContainerDiv,
	StyledButton,
	StyledForm,
} from "./ProfileTemplate.style";
const ProfileTemplate = () => {
	const [userInfo, setUserInfo] = useRecoilState(userState);
	const { email, kidsName, kindergarden, password } = userInfo;

	const [newValues, setNewValues] = useState({
		email,
		kidsName,
		kindergarden,
		password,
		passwordCheck: "",
	});

	const handleChangeInput = (e: ChangeEvent<HTMLFormElement>) => {
		const changed = {
			...newValues,
			[e.target.name]: e.target.value,
		};
		setNewValues(changed);
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setUserInfo({
			email: newValues.email,
			kidsName: newValues.kidsName,
			kindergarden: newValues.kindergarden,
			password: newValues.password,
		});
		toast.success("정보가 수정되었습니다.");
	};

	return (
		<ContainerDiv>
			<h2>정보 수정</h2>
			<StyledForm onChange={handleChangeInput} onSubmit={handleSubmit}>
				<Input
					title="이메일"
					inputProps={{ defaultValue: email, name: "email" }}
				/>
				<Input
					title="아이 이름"
					inputProps={{ defaultValue: kidsName, name: "kidsName" }}
				/>
				<Input
					title="소속"
					inputProps={{ defaultValue: kindergarden, name: "kindergarden" }}
				/>
				<Input title="새 비밀번호" inputProps={{ name: "password" }} />
				<Input
					title="새 비밀번호 확인"
					inputProps={{ name: "passwordCheck" }}
				/>
				<StyledButton>수정</StyledButton>
			</StyledForm>
		</ContainerDiv>
	);
};

export default ProfileTemplate;
