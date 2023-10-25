import styled from "styled-components";

import { convertPxToVw } from "@/utils/convertPxToVw";

export const ContainerDiv = styled.div`
	.red-date {
		background: ${({ theme }) => theme.color.red_01} !important;
	}

	.green-date {
		background: ${({ theme }) => theme.color.green_01} !important;
	}

	.yellow-date {
		background: ${({ theme }) => theme.color.main_02} !important;
	}

	.react-calendar {
		width: 100%;
		max-width: 100%;
		overflow: hidden;
		background: white;
	}

	.react-calendar,
	.react-calendar *,
	.react-calendar *:before,
	.react-calendar *:after {
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}

	.react-calendar button:enabled:hover {
		cursor: pointer;
	}

	.react-calendar__navigation {
		display: flex;
		text-align: center;
		height: ${convertPxToVw(60)};
		border-bottom: 1px solid ${({ theme }) => theme.color.gray_02};
	}

	.react-calendar__navigation__label {
		font-family: kcc-ganpan;
		font-size: ${convertPxToVw(28)};
		color: ${({ theme }) => theme.color.main_04};
	}

	.react-calendar__navigation button {
		min-width: 44px;
		background: none;
	}

	.react-calendar__month-view__weekdays {
		font-family: kcc-ganpan;
		text-align: center;
		font-size: ${convertPxToVw(14)};
		line-height: normal;
	}

	.react-calendar__month-view__weekdays__weekday {
		height: ${convertPxToVw(30)};
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: white;
	}

	.react-calendar__month-view__weekdays__weekday abbr {
		text-decoration: none;
	}

	.react-calendar__month-view__days__day--neighboringMonth {
		color: ${({ theme }) => theme.color.gray_02};
	}

	.react-calendar__viewContainer {
		width: 140%;
	}

	// 날짜 하나하나
	.react-calendar__tile {
		max-width: 100%;
		background: white;
		text-align: center;
		line-height: normal;
		font-family: jamsil-400;
		height: ${convertPxToVw(72)};
		border-radius: ${convertPxToVw(8)};
	}

	.react-calendar__tile:disabled {
		background-color: #f0f0f0;
	}

	.react-calendar__tile--active:enabled:hover,
	.react-calendar__tile--active:enabled:focus {
		background: white;
	}
`;
