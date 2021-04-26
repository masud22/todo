import React from "react";
import Todo from "./Todo";
import "./TodoList.css";

function TodoList({ todo, toggleTodo, deleteTodo }) {
  return (
    <div className="todolist">
      {todo.map((todo) => {
        return (
          <Todo
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            todo={todo}
          />
        );
      })}
    </div>
  );
}

export default TodoList;
