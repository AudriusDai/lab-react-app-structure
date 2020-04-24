import React, { FC } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { RootStoreContext } from "./mobx/rootStore";

const App: FC = () => {
  const { todoStore } = React.useContext(RootStoreContext);

  return (
    <div className="App">
      <header className="App-header">
        <TodoList store={todoStore} />
      </header>
    </div>
  );
};

export default App;
