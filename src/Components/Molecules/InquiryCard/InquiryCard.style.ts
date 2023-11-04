import styled from "styled-components";

import { convertPxToVw } from "@/utils/convertPxToVw";

export const InquiryArticle = styled.article`
	background-color: ${({ theme }) => theme.color.main_03};
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
	border-radius: ${convertPxToVw(10)};
	padding: ${convertPxToVw(16)} ${convertPxToVw(20)};
	display: flex;
	justify-content: space-between;
`;

export const TitleDiv = styled.div`
	font-family: kcc-ganpan;
	font-size: ${convertPxToVw(16)};
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const InfoDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	font-family: jamsil-400;
	font-size: ${convertPxToVw(14)};
	gap: ${convertPxToVw(40)};
`;
