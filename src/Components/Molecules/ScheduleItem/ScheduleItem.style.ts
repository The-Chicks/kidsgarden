import styled from "styled-components";

import { convertPxToVw } from "@/utils/convertPxToVw";

export const ContainerArticle = styled.article`
	display: flex;
	padding: ${convertPxToVw(28)} 0;
	border-bottom: 1px solid ${({ theme }) => theme.color.gray_02};
	font-size: ${convertPxToVw(14)};
`;

export const TimeDiv = styled.div`
	font-family: kcc-ganpan;
	text-align: center;
	padding: 0 ${convertPxToVw(8)};
`;

export const TextDiv = styled.div`
	padding: 0 ${convertPxToVw(20)};
	width: 100%;
	font-family: jamsil-400;
	line-height: 1.2;
`;
