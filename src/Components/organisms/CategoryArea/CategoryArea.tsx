import { ReactComponent as Logo } from "@/assets/icon/ic-logo.svg";
import CategoryWithMenu from "@/components/molecules/CategoryWithMenu/CategoryWithMenu";

import { ContainerSection } from "./CategoryArea.style";

const categories = [
	{ icon: <Logo />, title: "알림장" },
	{ icon: <Logo />, title: "앨범" },
	{ icon: <Logo />, title: "일정표" },
	{ icon: <Logo />, title: "식단" },
	{ icon: <Logo />, title: "등원정보" },
	{ icon: <Logo />, title: "선생님 대화" },
	{ icon: <Logo />, title: "출석표" },
	{ icon: <Logo />, title: "성장 기록" },
];

const CategoryArea = () => {
	return (
		<ContainerSection>
			{categories.map(({ icon, title }, idx) => (
				<CategoryWithMenu key={idx} icon={icon} title={title} />
			))}
		</ContainerSection>
	);
};

export default CategoryArea;
