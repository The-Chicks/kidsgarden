import { useState } from "react";

import moment from "moment";
import "moment/locale/ko";

import { ReactComponent as Arrow } from "@/assets/icon/ic-calendar-arrow.svg";
import MealMenuArea from "@/components/organisms/MealMenuArea";

import {
	ArrowButton,
	ContainerDiv,
	DateContainerDiv,
} from "./MealMenuTemplate.style";

const MealMenuTemplate = () => {
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
			<MealMenuArea />
		</ContainerDiv>
	);
};

export default MealMenuTemplate;
