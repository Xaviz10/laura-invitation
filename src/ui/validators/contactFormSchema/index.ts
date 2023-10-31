import * as yup from "yup";
import { emailSchema } from "../commonSchemas";

export const contactFormSchema = yup.object({
  name: yup.string().required("Campo requerido"),
  confirmed: yup.boolean(),
  declined: yup.boolean(),
  message: yup.string(),
});
