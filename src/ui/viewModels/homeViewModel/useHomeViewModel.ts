import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, useForm } from "react-hook-form";
import cv from "../../assets/documents/CV.pdf";
import { contactFormSchema } from "../../validators";
import { useCaseContactForm } from "../../../domain/useCases";
import { contactFormDataService } from "../../../data/services";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";

export function useHomeViewModel() {
  const { sendEmail } = useCaseContactForm(contactFormDataService());

  function handleContactForm() {
    const {
      handleSubmit,
      control,
      watch,
      setValue,
      formState: { errors },
      reset,
    } = useForm({ mode: "onChange", resolver: yupResolver(contactFormSchema) });
    console.log({ errors });
    function handleOnSuccessSubmit() {
      toast.success("Se envió tu mensaje! Gracias:)");
      reset();
    }

    function handleOnErrorSubmit() {
      toast.error("Error al enviar respuesta");
    }

    function onSubmit(data: FieldValues) {
      const dataToSend = {
        name: data.name as string,
        message: `Confirma su asistencia: ${
          data.confirmed ? "Sí" : "No"
        }. Mensaje: '${data.message}'`,
      };
      sendEmail({
        contactFormData: dataToSend,
        success: handleOnSuccessSubmit,
        error: handleOnErrorSubmit,
      });
    }
    return {
      onSubmit,
      handleSubmit,
      control,
      errors,
      watch,
      setValue,
    };
  }

  return { handleContactForm };
}
