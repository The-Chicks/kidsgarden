import styled from "styled-components";

import { convertPxToVw } from "@/utils/convertPxToVw";

export const ParentCard = styled.article`
	background-color: ${({ theme }) => theme.color.main_01};
	border-radius: ${convertPxToVw(10)};
`;

export const TeacherCard = styled.article`
	margin-top: ${convertPxToVw(36)};
	background-color: ${({ theme }) => theme.color.main_03};
	border-radius: ${convertPxToVw(10)};
	padding: ${convertPxToVw(20)};
	font-family: jamsil-400;
	font-size: ${convertPxToVw(14)};
	line-height: 1.5;
`;

export const TitleDiv = styled.div`
	display: flex;
	flex-direction: column;
	padding: ${convertPxToVw(20)} ${convertPxToVw(20)};
	font-family: kcc-ganpan;
	font-size: ${convertPxToVw(20)};
	border-bottom: 1px solid ${({ theme }) => theme.color.main_03};
`;

export const InfoDiv = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${convertPxToVw(8)};
	margin-top: ${convertPxToVw(20)};
	font-family: jamsil-400;
	font-size: ${convertPxToVw(14)};
`;

export const ContentP = styled.p`
	padding: ${convertPxToVw(20)};
	font-family: jamsil-400;
	font-size: ${convertPxToVw(14)};
	line-height: 1.5;
`;
