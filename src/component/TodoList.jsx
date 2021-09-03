import TodoTitle from "./TodoTitle";

function TodoList(props) {
    return (
        <ul id="todo-list" className="todo-list">
            {
                props.todoList.length > 0 &&  
                props.todoList.map(todo => <TodoTitle id={todo.id} key={todo.id} value={props}/>)
            }
        </ul>
    );
}

export default TodoList;