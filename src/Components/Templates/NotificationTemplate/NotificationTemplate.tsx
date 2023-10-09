import AnnouncementArea from "@/components/organisms/AnnouncementArea/AnnouncementArea";
import NotificationArea from "@/components/organisms/NotificationArea/NotificationArea";

import { NotificationWrapDiv } from "./NotificationTemplate.style";

const MessageTemplate = () => {
	return (
		<>
			<AnnouncementArea />
			<NotificationWrapDiv>
				<NotificationArea />
			</NotificationWrapDiv>
		</>
	);
};

export default MessageTemplate;
