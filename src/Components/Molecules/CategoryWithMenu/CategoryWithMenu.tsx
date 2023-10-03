import { Button } from "./CategoryWithMenu.style";

interface CategoryWithMenuProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	icon: any;
	title: string;
}
const CategoryWithMenu = ({ icon, title }: CategoryWithMenuProps) => {
	return (
		<Button>
			{/* {icon} */}
			<div />
			<span>{title}</span>
		</Button>
	);
};

export default CategoryWithMenu;
