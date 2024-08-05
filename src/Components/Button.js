import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../Providers/ThemeContext.js";

const Button = ({ children, action }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <button
      onClick={action}
      style={{
        color: theme === "dark" ? "#000" : "#fff",
        background: theme === "dark" ? "#fff" : "#000",
        marginLeft: "1rem",
        padding: "0.1rem 1rem",
      }}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  theme: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
export default Button;
