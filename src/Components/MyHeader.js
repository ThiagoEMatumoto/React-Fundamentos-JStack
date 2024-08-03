import React from "react";
import PropTypes from "prop-types";

const MyHeader = ({ children }) => {
  return (
    <>
      <header>
        <h1>Aplicação Reat</h1>
        {children}
      </header>
      <hr />
    </>
  );
};

MyHeader.propTypes = {
  children: PropTypes.node.isRequired,
};
export default MyHeader;
