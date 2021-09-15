import { observer, useLocalObservable } from "mobx-react-lite";
import { useContext } from "react";
import { TodoListContext } from "./TodoApp";
import { eventkey } from "../constants";

const TodoTypingView = observer(() => {
  const { todoStore } = useContext(TodoListContext);

  const todo = useLocalObservable(() => ({
    title: "",
    typing(e) {
      this.title = e.target.value;
    },
    initTitle() {
      this.title = "";
    },
  }));

  const onKeyPress = e => {
    if (e.key === eventkey.ENTER && todo.title.trim().length > 0) {
      todoStore.addTodo(todo.title);
      todo.initTitle();
    }
  };

  return (
    <>
      <h1>TODOS</h1>
      <input
        id="new-todo-title"
        className="new-todo"
        placeholder="할일을 추가해주세요"
        value={todo.title}
        onChange={todo.typing}
        onKeyPress={onKeyPress}
        autoFocus
      />
    </>
  );
});

export default TodoTypingView;
