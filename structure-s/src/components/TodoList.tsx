import React, { Component } from "react";
import TodoView from "./TodoView";
import { observer } from "mobx-react";

interface IProps {
  store: any;
}

@observer
class TodoList extends Component<IProps> {
  render() {
    const store = this.props.store;
    return (
      <div>
        {store.report}
        <ul>
          {store.todos.map((todo: any, idx: any) => (
            <TodoView todo={todo} key={idx} />
          ))}
        </ul>
        {store.pendingRequests > 0 ? <b>Loading...</b> : null}
        <button onClick={this.onNewTodo}>New Todo</button>
        <small> (double-click a todo to edit)</small>
      </div>
    );
  }

  onNewTodo = () => {
    this.props.store.addTodo(prompt("Enter a new todo:", "coffee plz"));
  };
}

export default TodoList;
