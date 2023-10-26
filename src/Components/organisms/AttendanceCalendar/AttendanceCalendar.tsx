import Calendar from "react-calendar";

import moment from "moment";

import { ReactComponent as Arrow } from "@/assets/icon/ic-calendar-arrow.svg";

import { ContainerDiv } from "./AttendanceCalendar.style";

const AttendanceCalendar = () => {
	const mockData = [
		{ year: 2023, month: 10, date: 5, status: "PRESENTED" },
		{ year: 2023, month: 10, date: 6, status: "PRESENTED" },
		{ year: 2023, month: 10, date: 9, status: "PRESENTED" },
		{ year: 2023, month: 10, date: 10, status: "ABSENT" },
		{ year: 2023, month: 10, date: 11, status: "EARLY_LEAVE" },
	];

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const tileClassName = ({ date }: { date: Date }) => {
		// Find the attendance data for the current date
		const attendanceData = mockData.find(
			(item) =>
				item.year === date.getFullYear() &&
				item.month === date.getMonth() + 1 && // Month is zero-based in Date object
				item.date === date.getDate(),
		);

		if (attendanceData) {
			switch (attendanceData.status) {
				case "PRESENTED":
					return "green-date";
				case "ABSENT":
					return "red-date";
				case "EARLY_LEAVE":
					return "yellow-date";
				default:
					break;
			}
		}

		// Return an empty string for other dates
		return "";
	};

	return (
		<ContainerDiv>
			<Calendar
				selectRange={true}
				tileClassName={tileClassName}
				formatDay={(_, date) => moment(date).format("D")}
				goToRangeStartOnSelect={false}
				nextLabel={<Arrow />}
				prevLabel={<Arrow style={{ transform: "scaleX(-1)" }} />}
				next2Label={null}
				prev2Label={null}
				minDetail="month"
			/>
		</ContainerDiv>
	);
};

export default AttendanceCalendar;
