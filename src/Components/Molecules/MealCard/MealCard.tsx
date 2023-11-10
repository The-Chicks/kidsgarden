import type { MealCardType } from "@/types/card";

import {
	ContainerDiv,
	ImageContainerDiv,
	MealTypeDiv,
	MenuDiv,
} from "./MealCard.style";

const MealCard = ({ type, menu, imageList }: MealCardType) => {
	const getMealType = () => {
		switch (type) {
			case "MORNING_SNACK":
				return "오전간식";
			case "LUNCH":
				return "점심";
			case "AFTERNOON_SNACK":
				return "오후간식";
		}
	};

	return (
		<ContainerDiv>
			<MealTypeDiv>{getMealType()}</MealTypeDiv>
			<MenuDiv>
				<p>{menu}</p>
				<ImageContainerDiv>
					{imageList?.map((src, idx) => (
						<img key={idx} src={src} alt={`image-${idx}`} />
					))}
				</ImageContainerDiv>
			</MenuDiv>
		</ContainerDiv>
	);
};

export default MealCard;
