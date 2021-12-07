import React from "react";
import { Button } from "@material-ui/core";
import "./button.scss"
import PropTypes from "prop-types";

const propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
}

const MyButton = ({ attributes }) => {
  return (
    <Button
      type= {attributes.type}
      className= {attributes.className}
      color={attributes.color}
      variant="contained"
    >
      Login
    </Button>
  );
};

MyButton.propTypes = propTypes;

export default MyButton;
