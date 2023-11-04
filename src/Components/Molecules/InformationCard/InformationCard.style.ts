import styled from "styled-components";

import { convertPxToVw } from "@/utils/convertPxToVw";

export const InformationArticle = styled.article`
	background-color: ${({ theme }) => theme.color.main_03};
	border-radius: ${convertPxToVw(10)};
	padding: ${convertPxToVw(20)};
`;

export const ArticleHeader = styled.header<{ isOpened: boolean }>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;

	& > h2 {
		font-size: ${convertPxToVw(16)};
		font-family: kcc-ganpan;
	}

	& > svg {
		width: ${convertPxToVw(40)};
		transform: ${({ isOpened }) =>
			isOpened ? "rotate(270deg)" : "rotate(90deg)"};
		transition: transform 0.5s ease;
	}
`;

export const ArticleMain = styled.main`
	margin-top: ${convertPxToVw(20)};
	font-family: jamsil-300;
	line-height: 1.2;
`;
