import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import { Routing } from "./ui/routes";
import axios, { AxiosRequestConfig } from "axios";
import { Provider } from "react-redux";
import Store from "./data/dto/store";
import { Toaster } from "react-hot-toast";
import i18next from "i18next";

axios.defaults.baseURL = import.meta.env.VITE_APP_API_BASE;

const handleRequestSuccess = (
  request: AxiosRequestConfig
): AxiosRequestConfig => {
  const { headers } = request;
  const globalState = Store?.store?.getState();
  if (headers) {
    headers["Content-Type"] = "application/vnd.api+json";
    headers.accept = "application/vnd.api+json";
  }

  return request;
};
const handleRequestError = (error: any) => {
  console.log(`REQUEST ERROR! => ${error}`);
  return error;
};

// axios.interceptors.request.use(handleRequestSuccess, handleRequestError);

import homeEn from "./ui/translations/en/home.json";
import homeEs from "./ui/translations/es/home.json";
import { I18nextProvider } from "react-i18next";
import { PersistGate } from "redux-persist/integration/react";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    es: {
      home: homeEs,
    },
    en: {
      home: homeEn,
    },
  },
});
function App() {
  return (
    <Provider store={Store.store}>
      <PersistGate loading={null} persistor={Store.persistor}>
        <I18nextProvider i18n={i18next}>
          <BrowserRouter basename={import.meta.env.VITE_APP_PATH_BASE}>
            <Routing />
          </BrowserRouter>
          <Toaster />
        </I18nextProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
