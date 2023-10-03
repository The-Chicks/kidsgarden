import { Link } from "react-router-dom";

import { ReactComponent as LogoIcon } from "@/assets/icon/ic-logo.svg";
import { ReactComponent as ProfileIcon } from "@/assets/icon/ic-profile.svg";

import { ContainerHeader } from "./Header.style";

const Header = () => {
	return (
		<ContainerHeader>
			<LogoIcon className="logo-icon" />
			<Link to="/profile">
				<ProfileIcon className="profile-icon" />
			</Link>
		</ContainerHeader>
	);
};

export default Header;
