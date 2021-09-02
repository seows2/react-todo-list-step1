import { action, makeObservable, observable } from "mobx";

class todoStore {
  @observable
  todos = [];

  constructor() {
    makeObservable(this);

    this.addTodo = this.addTodo.bind(this);
  }

  @action
  addTodo(contents) {
    this.todos.push({
      id: Date.now(),
      contents,
      completed: false,
    });
  }

  @action
  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}

export default todoStore;
