import { Button } from "./MenuWithIcon.style";

interface MenuWithIconProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	icon: any;
	title: string;
}
const MenuWithIcon = ({ icon, title }: MenuWithIconProps) => {
	return (
		<Button>
			{/* {icon} */}
			<div />
			<span>{title}</span>
		</Button>
	);
};

export default MenuWithIcon;
