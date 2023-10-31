import { ContactFormEntity } from "../entities";
import { handleResponse } from "../shared";
export interface contactFormInput extends handleResponse {
  contactFormData: { name: string; message: string };
}

export interface ContactFormRepository {
  send({ contactFormData, success, error }: contactFormInput): void;
}
