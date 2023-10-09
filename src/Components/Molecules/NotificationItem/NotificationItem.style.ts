import styled from "styled-components";

import { convertPxToVw } from "@/utils/convertPxToVw";

export const ContainerArticle = styled.article`
	border: 1px solid ${({ theme }) => theme.color.gray_02};
	border-radius: ${convertPxToVw(20)};
	overflow: hidden;
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const TitleDiv = styled.div`
	font-family: kcc-ganpan;
	font-size: ${convertPxToVw(14)};
	background-color: ${({ theme }) => theme.color.main_03};
	text-align: center;
	padding: ${convertPxToVw(20)};
	border-bottom: 1px solid ${({ theme }) => theme.color.gray_02};
	line-height: 1.2;
`;

export const ContentDiv = styled.div`
	font-family: jamsil-400;
	font-size: ${convertPxToVw(12)};
	color: ${({ theme }) => theme.color.gray_04};
	padding: ${convertPxToVw(20)};
	line-height: 1.2;
`;

export const ImageAreaDiv = styled.div`
	display: flex;
	align-items: center;
	gap: ${convertPxToVw(12)};
	margin-top: ${convertPxToVw(24)};
	overflow: auto;

	&::-webkit-scrollbar {
		display: none;
	}

	& > img {
		width: ${convertPxToVw(100)};
		height: ${convertPxToVw(100)};
		border-radius: ${convertPxToVw(10)};
		object-fit: cover;
	}
`;
