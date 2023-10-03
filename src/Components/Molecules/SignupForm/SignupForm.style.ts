import styled from "styled-components";

import Button from "@/components/atoms/Button/Button";
import { convertPxToVw } from "@/utils/convertPxToVw";

export const StyledForm = styled.form`
	margin-top: ${convertPxToVw(50)};
	display: flex;
	flex-direction: column;
	gap: ${convertPxToVw(28)};
	padding: 0 5%;
`;

export const InputWrapDiv = styled.div`
	position: relative;
`;

export const ErrorSpan = styled.span<{ $isEnable?: boolean }>`
	position: absolute;
	margin-top: ${convertPxToVw(4)};
	margin-left: ${convertPxToVw(4)};
	font-family: jamsil-500;
	color: ${({ $isEnable }) => ($isEnable ? "green" : "red")};
	font-size: ${convertPxToVw(10)};
`;

export const ConsentAreaDiv = styled.div`
	padding: ${convertPxToVw(30)} 0;
	display: flex;
	flex-direction: column;
	gap: ${convertPxToVw(20)};
`;

export const SignupButton = styled(Button)`
	background-color: ${({ theme }) => theme.color.main_03};
	border-radius: ${convertPxToVw(10)};
	padding: ${convertPxToVw(10)};
	font-size: ${convertPxToVw(20)};
	line-height: 1.5;

	&:disabled {
		background-color: ${({ theme }) => theme.color.gray_02};
		color: ${({ theme }) => theme.color.gray_01};
		cursor: not-allowed;
	}
`;
