import React from "react";

// history
import history from "./helpers/history";

// react-router-dom
import { Switch, Router, Route } from "react-router-dom";

// pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage";

// components
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import PrivateRoute from "./components/routes/PrivateRoute";

// history
const ConnectedRoot = () => {
  return (
    <Box width="100%" height="100%">
      <CssBaseline />
      {/* Routes */}
      <Router history={history}>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <PrivateRoute exact path="/" component={HomePage} />
          <PrivateRoute exact path="/product/:id" component={ProductPage} />
        </Switch>
      </Router>
      {/* End Routes */}
    </Box>
  );
};

export default ConnectedRoot;
