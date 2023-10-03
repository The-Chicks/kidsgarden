import { InputHTMLAttributes } from "react";

import { ContainerDiv, StyledInput } from "./Input.style";

interface InputProps {
	title?: string;
	inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

const Input = ({ title, inputProps }: InputProps) => {
	return (
		<ContainerDiv>
			{title && <label>{title}</label>}
			<StyledInput {...inputProps} />
		</ContainerDiv>
	);
};

export default Input;
