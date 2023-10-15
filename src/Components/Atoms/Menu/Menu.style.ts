import styled from "styled-components";

import { convertPxToVw } from "@/utils/convertPxToVw";

export const ContainerDiv = styled.div<{ $isSelected: boolean }>`
	background-color: ${({ theme: { color }, $isSelected }) =>
		$isSelected ? color.main_03 : "#fff"};
	font-family: kcc-ganpan;
	font-size: ${convertPxToVw(14)};
	color: ${({ theme: { color }, $isSelected }) =>
		$isSelected ? "#000" : color.main_04};
	white-space: nowrap;
	padding: ${convertPxToVw(8)} ${convertPxToVw(16)};
	border-radius: ${convertPxToVw(10)};
	border: 1px solid
		${({ theme: { color }, $isSelected }) =>
			$isSelected ? color.main_03 : color.main_04};
`;
