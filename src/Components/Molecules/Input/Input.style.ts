import styled from "styled-components";

import { convertPxToVw } from "@/utils/convertPxToVw";

export const ContainerDiv = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${convertPxToVw(8)};
	font-family: KCC-Ganpan;
	font-size: ${convertPxToVw(16)};
	width: 100%;
`;

export const StyledInput = styled.input`
	border: 1px solid ${({ theme }) => theme.color.gray_02};
	border-radius: ${convertPxToVw(10)};
	color: ${({ theme }) => theme.color.gray_04};
	padding: ${convertPxToVw(10)};
	font-size: ${convertPxToVw(16)};
	line-height: 1.5;
	font-family: jamsil-400;
	outline: none;

	&:focus {
		border-color: ${({ theme }) => theme.color.main_04};
	}

	&::placeholder {
		color: ${({ theme }) => theme.color.gray_02};
	}
`;
