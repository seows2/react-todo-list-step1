import { observer } from "mobx-react";
import { useState } from "react";
import { KEY } from "../constants";

const TodoItem = ({
  id,
  contents,
  completed,
  toggleTodo,
  removeTodo,
  editTodoContent,
}) => {
  const [editText, setEditText] = useState(contents);
  const [isEdit, setisEdit] = useState(false);

  const handleToggle = () => {
    toggleTodo(id);
  };
  const handleClick = () => {
    removeTodo(id);
  };

  const handleChange = (event) => {
    setEditText(event.target.value);
  };
  const handleDblClick = () => {
    setisEdit(true);
  };

  const handleKeyDown = ({ key, target }) => {
    if (key === KEY.ENTER) {
      editTodoContent(id, target.value);
      return setisEdit(false);
    }

    if (key === KEY.ESC || key === KEY.ESCAPE) {
      return setisEdit(false);
    }
  };

  return (
    <li
      className={[completed ? "completed" : "", isEdit ? "editing" : ""].join(
        " "
      )}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={handleToggle}
        />
        <label className="label" onDoubleClick={handleDblClick}>
          {contents}
        </label>
        <button className="destroy" onClick={handleClick}></button>
      </div>
      <input
        className="edit"
        value={editText}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </li>
  );
};

export default observer(TodoItem);
