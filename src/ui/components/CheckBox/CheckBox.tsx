import { forwardRef, InputHTMLAttributes, ReactElement } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import {
  StyledCheckbox,
  StyledInput,
  StyledHelperText,
} from "./CheckBox.styles";

export interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  name?: string;
  label?: string | ReactElement;
  error?: boolean;
  helperText?:
    | string
    | FieldError
    | Partial<{ type: string | number; message: string }>
    | Merge<FieldError, FieldErrorsImpl<any>>;
  placeholder?: string;
}

export const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(
  (props, ref) => {
    const { className, id, name, label, error, helperText, required, ...rest } =
      props;
    return (
      <StyledCheckbox className={className}>
        <StyledInput
          id={id}
          type={"checkbox"}
          ref={ref}
          name={name}
          {...rest}
        />
        <div className="flex flex-col items-start text-left">
          <label htmlFor={id} className="text-white text-left">
            {label}
            {!!required && <span className="text-primary-100"> *</span>}
          </label>
          {!!error && !!helperText && (
            <StyledHelperText>{helperText as string}</StyledHelperText>
          )}
        </div>
      </StyledCheckbox>
    );
  }
);
