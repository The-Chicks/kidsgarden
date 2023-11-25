import { ContainerArticle, TextDiv, TimeDiv } from "./ScheduleItem.style";

const ScheduleItem = ({ text, time }: { text: string; time: number }) => {
	return (
		<ContainerArticle>
			<TimeDiv>{time}</TimeDiv>
			<TextDiv>{text}</TextDiv>
		</ContainerArticle>
	);
};

export default ScheduleItem;
