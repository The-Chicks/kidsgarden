import { Outlet, useLocation } from "react-router-dom";

import Header from "@/components/molecules/Header/Header";
import MenuArea from "@/components/molecules/MenuArea/MenuArea";

const Root = () => {
	const path = useLocation().pathname;

	return (
		<>
			<div style={{ position: "sticky", top: 0 }}>
				<Header />
				{path !== "/" && <MenuArea />}
			</div>
			<Outlet />
		</>
	);
};

export default Root;
