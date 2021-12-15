import React, { useContext } from "react";
import Body from "./Components/Body";
import Header from "./Components/Header";
import { ThemeContext } from "./Context/ThemeContextProvider";
import "./styles.css";
export default function App() {
  const [{ theme, themes }] = useContext(ThemeContext);
  const current = themes[theme];
  return (
    <div
      style={{
        color: current.color,
        backgroundColor: current.background,
        border: current.border,
        padding: current.padding,
        margin: current.margin,
        textAlign: "center"
      }}
    >
      <Header />
      <Body />
    </div>
  );
}
