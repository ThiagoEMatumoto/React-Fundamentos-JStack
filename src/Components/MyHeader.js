import React, { useContext } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { ThemeContext } from "../Providers/ThemeContext.js";
const MyHeader = ({ children, title }) => {
  const { ontoggleTheme } = useContext(ThemeContext);
  return (
    <>
      <header>
        <h1>{title}</h1>
        <Button action={ontoggleTheme}>
          <p>Change Theme</p>
        </Button>
        {children}
      </header>
      <hr />
    </>
  );
};

MyHeader.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
export default MyHeader;
