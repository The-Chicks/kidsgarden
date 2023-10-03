import styled from "styled-components";

import { convertPxToVw } from "@/utils/convertPxToVw";

export const ContainerArticle = styled.article`
	width: 100%;
	border: 1px solid ${({ theme }) => theme.color.gray_02};
	border-radius: 10px;
	overflow: hidden;
	cursor: pointer;

	& > img {
		width: 100%;
	}
`;

export const ContentDiv = styled.div`
	padding: ${convertPxToVw(12)} ${convertPxToVw(20)};
	font-family: jamsil-400;
`;

export const TitleSpan = styled.span`
	color: ${({ theme }) => theme.color.main_04};
	font-size: ${convertPxToVw(16)};
`;

export const ContentP = styled.p`
	margin-top: ${convertPxToVw(12)};
	font-size: ${convertPxToVw(12)};
`;

export const DateDiv = styled.div`
	margin-top: ${convertPxToVw(20)};
	text-align: right;

	& > span {
		color: ${({ theme }) => theme.color.gray_03};
		font-size: ${convertPxToVw(12)};
	}
`;
