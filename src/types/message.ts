export interface AnnouncementType {
	title: string;
	content: string;
	onClick: () => void;
}

export interface NotificationType {
	title: string;
	content: string;
	images?: string[];
}
