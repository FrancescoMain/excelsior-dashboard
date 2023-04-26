import { Container, Input, P } from "./style";
import { UiInputProps } from "./type";

export const UiInput = ({
  register,
  errorMessage,
  id,
  label,
  errors,
  type,
}: UiInputProps) => {
  return (
    <Container>
      <Input id={id} type={type} {...register} placeholder={label} />
      <div>
        {errors?.type === "required" && (
          <P role="alert">{errorMessage?.required}</P>
        )}
        {errors?.type === "minLength" && (
          <P role="alert">{errorMessage?.minLength} </P>
        )}
        {errors?.type === "maxLength" && (
          <P role="alert">{errorMessage?.maxLength} </P>
        )}
        {errors?.type === "pattern" && (
          <P role="alert">{errorMessage?.pattern} </P>
        )}
      </div>
    </Container>
  );
};
