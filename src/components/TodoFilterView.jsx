import { observer } from "mobx-react-lite";
import { TodoListContext } from "./TodoApp";
import { useContext } from "react";
import { selectState } from "../constants";

const TodoFilterView = observer(() => {
  const { todoStore } = useContext(TodoListContext);
  const { ALL, ACTIVE, COMPLETED } = selectState;

  const handleAllSelected = e => {
    todoStore.changeSelected(ALL);
  };

  const handleActiveSelected = e => {
    todoStore.changeSelected(ACTIVE);
  };

  const handleCompletedSelected = e => {
    todoStore.changeSelected(COMPLETED);
  };

  return (
    <div className="count-container">
      <span className="todo-count">
        총 <strong>{todoStore.selectedTodos.length}</strong> 개
      </span>
      <ul className="filters">
        <li>
          <span
            className={todoStore.selected === ALL ? `${ALL} selected` : ALL}
            onClick={handleAllSelected}
          >
            전체보기
          </span>
        </li>
        <li>
          <span
            className={
              todoStore.selected === ACTIVE ? `${ACTIVE} selected` : ACTIVE
            }
            onClick={handleActiveSelected}
          >
            해야할 일
          </span>
        </li>
        <li>
          <span
            className={
              todoStore.selected === COMPLETED
                ? `${COMPLETED} selected`
                : COMPLETED
            }
            onClick={handleCompletedSelected}
          >
            완료한 일
          </span>
        </li>
      </ul>
    </div>
  );
});

export default TodoFilterView;
