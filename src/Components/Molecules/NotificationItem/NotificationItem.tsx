import type { NotificationType } from "@/types/message";

import {
	ContainerArticle,
	ContentDiv,
	ImageAreaDiv,
	TitleDiv,
} from "./NotificationItem.style";

const NotificationItem = ({ title, content, images }: NotificationType) => {
	return (
		<ContainerArticle>
			<TitleDiv>{title}</TitleDiv>
			<ContentDiv>
				<p>{content}</p>
				<ImageAreaDiv>
					{images?.map((src, idx) => (
						<img key={idx} src={src} alt="kids-image" />
					))}
				</ImageAreaDiv>
			</ContentDiv>
		</ContainerArticle>
	);
};

export default NotificationItem;
