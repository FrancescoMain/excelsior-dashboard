import { Container, Input, P, Label } from "./style";
import { UiDateProps } from "./type";

export const UiDateInput = ({
  register,
  errorMessage,
  id,
  label,
  errors,
}: UiDateProps) => {
  return (
    <Container>
      <Label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </Label>
      <Input id={id} type="date" {...register} placeholder={label} />
      <div>
        {errors?.type === "required" && (
          <P role="alert">{errorMessage?.required}</P>
        )}
        {errors?.type === "pattern" && (
          <P role="alert">{errorMessage?.pattern}</P>
        )}
      </div>
    </Container>
  );
};
