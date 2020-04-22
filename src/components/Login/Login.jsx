import React from "react";
import { makeStyles } from "@material-ui/styles";

// redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// actions
import { login } from "../../actions/authActions";

// history
import history from "../../helpers/history";

// formik
import { Formik, Field, Form } from "formik";

// notistack
import { useSnackbar } from "notistack";

// components
import Box from "@material-ui/core/Box";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

// styles
const useStyles = makeStyles(() => ({}));

const Login = ({ auth, login }) => {
  const classes = useStyles();

  const { enqueueSnackbar } = useSnackbar();

  const handleFormSubmit = ({ phone, password }) => {
    login(phone, password, {
      onSuccess: response => {
        enqueueSnackbar("welcome!", { variant: "success" });
        history.push("/");
      },
    });
  };

  const handleFormValidate = () => {};

  return (
    <Box>
      <Formik
        initialValues={{ phone: "", password: "" }}
        onSubmit={handleFormSubmit}
        validate={handleFormValidate}
        validateOnBlur={false}
      >
        {() => (
          <Form>
            <Box display="flex" flexDirection="column">
              <Field name="phone" />
              <Field name="password" type="password" />
              <Button type="submit">Submit</Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

const mapStateToProps = ({ auth }) => ({
  auth,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      login,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
