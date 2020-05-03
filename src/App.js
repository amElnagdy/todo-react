import React, { useState, useEffect } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import { ThemeContext, themes } from "./context/theme-context";

const App = () => {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || themes.light
  );

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const [bodyBG, setBodyBG] = useState(localStorage.getItem("bodyBG") || "");

  useEffect(() => {
    localStorage.setItem("bodyBG", bodyBG);
  });

  const toggleTheme = (e) => {
    e.preventDefault();
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
    theme === themes.light ? setBodyBG("#000000") : setBodyBG("#fff");
  };

  document.body.style.backgroundColor = bodyBG;

  return (
    <>
      <a
        className="github-fork-ribbon"
        href="https://github.com/amElnagdy/todo-react"
        data-ribbon="Fork me on GitHub"
        title="Fork me on GitHub"
        target="__blank"
      >
        Fork me on GitHub
      </a>

      <ThemeContext.Provider value={theme}>
        <Header toggleTheme={toggleTheme} />
        <TodoList />
      </ThemeContext.Provider>
    </>
  );
};

export default App;
