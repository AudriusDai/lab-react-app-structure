interface todo {
  completed: boolean;
  task: string;
  assignee: string;
}

class ObservableTodoStore {
  @observable todos: Array<todo> = [];
  @observable pendingRequests = 0;

  constructor() {
    mobx.autorun(() => console.log(this.report));
  }

  @computed get completedTodosCount() {
    return this.todos.filter((todo) => todo.completed === true).length;
  }

  @computed get report() {
    if (this.todos.length === 0) return "<none>";
    const nextTodo = this.todos.find((todo) => todo.completed === false);
    return (
      `Next todo: "${nextTodo ? nextTodo.task : "<none>"}". ` +
      `Progress: ${this.completedTodosCount}/${this.todos.length}`
    );
  }

  addTodo(task: any) {
    this.todos.push({
      task: task,
      completed: false,
      assignee: "",
    });
  }
}

export default new ObservableTodoStore();
