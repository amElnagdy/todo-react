import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="ui form">
      <div className="field">
        <input
          type="text"
          className="input"
          value={value}
          placeholder="Add something great to do.."
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </form>
  );
};

export default TodoForm;
