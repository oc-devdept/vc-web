import React from "react";
import classnames from "classnames";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles, withTheme } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: "white"
  }
})

const DialogRoot = ({
  show,
  handleHide,
  children,
  title,
  size,
  close,
  dialogAction,
  dialogActionLabel,
  fullBlock
}) => {
  const classes = useStyles();
  return (
    <Dialog
      fullWidth
      maxWidth={size}
      open={show}
      onClose={handleHide}
      aria-labelledby="max-width-dialog-title"      
    >
      {title && <DialogTitle id="max-width-dialog-title">{title}</DialogTitle>}
      <DialogContent className={classnames({ "p-0": fullBlock }), classes.root}>
        {children}
      </DialogContent>
      {(close || dialogAction) && (
        <DialogActions>
          {close ? <Button onClick={handleHide}>Close</Button> : null}
          {dialogAction && (
            <Button
              onClick={dialogAction}
              className="ml-20 btn-success text-white"
              variant="contained"
            >
              {dialogActionLabel}
            </Button>
          )}
        </DialogActions>
      )}
    </Dialog>
  );
};

export default DialogRoot;
