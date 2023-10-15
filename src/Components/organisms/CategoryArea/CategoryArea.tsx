import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "@/assets/icon/ic-logo.svg";
import MenuWithIcon from "@/components/molecules/MenuWithIcon/MenuWithIcon";

import { ContainerSection } from "./CategoryArea.style";

const categories = [
	{ icon: <Logo />, title: "알림장", path: "/notification" },
	{ icon: <Logo />, title: "앨범", path: "/album" },
	{ icon: <Logo />, title: "일정표", path: "/calendar" },
	{ icon: <Logo />, title: "식단", path: "/menu-board" },
	{ icon: <Logo />, title: "등원정보", path: "/information" },
	{ icon: <Logo />, title: "선생님 대화", path: "/inquiry" },
	{ icon: <Logo />, title: "출석표", path: "/attendance" },
	{ icon: <Logo />, title: "성장 기록", path: "/growth-record" },
];

const CategoryArea = () => {
	return (
		<ContainerSection>
			{categories.map(({ icon, title, path }, idx) => (
				<Link to={path} key={idx}>
					<MenuWithIcon icon={icon} title={title} />
				</Link>
			))}
		</ContainerSection>
	);
};

export default CategoryArea;
