import { KEY } from "../constants";

const TodoInput = ({ addTodo }) => {
  const handleKeyDown = ({ key, target }) => {
    if (key === KEY.ENTER) {
      const contents = target.value;
      addTodo(contents);
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

export default TodoInput;
