import styled from "styled-components";

import { convertPxToVw } from "@/utils/convertPxToVw";

export const ContainerSection = styled.section`
	display: flex;
	align-items: center;
	background-color: #fff;
	gap: ${convertPxToVw(12)};
	padding: ${convertPxToVw(20)};
	overflow: auto;

	&::-webkit-scrollbar {
		display: none;
	}
`;
