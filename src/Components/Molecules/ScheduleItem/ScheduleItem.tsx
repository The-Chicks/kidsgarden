import { ContainerArticle, TextDiv, TimeDiv } from "./ScheduleItem.style";

const ScheduleItem = ({ text }: { text: string }) => {
	return (
		<ContainerArticle>
			<TimeDiv>8</TimeDiv>
			<TextDiv>{text}</TextDiv>
		</ContainerArticle>
	);
};

export default ScheduleItem;
