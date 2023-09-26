import styled from "styled-components";

import { convertPxToVw } from "../../utils/convertPxToVw";

export const ContainerDiv = styled.div`
	padding: ${convertPxToVw(90)} 10% ${convertPxToVw(44)} 10%;
	background-color: white;
	font-family: KCC-Ganpan;
`;
