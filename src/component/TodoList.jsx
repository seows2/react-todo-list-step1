import TodoTitle from "./TodoTitle";

function TodoList(props) {
    return (
        <ul id="todo-list" className="todo-list">
            {
                props.todoList.length > 0 &&
                props.todoList.map(_todo => <TodoTitle id={_todo.id} key={_todo.id} value={props}/>)
            }
        </ul>
    );
}

export default TodoList;