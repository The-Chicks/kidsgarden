import styled from "styled-components";

import { convertPxToVw } from "../../../utils/convertPxToVw";

export const ContainerDiv = styled.div`
	padding: ${convertPxToVw(40)} 0;
	text-align: center;
	border-radius: ${convertPxToVw(30)};
	background-color: ${({ theme }) => theme.color.main_03};

	& > h1 {
		font-size: ${convertPxToVw(30)};
		line-height: 2;
	}

	& > h2 {
		margin-top: ${convertPxToVw(16)};
		font-size: ${convertPxToVw(14)};
		line-height: 2.5;
	}
`;
