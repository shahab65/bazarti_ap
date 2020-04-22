import React from "react";
import { makeStyles } from "@material-ui/styles";

// components
import Box from "@material-ui/core/Box";

// styles
const useStyles = makeStyles(() => ({}));

const ProductPage = ({ match: { params } }) => {
  const classes = useStyles();
  return (
    <Box>
      <h1>product page {params.id}</h1>
    </Box>
  );
};

export default ProductPage;
