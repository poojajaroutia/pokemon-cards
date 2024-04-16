// import { Grid } from "@mui/material";
import React from "react";
import { Provider } from "react-redux";
import { ToastProvider } from "react-toast-notifications";
import "./App.css";

import Landing from "./components/LandingPage/landing";

import pokemonStore from "./modules/redux-store/store";

function App() {
  return (
    <Provider store={pokemonStore}>
      <ToastProvider autoDismiss autoDismissTimeout={2000}>
        <div className="App">
          <Landing />;
        </div>
      </ToastProvider>
    </Provider>
  );
}

export default App;
