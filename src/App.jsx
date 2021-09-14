import {useState, useEffect, useCallback} from 'react';
import TodoList from './component/TodoList.jsx';
import CountContainer from './component/CountContainer.jsx';
import {Enter} from './config.js';

function App() {
  const [todoTitle, setTodoTitle] = useState('');
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('todoList')) ?? []);
  const [selected, setSelected] = useState('ALL');

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  const onKeyPress = (e) => {
    if (e.key === Enter && todoTitle.length > 0) {
      setTodoList([...todoList, {
        id: Date.now(),
        title: todoTitle,
        completed: false,
      }]);
      setTodoTitle('');
    }
  }

  const handleChangeTodo = (e) => {
    setTodoTitle(e.target.value);
  }

  const handleChangeTodoList = useCallback((todoList) => {
    setTodoList(todoList);
  }, []);
  
  const onSelectedChange = (selected) => {
    setSelected(selected);
  }

  return (
    <div className="todoapp">
      <h1>TODOS</h1>
      <input
        id="new-todo-title"
        className="new-todo"
        placeholder="할일을 추가해주세요"
        value={todoTitle}
        onChange={handleChangeTodo}
        onKeyPress={onKeyPress}
        autoFocus
      />
      <main>
        <input className="toggle-all" type="checkbox" />
        <TodoList todoList={todoList} onTodoListChange={handleChangeTodoList} selected={selected}/>
        <CountContainer todoList={todoList} onSelectedChange={onSelectedChange} selected={selected}/>
      </main>
    </div>
  );
}

export default App;
