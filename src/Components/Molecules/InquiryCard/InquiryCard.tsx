import type { InquiryCardType } from "@/types/card";

import { InfoDiv, InquiryArticle, TitleDiv } from "./InquiryCard.style";

const InquiryCard = ({ title, isAnswered, createdAt }: InquiryCardType) => {
	return (
		<InquiryArticle>
			<TitleDiv>{title}</TitleDiv>
			<InfoDiv>
				<span>{isAnswered ? "답변완료" : "답변대기"}</span>
				<span>{createdAt}</span>
			</InfoDiv>
		</InquiryArticle>
	);
};

export default InquiryCard;
