import React, { useContext } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button.js";
import { ThemeContext } from "../../Context/ThemeContext.js";
import * as styles from "./MyHeader.scss";

const MyHeader = ({ children, title }) => {
  console.log(styles);
  const { ontoggleTheme } = useContext(ThemeContext);
  return (
    <>
      <header>
        <h1 className={styles.title}>{title}</h1>
        {/* <h1>{title}</h1> */}
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
