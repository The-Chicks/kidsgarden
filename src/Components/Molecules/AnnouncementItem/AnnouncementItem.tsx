import type { AnnouncementType } from "@/types/message";

import { ContainerArticle, TitleDiv } from "./AnnouncementItem.style";

const AnnouncementItem = ({ title, content }: AnnouncementType) => {
	return (
		<ContainerArticle>
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
