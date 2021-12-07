import React from "react";
import { TextareaAutosize } from "@material-ui/core";
import PropTypes from "prop-types";

const TextArea = ({ textAreaProps }) => {
  const { label, className } = textAreaProps;
  return (
    <TextareaAutosize
      aria-label="empty textarea"
      placeholder="Empty"
      className = {className}
      style={{ width: 200 }}
    />
  );
};

const propTypes = {
  label: propTypes.string,
  className: propTypes.string,
};
const defaultProps = {
  label: "empyt textarea",
};
TextArea.propTypes = propTypes;
TextArea.defaultProps = defaultProps;

export default TextArea;
