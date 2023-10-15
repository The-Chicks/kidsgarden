import styled from "styled-components";

import { convertPxToVw } from "@/utils/convertPxToVw";

export const ModalContainerDiv = styled.div`
	padding: ${convertPxToVw(20)};
	line-height: 1.2;
`;

export const ModalHeader = styled.header`
	font-family: kcc-ganpan;
	font-size: ${convertPxToVw(16)};
`;

export const ModalContentMain = styled.main`
	margin-top: ${convertPxToVw(16)};
	font-family: jamsil-400;
	font-size: ${convertPxToVw(14)};
	color: ${({ theme }) => theme.color.gray_04};
`;
