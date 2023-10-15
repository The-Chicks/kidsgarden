import styled from "styled-components";

import { convertPxToVw } from "@/utils/convertPxToVw";

export const Button = styled.button`
	display: flex;
	flex-direction: column;
	align-items: center;

	& > svg {
		width: ${convertPxToVw(70)};
		height: ${convertPxToVw(70)};
	}

	& > div {
		width: ${convertPxToVw(70)};
		height: ${convertPxToVw(70)};
		background-color: ${({ theme }) => theme.color.main_03};
	}

	& > span {
		font-family: KCC-Ganpan;
		font-size: ${convertPxToVw(14)};
		padding: ${convertPxToVw(12)} 0;
	}
`;
