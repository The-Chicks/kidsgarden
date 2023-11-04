import { Link } from "react-router-dom";

import InquiryCard from "@/components/molecules/InquiryCard/InquiryCard";

import { ContainerDiv, InquiryAreaDiv } from "./InquiryTemplate.style";

const cardList = [
	{
		id: 1,
		title: "선생님 우리 아이 유치원 옮김 문의드립니다.",
		isAnswered: true,
		createdAt: "2023.09.01",
	},
	{
		id: 2,
		title: "선생님 조퇴 관련해서 문의드립니다.",
		isAnswered: false,
		createdAt: "2023.09.01",
	},
	{
		id: 3,
		title: "선생님 문의드립니다.",
		isAnswered: true,
		createdAt: "2023.09.01",
	},
	{
		id: 4,
		title: "선생님 문의드립니다.",
		isAnswered: true,
		createdAt: "2023.09.01",
	},
];

const InquiryTemplate = () => {
	return (
		<ContainerDiv>
			<h1>내 대화</h1>
			<InquiryAreaDiv>
				{cardList.map(({ id, title, isAnswered, createdAt }) => (
					<Link to={`/inquiry/${id}`}>
						<InquiryCard
							key={id}
							title={title}
							isAnswered={isAnswered}
							createdAt={createdAt}
						/>
					</Link>
				))}
			</InquiryAreaDiv>
		</ContainerDiv>
	);
};

export default InquiryTemplate;
