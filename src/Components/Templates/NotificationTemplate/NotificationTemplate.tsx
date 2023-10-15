import AnnouncementArea from "@/components/organisms/AnnouncementArea/AnnouncementArea";
import { AnnouncementModal } from "@/components/organisms/Modal/Modal";
import NotificationArea from "@/components/organisms/NotificationArea/NotificationArea";

import { NotificationWrapDiv } from "./NotificationTemplate.style";

const NotificationTemplate = () => {
	return (
		<>
			<AnnouncementArea />
			<NotificationWrapDiv>
				<NotificationArea />
			</NotificationWrapDiv>
			<AnnouncementModal />
		</>
	);
};

export default NotificationTemplate;
