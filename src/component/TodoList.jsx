import TodoTitle from "./TodoTitle";

function TodoList(props) {
    const {todoList, selected} = props;
    const selectedTodo = todoList
        .filter(_todo =>
            ({
                'ALL': _todo,
                'ACTIVE': !_todo.completed,
                'COMPLETED': _todo.completed,
            }[selected])
        )

    return (
        <ul id="todo-list" className="todo-list">
            {
                selectedTodo.length > 0 &&
                selectedTodo.map(_todo => <TodoTitle id={_todo.id} key={_todo.id} value={props}/>)
            }
        </ul>
    );
}

export default TodoList;