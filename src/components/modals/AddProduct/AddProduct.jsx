import React from "react";
import { makeStyles } from "@material-ui/styles";

// redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// notistack
import { useSnackbar } from "notistack";

// actions
import { addProduct } from "../../../actions/productActions";

// assets
import UploadImage from "../../../assets/upload.jpg";

// utils
import { getBase64 } from "../../../utils";

// formik
import { Formik, Field, Form } from "formik";

// components
import DialogContent from "@material-ui/core/DialogContent";
import Box from "@material-ui/core/Box";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Modal from "../../shared/Modal";
import DefaultInput from "../../shared/inputs/DefaultInput";
import { Button, DialogActions } from "@material-ui/core";

// styles
const useStyles = makeStyles((theme) => ({
  field: {
    marginBottom: theme.spacing(1),
  },
  input: {
    display: "none",
  },
  media: {
    height: 64,
  },
}));

const AddProduct = ({ open, handleClose, addProduct }) => {
  const classes = useStyles();

  const { enqueueSnackbar } = useSnackbar();

  const handleFormSubmit = ({ name, description, min_price, image }) => {
    addProduct(name, description, min_price, image, {
      onSuccess: (response) => {
        enqueueSnackbar("محصول ایجاد شد", { variant: "success" });
        handleClose();
      },
      onError: (error) => {
        enqueueSnackbar("error", { variant: "error" });
        handleClose();
      },
    });
  };

  const handleFormValidate = () => {};

  return (
    <Modal
      open={open}
      handleClose={handleClose}
      title={"ایجاد محصول"}
      subtitle={""}
      height={425}
      width={425}
    >
      <Formik
        initialValues={{ name: "", description: "", min_price: "", image: "" }}
        onSubmit={handleFormSubmit}
        validate={handleFormValidate}
        validateOnBlur={false}
      >
        {({ handleSubmit, setFieldValue, values }) => (
          <>
            <DialogContent>
              <Box display="flex" flexDirection="column">
                <input
                  name="image"
                  accept="image/png"
                  className={classes.input}
                  id="contained-button-file"
                  multiple
                  type="file"
                  onChange={(event) => {
                    const file = event.currentTarget.files[0];
                    getBase64(file, (result) => {
                      setFieldValue("image", result);
                    });
                  }}
                />
                <label htmlFor="contained-button-file">
                  <CardActionArea component="span">
                    <CardMedia
                      className={classes.media}
                      image={values.image ? values.image : UploadImage}
                    />
                  </CardActionArea>
    
                </label>
                <Field
                  className={classes.field}
                  name="name"
                  placeholder="نام محصول"
                  component={DefaultInput}
                />
                <Field
                  className={classes.field}
                  name="description"
                  placeholder="توضیحات محصول"
                  component={DefaultInput}
                />
                <Field
                  className={classes.field}
                  name="min_price"
                  placeholder="قیمت محصول"
                  type="number"
                  component={DefaultInput}
                />
              </Box>
            </DialogContent>

            <DialogActions>
              <Button onClick={handleSubmit} variant="outlined" color="primary">
                ایجاد محصول
              </Button>
            </DialogActions>
          </>
        )}
      </Formik>
    </Modal>
  );
};

const mapStateToProps = ({ products }) => ({
  products,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addProduct,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
