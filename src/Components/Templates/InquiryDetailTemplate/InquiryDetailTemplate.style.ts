import styled from "styled-components";

import { convertPxToVw } from "@/utils/convertPxToVw";

export const ContainerDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const ParentCard = styled.article`
	width: 100%;
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
	padding: ${convertPxToVw(20)};
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

export const ButtonWrapDiv = styled.div`
	display: flex;
	align-items: center;
	gap: ${convertPxToVw(8)};

	& > button {
		text-decoration: underline;
		cursor: pointer;
	}
`;

export const EditFooterDiv = styled.div`
	position: absolute;
	bottom: ${convertPxToVw(40)};
	font-family: kcc-ganpan;
	font-size: ${convertPxToVw(20)};
	display: flex;
	align-items: center;
	justify-content: center;
	gap: ${convertPxToVw(40)};

	& > button {
		padding: ${convertPxToVw(16)} ${convertPxToVw(32)};
		border-radius: ${convertPxToVw(10)};
		background-color: ${({ theme }) => theme.color.main_03};
		cursor: pointer;
	}

	& > button:last-of-type {
		outline: 1px solid ${({ theme }) => theme.color.main_03};
		background-color: white;
		color: ${({ theme }) => theme.color.main_04};
	}
`;

export const EditInput = styled.input`
	border: 1px solid ${({ theme }) => theme.color.main_03};
	padding: ${convertPxToVw(4)};
	font-family: kcc-ganpan;
	font-size: ${convertPxToVw(16)};

	&:focus {
		outline: 1px solid ${({ theme }) => theme.color.main_04};
	}
`;

export const EditTextarea = styled.textarea`
	resize: none;
	width: calc(100% - ${convertPxToVw(10)});
	height: ${convertPxToVw(300)};
	border: 1px solid ${({ theme }) => theme.color.main_03};
	padding: ${convertPxToVw(4)};
	font-family: jamsil-400;
	font-size: ${convertPxToVw(14)};
	line-height: 1.5;
`;
