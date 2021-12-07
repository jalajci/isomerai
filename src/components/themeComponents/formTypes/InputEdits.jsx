import React from "react";
import { TextField } from "@material-ui/core";
import { Field, ErrorMessage } from "formik";
import "./formTypes.scss";
import PropTypes from "prop-types";

const InputBox = ({ emailProps, passwordProps }) => {
  const { type, name, className, label, error } = emailProps || passwordProps;
  return (
    <Field
      as={TextField}
      className={className}
      name= {name}
      id="outlined-basic"
      label={label}
      variant="outlined"
      type= {type}
      fullWidth
      required
      helperText={<ErrorMessage name={error} />}
    />
  );
};
InputBox.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
}

export default InputBox; 