import React, { useState } from "react";
import {
  CheckCircleFill,
  Circle,
  ArrowClockwise,
  Trash,
} from "react-bootstrap-icons";

function Todo({ todo }) {
  const [hover, sethover] = useState(false);

  return (
    <div className="Todo">
      <div
        className="todo-container"
        onMouseEnter={() => sethover(true)}
        onMouseLeave={() => sethover(false)}
      >
        <div className="check-todo">
          {todo.checked ? (
            <span className="checked">
              <CheckCircleFill color="#bebebe" />
            </span>
          ) : (
            <span className="unchecked">
              <Circle color={todo.color} />
            </span>
          )}
        </div>
        <div className="text">
          <p style={{ color: todo.checked ? "#bebebe" : "#black" }}>
            {todo.text}
          </p>
          <span>
            {todo.time}-{todo.project}
          </span>
          <div className={`line ${todo.checked ? "line-through" : ""}`}></div>
        </div>
        <div className="add-to-next-day">
          {todo.checked && (
            <span>
              <ArrowClockwise />
            </span>
          )}
        </div>
        <div className="delete-todo">
          {(hover || todo.checked) && (
            <span>
              <Trash />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Todo;
