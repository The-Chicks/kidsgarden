import { Link } from "react-router-dom";

import AnnouncementItem from "@/components/molecules/AnnouncementItem/AnnouncementItem";

import { AreaDiv, ContainerSection } from "./AnnouncementArea.style";

const itemList = [
	{
		id: 1,
		title: "유치원공지입니다공지입니다공지입니다공지입니다공지입니다",
		content:
			"유치원 공지 내용입ㄴ다.유치원 공지 내용입ㄴ다.유치원공지내용입ㄴ다.유치원 공지 내용입ㄴ다.유치원 공지내용입ㄴ다.유치원 공지fsdfsdsdfsdfsfsd",
	},
	{
		id: 2,
		title: "유치원공지입니다공지입니다공지입니다공지입니다공지입니다",
		content: "유치원 공지 내용입ㄴ다.",
	},
	{
		id: 3,
		title: "유치원공지입니다공지입니다공지입니다공지입니다공지입니다",
		content:
			"유치원 공지 내용입ㄴ다.유치원 공지 내용입ㄴ다.유치원공지내용입ㄴ다.유치원 공지 내용입ㄴ다.유치원 공지내용입ㄴ다.유치원 공지",
	},
	{
		id: 4,
		title: "유치원공지입니다공지입니다공지입니다공지입니다공지입니다",
		content:
			"유치원 공지 내용입ㄴ다.유치원 공지 내용입ㄴ다.유치원공지내용입ㄴ다.유치원 공지 내용입ㄴ다.유치원 공지내용입ㄴ다.유치원 공지",
	},
	{
		id: 5,
		title: "유치원공지입니다공지입니다공지입니다공지입니다공지입니다",
		content:
			"유치원 공지 내용입ㄴ다.유치원 공지 내용입ㄴ다.유치원공지내용입ㄴ다.유치원 공지 내용입ㄴ다.유치원 공지내용입ㄴ다.유치원 공지",
	},
];

const AnnouncementArea = () => {
	return (
		<ContainerSection>
			<h2>공지사항</h2>
			<AreaDiv>
				{itemList.map(({ id, title, content }) => (
					<Link key={id} to={`/announcement/${id}`}>
						<AnnouncementItem title={title} content={content} />
					</Link>
				))}
			</AreaDiv>
		</ContainerSection>
	);
};

export default AnnouncementArea;
