import AlbumItem from "@/components/molecules/AlbumItem/AlbumItem";

import { ContainerSection } from "./AlbumArea.style";

const AlbumArea = () => {
	return (
		<ContainerSection>
			<h2>앨범</h2>
			<AlbumItem />
		</ContainerSection>
	);
};

export default AlbumArea;
