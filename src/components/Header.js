import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context/theme-context";
import ThemeToggler from "./ThemeToggler";

const Header = ({ toggleTheme }) => {
  const theme = useContext(ThemeContext);

  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [done, setDone] = useState(localStorage.getItem("formDone") || false);

  useEffect(() => {
    localStorage.setItem("name", name);
  });

  useEffect(() => {
    localStorage.setItem("formDone", done);
  });

  const handleForm = (e) => {
    e.preventDefault();
    setDone(true);
  };

  const nameRender = (
    <form className=" ui form" onSubmit={handleForm}>
      <input
        className="field"
        type="text"
        placeholder="Enter your name!"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </form>
  );

  const today = new Date();
  const date =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
  const time = today.getHours() + ":" + today.getMinutes();
  const dateTime = date + " and it's " + time;

  return (
    <header>
      <div
        className="site-header"
        style={{
          backgroundColor: theme.background,
        }}
      >
        <div style={{ width: "50%", margin: "0 auto" }}>
          <h1
            className="ui header"
            style={{
              backgroundColor: theme.background,
              color: theme.foreground,
            }}
          >
            Howdy, {name}!
          </h1>
          {!done && nameRender}
        </div>
        <p
          style={{
            backgroundColor: theme.background,
            color: theme.foreground,
            fontWeight: "bold",
          }}
        >
          {dateTime}
        </p>
        <ThemeToggler toggleTheme={toggleTheme} />
      </div>
    </header>
  );
};

export default Header;
