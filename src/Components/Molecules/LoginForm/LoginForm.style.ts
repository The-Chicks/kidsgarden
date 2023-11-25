import styled from "styled-components";

import Button from "@/components/Atoms/Button/Button";
import { convertPxToVw } from "@/utils/convertPxToVw";

export const StyledForm = styled.form`
	margin-top: ${convertPxToVw(80)};
	display: flex;
	flex-direction: column;
	gap: ${convertPxToVw(20)};
	padding: 0 5%;
`;

export const LoginButton = styled(Button)`
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
