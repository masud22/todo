import React from "react";
import "./Todo.css";

function Todo({ todo, toggleTodo, deleteTodo }) {
  function handleChange() {
    toggleTodo(todo.id);
  }
  function handleDelete() {
    deleteTodo(todo.id);
  }

  return (
    <div className="todo">
      <input
        type="checkbox"
        checked={todo.isComplete}
        onChange={handleChange}
      />
      <label onClick={handleChange} title="Select">
        {todo.name}
      </label>
      <div onClick={handleDelete}>delete</div>
    </div>
  );
}

export default Todo;
