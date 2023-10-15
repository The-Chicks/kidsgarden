import styled from "styled-components";

import { convertPxToVw } from "@/utils/convertPxToVw";

export const ContainerArticle = styled.article`
	background-color: ${({ theme }) => theme.color.main_03};
	padding: ${convertPxToVw(12)};
	border-radius: ${convertPxToVw(10)};
	min-width: ${convertPxToVw(130)};

	.margin {
		margin-top: ${convertPxToVw(12)};
	}

	.line-clamp {
		display: -webkit-box;
		overflow: hidden;
		-webkit-line-clamp: 5;
		-webkit-box-orient: vertical;
	}

	& p {
		font-family: jamsil-400;
		font-size: ${convertPxToVw(12)};
		line-height: 1.2;
		color: ${({ theme }) => theme.color.gray_04};
	}
`;

export const TitleDiv = styled.div`
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	font-family: kcc-ganpan;
	font-size: ${convertPxToVw(14)};
`;
