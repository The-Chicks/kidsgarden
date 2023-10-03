import { useRecoilValue } from "recoil";

import AlbumArea from "@/components/organisms/AlbumArea/AlbumArea";
import CategoryArea from "@/components/organisms/CategoryArea/CategoryArea";
import { userState } from "@/recoil/atoms/user";

import { ContainerDiv } from "./MainTemplate.style";

const MainTemplate = () => {
	const userInfo = useRecoilValue(userState);
	console.log(userInfo);
	return (
		<ContainerDiv>
			<CategoryArea />
			<AlbumArea />
		</ContainerDiv>
	);
};

export default MainTemplate;
