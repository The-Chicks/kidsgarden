import styled from "styled-components";

import Button from "@/components/atoms/Button/Button";
import { convertPxToVw } from "@/utils/convertPxToVw";

export const ContainerDiv = styled.div`
	font-family: KCC-Ganpan;
	padding: ${convertPxToVw(20)} 5%;
	position: relative;
	height: calc(100vh - ${convertPxToVw(101)});

	& > h2 {
		font-size: ${convertPxToVw(24)};
		margin-bottom: ${convertPxToVw(32)};
	}
`;

export const FormDiv = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${convertPxToVw(16)};
	padding: 0 5%;
`;

export const StyledButton = styled(Button)`
	position: absolute;
	bottom: ${convertPxToVw(40)};
	width: 80%;
	background-color: ${({ theme }) => theme.color.main_03};
	border: 1px solid ${({ theme }) => theme.color.main_03};
	border-radius: ${convertPxToVw(10)};
	padding: ${convertPxToVw(10)} 0;
	font-size: ${convertPxToVw(20)};
	line-height: 1.5;
`;
