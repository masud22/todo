import React from "react";
import "./Todo.css";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

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

      <IconButton onClick={handleDelete} aria-label="delete">
        <DeleteIcon fontSize="medimu" />
      </IconButton>
      {/* <div onClick={handleDelete}>delete</div> */}
    </div>
  );
}

export default Todo;
