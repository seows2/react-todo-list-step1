import React, {useState} from 'react';
import TodoList from './component/TodoList.jsx';
import CountContainer from './component/CountContainer.jsx';

function App() {
  const [todoTitle, setTodoTitle] = useState('');
  const [todoList, setTodoList] = useState([]);

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      setTodoList([...todoList, {
        id: Date.now(),
        title: todoTitle,
        completed: false
      }]);

      setTodoTitle('');
    }
  
  }
  const handleChange = (e) => {
    setTodoTitle(e.target.value);
  }

  const onTodoListChange = (todoList) => {
    setTodoList(todoList);
  }

  return (
    <div className="todoapp">
      <h1>TODOS</h1>
      <input
        id="new-todo-title"
        className="new-todo"
        placeholder="할일을 추가해주세요"
        value={todoTitle}
        onChange={handleChange}
        onKeyPress={onKeyPress}
        autoFocus
      />
      <main>
        <input className="toggle-all" type="checkbox" />
        <TodoList todoList={todoList} onTodoListChange={onTodoListChange}/>
        <CountContainer/>
      </main>
    </div>
  );
}

export default App;
