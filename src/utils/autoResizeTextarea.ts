import { MutableRefObject } from "react";

export const autoResizeTextarea = (
	ref: MutableRefObject<HTMLTextAreaElement | null>,
) => {
	if (!ref.current) return;
	ref.current.style.height = "auto";
	const height = ref.current.scrollHeight;
	ref.current.style.height = `${height + 8}px`;
};
