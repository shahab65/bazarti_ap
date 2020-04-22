import React from "react";
import { makeStyles } from "@material-ui/styles";

// redux
import { connect } from "react-redux";

// react-router-dom
import { Redirect } from "react-router-dom";

// components
import Box from "@material-ui/core/Box";
import Login from "../components/Login";

// styles
const useStyles = makeStyles(() => ({}));

const LoginPage = ({ isAuthenticated }) => {
  const classes = useStyles();
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <Box>
      <Login />
    </Box>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.token,
});

export default connect(mapStateToProps)(LoginPage);
