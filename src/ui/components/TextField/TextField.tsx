import { forwardRef, InputHTMLAttributes } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import { StyledInput, StyledLabel, StyledHelperText } from "./TextField.styles";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  name?: string;
  label?: string;
  error?: boolean;
  helperText?:
    | string
    | FieldError
    | Partial<{ type: string | number; message: string }>
    | Merge<FieldError, FieldErrorsImpl<any>>;
  iconSrc?: string;
  placeholder?: string;
  onClickIcon?: () => void;
}

export const TextField = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const {
      className,
      id,
      name,
      label,
      error,
      helperText,
      placeholder,
      iconSrc,
      onClickIcon,
      required,
      ...rest
    } = props;

    return (
      <div
        className={`relative flex flex-col w-full gap-y-1 items-start text-left ${className}`}
      >
        {!!label && (
          <StyledLabel htmlFor={id}>
            {label} {!!required && <span className="text-primary-100"> *</span>}
          </StyledLabel>
        )}
        <div className="w-full relative">
          <StyledInput
            error={error}
            id={id}
            name={name}
            placeholder={placeholder}
            ref={ref}
            {...rest}
          />
        </div>
        {!!error && !!helperText && (
          <StyledHelperText>{helperText as string}</StyledHelperText>
        )}
      </div>
    );
  }
);
