import { createSelector } from "./createSelector";
export const languageSelector = createSelector(
  (state: { languageReducer: { language: "es" | "en" } }) =>
    state.languageReducer,
  (languageReducer: any) => languageReducer
);
