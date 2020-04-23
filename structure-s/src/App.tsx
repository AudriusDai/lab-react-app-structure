import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";
import Store from "./mobx/store";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList store={Store} />
      </header>
    </div>
  );
}

export default App;
