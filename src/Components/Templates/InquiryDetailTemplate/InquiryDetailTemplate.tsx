import {
	ContentP,
	InfoDiv,
	ParentCard,
	TeacherCard,
	TitleDiv,
} from "./InquiryDetailTemplate.style";

const info = {
	id: 1,
	title: "선생님 우리 아이 유치원 옮김 문의드립니다.",
	content:
		"남편이 직장을 지방으로 발령받게 되어서 부득이하게 아이가 유치원을 그만 다니게 되었네요ㅠㅠ 그 동안 정말 감사했습니다 선생님. 여기에 문의를 남기면 될까요?",
	isAnswered: true,
	createdAt: "2023.09.01",
	teacherContent:
		"안녕하세요 어머님 :) 문의 주신 내용 잘 확인했습니다. 서준이가 유치원에서 친구들이랑 정말 잘 어울리고 귀여워서 저도 서준이 보면서 정말 행복했던 기억이 있네요! 착한 서준이가 그만 둔다니 아쉬운 마음이 있지만, 서준이는 어디 가서든 잘 적응할 거예요! 서준이 가족 이사 가서도 항상 행복한 일만 가득했으면 좋겠습니다! 제가 원장님께 잘 말씀드릴게요 :) 감사합니다!",
};

const InquiryDetailTemplate = () => {
	const { title, content, isAnswered, createdAt, teacherContent } = info;

	return (
		<div>
			<ParentCard>
				<TitleDiv>
					<span>{title}</span>
					<InfoDiv>
						<span>{isAnswered ? "답변완료" : "답변대기"}</span>
						<span>{createdAt}</span>
					</InfoDiv>
				</TitleDiv>
				<ContentP>{content}</ContentP>
			</ParentCard>
			{isAnswered && <TeacherCard>{teacherContent}</TeacherCard>}
		</div>
	);
};

export default InquiryDetailTemplate;
