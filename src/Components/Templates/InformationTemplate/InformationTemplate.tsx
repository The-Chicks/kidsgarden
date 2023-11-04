import { useState } from "react";

import InformationCard from "@/components/molecules/InformationCard/InformationCard";

import { ContainerDiv } from "./InformationTemplate.style";

const informationList = [
	{
		id: 1,
		title:
			"우리 아이가 아픈 것 같다면?우리 아이가 아픈 것 같다면?우리 아이가 아픈 것 같다면?",
		content:
			"우리 아이가 아픈 것 같다면, 아이에게 증상을 자세히 물어보세요. 아이가 불편함을 호소하는지 확인한 후, 함께 병원에 가보시는 것을 추천드려요! 아이는 자신이 어디가 아픈지 정확히 모를 수 있기 때문에 보호자께서 정확히 알아내시는 것이 중요합니다.",
	},
	{
		id: 2,
		title:
			"우리 아이가 아픈 것 같다면?우리 아이가 아픈 것 같다면?우리 아이가 아픈 것 같다면?",
		content:
			"우리 아이가 아픈 것 같다면, 아이에게 증상을 자세히 물어보세요. 아이가 불편함을 호소하는지 확인한 후, 함께 병원에 가보시는 것을 추천드려요! 아이는 자신이 어디가 아픈지 정확히 모를 수 있기 때문에 보호자께서 정확히 알아내시는 것이 중요합니다.",
	},
	{
		id: 3,
		title:
			"우리 아이가 아픈 것 같다면?우리 아이가 아픈 것 같다면?우리 아이가 아픈 것 같다면?",
		content:
			"우리 아이가 아픈 것 같다면, 아이에게 증상을 자세히 물어보세요. 아이가 불편함을 호소하는지 확인한 후, 함께 병원에 가보시는 것을 추천드려요! 아이는 자신이 어디가 아픈지 정확히 모를 수 있기 때문에 보호자께서 정확히 알아내시는 것이 중요합니다.",
	},
];

const InformationTemplate = () => {
	const [openedInfo, setOpenedInfo] = useState<number | null>(null);

	return (
		<ContainerDiv>
			{informationList.map(({ id, title, content }) => (
				<InformationCard
					key={id}
					title={title}
					content={content}
					onClick={() => setOpenedInfo((prev) => (prev === id ? null : id))}
					isOpened={openedInfo === id}
				/>
			))}
		</ContainerDiv>
	);
};

export default InformationTemplate;
