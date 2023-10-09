import { ContainerDiv } from "./Menu.style";

const Menu = ({
	title,
	isSelected,
}: {
	title: string;
	isSelected: boolean;
}) => {
	return <ContainerDiv $isSelected={isSelected}>{title}</ContainerDiv>;
};

export default Menu;
