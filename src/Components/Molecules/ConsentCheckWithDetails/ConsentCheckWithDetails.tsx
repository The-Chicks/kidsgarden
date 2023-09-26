import { ReactComponent as CheckedMark } from "@/Assets/icon/ic-checked-mark.svg";

import { ConsentDiv, ContainerDiv } from "./ConsentCheckWithDetails.style";

interface ConsentCheckProps {
	title: string;
	handleConsent: () => void;
	isChecked: boolean;
}

const ConsentCheckWithDetails = ({
	title,
	handleConsent,
	isChecked,
}: ConsentCheckProps) => {
	return (
		<ContainerDiv>
			<ConsentDiv onClick={handleConsent}>
				<div>{isChecked && <CheckedMark />}</div>
				<span>{title}</span>
			</ConsentDiv>
			<span>자세히</span>
		</ContainerDiv>
	);
};

export default ConsentCheckWithDetails;
