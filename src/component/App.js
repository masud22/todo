import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import TodoList from "./TodoList";
import uuid from "react-uuid";
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
          id: uuid(),
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
  function deleteTodo(id) {
    const newTodo = [...todo];
    const notClicked = newTodo.filter((todo) => todo.id !== id);
    setTodo(notClicked);
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
      <h1>ReactJS Todo</h1>

      <form className="form">
        <div className="inputform">
          <input placeholder="Add Todo..." ref={todoRef} maxLength="30" />
          <button onClick={handleSubmit}>Add</button>
          <button onClick={handleClearTodo} title="Delete selected todos">
            Delete
          </button>
        </div>
        <div className="left__todo">
          <input type="checkbox" onChange={handleSelectAll} />
          <p>({todo.filter((todo) => !todo.isComplete).length})</p>
        </div>
        <TodoList todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </form>
    </div>
  );
}
