import { observer } from "mobx-react";
import { FILTER } from "../constants";

const TodoFooter = ({ todos, todoFilter, changeTodoFilter }) => {
  const _setClassNameByFilter = (origin) => {
    return [origin, todoFilter === origin ? "selected" : ""].join(" ");
  };

  const handleClick = (event) => {
    const filter = event.target.className.split(" ")[0];
    changeTodoFilter(filter);
  };

  const activeTodoCount = () => {
    const _filterCompleted = () => todos.filter((todo) => todo.completed);
    const _filterActive = () => todos.filter((todo) => !todo.completed);

    const callback = {
      [FILTER.COMPLETED]: _filterCompleted,
      [FILTER.ACTIVE]: _filterActive,
    }[todoFilter];

    if (!callback) return todos.length;
    return callback().length;
  };

  return (
    <div className="count-container">
      <span className="todo-count">
        총 <strong>{activeTodoCount()}</strong> 개
      </span>
      <ul className="filters">
        <li>
          <span
            className={_setClassNameByFilter(FILTER.ALL)}
            onClick={handleClick}
          >
            전체보기
          </span>
        </li>
        <li>
          <span
            className={_setClassNameByFilter(FILTER.ACTIVE)}
            onClick={handleClick}
          >
            해야할 일
          </span>
        </li>
        <li>
          <span
            className={_setClassNameByFilter(FILTER.COMPLETED)}
            onClick={handleClick}
          >
            완료한 일
          </span>
        </li>
      </ul>
    </div>
  );
};

export default observer(TodoFooter);
