import React, { useState } from "react";

export const ThemeContext = React.createContext();
const style = {
  dark: {
    color: "white",
    background: "black",
    border: "2px solid white",
    padding: "2rem",
    margin: "2rem"
  },
  light: {
    color: "black",
    background: "white",
    border: "2px solid black",
    padding: "2rem",
    margin: "2rem"
  }
};
function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const themes = style;
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const value = [{ theme, themes }, toggleTheme];
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
export default ThemeContextProvider;
