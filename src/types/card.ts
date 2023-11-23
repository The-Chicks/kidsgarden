export interface InquiryCardType {
	title: string;
	isAnswered: boolean;
	createdAt: string;
}

export interface MealCardType {
	type: "MORNING_SNACK" | "LUNCH" | "AFTERNOON_SNACK";
	menu: string;
	imageList?: string[];
}

export interface AlbumItemType {
	title: string;
	content: string;
	src: string;
	createdAt: string;
}
