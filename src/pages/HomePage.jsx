import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";

// redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// actions
import { getProducts } from "../actions/productActions";

// components
import Box from "@material-ui/core/Box";
import Fab from "@material-ui/core/Fab";

// icons
import AddIcon from "@material-ui/icons/Add";
import AddProductModal from "../components/modals/AddProduct";
import ProductList from "../components/ProductList/ProductList";

// styles
const useStyles = makeStyles((theme) => ({
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const HomePage = ({ getProducts, products }) => {
  const classes = useStyles();

  const [openAddProduct, setOpenAddProduct] = useState(false);

  // start add product modal
  const handleOpenAddProductModal = () => {
    setOpenAddProduct(true);
  };

  const handleCloseAddProductModal = () => {
    setOpenAddProduct(false);
  };
  // end add product modal

  useEffect(() => {
    let mounted = true;
    const calls = () => {
      getProducts();
    };

    if (mounted) calls();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Box width="100%" height="100%" padding="2rem">
      <Fab
        className={classes.fab}
        color="primary"
        aria-label="add"
        onClick={handleOpenAddProductModal}
      >
        <AddIcon />
      </Fab>

      <ProductList products={products} />

      {/* start modals */}
      <AddProductModal
        open={openAddProduct}
        handleClose={handleCloseAddProductModal}
      />
      {/* end modals */}
    </Box>
  );
};

const mapStateToProps = ({ products }) => ({
  products,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getProducts,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
