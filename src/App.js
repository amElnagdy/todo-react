import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import { ThemeContext, themes } from "./context/theme-context";
// import ThemeToggler from "./components/ThemeToggler";

const App = () => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = (e) => {
    e.preventDefault();
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
    document.body.style.backgroundColor = theme.foreground;
  };
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Header toggleTheme={toggleTheme} />
        <TodoList />
      </ThemeContext.Provider>
    </>
  );
};

export default App;
