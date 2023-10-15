import { ReactNode } from "react";

export interface ModalPropsType {
	children: ReactNode;
	isOpen: boolean;
}

export type ModalStatusType = "ANNOUNCEMENT";
