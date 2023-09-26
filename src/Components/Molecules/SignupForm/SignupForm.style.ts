import styled from "styled-components";

import { convertPxToVw } from "../../../utils/convertPxToVw";
import Button from "../../Atoms/Button/Button";

export const StyledForm = styled.form`
	margin-top: ${convertPxToVw(50)};
	display: flex;
	flex-direction: column;
	gap: ${convertPxToVw(20)};
	padding: 0 5%;
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
`;
