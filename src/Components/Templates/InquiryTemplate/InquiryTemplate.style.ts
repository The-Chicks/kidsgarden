import styled from "styled-components";

import { convertPxToVw } from "@/utils/convertPxToVw";

export const ContainerDiv = styled.div`
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
