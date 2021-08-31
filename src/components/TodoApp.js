import { inject, observer } from "mobx-react";
import TodoInput from "./TodoInput";

const todoApp = ({ todo }) => {
  const { addTodo } = todo;

  return (
    <div className="todoapp">
      <h1>TODOS</h1>
      <TodoInput addTodo={addTodo} />
    </div>
  );
};

/*
<main>
      <input class="toggle-all" type="checkbox" />
      <ul id="todo-list" class="todo-list">
        <li>
          <div class="view">
            <input class="toggle" type="checkbox" />
            <label class="label">새로운 타이틀</label>
            <button class="destroy"></button>
          </div>
          <input class="edit" value="새로운 타이틀" />
        </li>
        <li class="editing">
          <div class="view">
            <input class="toggle" type="checkbox" />
            <label class="label">완료된 타이틀</label>
            <button class="destroy"></button>
          </div>
          <input class="edit" value="완료된 타이틀" />
        </li>
        <li class="completed">
          <div class="view">
            <input class="toggle" type="checkbox" checked />
            <label class="label">완료된 타이틀</label>
            <button class="destroy"></button>
          </div>
          <input class="edit" value="완료된 타이틀" />
        </li>
      </ul>
      <div class="count-container">
        <span class="todo-count">
          총 <strong>0</strong> 개
        </span>
        <ul class="filters">
          <li>
            <span class="all selected">전체보기</span>
          </li>
          <li>
            <span class="active">해야할 일</span>
          </li>
          <li>
            <span class="completed">완료한 일</span>
          </li>
        </ul>
      </div>
    </main>
*/
export default inject("todo")(observer(todoApp));
