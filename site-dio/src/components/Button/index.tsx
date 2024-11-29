import { ButtonContainer } from "./styles";
import { IButton } from "./types";

function Button({title, variant='primary', onClick} : IButton) {
    return (
        <ButtonContainer variant={variant} onClick={onClick}>
            {title}
        </ButtonContainer>
    );
};

export default Button;