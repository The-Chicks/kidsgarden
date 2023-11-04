import styled from "styled-components";

import { convertPxToVw } from "@/utils/convertPxToVw";

export const ContainerDiv = styled.div`
	position: relative;

	& > h1 {
		text-align: center;
		color: ${({ theme }) => theme.color.main_04};
		font-family: kcc-ganpan;
		font-size: 20px;
		margin-bottom: ${convertPxToVw(20)};
	}
`;

export const InquiryAreaDiv = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${convertPxToVw(20)};
`;

export const ButtonWrapDiv = styled.div`
	max-width: calc(600px - ${convertPxToVw(40)});
	width: calc(100% - ${convertPxToVw(40)});
	position: fixed;
	bottom: ${convertPxToVw(20)};
	display: flex;
	justify-content: flex-end;
`;

export const CreateButton = styled.button`
	display: flex;
	align-items: center;
	width: ${convertPxToVw(24)};
	height: ${convertPxToVw(24)};
	padding: ${convertPxToVw(12)};
	border-radius: 50%;
	background-color: ${({ theme }) => theme.color.main_03};
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
	cursor: pointer;
`;
