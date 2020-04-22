// axios
import axios from "../middlewares/axios";

// types
import types from "../actionTypes/productTypes";

// START GET ALL PRODUCTS
const setProductsLoading = (loading) => ({
  type: types.SET_PRODUCTS_LOADING,
  loading,
});

const setProducts = (products) => ({
  type: types.SET_PRODUCTS,
  products,
});

const setProductsError = (error) => ({
  type: types.SET_PRODUCTS_ERROR,
  error,
});
// END GET ALL PRODUCTS

// START PRODUCT
const setProductLoading = (loading) => ({
  type: types.SET_PRODUCT_LOADING,
  loading,
});

const setProduct = (product) => ({
  type: types.SET_PRODUCT,
  product,
});

const setProductError = (error) => ({
  type: types.SET_PRODUCT_ERROR,
  error,
});
// END PRODUCT

const getProducts = (callback) => {
  return (dispatch) => {
    // start loading
    dispatch(setProductsLoading(true));

    axios
      .get("user/product")
      .then((response) => {
        dispatch(setProducts(response.data));
        callback && callback.onSuccess && callback.onSuccess(response);
      })
      .catch((error) => {
        dispatch(setProductsError(error));
        callback && callback.onError && callback.onError(error);
      });
  };
};

const addProduct = (name, description, min_price, image, callback) => {
  return (dispatch) => {
    let bodyFormData = new FormData();
    bodyFormData.append("name", name);
    bodyFormData.append("description", description);
    bodyFormData.append("min_price", min_price);
    bodyFormData.append("product_group_id", 1);
    bodyFormData.append("count", 1);
    bodyFormData.append("city_id", 9);
    bodyFormData.append("item_unit_id", 1);

    // start loading
    dispatch(setProductsLoading(true));

    axios
      .post("user/product/store", {
        data: bodyFormData,
        headers: {
          "content-type": `multipart/form-data`,
        },
      })
      .then((response) => {
        dispatch(setProducts(response.data));
        dispatch(getProducts());
        callback && callback.onSuccess && callback.onSuccess(response);
      })
      .catch((error) => {
        dispatch(setProductsError(error));
        callback && callback.onError && callback.onError(error);
      });
  };
};

export { getProducts, addProduct };
