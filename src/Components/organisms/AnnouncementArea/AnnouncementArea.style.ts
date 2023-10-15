import styled from "styled-components";

import { convertPxToVw } from "@/utils/convertPxToVw";

export const ContainerSection = styled.section`
	margin-top: ${convertPxToVw(12)};

	& > h2 {
		font-family: kcc-ganpan;
		font-size: ${convertPxToVw(16)};
	}
`;

export const AreaDiv = styled.div`
	display: flex;
	gap: ${convertPxToVw(12)};
	overflow: auto;
	margin-top: ${convertPxToVw(20)};

	&::-webkit-scrollbar {
		display: none;
	}
`;
