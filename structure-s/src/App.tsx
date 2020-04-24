import React, { FC } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Store from "./mobx/todoStore";

const App: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList store={Store} />
      </header>
    </div>
  );
};

export default App;
