import React from "react";
import { makeStyles, useTheme, fade } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// components
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import Grow from "@material-ui/core/Grow";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

// icons
import CloseIcon from "@material-ui/icons/Close";

// styles
const useStyles = makeStyles((theme) => {
  return {
    root: {
      backgroundColor: fade("#000", 0.64),
    },
    modal: {
      backgroundColor: theme.palette.primary,
      padding: theme.spacing(2, 4),
      borderRadius: ({ fullScreen }) => {
        return fullScreen ? 0 : "0.5rem";
      },
      width: ({ width, fullScreen }) => {
        return !fullScreen && (width ? width : null);
      },
      height: ({ height, fullScreen }) => {
        return !fullScreen && (height ? height : null);
      },
    },
    title: {
      marginBottom: theme.spacing(2),
    },
    closeButton: {
      position: "absolute",
      top: 0,
      right: 0,
    },
  };
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow direction="up" ref={ref} {...props} />;
});
const Modal = ({
  open,
  handleClose,
  onEnter,
  onExit,
  children,
  title,
  width,
  height,
  ...props
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));

  const classes = useStyles({ width, height, fullScreen });

  return (
    <Dialog
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      classes={{
        paper: classes.modal,
        root: classes.root,
      }}
      fullScreen={fullScreen}
      open={open}
      TransitionComponent={Transition}
      onEnter={onEnter}
      onExit={onExit}
      keepMounted={false}
      closeAfterTransition
      onClose={handleClose}
      {...props}
    >
      {fullScreen && (
        <IconButton className={classes.closeButton} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      )}

      <DialogTitle>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          marginBottom="1rem"
        >
          <Typography
            component="h2"
            variant="h5"
            color="textSecondary"
            className={classes.title}
          >
            {title}
          </Typography>
        </Box>
      </DialogTitle>
      {children}
    </Dialog>
  );
};

export default Modal;
