import ScheduleItem from "../molecules/ScheduleItem/ScheduleItem";

const scheduleList = [
	"등원 및 독서 시간등원 및 독서 시간등원 및 독서 시간등원 및 독서 시간등원 및 독서 시간등원 및 독서 시간등원 및 독서 시간등원 및 독서 시간등원 및 독서 시간등원 및 독서 시간",
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
				<ScheduleItem key={idx} text={item} />
			))}
		</>
	);
};

export default ScheduleArea;
