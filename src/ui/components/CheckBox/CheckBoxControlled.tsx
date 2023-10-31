import { FC } from "react";
import { Control, FieldValues, useController } from "react-hook-form";
import { CheckBox, CheckBoxProps } from "./CheckBox";

interface CheckboxControlledProps extends CheckBoxProps {
  control?: Control<FieldValues, any>;
  id: string;
  name: string;
  defaultChecked?: boolean;
}

export const CheckBoxControlled: FC<CheckboxControlledProps> = ({
  className,
  id,
  name,
  label,
  error,
  helperText,
  defaultChecked = false,
  control,
  ...rest
}) => {
  const {
    field: { onChange, value, ref },
  } = useController({
    name,
    control,
    rules: {
      required: true,
    },
    defaultValue: defaultChecked,
  });
  return (
    <CheckBox
      className={className}
      id={id}
      name={name}
      label={label}
      error={error}
      helperText={helperText}
      onChange={onChange}
      checked={value}
      ref={ref}
      {...rest}
    />
  );
};
