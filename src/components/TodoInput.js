import { observer } from "mobx-react";
import { KEY } from "../constants";

const TodoInput = ({ addTodo }) => {
  const handleKeyDown = ({ key, target }) => {
    if (key === KEY.ENTER) {
      const contents = target.value.trim();
      if (contents === "") {
        return (target.value = "");
      }

      addTodo(contents);
      target.value = "";
    }
  };

  return (
    <input
      id="new-todo-title"
      className="new-todo"
      placeholder="할일을 추가해주세요"
      autoFocus
      onKeyDown={handleKeyDown}
    />
  );
};

export default observer(TodoInput);
