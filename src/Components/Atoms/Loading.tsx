import { ClipLoader } from "react-spinners";

import { convertPxToVw } from "@/utils/convertPxToVw";

const Loading = () => {
	return (
		<div>
			<ClipLoader size={convertPxToVw(16)} color="yellow" />
		</div>
	);
};

export default Loading;
