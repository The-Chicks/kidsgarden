import type { AlbumItemType } from "@/types/card";

import {
	ContainerArticle,
	ContentDiv,
	ContentP,
	DateDiv,
	TitleSpan,
} from "./AlbumItem.style";

const AlbumItem = ({ title, content, src, createdAt }: AlbumItemType) => {
	return (
		<ContainerArticle>
			<img src={src} alt="img" />
			<ContentDiv>
				<TitleSpan>{title}</TitleSpan>
				<ContentP>{content}</ContentP>
				<DateDiv>
					<span>{createdAt}</span>
				</DateDiv>
			</ContentDiv>
		</ContainerArticle>
	);
};

export default AlbumItem;
