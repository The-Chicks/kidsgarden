import { useNavigate } from "react-router-dom";

import {
	ButtonWrapDiv,
	ContentDiv,
	ContentTextarea,
	InquiryWrapDiv,
	TitleDiv,
	TitleInput,
} from "./InquiryCreateTemplate.style";

const InquiryCreateTemplate = () => {
	const navigate = useNavigate();

	return (
		<>
			<InquiryWrapDiv>
				<TitleDiv>
					<TitleInput placeholder="제목을 입력하세요." />
				</TitleDiv>
				<ContentDiv>
					<ContentTextarea placeholder="대화 내용을 입력하세요." />
				</ContentDiv>
			</InquiryWrapDiv>
			<ButtonWrapDiv>
				<button>등록</button>
				<button onClick={() => navigate(-1)}>취소</button>
			</ButtonWrapDiv>
		</>
	);
};

export default InquiryCreateTemplate;
