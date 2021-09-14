import { action, makeObservable, observable } from 'mobx';
import { FILTER, TODO_PROPERTY } from '../constants';
import { getTodos, setTodo } from '../localStorage';

class todoStore {
  @observable.ref
  todos = getTodos();

  constructor() {
    makeObservable(this);
  }

  @action
  addTodo = (contents) => {
    this.todos = [
      ...this.todos,
      { id: Date.now(), contents, completed: false },
    ];
    setTodo(this.todos);
  };

  @action
  editTodoContent = (id, contents) => {
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        todo[TODO_PROPERTY.CONTENTS] = contents;
      }
      return todo;
    });
    setTodo(this.todos);
  };

  @action
  toggleTodo = (id) => {
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        todo[TODO_PROPERTY.COMPLETED] = !todo[TODO_PROPERTY.COMPLETED];
      }
      return todo;
    });
    setTodo(this.todos);
  };

  @action
  removeTodo = (id) => {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    setTodo(this.todos);
  };

  activeTodoCount = (todoFilter) => {
    const _filterCompleted = () => this.todos.filter((todo) => todo.completed);
    const _filterActive = () => this.todos.filter((todo) => !todo.completed);

    const callback = {
      [FILTER.COMPLETED]: _filterCompleted,
      [FILTER.ACTIVE]: _filterActive,
    }[todoFilter];

    if (!callback) return this.todos.length;
    return callback().length;
  };
}

export default new todoStore();
