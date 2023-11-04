import styled from "styled-components";

import { convertPxToVw } from "@/utils/convertPxToVw";

export const InquiryWrapDiv = styled.div`
	width: 100%;
	background-color: ${({ theme }) => theme.color.main_01};
	border-radius: ${convertPxToVw(10)};
`;

export const TitleDiv = styled.div`
	display: flex;
	flex-direction: column;
	padding: ${convertPxToVw(20)};
	font-family: kcc-ganpan;
	font-size: ${convertPxToVw(20)};
	border-bottom: 1px solid ${({ theme }) => theme.color.main_03};
`;

export const ContentDiv = styled.div`
	padding: ${convertPxToVw(20)};
	font-family: jamsil-400;
	font-size: ${convertPxToVw(14)};
	line-height: 1.5;
`;

export const TitleInput = styled.input`
	border: 1px solid ${({ theme }) => theme.color.main_03};
	border-radius: ${convertPxToVw(10)};
	padding: ${convertPxToVw(8)};
	font-family: kcc-ganpan;
	font-size: ${convertPxToVw(16)};

	&:focus {
		outline: 1px solid ${({ theme }) => theme.color.main_04};
	}
`;

export const ContentTextarea = styled.textarea`
	resize: none;
	width: calc(100% - ${convertPxToVw(16)});
	height: ${convertPxToVw(300)};
	padding: ${convertPxToVw(8)};
	border: 1px solid ${({ theme }) => theme.color.main_03};
	border-radius: ${convertPxToVw(10)};
	font-family: jamsil-400;
	font-size: ${convertPxToVw(14)};
	line-height: 1.5;
`;

export const ButtonWrapDiv = styled.div`
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
