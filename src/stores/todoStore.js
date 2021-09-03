import { action, makeObservable, observable } from "mobx";
import { TODO_PROPERTY } from "../constants";
import { getTodos, setTodo } from "../localStorage";

class todoStore {
  @observable
  todos = getTodos();

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

    setTodo(this.todos);
  };

  @action
  editTodoContent = (id, contents) => {
    const target = this.todos.find((todo) => todo.id === id);
    target[TODO_PROPERTY.CONTENTS] = contents;
    setTodo(this.todos);
  };

  @action
  toggleTodo = (id) => {
    const target = this.todos.find((todo) => todo.id === id);
    target[TODO_PROPERTY.COMPLETED] = !target[TODO_PROPERTY.COMPLETED];
    setTodo(this.todos);
  };

  @action
  removeTodo = (id) => {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    setTodo(this.todos);
  };
}

export default todoStore;
