import { StyledButton } from "./Button.styled";

export function Button({text, handleClick}) {
    return <StyledButton onClick={handleClick}>{ text}</StyledButton>
}