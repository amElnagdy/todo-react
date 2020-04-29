import React from "react";

const TodoItem = ({
  todo,
  index,
  completeTodo,
  undoCompleteTodo,
  removeTodo,
}) => {
  return (
    <>
      <div
        className={
          todo.status === "completed" ? "ui green segment" : "ui red segment"
        }
      >
        <div className="ui middle aligned divided list">
          <div className="item">
            <div className="right floated content">
              <div className="ui buttons">
                <button
                  className={
                    todo.status === "pending"
                      ? "ui positive button"
                      : "ui negative button"
                  }
                  style={{
                    textDecoration:
                      todo.status === "completed" ? "line-through" : "",
                  }}
                  onClick={() => {
                    todo.status === "pending"
                      ? completeTodo(index)
                      : undoCompleteTodo(index);
                  }}
                >
                  Complete
                </button>
                <div className="or"></div>
                <button className="ui button" onClick={() => removeTodo(index)}>
                  Remove
                </button>
              </div>
            </div>
            <h5
              className="ui header"
              style={{
                textDecoration:
                  todo.status === "completed" ? "line-through" : "",
              }}
            >
              {todo.title}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};
export default TodoItem;
