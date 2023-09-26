import { ReactComponent as LogoIcon } from "@/Assets/icon/ic-logo.svg";
import { ReactComponent as ProfileIcon } from "@/Assets/icon/ic-profile.svg";

import { ContainerHeader } from "./Header.style";

const Header = () => {
	return (
		<ContainerHeader>
			<LogoIcon className="logo-icon" />
			<ProfileIcon className="profile-icon" />
		</ContainerHeader>
	);
};

export default Header;
