import { FC, useEffect } from "react";
import {
  StyledSaveTheDateSection,
  StyledImageContainer,
  StyledFilter,
  StyledContactForm,
  StyledTitle,
} from "./ConfirmationSection.styles";
import salto from "../../../../assets/images/salto.jpeg";
import saveTheDate from "../../../../assets/images/saveTheDate.gif";
import { useGifReload } from "../../../../hooks";
import { useTimer } from "react-timer-hook";
import {
  Button,
  CheckBoxControlled,
  TextAreaControlled,
  TextFieldControlled,
} from "../../../../components";
import {
  Control,
  FieldErrors,
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { ContactFormEntity } from "../../../../../domain/entities";

interface ConfirmationSectionProps {
  handleContactForm: () => {
    onSubmit: (data: ContactFormEntity) => void;
    handleSubmit: UseFormHandleSubmit<ContactFormEntity>;
    control: Control<ContactFormEntity, any>;
    watch: UseFormWatch<ContactFormEntity>;
    errors: FieldErrors<ContactFormEntity>;
    setValue: UseFormSetValue<ContactFormEntity>;
  };
}

export const ConfirmationSection: FC<ConfirmationSectionProps> = ({
  handleContactForm,
}) => {
  const { onSubmit, handleSubmit, control, errors, watch, setValue } =
    handleContactForm();

  const { gifRef } = useGifReload(saveTheDate);

  const confirmedWatch = watch("confirmed");
  const declinedWatch = watch("declined");

  useEffect(() => {
    confirmedWatch && setValue("declined", false);
  }, [confirmedWatch]);
  useEffect(() => {
    declinedWatch && setValue("confirmed", false);
  }, [declinedWatch]);

  return (
    <StyledSaveTheDateSection
      id="#date"
      style={{ backgroundImage: `url(${salto})` }}
    >
      <StyledFilter />
      <StyledTitle>Confirma tu asistencia</StyledTitle>

      <StyledContactForm>
        <TextFieldControlled
          id="name"
          name="name"
          label={`Tu nombre`}
          placeholder={``}
          control={control as any}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <div className="self-start flex flex-col gap-4">
          <p className="text-2xl font-black text-white font-secondaryItalic">
            Confirma tu asistencia{" "}
          </p>
          <CheckBoxControlled
            id="confirmed"
            name="confirmed"
            label={`Sí, no me lo pierdo!`}
            placeholder={``}
            control={control as any}
            error={!!errors.confirmed}
            helperText={errors.confirmed?.message}
          />
          <CheckBoxControlled
            id="declined"
            name="declined"
            label={`No, no puedo.`}
            placeholder={``}
            control={control as any}
            error={!!errors.declined}
            helperText={errors.declined?.message}
          />
        </div>
        <TextAreaControlled
          id="message"
          name="message"
          label={`Mensaje`}
          placeholder={``}
          maxLength={160}
          control={control as any}
          error={!!errors.message}
          helperText={errors.message?.message}
        />
        <Button onClick={handleSubmit(onSubmit)}>Enviar</Button>
      </StyledContactForm>
    </StyledSaveTheDateSection>
  );
};
