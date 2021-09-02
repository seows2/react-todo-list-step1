const TodoItem = ({ id, contents, completed, toggleTodo, removeTodo }) => {
  const handleToggle = () => {
    toggleTodo(id);
  };
  const handleClick = () => {
    removeTodo(id);
  };
  return (
    <li className={[completed ? "completed" : ""].join(" ")}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={handleToggle}
        />
        <label className="label">{contents}</label>
        <button className="destroy" onClick={handleClick}></button>
      </div>
      <input className="edit" />
    </li>
  );
};

export default TodoItem;
