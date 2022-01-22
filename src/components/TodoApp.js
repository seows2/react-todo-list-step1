import { inject, observer } from 'mobx-react';
import TodoFooter from './TodoFooter';
import TodoInput from './TodoInput';
import TodoItemList from './TodoItemList';

const todoApp = ({ todoStore, viewStore }) => {
  const { addTodo, activeTodoCount } = todoStore;
  const { todoFilter, changeTodoFilter } = viewStore;

  return (
    <div className="todoapp">
      <h1>TODOS</h1>
      <TodoInput addTodo={addTodo} />
      <main>
        <TodoItemList todoStore={todoStore} todoFilter={todoFilter} />
        <TodoFooter
          activeTodoCount={activeTodoCount}
          todoFilter={todoFilter}
          changeTodoFilter={changeTodoFilter}
        />
      </main>
    </div>
  );
};

export default inject('todoStore', 'viewStore')(observer(todoApp));
