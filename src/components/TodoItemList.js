import { inject, observer } from "mobx-react";
import TodoItem from "./TodoItem";

const TodoItemList = ({ todos }) => {
  return (
    <ul id="todo-list" className="todo-list">
      {todos.map(({ id, contents, completed }) => (
        <TodoItem key={id} contents={contents} completed={completed} />
      ))}
    </ul>
  );
};

export default inject(({ todo }) => ({ todos: todo.todos }))(
  observer(TodoItemList)
);
