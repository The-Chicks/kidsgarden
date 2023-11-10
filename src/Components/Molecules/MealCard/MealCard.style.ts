import styled from "styled-components";

import { convertPxToVw } from "@/utils/convertPxToVw";

export const ContainerDiv = styled.div`
	display: flex;
	padding: ${convertPxToVw(20)} 0;
	width: 100%;
	border-bottom: 1px solid ${({ theme }) => theme.color.gray_02};
`;

export const MealTypeDiv = styled.div`
	writing-mode: vertical-lr;
	font-family: kcc-ganpan;
	font-size: ${convertPxToVw(14)};
	text-align: center;
	padding: 0 ${convertPxToVw(8)};
`;

export const MenuDiv = styled.div`
	padding: 0 ${convertPxToVw(20)};
	width: calc(100% - ${convertPxToVw(70)});

	& > p {
		margin-bottom: ${convertPxToVw(20)};
		font-family: jamsil-400;
		font-size: ${convertPxToVw(14)};
		text-align: center;
		line-height: 1.3;
	}
`;

export const ImageContainerDiv = styled.div`
	display: flex;
	align-items: center;
	gap: ${convertPxToVw(12)};
	overflow: auto;

	&::-webkit-scrollbar {
		display: none;
	}

	& > img {
		width: ${convertPxToVw(90)};
		height: ${convertPxToVw(90)};
		object-fit: cover;
		border-radius: ${convertPxToVw(10)};
	}
`;
