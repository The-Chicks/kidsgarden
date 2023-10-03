import styled from "styled-components";

import { convertPxToVw } from "@/utils/convertPxToVw";

export const ContainerSection = styled.section`
	margin-top: ${convertPxToVw(40)};

	& > h2 {
		font-family: kcc-ganpan;
		margin-bottom: ${convertPxToVw(16)};
		font-size: ${convertPxToVw(20)};
	}
`;
