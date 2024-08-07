import React, { useContext } from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import { ThemeContext } from "../../Context/ThemeContext.js";
import { Title } from "../Title.js";

const MyHeader = ({ children, title }) => {
  const { ontoggleTheme } = useContext(ThemeContext);
  return (
    <>
      <header>
        <Title>{title}</Title>
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
