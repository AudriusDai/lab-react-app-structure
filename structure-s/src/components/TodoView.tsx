import React, { FC } from "react";
import { observer } from "mobx-react";

interface TodoViewProps {
  todo: any;
}

const TodoView: FC<TodoViewProps> = (props) => {
  const onToggleCompleted = () => {
    const todo = props.todo;
    todo.completed = !todo.completed;
  };

  const onRename = () => {
    const todo = props.todo;
    todo.task = prompt("Task name", todo.task) || todo.task;
  };

  const todo = props.todo;
  return (
    <li onDoubleClick={onRename}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onToggleCompleted}
      />
      {todo.task}
      {todo.assignee ? <small>{todo.assignee.name}</small> : null}
    </li>
  );
};

export default observer(TodoView);
