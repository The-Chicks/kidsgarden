import styled from "styled-components";

import { convertPxToVw } from "@/utils/convertPxToVw";

export const ContainerSection = styled.section`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	place-items: center;
	gap: ${convertPxToVw(30)} ${convertPxToVw(24)};
	padding: ${convertPxToVw(20)} 0;
`;
