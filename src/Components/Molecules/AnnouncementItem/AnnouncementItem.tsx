import type { AnnouncementType } from "@/types/message";

import { ContainerArticle, TitleDiv } from "./AnnouncementItem.style";

const AnnouncementItem = ({ title, content, onClick }: AnnouncementType) => {
	return (
		<ContainerArticle onClick={onClick}>
			<TitleDiv>
				<span>{title}</span>
			</TitleDiv>
			<div className="margin">
				<div className="line-clamp">
					<p>{content}</p>
				</div>
			</div>
		</ContainerArticle>
	);
};

export default AnnouncementItem;
