import TodoTitle from "./TodoTitle";
import {ALL, ACTIVE, COMPLETED} from '../config.js';

function TodoList(props) {
    const todoList = props.todoList;
    const selected = props.selected;

    return (
        <>
            <ul id="todo-list" className="todo-list">
                {
                    todoList.length > 0 &&
                    todoList.map(_todo => {
                        const _TodoTitle = <TodoTitle id={_todo.id} key={_todo.id} value={props}/>;
                        if (selected === ALL) return _TodoTitle;
                        if (selected === ACTIVE && !_todo.completed) return _TodoTitle;
                        if (selected === COMPLETED && _todo.completed) return _TodoTitle;

                        return null;
                    })
                }
            </ul>
        </>
    );
}

export default TodoList;