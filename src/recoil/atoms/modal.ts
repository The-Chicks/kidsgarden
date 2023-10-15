import { atom } from "recoil";

import { ModalStatusType } from "@/types/modal";

interface ModalStateType {
	openStatus: ModalStatusType | null;
	announcementId?: number;
}

export const modalState = atom<ModalStateType>({
	key: "modalState",
	default: {
		openStatus: null,
		announcementId: 0,
	},
});
