import { observer } from "mobx-react-lite";

const TodoFilterView = observer(() => {
  return (
    <div className="count-container">
      <span className="todo-count">
        총 <strong>0</strong> 개
      </span>
      <ul className="filters">
        <li>
          <span className="all selected">전체보기</span>
        </li>
        <li>
          <span className="active">해야할 일</span>
        </li>
        <li>
          <span className="completed">완료한 일</span>
        </li>
      </ul>
    </div>
  );
});

export default TodoFilterView;
