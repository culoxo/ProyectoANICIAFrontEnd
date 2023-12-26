import React from "react";
import ReactDOM from "react-dom/client";
import App from "./views/App";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Provider } from "react-redux";
import { persistor, store } from "./state/store";
import { IntlProvider } from "react-intl";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/500.css";
import "@fontsource/nunito/600.css";
import "@fontsource/nunito/700.css";
import "@fontsource/nunito/800.css";
import "@fontsource/nunito/900.css";
import messages from './i18n/locales/es.json'
import 'bootstrap/dist/css/bootstrap.css';
import "./styles.css";
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <IntlProvider locale="es" messages={messages}>
        <App />
      </IntlProvider>
    </PersistGate>
  </Provider>
);
