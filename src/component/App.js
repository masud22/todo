import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import TodoList from "./TodoList";
const KEY_TODO = "todo.key";

export default function App() {
  const todoRef = useRef();
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    setTodo(JSON.parse(localStorage.getItem(KEY_TODO) || "[]"));
    console.log("useEffect");
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY_TODO, JSON.stringify(todo));
    todoRef.current.value = "";
    console.log("todo useEffect");
  }, [todo]);

  function handleSubmit(params) {
    params.preventDefault();
    if (todoRef.current.value === "") return;
    setTodo((prevTodo) => {
      return [
        {
          id: todoRef.current.value,
          name: todoRef.current.value,
          isComplete: false,
        },
        ...prevTodo,
      ];
    });
  }

  function toggleTodo(id) {
    const newTodo = [...todo];
    const clicked = newTodo.find((x) => x.id === id);
    clicked.isComplete = !clicked.isComplete;
    setTodo(newTodo);
  }
  function handleClearTodo(e) {
    e.preventDefault();
    const newTodo = todo.filter((x) => !x.isComplete);
    setTodo(newTodo);
  }
  function handleSelectAll(e) {
    setTodo(
      todo.map((todo) => {
        todo.isComplete = e.target.checked;
        return todo;
      })
    );
  }

  return (
    <div className="app">
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        alt=""
      />
      <form className="form">
        <div className="inputform">
          <input placeholder="Add Todo..." ref={todoRef} />
          <button onClick={handleSubmit}>Add</button>
          <button onClick={handleClearTodo}>Clear</button>
        </div>
        <div>
          <input type="checkbox" onChange={handleSelectAll} />
          Todo left ({todo.filter((todo) => !todo.isComplete).length})
        </div>
        <TodoList todo={todo} toggleTodo={toggleTodo} />
      </form>
    </div>
  );
}
