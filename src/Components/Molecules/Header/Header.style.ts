import styled from "styled-components";

import { convertPxToVw } from "../../../utils/convertPxToVw";

export const ContainerHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid ${({ theme: { color } }) => color.gray_02};
	padding: 0 5%;

	& > svg {
		cursor: pointer;
	}

	.logo-icon {
		width: ${convertPxToVw(60)};
		height: ${convertPxToVw(60)};
	}

	.profile-icon {
		width: ${convertPxToVw(36)};
		height: ${convertPxToVw(36)};
	}
`;
