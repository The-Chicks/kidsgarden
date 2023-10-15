export const convertPxToVw = (px: number) => {
	if (window.innerWidth >= 600) {
		return `${(px * 100) / window.innerWidth}vw`;
	}
	return `${(px * 100) / 390}vw`;
};
