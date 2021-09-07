import { ALL, ACTIVE, COMPLETED} from "../config";

function CountContainer(props) {
  const selected = props.selected;
  const selectedTodo = props.todoList
    .filter(_todo =>
        ({
            'ALL': _todo,
            'ACTIVE': !_todo.completed,
            'COMPLETED': _todo.completed,
        }[props.selected])
    )
  const onClick = (e) => {
    const filteredName = e.currentTarget.getAttribute('name');
    props.onSelectedChange(filteredName.toUpperCase());
  }

  return (
      <div className="count-container">
        <span className="todo-count">
          총 <strong>{selectedTodo.length}</strong> 개
        </span>
        <ul className="filters">
          <li name="all" onClick={onClick}>
            <span className={selected === ALL ? 'all selected' : 'all'}>전체보기</span>
          </li>
          <li name="active" onClick={onClick}>
            <span className={selected === ACTIVE ? 'active selected' : 'active'}>해야할 일</span>
          </li>
          <li name="completed" onClick={onClick}>
            <span className={selected === COMPLETED ? 'completed selected' : 'completed'}>완료한 일</span>
          </li>
        </ul>
      </div>
  );
}

export default CountContainer;