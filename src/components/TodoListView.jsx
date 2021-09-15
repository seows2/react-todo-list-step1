import TodoItemView from "./TodoItemView";
import { TodoListContext } from "./TodoApp";
import { useContext } from "react";
import { observer } from "mobx-react-lite";

const TodoListView = observer(() => {
  const { todoStore } = useContext(TodoListContext);

  return (
    <main>
      <input className="toggle-all" type="checkbox" />
      <ul id="todo-list" className="todo-list">
        {todoStore.selectedTodos.map(todo => (
          <TodoItemView todo={todo} key={todo.id} />
        ))}
      </ul>
    </main>
  );
});

export default TodoListView;
