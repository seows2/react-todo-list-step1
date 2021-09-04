import {ALL, ACTIVE, COMPLETED} from '../config.js';

function TodoCount(props) {
  const selected = props.selected;
  let count;

  if (selected === ALL) {
    count = props.todoList.length;
  }

  if (selected === ACTIVE) {
    count = props.todoList.reduce((acc, cur) => !cur.completed ? ++acc : acc, 0);
  }

  if (selected === COMPLETED) {
    count = props.todoList.reduce((acc, cur) => cur.completed ? ++acc : acc, 0);
  }

  return (
    <span className="todo-count">
      총 <strong>{count}</strong> 개
    </span>
  )
}

function CountContainer(props) {
  const selected = props.selected;

  const onClickAll = (e) => {
    props.onSelectedChange(ALL);
  }

  const onClickActive = (e) => {
    props.onSelectedChange(ACTIVE);
  }

  const onClickCompleted = (e) => {
    props.onSelectedChange(COMPLETED);
  }

  return (
      <div className="count-container">
        <TodoCount todoList={props.todoList} selected={selected}></TodoCount>
        <ul className="filters">
          <li onClick={onClickAll}>
            <span className={'all' + (selected === ALL ? ' selected' : '')}>전체보기</span>
          </li>
          <li onClick={onClickActive}>
            <span className={'all' + (selected === ACTIVE ? ' selected' : '')}>해야할 일</span>
          </li>
          <li onClick={onClickCompleted}>
            <span className={'all' + (selected === COMPLETED ? ' selected' : '')}>완료한 일</span>
          </li>
        </ul>
      </div>
  );
}

export default CountContainer;