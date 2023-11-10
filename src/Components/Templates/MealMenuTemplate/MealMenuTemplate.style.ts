import styled from "styled-components";

import { convertPxToVw } from "@/utils/convertPxToVw";

export const ContainerDiv = styled.div``;

export const DateContainerDiv = styled.div`
	padding: ${convertPxToVw(20)};
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-family: kcc-ganpan;
	font-size: ${convertPxToVw(28)};
	color: ${({ theme }) => theme.color.main_04};
	border-bottom: 1px solid ${({ theme }) => theme.color.gray_02};
`;

export const ArrowButton = styled.button`
	cursor: pointer;
`;
