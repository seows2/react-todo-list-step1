import { action, makeObservable, observable } from "mobx";
import { TODO_PROPERTY } from "../constants";

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
  editTodoContent = (id, contents) => {
    const target = this.todos.find((todo) => todo.id === id);
    target[TODO_PROPERTY.CONTENTS] = contents;
  };

  @action
  toggleTodo = (id) => {
    const target = this.todos.find((todo) => todo.id === id);
    target[TODO_PROPERTY.COMPLETED] = !target[TODO_PROPERTY.COMPLETED];
  };

  @action
  removeTodo = (id) => {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  };
}

export default todoStore;
