import React, { useContext } from "react";
import { ThemeContext } from "../context/theme-context";

const TogglerButton = (props) => {
  const theme = useContext(ThemeContext);

  return (
    <button
      style={{
        backgroundColor: theme.foreground,
        color: theme.background,
        marginRight: "3%",
      }}
      className="ui right floated button"
      onClick={props.toggleTheme}

    >
      Toggle Theme
    </button>
  );
};

export default TogglerButton;
