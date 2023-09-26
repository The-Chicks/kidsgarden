import styled from "styled-components";

import { convertPxToVw } from "../../../utils/convertPxToVw";

export const StyledInput = styled.input`
	border: 1px solid ${({ theme }) => theme.color.gray_02};
	border-radius: ${convertPxToVw(10)};
	color: ${({ theme }) => theme.color.gray_03};
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
