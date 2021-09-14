import {memo} from "react";
import TodoTitle from "./TodoTitle";

function TodoList(props) {
    const {todoList, selected, onTodoListChange} = props;
    const selectedTodo = todoList
        .filter(_todo =>
        ({
            'ALL': _todo,
            'ACTIVE': !_todo.completed,
            'COMPLETED': _todo.completed,
        }[selected]));
    
    console.log('todolist')
    
    return (
        <ul id="todo-list" className="todo-list">
            {
                selectedTodo.length > 0 &&
                selectedTodo.map(_todo => <TodoTitle todo={_todo} todoList={todoList} key={_todo.id} onTodoListChange={onTodoListChange}/>)
            }
        </ul>
    );
}

export default memo(TodoList);