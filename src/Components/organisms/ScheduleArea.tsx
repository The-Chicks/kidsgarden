import ScheduleItem from "../Molecules/ScheduleItem/ScheduleItem";

const scheduleList = [
	"등원 및 독서 시간등원 및 독서 시간등원 및 독서 시간등원 및 독서 시간등원 및 독서 시간등원 및 독서 시간등원 및 독서 시간등원 및 독서 시간등원 및 독서 시간등원 및 독서 시간",
	"등원 및 독서 시간",
	"등원 및 독서 시간",
	"등원 및 독서 시간",
	"등원 및 독서 시간",
	"등원 및 독서 시간",
	"등원 및 독서 시간",
	"등원 및 독서 시간",
];

const ScheduleArea = () => {
	return (
		<>
			{scheduleList.map((item, idx) => (
				<ScheduleItem key={idx} text={item} time={idx + 8} />
			))}
		</>
	);
};

export default ScheduleArea;
