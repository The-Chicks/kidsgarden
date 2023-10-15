import ModalComponent from "react-modal";

import { useRecoilValue, useSetRecoilState } from "recoil";

import { modalState } from "@/recoil/atoms/modal";
import { theme } from "@/styles/theme";
import type { ModalPropsType } from "@/types/modal";

import {
	ModalContainerDiv,
	ModalContentMain,
	ModalHeader,
} from "./Modal.style";
import { itemList } from "../AnnouncementArea/AnnouncementArea";

const Modal = ({ children, isOpen }: ModalPropsType) => {
	const closeModal = useSetRecoilState(modalState);

	return (
		<ModalComponent
			isOpen={isOpen}
			onRequestClose={() => closeModal({ openStatus: null })}
			style={{
				overlay: {
					position: "fixed",
					top: 0,
					left: 0,
					zIndex: 1,
					backgroundColor: "rgba(0,0,0,0.5)",
				},
				content: {
					position: "absolute",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					left: "50%",
					top: "50%",
					transform: "translate(-50%, -50%)",
					width: "80%",
					height: "fit-content",
					maxHeight: "80%",
					borderRadius: 8,
					backgroundColor: theme.color.main_03,
					padding: 0,
					overflow: "auto",
				},
			}}
		>
			{children}
		</ModalComponent>
	);
};

export default Modal;

export const AnnouncementModal = () => {
	const { openStatus, announcementId } = useRecoilValue(modalState);

	return (
		<Modal isOpen={openStatus === "ANNOUNCEMENT"}>
			{announcementId && (
				<ModalContainerDiv>
					<ModalHeader>{itemList[announcementId - 1].title}</ModalHeader>
					<ModalContentMain>
						{itemList[announcementId - 1].content}
					</ModalContentMain>
				</ModalContainerDiv>
			)}
		</Modal>
	);
};
