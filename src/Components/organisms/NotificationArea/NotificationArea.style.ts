import styled from "styled-components";

import { convertPxToVw } from "@/utils/convertPxToVw";

export const ContainerSection = styled.section`
	display: flex;
	flex-direction: column;
	gap: ${convertPxToVw(20)};
`;
