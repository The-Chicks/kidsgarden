import Input from "@/components/molecules/Input/Input";

import { ContainerDiv, FormDiv, StyledButton } from "./ProfileTemplate.style";

const ProfileTemplate = () => {
	return (
		<ContainerDiv>
			<h2>정보 수정</h2>
			<FormDiv>
				<Input title="이메일" />
				<Input title="아이 이름" />
				<Input title="소속" />
				<Input title="비밀번호" />
				<Input title="비밀번호 확인" />
				<StyledButton>수정</StyledButton>
			</FormDiv>
		</ContainerDiv>
	);
};

export default ProfileTemplate;
