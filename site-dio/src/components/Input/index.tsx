import { Controller } from "react-hook-form";
import { ErroText, IconContainer, InputContainer, InputText } from "./styles"
import { IInput } from "./types";

function Input({leftIcon, name, control, errorMessage, ...rest} : IInput) {
    return (
        <>
        { errorMessage ? <ErroText>{errorMessage}</ErroText> : null }
            <InputContainer>
                {leftIcon ? (
                    <IconContainer>{leftIcon}</IconContainer>
                ) : null}
                <Controller
                name={name}
                control={control}
                rules={{required: true}}
                render={({field: {value, onChange}}) => <InputText value={value} onChange={onChange} {...rest}/> } />
            </InputContainer>
        </>
    )
}

export default Input;