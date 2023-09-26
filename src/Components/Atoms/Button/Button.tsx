import { ButtonHTMLAttributes } from "react";

import { StyledButton } from "./Button.style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}

const Button = (buttonProps: ButtonProps) => {
	const { children } = buttonProps;

	return <StyledButton {...buttonProps}>{children}</StyledButton>;
};

export default Button;
