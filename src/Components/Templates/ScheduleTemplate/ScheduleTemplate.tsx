import { useState } from "react";

import moment from "moment";
import "moment/locale/ko";

import { ReactComponent as Arrow } from "@/assets/icon/ic-calendar-arrow.svg";
import ScheduleArea from "@/components/organisms/ScheduleArea";

import {
	ArrowButton,
	ContainerDiv,
	DateContainerDiv,
} from "./ScheduleTemplate.style";

const ScheduleTemplate = () => {
	moment.locale("ko");
	const [currentDate, setCurrentDate] = useState(moment());

	const decreaseDate = () => {
		setCurrentDate(currentDate.clone().subtract(1, "day"));
	};

	const increaseDate = () => {
		setCurrentDate(currentDate.clone().add(1, "day"));
	};

	return (
		<ContainerDiv>
			<DateContainerDiv>
				<ArrowButton onClick={decreaseDate}>
					<Arrow style={{ transform: "scaleX(-1)" }} />
				</ArrowButton>
				<span>{currentDate.format("MMMM Do")}</span>
				<ArrowButton onClick={increaseDate}>
					<Arrow />
				</ArrowButton>
			</DateContainerDiv>
			<ScheduleArea />
		</ContainerDiv>
	);
};

export default ScheduleTemplate;
