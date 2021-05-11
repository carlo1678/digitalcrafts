import React, { useState, useRef, useEffect } from "react";
import ToDoList from "./components/ToDoList.js";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

const LOCAL_STORAGE_KEY = "todoApp.todos";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  }

  function handleClearTodos() {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  }
  return (
    <>
      <div className="main-container">
        <form className="container">
          {" "}
          <ToDoList todos={todos} toggleTodo={toggleTodo} />
          <div>
            <input ref={todoNameRef} type="text" />
          </div>
          <div>
            <button onClick={handleAddTodo}>Add ToDo</button>
            <button onClick={handleClearTodos}>Clear ToDos</button>
          </div>
          <div>{todos.filter((todo) => !todo.complete).length} left to do</div>
        </form>
      </div>
    </>
  );
}

export default App;
