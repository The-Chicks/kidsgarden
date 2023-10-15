import styled from "styled-components";

import { convertPxToVw } from "@/utils/convertPxToVw";

export const ContainerDiv = styled.div`
	padding: 0 ${convertPxToVw(20)};
`;
