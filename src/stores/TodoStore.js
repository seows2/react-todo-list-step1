import { action, computed, makeObservable, observable, autorun } from "mobx";
import { localStoreKey, selectState } from "../constants";
import localStore from "./LocalStore";
const { ALL, ACTIVE, COMPLETED } = selectState;

class TodoStore {
  todos = localStore.getItem(localStoreKey);
  selected = ALL;

  constructor() {
    makeObservable(this, {
      todos: observable,
      selected: observable,
      addTodo: action,
      removeTodo: action,
      editTodo: action,
      changeComplete: action,
      changeTitle: action,
      changeSelected: action,
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

  changeComplete(todo) {
    todo.completed = !todo.completed;
    this.editTodo(todo);
  }

  changeTitle(todo, editedTodo) {
    todo.title = editedTodo.title;
    this.editTodo(todo);
  }

  changeSelected(selected) {
    this.selected = selected;
  }

  get selectedTodos() {
    return this.todos.filter(
      todo =>
        ({
          [ALL]: true,
          [ACTIVE]: !todo.completed,
          [COMPLETED]: todo.completed,
        }[this.selected])
    );
  }
}

const todoStore = new TodoStore();

autorun(() => {
  localStore.setItem(localStoreKey, todoStore.todos);
});

export default todoStore;
