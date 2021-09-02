import { observer } from "mobx-react";
import { FILTER } from "../constants";
import TodoItem from "./TodoItem";

const TodoItemList = ({ todoStore, todoFilter }) => {
  const { todos, removeTodo, toggleTodo } = todoStore;

  const getVisibleTodos = () =>
    todos.filter((todo) => {
      return {
        [FILTER.ACTIVE]: !todo.completed,
        [FILTER.COMPLETED]: todo.completed,
        [FILTER.ALL]: true,
      }[todoFilter];
    });

  return (
    <ul id="todo-list" className="todo-list">
      {getVisibleTodos().map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </ul>
  );
};

export default observer(TodoItemList);
