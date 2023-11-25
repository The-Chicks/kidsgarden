import { useSetRecoilState } from "recoil";

import AnnouncementItem from "@/components/Molecules/AnnouncementItem/AnnouncementItem";
import { modalState } from "@/recoil/atoms/modal";

import { AreaDiv, ContainerSection } from "./AnnouncementArea.style";

export const itemList = [
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
	const setModalState = useSetRecoilState(modalState);

	return (
		<ContainerSection>
			<h2>공지사항</h2>
			<AreaDiv>
				{itemList.map(({ id, title, content }) => (
					<AnnouncementItem
						key={id}
						title={title}
						content={content}
						onClick={() =>
							setModalState({ openStatus: "ANNOUNCEMENT", announcementId: id })
						}
					/>
				))}
			</AreaDiv>
		</ContainerSection>
	);
};

export default AnnouncementArea;
