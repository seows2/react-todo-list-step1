function ViewTitle(props) {
    return (
        <li>
            <div className="view">
                <input className="toggle" type="checkbox"/>
                <label className="label">{props.todo.title}</label>
                <button className="destroy"></button>
            </div>
        </li>
    );
}

function EditingTitle(props) {
    return (
        <li className="editing">
            <div className="view">
                <input className="toggle" type="checkbox" />
                <label className="label">완료된 타이틀</label>
                <button className="destroy"></button>
            </div>
            <input className="edit" value="완료된 타이틀" />
        </li>
    );
}

function CompletedTitle(props) {
    return (
        <li className="completed">
            <div className="view">
                <input className="toggle" type="checkbox" checked />
                <label className="label">완료된 타이틀</label>
                <button className="destroy"></button>
            </div>
            <input className="edit" value="완료된 타이틀" />
        </li>
    );
}

function TodoList(props) {

    const handleChange = (e) => {
        console.log('hi')
        const todo = props.todoList.filter(todo => todo.id === e.target.id);
        console.log(todo);
    }

    return (
        <ul id="todo-list" className="todo-list">
            {
                props.todoList.length > 0 &&  
                props.todoList.map(todo => <ViewTitle todo={todo} key={todo.id} onChange={handleChange}/>)
            }
        </ul>
    );
}

export default TodoList;