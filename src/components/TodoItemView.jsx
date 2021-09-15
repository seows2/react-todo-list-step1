import { observer, useLocalObservable } from "mobx-react-lite";
import { useContext, useRef } from "react";
import { TodoListContext } from "./TodoApp";
import { eventkey } from "../constants";

const TodoItemView = observer(({ todo }) => {
  const { todoStore } = useContext(TodoListContext);
  const listEle = useRef(null);

  const editedTodo = useLocalObservable(() => ({
    title: "",
    isEdited: false,
    toggle() {
      this.isEdited = !this.isEdited;
      if (this.isEdited) {
        listEle.current.className = "editing";
      } else {
        this.title = "";
        listEle.current.className = todo.completed ? "completed" : "";
      }
    },
    typing(e) {
      this.title = e.target.value;
    },
  }));

  const toggleCheckBox = () => {
    todoStore.changeComplete(todo);
    listEle.current.className = todo.completed ? "completed" : "";
  };

  const removeTodo = () => {
    todoStore.removeTodo(todo);
  };

  const handleDoubleClick = () => {
    editedTodo.toggle();
  };

  const handleKeyUp = e => {
    if (e.key === eventkey.ENTER && editedTodo.title.trim().length > 0) {
      todoStore.changeTitle(todo, editedTodo);
      editedTodo.toggle();
    }

    if (e.key === eventkey.ESC || e.key === eventkey.ESCAPE) {
      editedTodo.toggle();
    }
  };

  return (
    <>
      <li ref={listEle} onDoubleClick={handleDoubleClick}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onChange={toggleCheckBox}
            checked={todo.completed}
          />
          <label className="label">{todo.title}</label>
          <button className="destroy" onClick={removeTodo}></button>
        </div>
        <input
          className="edit"
          value={editedTodo.title}
          onChange={editedTodo.typing}
          onKeyUp={handleKeyUp}
        />
      </li>
    </>
  );
});

export default TodoItemView;
