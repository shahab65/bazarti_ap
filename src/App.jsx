import React from "react";

// redux
import { Provider } from "react-redux";

// redux-persist
import { PersistGate } from "redux-persist/integration/react";

// notistack
import { SnackbarProvider } from "notistack";

// helpers
import store, { persistor } from "./helpers/store";

// theme
import theme from "./themes/default";

// components
import { ThemeProvider } from "@material-ui/core/styles";
import RTL from "./components/providers/RTL";
import Routes from "./Routes";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RTL>
          <ThemeProvider theme={theme}>
            <SnackbarProvider
              maxSnack={3}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            >
              <Routes />
            </SnackbarProvider>
          </ThemeProvider>
        </RTL>
      </PersistGate>
    </Provider>
  );
};

export default App;
