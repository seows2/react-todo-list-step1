import { action, makeObservable, observable } from "mobx";

class todoStore {
  @observable
  todos = [];

  constructor() {
    makeObservable(this);
  }

  @action
  addTodo = (contents) => {
    this.todos.push({
      id: Date.now(),
      contents,
      completed: false,
    });
  };

  @action
  toggleTodo = (id) => {
    const target = this.todos.find((todo) => todo.id === id);
    target["completed"] = !target["completed"];
  };

  @action
  removeTodo = (id) => {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  };
}

export default todoStore;
