import React from "react";
import "./Todo.css";

function Todo({ todo, toggleTodo }) {
  function handleChange() {
    toggleTodo(todo.id);
  }

  return (
    <div className="todo">
      <input
        type="checkbox"
        checked={todo.isComplete}
        onChange={handleChange}
      />
      <label>{todo.name}</label>
    </div>
  );
}

export default Todo;
