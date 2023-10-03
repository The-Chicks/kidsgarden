import AlbumArea from "@/components/organisms/AlbumArea/AlbumArea";
import CategoryArea from "@/components/organisms/CategoryArea/CategoryArea";

import { ContainerDiv } from "./MainTemplate.style";

const MainTemplate = () => {
	return (
		<ContainerDiv>
			<CategoryArea />
			<AlbumArea />
		</ContainerDiv>
	);
};

export default MainTemplate;
