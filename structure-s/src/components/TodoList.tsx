import React, { FC } from "react";
import TodoView from "./TodoView";
import { observer } from "mobx-react";
import { TodoStore } from "../mobx/todoStore";

interface TodoListProps {
  store: TodoStore;
}

const TodoList: FC<TodoListProps> = ({ store }) => {
  return (
    <div>
      {store.report}
      <ul>
        {store.todos.map((todo, idx) => (
          <TodoView todo={todo} key={idx} />
        ))}
      </ul>
      {store.pendingRequests > 0 ? <b>Loading...</b> : null}
      <button
        onClick={() => store.addTodo(prompt("Enter a new todo:", "coffee plz"))}
      >
        New Todo
      </button>
      <small> (double-click a todo to edit)</small>
    </div>
  );
};

export default observer(TodoList);
