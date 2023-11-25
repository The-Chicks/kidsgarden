import { Link, useLocation } from "react-router-dom";

import Menu from "@/components/Atoms/Menu/Menu";

import { ContainerSection } from "./MenuArea.style";

const categories = [
	{ title: "알림장", path: "/notification" },
	{ title: "앨범", path: "/album" },
	{ title: "일정표", path: "/schedule" },
	{ title: "식단", path: "/menu-board" },
	{ title: "선생님 대화", path: "/inquiry" },
	{ title: "출석표", path: "/attendance" },
	{ title: "성장 기록", path: "/growth-record" },
];

const MenuArea = () => {
	const pathname = useLocation().pathname;

	return (
		<ContainerSection>
			{categories.map(({ title, path }, idx) => (
				<Link to={path} key={idx}>
					<Menu title={title} isSelected={pathname === path} />
				</Link>
			))}
		</ContainerSection>
	);
};

export default MenuArea;
