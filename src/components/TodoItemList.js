import { observer } from 'mobx-react';
import { FILTER } from '../constants';
import TodoItem from './TodoItem';

const TodoItemList = ({ todoStore, todoFilter }) => {
  const { todos, removeTodo, toggleTodo, editTodoContent } = todoStore;

  const getVisibleTodos = () =>
    todos.filter(
      (todo) =>
        ({
          [FILTER.ACTIVE]: !todo.completed,
          [FILTER.COMPLETED]: todo.completed,
          [FILTER.ALL]: true,
        }[todoFilter])
    );

  return (
    <ul id="todo-list" className="todo-list">
      {getVisibleTodos().map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
          editTodoContent={editTodoContent}
        />
      ))}
    </ul>
  );
};

export default observer(TodoItemList);
