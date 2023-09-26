import styled from "styled-components";

import { convertPxToVw } from "../../../utils/convertPxToVw";

export const ContainerDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: ${convertPxToVw(14)};

	& > span {
		color: ${({ theme }) => theme.color.gray_02};
		text-decoration: underline;
		cursor: pointer;
	}
`;

export const ConsentDiv = styled.div`
	width: fit-content;
	display: flex;
	align-items: center;
	cursor: pointer;

	& > div {
		width: ${convertPxToVw(30)};
		height: ${convertPxToVw(30)};
		border: 1px solid ${({ theme }) => theme.color.main_04};
		border-radius: 50%;

		& > svg {
			width: ${convertPxToVw(30)};
			height: ${convertPxToVw(30)};
		}
	}

	& > span {
		margin-left: ${convertPxToVw(20)};
	}
`;
