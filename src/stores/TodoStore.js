import { action, computed, makeObservable, observable } from "mobx";

class TodoStore {
  todos = [];
  selected = "ALL";

  constructor() {
    makeObservable(this, {
      todos: observable,
      selected: observable,
      addTodo: action,
      removeTodo: action,
      editTodo: action,
      completeTodo: action,
      selectedTodos: computed,
    });
  }

  addTodo(title) {
    this.todos.push({
      id: Date.now(),
      title: title,
      completed: false,
    });
  }

  removeTodo(todo) {
    this.todos = this.todos.filter(_todo => _todo !== todo);
  }

  editTodo(todo) {
    this.todos = this.todos.map(_todo => (_todo === todo ? todo : _todo));
  }

  completeTodo(todo) {
    todo.completed = !todo.completed;
    this.editTodo(todo);
  }

  get selectedTodos() {
    return this.todos.filter(
      todo =>
        ({
          ALL: true,
          ACTIVE: !todo.completed,
          COMPLETED: todo.completed,
        }[this.selected])
    );
  }
}

export default new TodoStore();
