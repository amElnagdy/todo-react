import React, { useState, useEffect, useContext } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import QuoteItem from "./QouteItem";
import { ThemeContext } from "../context/theme-context";

const TodoList = () => {
  const theme = useContext(ThemeContext);

  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );

  const addTodo = (title) => {
    const newTodos = [...todos, { title, status: "pending" }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].status = "completed";
    setTodos(newTodos);
  };

  const undoCompleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].status = "pending";
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <div className="ui container">
        <div className="ui grid">
          <div
            className="ui segment ten wide column left-grid"
            style={{
              backgroundColor: theme.background,
              color: theme.foreground,
              border: "1px solid silver",
            }}
          >
            <h1
              className="ui header"
              style={{
                backgroundColor: theme.background,
                color: theme.foreground,
              }}
            >
              TODO - ITEMS
            </h1>
            <div className="ui raised segments">
              {todos.map((todo, index) => (
                <TodoItem
                  todo={todo}
                  key={index}
                  index={index}
                  completeTodo={completeTodo}
                  undoCompleteTodo={undoCompleteTodo}
                  removeTodo={removeTodo}
                />
              ))}
            </div>
            <TodoForm className="ui input focus" addTodo={addTodo} />
          </div>
          <div
            className="ui segment six wide column right-grid"
            style={{
              backgroundColor: theme.background,
              color: theme.foreground,
              border: "1px solid silver",
            }}
          >
            <QuoteItem />
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
