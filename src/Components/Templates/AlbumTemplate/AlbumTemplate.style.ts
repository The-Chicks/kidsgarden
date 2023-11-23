import styled from "styled-components";

import { convertPxToVw } from "@/utils/convertPxToVw";

export const ContainerDiv = styled.div`
	padding: 0 ${convertPxToVw(20)};
	display: flex;
	flex-direction: column;
	gap: ${convertPxToVw(16)};
	padding-bottom: ${convertPxToVw(40)};
`;
