import { useState } from 'react';
import {ALL, ACTIVE, COMPLETED} from '../config.js';

function CountContainer(props) {
  const [count, setCount] = useState(props.todoList.length)
  const selected = props.selected;

  const onClickAll = (e) => {
    props.onSelectedChange(ALL);
    setCount(props.todoList.length);
  }

  const onClickActive = (e) => {
    props.onSelectedChange(ACTIVE);
    const count = props.todoList.reduce((acc, cur) => !cur.completed ? ++acc : acc, 0);
    setCount(count);
  }

  const onClickCompleted = (e) => {
    props.onSelectedChange(COMPLETED);
    const count = props.todoList.reduce((acc, cur) => cur.completed ? ++acc : acc, 0);
    setCount(count);
  }

  return (
      <div className="count-container">
        <span className="todo-count">
          총 <strong>{count}</strong> 개
        </span>
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