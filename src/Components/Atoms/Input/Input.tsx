import { InputHTMLAttributes } from "react";

import { StyledInput } from "./Input.style";

const Input = (inputProps: InputHTMLAttributes<HTMLInputElement>) => {
	return <StyledInput {...inputProps} />;
};

export default Input;
