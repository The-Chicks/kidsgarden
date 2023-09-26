import styled from "styled-components";

import { convertPxToVw } from "@/utils/convertPxToVw";

export const ContainerDiv = styled.div`
	padding: ${convertPxToVw(90)} 10% 0;
	background-color: white;
	font-family: KCC-Ganpan;
`;
