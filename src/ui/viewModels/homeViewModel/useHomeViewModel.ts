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

  function handleDownloadCV() {
    var elementDownloadLogs = document.createElement("a");
    elementDownloadLogs.href = cv;
    elementDownloadLogs.download = "CV.pdf";
    elementDownloadLogs.click();
    document.body.removeChild(elementDownloadLogs);
  }

  function handleContactForm() {
    const {
      handleSubmit,
      control,
      formState: { errors },
      reset,
    } = useForm({ mode: "onChange", resolver: yupResolver(contactFormSchema) });

    function handleOnSuccessSubmit() {
      toast.success("Email sent successfully! :)");
      reset();
    }

    function handleOnErrorSubmit() {
      toast.error("Error sending email, try again later");
    }

    function onSubmit(data: FieldValues) {
      const dataToSend = {
        name: data.name as string,
        email: data.email as string,
        message: data.message as string,
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
    };
  }

  return { handleDownloadCV, handleContactForm };
}
