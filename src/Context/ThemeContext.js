import React, { useState, createContext } from "react";
import PropTypes from "prop-types";
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const handleToggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    console.log(theme);
  };
  return (
    <ThemeContext.Provider value={{ theme, ontoggleTheme: handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
