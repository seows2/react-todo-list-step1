function CountContainer(props) {
  const todoList = props.todoList;
  
  const handleChangeAllList = (e) => {
    
  }

  const handleChangeActiveList = (e) => {
    const activeList = todoList.filter(_todo => !_todo.completed );
  }

  const handleChangeCompletedList = (e) => {
    const completedList = todoList.filter(_todo => _todo.completed );
  }

  return (
      <div className="count-container">
        <span className="todo-count">
          총 <strong>{todoList.length}</strong> 개
        </span>
        <ul className="filters">
          <li onClick={handleChangeAllList}>
            <span className="all selected">전체보기</span>
          </li>
          <li onClick={handleChangeActiveList}>
            <span className="active">해야할 일</span>
          </li>
          <li onClick={handleChangeCompletedList}>
            <span className="completed">완료한 일</span>
          </li>
        </ul>
      </div>
  );
}

export default CountContainer;