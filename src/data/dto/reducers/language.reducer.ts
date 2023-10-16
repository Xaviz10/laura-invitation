import { createReducer } from "./createReducer";
import { ActionsTypes } from "../actions/actions.types";
import { AnyAction } from "redux";

export const languageReducer = createReducer(
  { language: "en" },
  {
    [ActionsTypes.CHANGE_LANGUAGE](
      state: { [key: string]: any },
      action: AnyAction
    ) {
      const { payload } = action;
      return {
        ...state,
        ...payload,
      };
    },
  }
);
