import React from "react";
import PropTypes from "prop-types";

const Display = ({ func, text }) => {
  return (
    <span>
      <small>{text}</small> {func}
    </span>
  );
};

Display.defaultProps = {
  func: () => <p>Missing numeric value</p>,
  text: "No value provided"
};

Display.propTypes = {
  func: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired
};

export default Display;