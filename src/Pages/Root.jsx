import { Outlet, useLocation } from "react-router-dom";

import Header from "@/components/molecules/Header/Header";
import MenuArea from "@/components/molecules/MenuArea/MenuArea";

const Root = () => {
	const path = useLocation().pathname;
	const hasNavigation =
		path !== "/" &&
		!path.includes("inquiry/") &&
		!path.includes("create-inquiry");

	return (
		<>
			<div style={{ position: "sticky", top: 0, zIndex: 99 }}>
				<Header />
				{hasNavigation && <MenuArea />}
			</div>
			<Outlet />
		</>
	);
};

export default Root;
