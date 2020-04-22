import React from "react";
import { makeStyles } from "@material-ui/styles";

// components
import Grid from "@material-ui/core/Grid";
import ProductCard from "../ProductCard";

// styles
const useStyles = makeStyles(() => ({}));

const ProductList = ({ products }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={1}>
      {products.result && products.result.data.map((product, index) => (
        <Grid key={index} container item xs={12} md={4} justify="center">
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
