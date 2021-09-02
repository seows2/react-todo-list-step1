const TodoItem = ({ contents }) => {
  return (
    <li>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label className="label">{contents}</label>
        <button className="destroy"></button>
      </div>
      <input className="edit" />
    </li>
  );
};

export default TodoItem;
