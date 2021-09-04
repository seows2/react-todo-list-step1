import {useState, useRef} from 'react';
import {Enter, ESC} from '../config.js';

function TodoTitle(props) {
    const [isEdited, setIsEdited] = useState(false); 
    const [editedTitle, setEditedTitle ] = useState('');
    const todoList = props.value.todoList;
    const todo = todoList.filter(_todo => _todo.id === props.id)[0];
    const editInput = useRef(null);
    
    const handleChange = (e) => {
        todo.completed = !todo.completed;
        const newTodoList = todoList.map(_todo => _todo.id === props.id ? todo : _todo);
        props.value.onTodoListChange(newTodoList);
    }

    const handleOnClick = (e) => {
        const newTodoList = todoList.filter(_todo => _todo.id !== parseInt(e.target.id));
        props.value.onTodoListChange(newTodoList);
    }

    const handleDoubleClick = (e) => {
        setIsEdited(!isEdited);

        if (!isEdited)  {
            e.currentTarget.className = "editing";
            editInput.current.focus();
        }
    }

    const handleChangeEdit = (e) => {
        setEditedTitle(e.target.value);
    }

    const onKeyUp = (e) => {
        if (e.key === Enter) {
            todo.title = editedTitle;
            todo.completed = false;
            const newTodoList = todoList.map(_todo => _todo.id === parseInt(e.target.id) ? todo : _todo);
            props.value.onTodoListChange(newTodoList);
            e.target.parentElement.className = null;
            setEditedTitle('')
        }

        if (e.key === ESC) {
            e.target.parentElement.className = null;
            setIsEdited(!isEdited);
            setEditedTitle('')
        }
    }

    return (
        <li className={todo.completed ? "completed" : null} onDoubleClick={handleDoubleClick}>
            <div className="view">
                <input 
                    className="toggle" 
                    type="checkbox"
                    onChange={handleChange}
                    checked={todo.completed}
                />
                <label className="label">{todo.title}</label>
                <button id={props.id} className="destroy" onClick={handleOnClick}></button>
            </div>
                <input className="edit" id={props.id} value={editedTitle} onChange={handleChangeEdit} onKeyUp={onKeyUp} ref={editInput}/>
        </li>
    );
}

export default TodoTitle;