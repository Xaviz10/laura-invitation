import { ActionsTypes } from "./actions.types";
import { AnyAction } from "redux";
interface languagePayload {
  language: "es" | "en";
}

export function actSetLanguage(payload: languagePayload): AnyAction {
  return {
    type: ActionsTypes.CHANGE_LANGUAGE,
    payload,
  };
}
