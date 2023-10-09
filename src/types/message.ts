export interface AnnouncementType {
	title: string;
	content: string;
}

export interface NotificationType extends AnnouncementType {
	images?: string[];
}
