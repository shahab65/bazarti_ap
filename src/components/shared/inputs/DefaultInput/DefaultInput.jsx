import React from "react";
import { makeStyles } from "@material-ui/styles";

// components
import TextField from "@material-ui/core/TextField";

// styles
const useStyles = makeStyles(() => ({}));

const DefaultInput = ({ field, ...props }) => {
  const classes = useStyles();
  return <TextField inputProps={{ ...field }} {...props}></TextField>;
};

export default DefaultInput;
